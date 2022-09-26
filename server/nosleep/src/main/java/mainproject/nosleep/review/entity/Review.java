package mainproject.nosleep.review.entity;

import lombok.*;
import mainproject.nosleep.audit.Auditable;
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
@AllArgsConstructor
@NoArgsConstructor
public class Review extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String writer;

    @Column(nullable = false)
    private Integer rating;


    @Column
    private String content;

    @Column(nullable = false)
    private ReviewStatus status = ReviewStatus.common; //이용후기 상태 enum

    @ManyToOne(fetch = FetchType.LAZY)
    private Shop shop;

    @ManyToOne
    private Member member;

    @OneToMany(mappedBy = "review")
    private List<Upvote> upvotes = new ArrayList<>();

    @OneToOne(mappedBy = "review", cascade = CascadeType.ALL)
    private OpenCheck openCheck;  //매장 오픈유무


    public Review(String writer, Integer rating, String content) {

        this.writer = writer;
        this.rating = rating;
        this.content = content;
        this.status = ReviewStatus.common;
    }

    public void addOpenCheck(OpenCheck openCheck){
        this.openCheck = openCheck;
        if(openCheck.getReview() != this){
            openCheck.addReview(this);
        }
    }

}
