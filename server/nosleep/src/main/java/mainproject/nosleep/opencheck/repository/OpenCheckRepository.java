package mainproject.nosleep.opencheck.repository;

import mainproject.nosleep.opencheck.entity.OpenCheck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;

@Repository
public interface OpenCheckRepository extends JpaRepository<OpenCheck,Long> {

    @Query(value = "select COUNT(distinct MEMBER_ID), SUM(oc.OPEN_TRUE) From open_check oc WHERE oc.shop_id = :shopId ", nativeQuery = true) // 고민필요
    List<BigInteger[]> allPeopleNumberAndCountOpenNumber(@Param("shopId") Long shopId);
}
