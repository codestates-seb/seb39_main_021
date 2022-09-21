package mainproject.nosleep.shop.repository;

import mainproject.nosleep.shop.entity.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ShopRepository extends JpaRepository<Shop, Long> {

    @Transactional
    @Modifying
    @Query(value = "UPDATE Shop s set s.ratingAVG = :ratingAVG , s.review_count = s.review_count + 1 WHERE s.id = :shopId", nativeQuery = true)
    void updateRatingAVG(@Param("shopId") Long shopId,@Param("ratingAVG") Double ratingAVG);
}
