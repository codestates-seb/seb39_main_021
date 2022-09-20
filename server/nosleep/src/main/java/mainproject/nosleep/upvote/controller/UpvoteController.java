package mainproject.nosleep.upvote.controller;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.member.repository.MemberRepository;
import mainproject.nosleep.member.service.MemberService;
import mainproject.nosleep.upvote.dto.UpvoteResponseDto;
import mainproject.nosleep.upvote.entity.Upvote;
import mainproject.nosleep.upvote.mapper.UpvoteMapper;
import mainproject.nosleep.upvote.service.UpvoteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping
@RequiredArgsConstructor
public class UpvoteController {


    private final UpvoteService upvoteService;
    private final UpvoteMapper mapper;

    private final ReviewRepository reviewRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;
    @PostMapping("/review/{review-id}/upvote")
    public ResponseEntity<?> postUpvote(@PathVariable("review-id") long reviewId) {

        Member member = memberService.findMember(1L);
        Review review = reviewRepository.findById(reviewId);


        Upvote response = upvoteService.createUpvote(member, review);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/review/{review-id}/upvote")
    public ResponseEntity<?> deleteUpvote(@PathVariable("review-id") long reviewId) {

        Member member = memberService.findMember(1L);
        Review review = ReviewRepository.findById(reviewId);

        upvoteService.deleteUpvote(member, review);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/review/{review-id}/upvote")
    public ResponseEntity<?> getUpvote(@PathVariable("review-id") long reviewId) {
        Member member = memberService.findMember(1L);
        Review review = reviewRepository.findById(reviewId);

        UpvoteResponseDto.Get response = new UpvoteResponseDto.Get(upvoteService.upvoteExists(member, review));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
