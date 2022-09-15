package mainproject.nosleep.shop.service;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.shop.entity.Shop;
import mainproject.nosleep.shop.repository.ShopRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShopService {

    private final ShopRepository shopRepository;

    public Shop createShop(Shop shop){
        return shopRepository.save(shop);
    }


    public Shop updateShop(Long id, Shop shop){
        Shop updateShop = findVerifiedShop(id);

        Optional.ofNullable(shop.getCategory()).ifPresent(updateShop::setCategory);
        Optional.ofNullable(shop.getName()).ifPresent(updateShop::setName);
        Optional.ofNullable(shop.getAddress()).ifPresent(updateShop::setAddress);
        Optional.ofNullable(shop.getDetail()).ifPresent(updateShop::setDetail);
        Optional.ofNullable(shop.getLongitude()).ifPresent(updateShop::setLongitude);
        Optional.ofNullable(shop.getLongitude()).ifPresent(updateShop::setLongitude);
        return shopRepository.save(updateShop);
    }

    public Shop findShop(Long id) {
        Shop verifiedShop = findVerifiedShop(id);
        // 조회수 이슈
        return verifiedShop;
    }



    public void deleteShop(Long id) {
        Shop verifiedShop = findVerifiedShop(id);
        //삭제를 바로하는 것이 아닌, 상태 변경, 변경일자 기록
        //삭제로직 필요

        shopRepository.delete(verifiedShop); // 바로삭제제
    }

   public Shop findVerifiedShop(Long id){
        Optional<Shop> optionalShop = shopRepository.findById(id);
        return optionalShop.orElseThrow(
                ()-> new IllegalArgumentException("존재하지않는 사업장입니다.")
        );

    }
}
