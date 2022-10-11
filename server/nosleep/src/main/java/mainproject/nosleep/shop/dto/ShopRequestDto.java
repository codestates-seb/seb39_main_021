package mainproject.nosleep.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.shop.entity.Category;
import mainproject.nosleep.shop.entity.ShopStatus;

import java.util.ArrayList;
import java.util.List;

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
        private String cityId;
        private String areaId;
        private String detail;
        private Double longitude;
        private Double latitude;
        private List<String> imageList;

        public Category getCategory(){
            Category category1 = Category.of(category);
            if(category1 == null){
                //예외처리, BadRequest
                return null;
            }
            return category1;
        }

    }
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Update{
        private Long memberId; // 사용자 구분용 // 추후 Principal로 구별?

        private String name;
        private String detail;
        private List<String> imageList;

    }
}
