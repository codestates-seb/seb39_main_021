package mainproject.nosleep.upvote.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.review.entity.Review;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Upvote {


    // Columns

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Mappings

    @ManyToOne
    private Member member;

    @ManyToOne
    private Review review;


}
