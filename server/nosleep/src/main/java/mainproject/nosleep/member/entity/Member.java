package mainproject.nosleep.member.entity;

import lombok.*;
import mainproject.nosleep.audit.Auditable;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.shop.entity.Shop;
//import mainproject.nosleep.upvote.entity.TestReview;
import mainproject.nosleep.upvote.entity.Upvote;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Member extends Auditable {

    // Columns

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nickname;

    @Column
    private String email;

    @Column
    private String businessNumber;

    @Enumerated(value = EnumType.STRING)
    @Column
    private Role role;

    @Enumerated(value = EnumType.STRING)
    @Column
    private Status status = Status.ACTIVE;



    // Mappings

    @OneToMany(mappedBy = "member")
    private List<Upvote> upvoteList = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Review> reviewList = new ArrayList<>();

//    @OneToMany(mappedBy = "member")
//    private List<OpenCheck> openCheckList = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Shop> shopList = new ArrayList<>();

    public Member(Long id) {
        this.id = id;
    }


    //ENUM 정의

    public enum Role {
        NORMAL("일반 회원"),
        BUSINESS("사업자 회원"),
        ADMIN("관리자");


        @Getter
        private String role;

        Role(String role) { this.role = role; }
    }

    public enum Status {
        ACTIVE("활동중"),
        SLEEPING("휴면"),
        DELETED("탈퇴"),
        BANNED("정지");


        @Getter
        private String status;
        Status(String status) { this.status = status; }
    }


    // 기타

    public void addUpvote(Upvote upvote) {
        upvoteList.add(upvote);
    }

    public void addReview(Review review) {
        reviewList.add(review);
    }

//    public void addOpenCheck(OpenCheck openCheck) {
//        openCheckList.add(openCheck);
//    }
    public void addShop(Shop shop) {
        shopList.add(shop);
    }
}
