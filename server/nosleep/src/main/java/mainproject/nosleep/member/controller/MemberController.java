package mainproject.nosleep.member.controller;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.auth.entity.PrincipalDetails;
import mainproject.nosleep.member.dto.MemberRequestDto;
import mainproject.nosleep.member.dto.MemberResponseDto;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.member.mapper.MemberMapper;
import mainproject.nosleep.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberMapper mapper;
    private final MemberService memberService;


    @GetMapping("/info")
    public ResponseEntity<?> getMemberInfo(@AuthenticationPrincipal PrincipalDetails principalDetails) {

        MemberResponseDto.Get response = mapper.memberToMemberResponseGet(principalDetails.getMember());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("")
    public ResponseEntity<?> patchMember(@RequestBody MemberRequestDto.Patch requestBody) {
        Member member = memberService.findMember(1L);

        Member requestedMember = mapper.memberPatchToMember(requestBody);
        requestedMember.setId(member.getId());

        Member updatedMember = memberService.updateMember(requestedMember);

        MemberResponseDto.Patch response = mapper.memberToMemberResponsePatch(updatedMember);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("")
    public ResponseEntity<?> deleteMember() {
        Member member = memberService.findMember(1L);

        Member deletedMember = memberService.deleteMember(member);

        MemberResponseDto.Delete response = mapper.memberToMemberResponseDelete(deletedMember);
        return new ResponseEntity<>(response, HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/test")
    public ResponseEntity<?> deleteMemberCompletely() {
        memberService.deleteMembersCompletely(1L);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
