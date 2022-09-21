package mainproject.nosleep.shop.entity;

import lombok.*;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.review.entity.Review;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Shop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Category category; //enum

    @Column(nullable = false)
    private String businessNumber;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String detail;

    @Column(nullable = false)
    private Double longitude;

    @Column(nullable = false)
    private Double latitude;

    @Column
    private Double ratingAVG;

    @Column
    private Long reviewCount;

    @Column(nullable = false)
    private ShopStatus status; //enum


    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Review> reviews = new ArrayList<>();

    @ManyToOne
    private Member member;


 // 테스트를 위한 빌드
    @Builder
    public Shop( Double ratingAVG) {

        this.category = Category.Etc;
        this.businessNumber = "123456";
        this.name = "테스트 더미값";
        this.address = "TEST address";
        this.detail = "TEST detail";
        this.longitude = 123.456;
        this.latitude = 123.789;
        this.ratingAVG = ratingAVG;
        this.reviewCount = 0L;
    }


}
