package mainproject.nosleep.member.entity;

import lombok.*;
import mainproject.nosleep.audit.Auditable;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberDeleted extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Member member;
}
