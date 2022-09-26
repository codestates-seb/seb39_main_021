package mainproject.nosleep.review.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.opencheck.entity.OpenCheck;
import mainproject.nosleep.shop.dto.ShopResponseDto;
import mainproject.nosleep.shop.entity.Shop;
import mainproject.nosleep.upvote.entity.Upvote;

import javax.persistence.Column;
import java.time.LocalDateTime;
import java.util.List;

public class ReviewResponseDto {
    @Setter
    @Getter
    @NoArgsConstructor
    public static class ShortReview{

        private Long id;

        private String writer;
        private Integer rating;

        private String content;

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
        private String writer;

        private String content;

        private Long upvotes;

        //shopId, shopName, openCheck

        public void setShop(Shop shop){
            this.shop = shop.getId();
            this.shopName = shop.getName(); //이부분 어떻게 해결할지 고민
        }

        public  void setMember(Member member){
            this.member = member.getId();
//            this.writer = member.getNickname();
        }

        public void setOpenCheck(OpenCheck openCheck){
            this.openCheck = openCheck.getOpenTrue();
        }
        public void setUpvotes(List<Upvote> upvotes){
            this.upvotes = (long) upvotes.size();
        }


    }

}
