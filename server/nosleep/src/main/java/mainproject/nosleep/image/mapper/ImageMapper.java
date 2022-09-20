package mainproject.nosleep.image.mapper;


import mainproject.nosleep.image.dto.ImageRequestDto;
import mainproject.nosleep.image.dto.ImageResponseDto;
import mainproject.nosleep.image.entity.Image;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface ImageMapper {

    default List<Image> imagePostToImageList(ImageRequestDto.Post requestBody) {
        List<Image> imageList = new ArrayList<>();
        if (requestBody == null || requestBody.getUrlList() == null) {
            return null;
        }
        else {
            for (int i = 0; i < requestBody.getUrlList().size(); i++) {
                imageList.add(Image.builder().type(requestBody.getType()).url(requestBody.getUrlList().get(i)).build());
            }
        }
        return imageList;
    }
    Image imagePatchToImage(ImageRequestDto.Patch requestBody);
    ImageResponseDto.Get imageToImageResponseGet(Image image);
    ImageResponseDto.Post imageToImageResponsePost(Image image);
    ImageResponseDto.Patch imageToImageResponsePatch(Image image);

}
