package mainproject.nosleep.member.repository;

import mainproject.nosleep.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {


    Member findById(long id);
    Member findByNickname(String nickname);
    Member findByEmail(String email);
    List<Member> findByStatus(Member.Status status);
    List<Member> findByRole(Member.Role role);
    List<Member> findByRoleAndStatus(Member.Role role, Member.Status status);
}
