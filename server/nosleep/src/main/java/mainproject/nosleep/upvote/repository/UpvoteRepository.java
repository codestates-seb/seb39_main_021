package mainproject.nosleep.upvote.repository;

import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.upvote.entity.Upvote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UpvoteRepository extends JpaRepository<Upvote, Long> {


    boolean existsByMemberAndReview(Member member, Review review);
    boolean existsByReview(Review review);
    void deleteByMemberAndReview(Member member, Review review);
    void deleteByReview(Review review);
    //boolean existsByMemberAndReview(Member member, Review review);
}
