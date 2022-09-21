package mainproject.nosleep.review.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mainproject.nosleep.shop.dto.ShopResponseDto;
import mainproject.nosleep.shop.entity.Shop;

import javax.persistence.Column;
import java.time.LocalDateTime;

public class ReviewResponseDto {
    @Setter
    @Getter
    @NoArgsConstructor
    public static class ShortReview{

        private Long id;

        private String writer;

        private String content;

    }

    @Setter
    @Getter
    @NoArgsConstructor
    public static class DetailReview{

        private Long id;

        //이지미

        private Long shop;

        private LocalDateTime createdAt;

        private Boolean openCheck;

        private Integer rating;

        private String writer;

        private String content;

        //shopId, shopName, openCheck

        public void setShop(Shop shop){
            this.shop = shop.getId();
        }

    }

}
