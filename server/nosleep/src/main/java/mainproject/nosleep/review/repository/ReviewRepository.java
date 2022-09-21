package mainproject.nosleep.review.repository;

import mainproject.nosleep.review.entity.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

//테트트용
    @Query(value="select AVG(r.rating), COUNT(r.rating) From Review r ", nativeQuery = true) // 쿼리문 테스트
    List<Object[]> sumAndCountTestAllRating();

    @Query(value="select AVG(r.rating) From Review r WHERE r.shop_id = :shopId  GROUP BY shop_id", nativeQuery = true)
    List<Object[]> averageAndCountAllRating(@Param("shopId")Long shopId);

}
