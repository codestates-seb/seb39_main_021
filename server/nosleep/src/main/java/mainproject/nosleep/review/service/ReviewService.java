package mainproject.nosleep.review.service;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.review.repository.ReviewRepository;
import mainproject.nosleep.shop.entity.Shop;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public Review createReview(Review review){

        return reviewRepository.save(review);

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

}
