package mainproject.nosleep.shop.controller;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.shop.dto.ShopRequestDto;
import mainproject.nosleep.shop.entity.Shop;
import mainproject.nosleep.shop.mapper.ShopMapper;
import mainproject.nosleep.shop.service.ShopService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("v1/Shop")
@RequiredArgsConstructor
public class ShopController {

    private final ShopService storeService;
    private final ShopMapper mapper;
    @PostMapping("")
    public ResponseEntity<?> postShop(@Valid @RequestBody ShopRequestDto.Post requestBody){

        Shop shop = mapper.shopPostToShop(requestBody);
        Shop createdShop = storeService.createShop(shop);
        return new ResponseEntity<>(createdShop, HttpStatus.CREATED);
    }

    @PatchMapping
    public ResponseEntity<?> patchShop(){
        return null;
    }

    @GetMapping("/{StoreId}")
    public ResponseEntity<?> getDetailShop(){
        return null;
    }

    //현재 위치 기반으로 근처 Shop pagination 응답
    @GetMapping()
    public List<?> getListShop(){
        return null;
    }

    @DeleteMapping("")
    public ResponseEntity<?> deleteShop(){
        return null;
    }
}
