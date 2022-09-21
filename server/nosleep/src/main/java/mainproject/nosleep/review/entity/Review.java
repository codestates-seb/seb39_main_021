package mainproject.nosleep.review.entity;

import lombok.*;
import mainproject.nosleep.member.entity.Member;
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
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String writer;

    @Column(nullable = false)
    private Integer rating;


    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private ReviewStatus status; //이용후기 상태 enum

    @ManyToOne
    private Shop shop;


    @ManyToOne
    private Member member;

    @OneToMany(mappedBy = "review")
    private List<Upvote> upvotes = new ArrayList<>();
    @Builder
    public Review(String writer, Integer rating, String content) {

        this.writer = writer;
        this.rating = rating;
        this.content = content;
        this.status = ReviewStatus.common;
    }
}
