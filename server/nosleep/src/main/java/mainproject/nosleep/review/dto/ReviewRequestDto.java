package mainproject.nosleep.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import mainproject.nosleep.review.entity.ReviewStatus;
import mainproject.nosleep.shop.dto.ShopRequestDto;
import mainproject.nosleep.shop.entity.Shop;

public class ReviewRequestDto {

    @Getter
    @AllArgsConstructor
    public static class Post{
        private String writer;
        //사진

        private Long shopId;
        private Integer rating;
        private Boolean openCheck;
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

        public Shop getShop(){
            Shop shop = new Shop();
            if(shopId != null) // null 이면 예외처리 필요
                shop.setId(shopId);
            return shop;
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
