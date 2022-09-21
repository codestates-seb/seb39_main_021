package mainproject.nosleep.review.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

public class ReviewResponseDto {
    @Setter
    @Getter
    @NoArgsConstructor
    public static class ShortReview{

        private Long id;

        private String writer;

        private String content;

    }
}
