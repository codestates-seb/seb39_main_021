package mainproject.nosleep.review.entity;

import lombok.*;
import mainproject.nosleep.audit.Auditable;
import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.opencheck.entity.OpenCheck;
import mainproject.nosleep.shop.entity.Shop;
import mainproject.nosleep.upvote.entity.Upvote;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Review extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer rating;

    @Column
    private String content;

    @Column
    private Long upvoteCount = 0L;


    @Column(nullable = false)
    private ReviewStatus status = ReviewStatus.common; //이용후기 상태 enum

    @ManyToOne(fetch = FetchType.LAZY)
    private Shop shop;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    @OneToMany(mappedBy = "review")
    private List<Upvote> upvotes = new ArrayList<>();

    @OneToOne(mappedBy = "review", cascade = CascadeType.ALL)
    private OpenCheck openCheck;  //매장 오픈유무

    @OneToMany(mappedBy = "review")
    private List<Image> images = new ArrayList<>();

    @Builder
    public Review(Long id, Integer rating, String content, Long upvoteCount, Shop shop, Member member, List<Upvote> upvotes, OpenCheck openCheck, List<Image> images) {
        this.id = id;
        this.rating = rating;
        this.content = content;
        this.upvoteCount = upvoteCount;
        this.shop = shop;
        this.member = member;
        this.upvotes = upvotes;
        this.openCheck = openCheck;
        this.images = images;
    }



    public void addOpenCheck(OpenCheck openCheck){
        this.openCheck = openCheck;
        if(openCheck.getReview() != this){
            openCheck.addReview(this);
        }
    }

}
