package mainproject.nosleep.image.service;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.image.repository.ImageRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class ImageService {

    private final ImageRepository imageRepository;


    public Image createImage(Image image) {
        return imageRepository.save(image);
    }

    public List<Image> createImages(List<Image> imageList) {            // 글작성 누르기 전에 S3에 이미지가 업로드된다고 가정하면
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
