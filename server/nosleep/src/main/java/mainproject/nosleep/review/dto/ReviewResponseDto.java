package mainproject.nosleep.review.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.opencheck.entity.OpenCheck;
import mainproject.nosleep.shop.dto.ShopResponseDto;
import mainproject.nosleep.shop.entity.Shop;
import mainproject.nosleep.upvote.entity.Upvote;

import javax.persistence.Column;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class ReviewResponseDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class CreateReview{
        private LocalDateTime createdAt;
        private Integer rating;
    }

    @Setter
    @Getter
    @NoArgsConstructor
    public static class ShortReview{

        private Long id;

        private String nickname;
        private Integer rating;

        private String content;

    }
    @Setter
    @Getter
    @NoArgsConstructor
    public static class ReviewsPage {
        private Long id;
        private Long member;
        private String nickname;
        private LocalDateTime createdAt;
        private Integer rating;
        private Long upvoteCount;



        public  void setMember(Member member){
            this.member = member.getId();
            this.nickname = member.getNickname();
        }



    }

        @Setter
    @Getter
    @NoArgsConstructor
    public static class DetailReview{

        private Long id;

        //이미지

        private Long shop;

        private String shopName;

        private LocalDateTime createdAt;

        private Boolean openCheck;

        private Integer rating;

        private Long member;
        private String nickname;

        private String content;

        private Long upvoteCount;

        private List<String> images;

        public void setShop(Shop shop){
            this.shop = shop.getId();
            this.shopName = shop.getName(); //이부분 어떻게 해결할지 고민
        }

        public  void setMember(Member member){
            this.member = member.getId();
            this.nickname = member.getNickname();
        }

        public void setOpenCheck(OpenCheck openCheck){
            this.openCheck = openCheck.getOpenTrue();
        }

        public void setImages(List<Image> images){
            this.images = images.stream()
                    .map(Image::getUrl)
                    .collect(Collectors.toList());
        }
    }

}
