package mainproject.nosleep.image.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.util.IOUtils;
import lombok.RequiredArgsConstructor;
import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.image.repository.ImageRepository;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.shop.entity.Shop;
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
    private String bucket;

    public List<String> uploadImages(Image.Type type, List<MultipartFile> multipartFileList) {
        List<String> fileUrlList = new ArrayList<>();

        String now = String.valueOf(System.currentTimeMillis());
        int i = 0;
        for (MultipartFile multipartFile : multipartFileList) {
            if (fileUrlList.size() > 3) {
                throw new RuntimeException();       // 에러 핸들러 작성 필요
            }
                                                    // 지원하는 확장자명 유효성검사 필요

            int fileExtensionIndex = multipartFile.getOriginalFilename().lastIndexOf(".");
            String fileExtension = multipartFile.getOriginalFilename().substring(fileExtensionIndex);

            String fileName = type + now + "_" + i + fileExtension;

            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentType(multipartFile.getContentType());

            try (InputStream inputStream = multipartFile.getInputStream()) {            // try with resource 관련 알아보기
                amazonS3Client.putObject(new PutObjectRequest(bucket, fileName, inputStream, objectMetadata)
                        .withCannedAcl(CannedAccessControlList.PublicRead));
                fileUrlList.add(amazonS3Client.getUrl(bucket, fileName).toString());
                createImageEntity(type, fileName);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            i++;
        }

        return fileUrlList;
    }

    public Image findByUrl(String url) {
        return imageRepository.findByUrl(url);
    }
    public void updateImage(List<String> urlList, Review review) {

        for (String rawUrl:urlList) {
            String url = rawUrlToUrl(rawUrl);
            Image image = findByUrl(url);
            image.setReview(review);
            imageRepository.save(image);
        }
    }

    public void updateImage(List<String> urlList, Shop shop) {
        for (String rawUrl:urlList) {
            String url = rawUrlToUrl(rawUrl);
            Image image = findByUrl(url);
            image.setShop(shop);
            imageRepository.save(image);
        }
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

    private boolean imageExistsAtUrl(String rawUrl) {
        String url = rawUrlToUrl(rawUrl);
        if(amazonS3Client.doesObjectExist(bucket, url))
            return true;
        else return false;
    }

    public Image createImageEntity(Image.Type type, String rawUrl) {
        String url = rawUrlToUrl(rawUrl);
        Image savedImage = Image.builder().type(type).url(url).build();
        return imageRepository.save(savedImage);
    }

    public List<Image> createImageEntities(List<Image> imageList) {
        List<Image> createdImages = new ArrayList<>();
        if (imageList.size() == 0) {
            return null;
        }
        else {
            for(int i = 0; i < imageList.size(); i++) {
                createdImages.add(imageRepository.save(imageList.get(i)));
            }
        }

        return createdImages;
    }


    public void deleteImage1(List<String> urlList) {
        for (String rawUrl : urlList) {
            String url = rawUrlToUrl(rawUrl);

            if (!imageExistsAtUrl(url)) {
                throw new RuntimeException();           // 에러 관련 수정 필요
            }

            amazonS3Client.deleteObject(bucket, url);

            Image deletedImage = imageRepository.findByUrl(url);

            if (deletedImage != null) {
                imageRepository.delete(deletedImage);
            }
        }
    }

    public void deleteImage2(List<Image> imageList) {
        for (Image requestedImage : imageList) {
            Image image = imageRepository.findByUrl(requestedImage.getUrl());

            if (!imageExistsAtUrl(image.getUrl())) {
                throw new RuntimeException();           // 에러 핸들러 작성 필요
            }

            amazonS3Client.deleteObject(bucket, image.getUrl());
            imageRepository.delete(image);
        }
    }

    public void deleteImageScheduled() {        // 1년전 탈퇴한 멤버를 삭제하는 로직과 같이, Review와 Shop이 모두 null값인 이미지를 삭제
        List<Image> imageList = imageRepository.findByReviewAndShop(null, null);
        deleteImage2(imageList);
    }

    public void deleteImageDBByUrl(String rawUrl) {
        String url = rawUrlToUrl(rawUrl);
        Image deletedImage = imageRepository.findByUrl(url);
        if (deletedImage != null) {
            imageRepository.delete(deletedImage);
        }
    }
    public void deleteImageById(long id) {
        Image deletedImage = imageRepository.findById(id);
        if (deletedImage != null) {
            imageRepository.delete(deletedImage);
        }
    }


    public String rawUrlToUrl(String rawUrl) {
        String url;
        if(!rawUrl.contains("/"))
            url = rawUrl;
        else {
            int lastIndex = rawUrl.lastIndexOf("/");
            url = rawUrl.substring(lastIndex+1);
        }

        return url;
    }

}
