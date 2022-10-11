package mainproject.nosleep.opencheck.service;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.opencheck.dto.QueryDto;
import mainproject.nosleep.opencheck.repository.OpenCheckRepository;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OpenCheckService {

    private final OpenCheckRepository openCheckRepository;

    public QueryDto findVisitedAndOpen(Long shopId){
        List<Long[]> objects = openCheckRepository.allPeopleNumberAndCountOpenNumber(shopId);
        long visitor = objects.get(0)[0];
        long openCount = objects.get(0)[1];
        QueryDto queryDto = new QueryDto(visitor, openCount);
        return queryDto;
    }
}
