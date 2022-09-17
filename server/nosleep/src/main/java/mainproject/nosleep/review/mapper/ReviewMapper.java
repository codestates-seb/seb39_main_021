package mainproject.nosleep.review.mapper;

import mainproject.nosleep.review.dto.ReviewRequestDto;
import mainproject.nosleep.review.entity.Review;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review reviewPostToReview(ReviewRequestDto.Post request);
    Review reviewPatchToReview(ReviewRequestDto.Patch request);
}
