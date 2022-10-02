package mainproject.nosleep.member.service;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.member.entity.MemberDeleted;
import mainproject.nosleep.member.repository.MemberDeletedRepository;
import mainproject.nosleep.member.repository.MemberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final MemberDeletedRepository memberDeletedRepository;

    public Member findMember(long id) {

        return memberRepository.findById(id);
    }
    public Member findMemberByEmail(String email) {return memberRepository.findByEmail(email);}

    public Member findMemberByNickname(String nickname) {return memberRepository.findByNickname(nickname);}

    public Member updateMember(Member member) {

        Member foundMember = findVerifiedMember(member.getId());


        Optional.ofNullable(member.getNickname())
                .ifPresent(nickname -> foundMember.setNickname(nickname));
        Optional.ofNullable(member.getEmail())
                .ifPresent(email -> foundMember.setEmail(email));

        Optional.ofNullable(member.getStatus())
                .ifPresent(status -> foundMember.setStatus(status));
        Optional.ofNullable(member.getRole())
                .ifPresent(role -> foundMember.setRole(role));
        if (foundMember.getRole() == (Member.Role.BUSINESS)) {
            Optional.ofNullable(member.getBusinessNumber())
                    .ifPresent(businessNumber -> foundMember.setBusinessNumber(businessNumber));
        }

        return memberRepository.save(foundMember);
    }

    public Member deleteMember(Member member) {
        Member foundMember = findVerifiedMember(member.getId());
        foundMember.setStatus(Member.Status.DELETED);

        memberDeletedRepository.save(MemberDeleted.builder().member(foundMember).build());
        return memberRepository.save(foundMember);
    }

    public Member banMember(Member member) {
        Member foundMember = findVerifiedMember(member.getId());
        foundMember.setStatus(Member.Status.BANNED);

        return memberRepository.save(foundMember);
    }


    public void deleteMembersCompletely(Long month) {   // 테스트 단계이므로 연/월 단위가 아닌 초 단위로 계산
        List<MemberDeleted> memberDeletedList = memberDeletedRepository.findByCreatedAtBefore(LocalDateTime.now().minusMonths(month));
        Member member = Member.builder().nickname("삭제된 회원").email("Deleted").build();

        if (memberDeletedList != null && memberDeletedList.size() > 0) {
            for (int i = 0; i < memberDeletedList.size(); i++) {
                //memberRepository.delete(memberDeletedList.get(i).getMember());
                member.setId(memberDeletedList.get(i).getId());
                updateMember(member);
                memberDeletedRepository.delete(memberDeletedList.get(i));
            }
        }
    }

    public List<Member> findMembersBy(Member.Status status) {
        return memberRepository.findByStatus(status);
    }

    public List<Member> findMembersBy(Member.Role role) {
        return memberRepository.findByRole(role);
    }

    public List<Member> findMembersBy(Member.Status status, Member.Role role) {
        return memberRepository.findByRoleAndStatus(role, status);
    }



//    public Member testMemberNormal() {
//        return findVerifiedMember(1L);
//    }
//
//    public Member testMemberBusiness() {
//        return Member.builder().email("business@kakao.com").nickname("testBusiness").status(Member.Status.ACTIVE).role(Member.Role.BUSINESS).build();
//    }
//

    public boolean isMemberBusiness(Member member) {
        if (member.getRole() == Member.Role.BUSINESS || member.getRole() == Member.Role.ADMIN)
            return true;
        else return false;
    }
    public Member findVerifiedMember(Long id) {


        Optional<Member> optionalMember = memberRepository.findById(id);
        Member foundMember = optionalMember.orElseThrow(() ->
                new RuntimeException());
        return foundMember;
    }


}
