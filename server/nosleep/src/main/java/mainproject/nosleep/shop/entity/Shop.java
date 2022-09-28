package mainproject.nosleep.shop.entity;

import lombok.*;
import mainproject.nosleep.audit.Auditable;
import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.opencheck.entity.OpenCheck;
import mainproject.nosleep.review.entity.Review;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Shop extends Auditable {
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
    private String cityId; // 5자리

    @Column(nullable = false)
    private String areaId; // 5자리

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
    private Long reviewCount = 0L;

    @Column //인증한 사람의 수
    private Long visitorCount = 0L;

    @Column // open 인증한 총 횟수
    private Long openCount = 0L;


    @Column(nullable = false)
    private ShopStatus status = ShopStatus.common; //초기화


    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<OpenCheck> openChecks = new ArrayList<>();

    @ManyToOne
    private Member member;

    @OneToMany(mappedBy = "shop")
    private List<Image> images = new ArrayList<>();



 // 테스트를 위한 빌드

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
