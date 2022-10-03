package mainproject.nosleep.shop.service;


import lombok.RequiredArgsConstructor;
import mainproject.nosleep.image.service.ImageService;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.review.entity.Review;
import mainproject.nosleep.review.repository.ReviewRepository;
import mainproject.nosleep.shop.entity.Shop;
import mainproject.nosleep.shop.repository.ShopRepository;
import mainproject.nosleep.shop.specification.ShopSpecification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class ShopService {

    private final ShopRepository shopRepository;
    private final ReviewRepository reviewRepository;
    private final ImageService imageService;


    public Shop createShop(Shop shop, List<String> images, Long memberId) {
        Member member = new Member(memberId);
        shop.setMember(member);
        Shop save = shopRepository.save(shop);
        imageService.updateImage(images, save);
        return save;
    }


    public Shop updateShop(Long id, Shop shop, List<String> images) {
        Shop updateShop = findVerifiedShop(id);

        Optional.ofNullable(shop.getName()).ifPresent(updateShop::setName);
        Optional.ofNullable(shop.getDetail()).ifPresent(updateShop::setDetail);
        if(images.size() >0){imageService.updateImage(images, updateShop);}
        Shop save = shopRepository.save(updateShop);
        save.setReviews(threeReviews(save).getContent());
        return save;
    }

    public Shop findShop(Long id) {
        Shop verifiedShop = findVerifiedShop(id);
        // 추후, 좋아요순으로 수정 필요


        verifiedShop.setReviews( threeReviews(verifiedShop).getContent());

        return verifiedShop;
    }

    public Page<Shop> findShops(int page, int size, Map<String, Object> spec, String sort) {
        Specification<Shop> search = ShopSpecification.search(spec);
        return shopRepository.findAll(search, PageRequest.of(page, size, Sort.by(sort).descending()));
    }


    public void deleteShop(Long id) {
        Shop verifiedShop = findVerifiedShop(id);
        //삭제를 바로하는 것이 아닌, 상태 변경, 변경일자 기록
        //삭제로직 필요

        shopRepository.delete(verifiedShop); // 바로삭제
    }

    public Shop findVerifiedShop(Long id) {
        Optional<Shop> optionalShop = shopRepository.findById(id);
        return optionalShop.orElseThrow(
                () -> new IllegalArgumentException("존재하지않는 사업장입니다.")
        );

    }

    public Page<Review> threeReviews(Shop verifiedShop){
        return reviewRepository.findByShop(verifiedShop, PageRequest.of(0, 3, Sort.by("id").descending()));// 최신순
    }

    public List<Shop> distanceSort(List<Shop> shops, Double currentLongitude, Double currentLatitude) {
        List<Shop> sortShops = shops.stream()
                .map(shop -> {
                    // 페이지네이션의 필요한 정보
                    Shop shop1 = new Shop(
                            shop.getCategory(),
                            shop.getName(),
                            shop.getAddress(),
                            shop.getRatingAVG(),
                            shop.getReviewCount(),
                            shop.getVisitorCount(),
                            shop.getOpenCount(),
                            shop.getImages()
                    );
                    shop1.setId(shop.getId());
                    shop1.setLatitude(shop.getLatitude() - currentLatitude);
                    shop1.setLongitude(shop.getLongitude() - currentLongitude);
                    return shop1;
                }).sorted().collect(Collectors.toList());

        return sortShops;
    }

}
