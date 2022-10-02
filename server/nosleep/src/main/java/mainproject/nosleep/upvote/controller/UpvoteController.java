package mainproject.nosleep.upvote.controller;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.auth.entity.PrincipalDetails;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.review.service.ReviewService;
import mainproject.nosleep.upvote.dto.UpvoteResponseDto;
import mainproject.nosleep.upvote.entity.Upvote;
import mainproject.nosleep.upvote.service.UpvoteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/v1")
@RequiredArgsConstructor
public class UpvoteController {


    private final UpvoteService upvoteService;

    private final ReviewService reviewService;
    @PostMapping("/review/{review-id}/upvote")
    public ResponseEntity<?> postUpvote(@PathVariable("review-id") long reviewId, @AuthenticationPrincipal PrincipalDetails principalDetails) {

        Member member = principalDetails.getMember();
        Review review = reviewService.findReview(reviewId);

        Upvote response = upvoteService.createUpvote(member, review);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/review/{review-id}/upvote")
    public ResponseEntity<?> deleteUpvote(@PathVariable("review-id") long reviewId, @AuthenticationPrincipal PrincipalDetails principalDetails) {

        Member member = principalDetails.getMember();
        Review review = reviewService.findReview(reviewId);

        upvoteService.deleteUpvote(member, review);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/review/{review-id}/upvote")
    public ResponseEntity<?> getUpvote(@PathVariable("review-id") long reviewId, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Member member = principalDetails.getMember();
        Review review = reviewService.findReview(reviewId);

        UpvoteResponseDto.Get response = new UpvoteResponseDto.Get(upvoteService.upvoteExists(member, review));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
