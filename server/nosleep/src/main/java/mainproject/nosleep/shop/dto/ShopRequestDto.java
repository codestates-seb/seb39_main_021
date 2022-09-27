package mainproject.nosleep.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mainproject.nosleep.shop.entity.Category;
import mainproject.nosleep.shop.entity.ShopStatus;

public class ShopRequestDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Create{
        private Long memberId;
        private String category; //enum

        private String businessNumber;
        private String name;
        private String address;
        private String detail;
        private Double longitude;
        private Double latitude;
//        private String status; //enum

        public Category getCategory(){
            Category category1 = Category.of(category);
            if(category1 == null){
                //예외처리, BadRequest
                return null;
            }
            return category1;
        }
//        public ShopStatus getStatus(){
//            ShopStatus status1 = ShopStatus.of(status);
//            if (status1 == null)
//                return null; //예외처리, BadRequest
//            return status1;
//        }
    }
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Update{
        private Long memberId; // 사용자 구분용 // 추후 Principal로 구별?
        private String category; //enum
        private String name;
        private String address;
        private String detail;
        private Double longitude;
        private Double latitude;

        public Category getCategory(){
            Category category1 = Category.of(category);
            if(category1 == null){
                //예외처리, BadRequest
                return null;
            }
            return category1;
        }
    }
}
