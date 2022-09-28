package mainproject.nosleep.review.service;

import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.member.repository.MemberRepository;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.review.repository.ReviewRepository;
import mainproject.nosleep.shop.entity.Shop;
import mainproject.nosleep.shop.entity.ShopStatus;
import mainproject.nosleep.shop.repository.ShopRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ReviewServiceTest {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ShopRepository shopRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Test
    @DisplayName("Query문 Select 다중 컬럼 조회 테스트")
    void testMethod() {
        List<Object[]> objects = reviewRepository.sumAndCountTestAllRating();
        Double avg = (Double)objects.get(0)[0];
        BigInteger count = (BigInteger) objects.get(0)[1];

        System.out.println("avg = " + avg);
        System.out.println("count = " + count);
    }
    @Test
    @DisplayName("이용후기 생성에 맞춰, shop 평균점수와 이용후기 총 갯수 늘어나는지 테스트")
    void testMethod2() {
        Shop shop = new Shop(0.0);
        shop.setStatus(ShopStatus.common);
        shopRepository.save(shop);
        Member member = new Member();
        memberRepository.save(member);
        Review review1 = new Review("작성자", 4, "아무내용");
        review1.setShop(shop);
        review1.setMember(member);
        review1.setUpvotes(new ArrayList<>());
        Review review2 = new Review("작성자", 3, "아무내용");
        review2.setShop(shop);
        review2.setMember(member);
        review2.setUpvotes(new ArrayList<>());
        reviewRepository.save(review1);
        reviewRepository.save(review2);
        List<Object[]> objects = reviewRepository.averageAndCountAllRating(1L);
        Double avg = (Double)objects.get(0)[0];
        System.out.println("avg = " + avg);


        shopRepository.updateRatingAVG(1L,avg);

        Optional<Shop> byId = shopRepository.findById(1L);
        System.out.println("avg = " + byId.get().getRatingAVG());
        System.out.println("byId = " + byId.get().getReviewCount());

    }
}