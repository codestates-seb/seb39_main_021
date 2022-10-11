package mainproject.nosleep.shop.controller;

import lombok.RequiredArgsConstructor;
import mainproject.nosleep.dto.MultiResponseDto;
import mainproject.nosleep.shop.dto.ShopRequestDto;
import mainproject.nosleep.shop.entity.Category;
import mainproject.nosleep.shop.entity.Shop;
import mainproject.nosleep.shop.mapper.ShopMapper;
import mainproject.nosleep.shop.service.ShopService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/v1/shop")
@RequiredArgsConstructor
public class ShopController {

    private final ShopService shopService;
    private final ShopMapper mapper;

    @PostMapping
    public ResponseEntity<?> postShop(@Valid @RequestBody ShopRequestDto.Create requestBody) {

        Shop shop = mapper.shopPostToShop(requestBody);
        Shop createdShop = shopService.createShop(shop, requestBody.getImageList(), requestBody.getMemberId());
        return new ResponseEntity<>(/*mapper.shopToCreateDetailPage(createdShop),*/ HttpStatus.CREATED);
    }

    @PatchMapping("/{shopId}")
    public ResponseEntity<?> patchShop(@PathVariable Long shopId,
                                       @Valid @RequestBody ShopRequestDto.Update requestBody) {

        Shop shop = mapper.shopPatchToShop(requestBody);
        Shop updateShop = shopService.updateShop(shopId, shop, requestBody.getImageList());
        return new ResponseEntity<>(mapper.shopToReadDetailPage(updateShop), HttpStatus.OK);
    }

    @GetMapping("/{shopId}")
    public ResponseEntity<?> getDetailShop(@PathVariable Long shopId) {
        Shop findShop = shopService.findShop(shopId);
        return new ResponseEntity<>(mapper.shopToReadDetailPage(findShop), HttpStatus.OK);
    }

    //현재 위치 기반으로 조회 , 근처 Shop pagination 응답
    @GetMapping()
    public ResponseEntity<?> getListShop(@RequestParam int page,
                                         @RequestParam int size,
                                         @RequestParam String category,
                                         @RequestParam(required = false) String sort,
                                         @RequestParam(required = false) String cityId,
                                         @RequestParam(required = false) String areaId,
                                         @RequestParam(required = false) Double longitude,
                                         @RequestParam(required = false) Double latitude) { //도시로 조회

        String sortPoint = "id";
        Map<String, Object> spec = new HashMap<>();
        if (category != null) {
            Category verifyCategory = Category.of(category);
            spec.put("category", verifyCategory);
        }
        if (cityId != null) {
            if(!cityId.equals("01"))
              spec.put("cityId", cityId);
        }
        if (areaId !=null){
            if (!areaId.equals("000")) {
                spec.put("areaId", areaId);
            }
        }
        if (longitude != null && latitude != null) {
            spec.put("longitude", longitude);
            spec.put("latitude", latitude);
        }
        Page<Shop> shopPage = shopService.findShops(page - 1, size, spec, sortPoint);
        List<Shop> shops = shopPage.getContent();
        if(sort ==null || sort.equals("distance")){
            shops = sortShopList(longitude, latitude, shops);
        }

        return new ResponseEntity<>(new MultiResponseDto(
                mapper.shopListToPages(shops),
                shopPage),
                HttpStatus.OK);
    }

    @DeleteMapping("/{shopId}")
    public ResponseEntity<?> deleteShop(@PathVariable Long shopId) {
        shopService.deleteShop(shopId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private List<Shop> sortShopList(Double longitude, Double latitude, List<Shop> shops) {
        List<Shop> sortShops = shopService.distanceSort(shops, latitude, longitude);
        for(Shop ss:sortShops) {
            for (Shop s: shops) {
                if(ss.getId() == s.getId()){
                    ss.setLatitude(s.getLatitude());
                    ss.setLongitude(s.getLongitude());
                }
            }
        }
        return sortShops;
    }
}
