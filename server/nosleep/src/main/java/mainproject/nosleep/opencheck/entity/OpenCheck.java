package mainproject.nosleep.opencheck.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.shop.entity.Shop;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OpenCheck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private Boolean openTrue;

    @OneToOne
    private Review review;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    private Shop shop;

    public void addReview(Review review){
        this.review = review;
        if(this.review.getOpenCheck() != this){
            this.review.setOpenCheck(this);
        }
    }


}
