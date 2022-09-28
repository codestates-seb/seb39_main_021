package mainproject.nosleep.image.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mainproject.nosleep.image.entity.Image;

import java.util.List;

public class ImageResponseDto {

    @Getter
    @Setter
    @AllArgsConstructor
    //@NoArgsConstructor
    public static class Patch {

    }

    @Getter
    @Setter
    @AllArgsConstructor
    //@NoArgsConstructor
    public static class Post {
        List<String> urlList;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    //@NoArgsConstructor
    public static class Get {

    }

    @Getter
    @Setter
    @AllArgsConstructor
    //@NoArgsConstructor
    public static class Delete {

    }

}
