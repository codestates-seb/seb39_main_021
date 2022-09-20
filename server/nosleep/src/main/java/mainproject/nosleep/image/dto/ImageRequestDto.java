package mainproject.nosleep.image.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import mainproject.nosleep.image.entity.Image;

import java.util.List;

public class ImageRequestDto {


    @Getter
    @AllArgsConstructor
    public static class Post {
        private Image.Type type;
        private List<String> urlList;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {

    }
}
