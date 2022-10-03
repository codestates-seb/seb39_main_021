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
public class Shop extends Auditable implements Comparable<Shop>  {
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


    @Column
    private ShopStatus status = ShopStatus.common; //초기화


    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<OpenCheck> openChecks = new ArrayList<>();

    @ManyToOne
    private Member member;

    @OneToMany(mappedBy = "shop")
    private List<Image> images = new ArrayList<>();


    public Shop(Category category, String name,  String address, Double ratingAVG, Long reviewCount, Long visitorCount, Long openCount, List<Image> images) {
        this.category = category;
        this.name = name;
        this.address = address;
        this.ratingAVG = ratingAVG;
        this.reviewCount = reviewCount;
        this.visitorCount = visitorCount;
        this.openCount = openCount;
        this.images = images;
    }

    private double distanceCalculation(){
        return Math.sqrt(Math.pow(this.latitude, 2) + Math.pow(this.longitude, 2));
    }

    @Override
    public int compareTo(Shop o) {
        double result = this.distanceCalculation() - o.distanceCalculation();
        if(result >0.0) return 1;
        else if(result == 0.0) return 0;
        else return -1;
    }
}
