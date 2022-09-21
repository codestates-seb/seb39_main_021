package mainproject.nosleep.image.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import mainproject.nosleep.image.entity.Image;

import java.util.List;

public class ImageRequestDto {


    @Getter
    @AllArgsConstructor
    public static class Post {          // static 붙으면 nested class, 없으면 그냥 inner class
        private Image.Type type;
        private List<String> urlList;
    }

    public static class 등록했을때 {

    }

    @Getter
    @AllArgsConstructor
    public static class Patch {     // 아마 필요없을것

    }
}


