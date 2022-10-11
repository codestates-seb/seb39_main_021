package mainproject.nosleep.member.repository;

import mainproject.nosleep.member.entity.MemberDeleted;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface MemberDeletedRepository extends JpaRepository<MemberDeleted, Long> {

    List<MemberDeleted> findByCreatedAtBefore(LocalDateTime threshold);
}
