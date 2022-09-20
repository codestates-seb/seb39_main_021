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
@RequestMapping("/v1/shop")
@RequiredArgsConstructor
public class ShopController {

    private final ShopService shopService;
    private final ShopMapper mapper;
    @PostMapping
    public ResponseEntity<?> postShop(@Valid @RequestBody ShopRequestDto.Post requestBody){

        Shop shop = mapper.shopPostToShop(requestBody);
        Shop createdShop = shopService.createShop(shop);
        return new ResponseEntity<>(createdShop, HttpStatus.CREATED);
    }

    @PatchMapping("/{shopId}")
    public ResponseEntity<?> patchShop(@PathVariable Long shopId,
                                       @Valid @RequestBody ShopRequestDto.Patch requestBody){

        Shop shop = mapper.shopPatchToShop(requestBody);
        Shop updateShop = shopService.updateShop(shopId, shop);
        return new ResponseEntity<>(updateShop, HttpStatus.OK);
    }

    @GetMapping("/{shopId}")
    public ResponseEntity<?> getDetailShop(@PathVariable Long shopId){
        Shop findShop = shopService.findShop(shopId);
        return new ResponseEntity<>(findShop, HttpStatus.OK);
    }

    //현재 위치 기반으로 근처 Shop pagination 응답
    @GetMapping()
    public List<?> getListShop(){
        return null;
    }

    @DeleteMapping("/{shopId}")
    public ResponseEntity<?> deleteShop(@PathVariable Long shopId){
        shopService.deleteShop(shopId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
