package mainproject.nosleep.review.mapper;

import mainproject.nosleep.review.dto.ReviewRequestDto;
import mainproject.nosleep.review.dto.ReviewResponseDto;
import mainproject.nosleep.review.entity.Review;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review reviewCreateToReview(ReviewRequestDto.Create request);
    Review reviewPatchToReview(ReviewRequestDto.Update request);


    ReviewResponseDto.CreateReview reviewToCreateReview(Review review);

    ReviewResponseDto.DetailReview reviewToDetailReview(Review review);


    ReviewResponseDto.ReviewsPage reviewTOPageItemReview(Review review);

    List<ReviewResponseDto.ReviewsPage> reviewListToPages(List<Review> reviews);
}
