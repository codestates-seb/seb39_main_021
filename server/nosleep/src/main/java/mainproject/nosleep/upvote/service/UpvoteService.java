package mainproject.nosleep.upvote.service;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.review.service.ReviewService;
import mainproject.nosleep.upvote.entity.Upvote;
import mainproject.nosleep.upvote.repository.UpvoteRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@RequiredArgsConstructor
@Service
public class UpvoteService {

    private final UpvoteRepository upvoteRepository;
    private final ReviewService reviewService;

    public Upvote createUpvote(Member member, Review review) {
        if(!upvoteExists(member, review)) {
            Upvote upvote = Upvote.builder().member(member).review(review).build();
            upvoteRepository.save(upvote);
            reviewService.upvoteCountPlus(review);

            return upvote;
        }

        else return null;
    }


    public void deleteUpvote(Member member, Review review) {
        if(upvoteExists(member, review)) {
            upvoteRepository.deleteByMemberAndReview(member, review);
            reviewService.upvoteCountMinus(review);
        }
    }

    public void deleteAllUpvote(Review review) {
        upvoteRepository.deleteByReview(review);
    }




    public boolean upvoteExists(Member member, Review review) {
        return upvoteRepository.existsByMemberAndReview(member, review);
    }


    public boolean upvoteExists(Review review) {
        return upvoteRepository.existsByReview(review);
    }
}
