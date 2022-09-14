package mainproject.nosleep.shop.service;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.shop.entity.Shop;
import mainproject.nosleep.shop.repository.ShopRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ShopService {

    private final ShopRepository shopRepository;

    public Shop createShop(Shop shop){
        return shopRepository.save(shop);
    }
}
