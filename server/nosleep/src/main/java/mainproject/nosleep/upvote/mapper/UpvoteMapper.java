package mainproject.nosleep.upvote.mapper;

import mainproject.nosleep.upvote.dto.UpvoteRequestDto;
import mainproject.nosleep.upvote.dto.UpvoteResponseDto;
import mainproject.nosleep.upvote.entity.Upvote;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UpvoteMapper {

    Upvote upvotePostToUpvote(UpvoteRequestDto.Post requestBody);
    Upvote upvotePatchToUpvote(UpvoteRequestDto.Patch requestBody);
    UpvoteResponseDto.Get upvoteToUpvoteResponseGet(Upvote upvote);
    UpvoteResponseDto.Post upvoteToUpvoteResponsePost(Upvote upvote);
    UpvoteResponseDto.Patch upvoteToUpvoteResponsePatch(Upvote upvote);
}
