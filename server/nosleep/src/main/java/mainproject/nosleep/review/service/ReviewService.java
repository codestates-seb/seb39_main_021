package mainproject.nosleep.review.service;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.review.repository.ReviewRepository;
import mainproject.nosleep.shop.entity.Shop;
import mainproject.nosleep.shop.repository.ShopRepository;
import mainproject.nosleep.shop.service.ShopService;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final ShopRepository shopRepository;
    public Review createReview(Review review){

        Review save = reviewRepository.save(review);
        //평점 갱신
        Double ratingAverage = findRatingAverage(save.getShop().getId());
        // 이용후기 + 1, 평점 갱신
        shopRepository.updateRatingAVG(save.getShop().getId(), ratingAverage);
        return save;
    }
    public Review updateReview(Long id, Review review){
        Review updateReview = findVerifiedReview(id);
        Optional.ofNullable(review.getContent()).ifPresent(updateReview::setContent);

        return reviewRepository.save(updateReview);
    }
    public Review findReview(Long id){
        Review verifiedReview = findVerifiedReview(id);
        //좋아요 이슈
        return verifiedReview;
    }

    public void deleteReview(Long id){
        Review verifiedReview = findVerifiedReview(id);
        // 삭제 로직 생각할 필요
        reviewRepository.delete(verifiedReview); //바로 삭제
    }

    private Review findVerifiedReview(Long id){
        Optional<Review> optionalReview = reviewRepository.findById(id);
        return optionalReview.orElseThrow(
                ()-> new IllegalArgumentException("존재하지않는 이용후기 입니다.")
        );
    }
    public Double findRatingAverage(Long shopId){
        List<Object[]> objects = reviewRepository.averageAndCountAllRating(shopId);
        return (Double) objects.get(0)[0];
    }


}
