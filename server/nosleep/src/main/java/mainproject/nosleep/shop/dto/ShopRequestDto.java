package mainproject.nosleep.shop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class ShopRequestDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post{
        private Long memberId;
        private String category; //enum

        private String businessNumber;
        private String name;
        private String address;
        private String detail;
        private Double longitude;
        private Double latitude;
        private String status; //enum


    }
}
