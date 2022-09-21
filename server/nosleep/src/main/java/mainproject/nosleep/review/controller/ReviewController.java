package mainproject.nosleep.review.controller;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.review.dto.ReviewRequestDto;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.review.mapper.ReviewMapper;
import mainproject.nosleep.review.service.ReviewService;
import mainproject.nosleep.shop.dto.ShopRequestDto;
import mainproject.nosleep.shop.mapper.ShopMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/review")
public class ReviewController {

    private final ReviewService reviewService;
    private final ReviewMapper mapper;
    @PostMapping
    public ResponseEntity<?> postShop(@Valid @RequestBody ReviewRequestDto.Post requestBody){
        Review review = mapper.reviewPostToReview(requestBody);
        Review createdReview = reviewService.createReview(review);
        return new ResponseEntity<>(mapper.reviewToDetailReview(createdReview), HttpStatus.CREATED);
    }

    @PatchMapping("/{reviewId}")
    public ResponseEntity<?> patchShop(@PathVariable Long reviewId,
                                       @Valid @RequestBody ReviewRequestDto.Patch requestBody){

        Review review = mapper.reviewPatchToReview(requestBody);
        Review updateReview = reviewService.updateReview(reviewId, review);
        return new ResponseEntity<>(updateReview, HttpStatus.OK);
    }

    @GetMapping("/{reviewId}")
    public ResponseEntity<?> getDetailShop(@PathVariable Long reviewId){
        Review findReview = reviewService.findReview(reviewId);
        return new ResponseEntity<>(findReview, HttpStatus.OK);
    }

    //현재 위치 기반으로 근처 Shop pagination 응답
    @GetMapping()
    public List<?> getListShop(){

//        reviewService.testMethod();
        return null;
    }

    @DeleteMapping("/{reviewId}")
    public ResponseEntity<?> deleteShop(@PathVariable Long reviewId){
        reviewService.deleteReview(reviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
