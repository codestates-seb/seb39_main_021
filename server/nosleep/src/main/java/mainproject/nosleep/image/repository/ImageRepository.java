package mainproject.nosleep.image.repository;

import mainproject.nosleep.image.entity.Image;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.shop.entity.Shop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Long> {

    Image findById(long id);
    Image findByUrl(String url);

    List<Image> findByReviewAndShop(Review review, Shop shop);
    void deleteById(long id);
    void deleteByUrl(String url);

}
