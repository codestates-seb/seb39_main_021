package mainproject.nosleep.image.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mainproject.nosleep.image.entity.Image;

import java.util.List;

public class ImageRequestDto {


    @Getter
    @AllArgsConstructor
    public static class Post {          // static 붙으면 nested class, 없으면 그냥 inner class
        private Image.Type type;
        private List<String> urlList;
    }


    @Getter
    @AllArgsConstructor
    public static class Patch {     // 아마 필요없을것

    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Delete {     // 아마 필요없을것
        private List<String> urlList;
    }
}


