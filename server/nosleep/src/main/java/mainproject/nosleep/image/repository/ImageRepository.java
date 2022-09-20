package mainproject.nosleep.image.repository;

import mainproject.nosleep.image.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {

    Image findById(long id);
    void deleteById(long id);
}
