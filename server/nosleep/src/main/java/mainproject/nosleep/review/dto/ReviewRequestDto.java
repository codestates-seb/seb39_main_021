package mainproject.nosleep.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import mainproject.nosleep.review.entity.ReviewStatus;

public class ReviewRequestDto {

    @Getter
    @AllArgsConstructor
    public static class Post{
        //작성자
        private String writer;
        //사진

        //별점
        private Integer rating;
        //장소 오픈유무
        private Boolean openCheck;
        // 상호(사업장)
        private String shopName;
        private String content;
        private String status;

        public Integer getRating(){ // 별점 범위
            try {
                if (rating > 5 || rating < 0) {
                    new IllegalAccessException("올바른 별점으로 입력해야합니다.");
                }
            }
            catch (Exception e){
                e.getMessage();
            }
            return rating;
        }

        public ReviewStatus getStatus(){
            ReviewStatus status1 = ReviewStatus.of(status);
            if(status1 ==null){
                return null;//예외 처리
            }
            return status1;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        //작성자 - 확인유무
        //사진
        //별점
        // 상호(사업장)
        private String context;
    }
}
