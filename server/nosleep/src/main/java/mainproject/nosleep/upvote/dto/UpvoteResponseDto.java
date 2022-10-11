package mainproject.nosleep.upvote.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class UpvoteResponseDto {
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

    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Get {
        boolean upvoteExists;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    //@NoArgsConstructor
    public static class Delete {

    }
}
