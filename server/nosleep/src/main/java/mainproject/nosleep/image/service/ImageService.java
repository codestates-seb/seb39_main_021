package mainproject.nosleep.image.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.util.IOUtils;
import lombok.RequiredArgsConstructor;
import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.image.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class ImageService {

    private final ImageRepository imageRepository;

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucketName;

    public List<String> uploadImages(Image.Type type, List<MultipartFile> multipartFileList) {
        List<String> fileUrlList = new ArrayList<>();


        LocalDateTime localDateTimeNow = LocalDateTime.now();
        String now = String.valueOf(System.currentTimeMillis());
        int i = 0;
        for (MultipartFile multipartFile : multipartFileList) {
            if (fileUrlList.size() > 3) {
                throw new RuntimeException();
            }

            int fileExtensionIndex = multipartFile.getOriginalFilename().lastIndexOf(".");
            String fileExtension = multipartFile.getOriginalFilename().substring(fileExtensionIndex);

            String fileName = type + now + "_" + i + fileExtension;

            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentType(multipartFile.getContentType());

            try (InputStream inputStream = multipartFile.getInputStream()) {
                amazonS3Client.putObject(new PutObjectRequest(bucketName, fileName, inputStream, objectMetadata)
                        .withCannedAcl(CannedAccessControlList.PublicRead));
                fileUrlList.add(amazonS3Client.getUrl(bucketName, fileName).toString());
                createImageEntity(type, fileName);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            i++;
        }

        return fileUrlList;
    }

//    public byte[] downloadImage(String url) {       // 이미지 파일 자체를 다운받을 필요가 있는가? (프론트측에서 링크만 갖고 이미지 로딩 가능했던걸로 기억..)
//        if (!imageExistsAtUrl(url)) {
//            throw new RuntimeException();
//        }
//
//        S3Object s3Object = amazonS3Client.getObject(bucketName, url);
//        S3ObjectInputStream inputStream = s3Object.getObjectContent();
//        try {
//            return IOUtils.toByteArray(inputStream);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }
//    }

    private boolean imageExistsAtUrl(String url) {
        if(amazonS3Client.doesObjectExist(bucketName, url))
            return true;
        else return false;
    }

    public Image createImageEntity(Image.Type type, String url) {
        Image savedImage = Image.builder().type(type).url(url).build();
        return imageRepository.save(savedImage);
    }

    public List<Image> createImageEntities(List<Image> imageList) {            // 글작성 누르기 전에 S3에 이미지가 업로드된다고 가정하면
        List<Image> createdImages = new ArrayList<>();                  // 글작성을 누르기 전까진 shop이나 review의 id를 알수 없기 때문에
        if (imageList.size() == 0) {                                    // 해당 칸은 공란으로 두고 Image 생성
            return null;
        }
        else {
            for(int i = 0; i < imageList.size(); i++) {
                createdImages.add(imageRepository.save(imageList.get(i)));
            }
        }

        return createdImages;
    }

    public void deleteImage(long id) {
        Image deletedImage = imageRepository.findById(id);
        if (deletedImage != null) {
            imageRepository.delete(deletedImage);
        }
    }



}
