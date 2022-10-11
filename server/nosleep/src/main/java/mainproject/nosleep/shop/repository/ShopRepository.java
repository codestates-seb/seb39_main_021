package mainproject.nosleep.shop.repository;

import mainproject.nosleep.shop.entity.Shop;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ShopRepository extends JpaRepository<Shop, Long>, JpaSpecificationExecutor<Shop> {

    @Transactional
    @Modifying
    @Query(value = "UPDATE shop s set s.ratingAVG = :ratingAVG , s.review_count = s.review_count + 1 , s.visitor_count =:visitorCount , s.open_count= :openCount  WHERE s.id = :shopId", nativeQuery = true)
    void updateShopData(@Param("shopId") Long shopId,@Param("ratingAVG") Double ratingAVG, @Param("visitorCount") Long visitorCount, @Param("openCount") Long openCount);
}
