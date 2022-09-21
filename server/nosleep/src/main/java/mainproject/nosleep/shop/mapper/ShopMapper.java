package mainproject.nosleep.shop.mapper;

import mainproject.nosleep.shop.dto.ShopRequestDto;
import mainproject.nosleep.shop.dto.ShopResponseDto;
import mainproject.nosleep.shop.entity.Shop;
import org.mapstruct.Mapper;

import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ShopMapper {
     Shop shopPostToShop(ShopRequestDto.Post postRequestBody);
     Shop shopPatchToShop(ShopRequestDto.Patch postRequestBody);
     ShopResponseDto.DetailPage shopToDetailPage(Shop shop);

}
