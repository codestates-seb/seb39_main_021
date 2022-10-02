package mainproject.nosleep.review.controller;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.dto.MultiResponseDto;
import mainproject.nosleep.review.dto.ReviewRequestDto;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.review.mapper.ReviewMapper;
import mainproject.nosleep.review.service.ReviewService;
import mainproject.nosleep.shop.dto.ShopRequestDto;
import mainproject.nosleep.shop.mapper.ShopMapper;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/review")
public class ReviewController {

    private final ReviewService reviewService;
    private final ReviewMapper mapper;

    @PostMapping
    public ResponseEntity<?> postShop(@Valid @RequestBody ReviewRequestDto.Create requestBody) {
        Review review = mapper.reviewCreateToReview(requestBody);
        Review createdReview = reviewService.createReview(review, requestBody.getImageList());
        return new ResponseEntity<>(mapper.reviewToCreateReview(createdReview), HttpStatus.CREATED);
    }

    @PatchMapping("/{reviewId}")
    public ResponseEntity<?> patchShop(@PathVariable Long reviewId,
                                       @Valid @RequestBody ReviewRequestDto.Update requestBody) {

        Review review = mapper.reviewPatchToReview(requestBody);
        Review updateReview = reviewService.updateReview(reviewId, review, requestBody.getImageList());
        return new ResponseEntity<>(mapper.reviewToDetailReview(updateReview), HttpStatus.OK);
    }

    @GetMapping("/{reviewId}")
    public ResponseEntity<?> getDetailShop(@PathVariable Long reviewId) {
        Review findReview = reviewService.findReview(reviewId);
        return new ResponseEntity<>(mapper.reviewToDetailReview(findReview), HttpStatus.OK);
    }

    //현재 위치 기반으로 근처 Shop pagination 응답
    @GetMapping()
    public ResponseEntity<?> getListShop(@RequestParam int page,
                                         @RequestParam Long shopId,
                                         @RequestParam String sort) {
        String sortPonint = "id"; // 기본값
        if(sort.equals("upvote")){
            sortPonint = "upvoteCount";
        }

        Page<Review> reviewPage = reviewService.findReviews(page - 1, shopId, sortPonint);
        List<Review> reviews = reviewPage.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto(mapper.reviewListToPages(reviews), reviewPage),
                HttpStatus.OK);
    }

    @DeleteMapping("/{reviewId}")
    public ResponseEntity<?> deleteShop(@PathVariable Long reviewId) {
        reviewService.deleteReview(reviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
