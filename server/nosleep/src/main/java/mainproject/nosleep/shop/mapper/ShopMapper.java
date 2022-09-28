package mainproject.nosleep.shop.mapper;

import mainproject.nosleep.shop.dto.ShopRequestDto;
import mainproject.nosleep.shop.dto.ShopResponseDto;
import mainproject.nosleep.shop.entity.Shop;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ShopMapper {
     Shop shopPostToShop(ShopRequestDto.Create postRequestBody);
     Shop shopPatchToShop(ShopRequestDto.Update postRequestBody);

     ShopResponseDto.CreateDetailPage shopToCreateDetailPage(Shop shop);
     ShopResponseDto.ReadDetailPage shopToReadDetailPage(Shop shop);

     ShopResponseDto.ReadListPage shopToReadListPage(Shop shop);

     List<ShopResponseDto.ReadListPage> shopListToPages(List<Shop> shops);

}
