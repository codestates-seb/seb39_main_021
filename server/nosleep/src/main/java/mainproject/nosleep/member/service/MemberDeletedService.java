package mainproject.nosleep.member.service;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.member.repository.MemberDeletedRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@RequiredArgsConstructor
@Service
public class MemberDeletedService {
    private final MemberDeletedRepository memberDeletedRepository;

}
