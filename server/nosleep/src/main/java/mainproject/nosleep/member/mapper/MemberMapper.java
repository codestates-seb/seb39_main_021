package mainproject.nosleep.member.mapper;

import mainproject.nosleep.member.dto.MemberRequestDto;
import mainproject.nosleep.member.dto.MemberResponseDto;
import mainproject.nosleep.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostToMember(MemberRequestDto.Post requestBody);
    Member memberPatchToMember(MemberRequestDto.Patch requestBody);
    MemberResponseDto.Get memberToMemberResponseGet(Member member);
    MemberResponseDto.Post memberToMemberResponsePost(Member member);
    MemberResponseDto.Patch memberToMemberResponsePatch(Member member);
    MemberResponseDto.Delete memberToMemberResponseDelete(Member member);
    
}
