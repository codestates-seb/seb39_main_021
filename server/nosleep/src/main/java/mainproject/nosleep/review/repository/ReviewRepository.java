package mainproject.nosleep.review.repository;

import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.shop.entity.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>  {

    Page<Review> findByShop(Shop shop, Pageable pageable);

    @Query(value = "select AVG(r.rating), COUNT(r.rating) From review r ", nativeQuery = true)
    List<Object[]> sumAndCountTestAllRating();

    @Query(value = "select AVG(r.rating) From review r WHERE r.shop_id = :shopId  GROUP BY shop_id", nativeQuery = true)
    List<Double> averageAndCountAllRating(@Param("shopId") Long shopId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE review r SET r.upvote_count = r.upvote_count + 1 WHERE r.id = :reviewId", nativeQuery = true)
    void upvotePlus(@Param("reviewId") Long reviewId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE review r SET r.upvote_count = r.upvote_count - 1 WHERE r.id = :reviewId", nativeQuery = true)
    void upvoteMinus(@Param("reviewId") Long reviewId);



}
