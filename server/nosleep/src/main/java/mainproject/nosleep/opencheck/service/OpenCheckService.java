package mainproject.nosleep.opencheck.service;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.opencheck.repository.OpenCheckRepository;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OpenCheckService {

    private final OpenCheckRepository openCheckRepository;

    public void findVisitedAndOpen(Long shopId){
        List<BigInteger[]> objects = openCheckRepository.allPeopleNumberAndCountOpenNumber(shopId);
        BigInteger visitor = objects.get(0)[0];
        BigInteger openCount = objects.get(0)[1];

        System.out.println("visited = " + visitor);
        System.out.println("openCount = " + openCount);
    }
}
