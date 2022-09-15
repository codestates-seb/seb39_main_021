package mainproject.nosleep.shop.mapper;

import mainproject.nosleep.shop.dto.ShopRequestDto;
import mainproject.nosleep.shop.entity.Shop;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ShopMapper {
     Shop shopPostToShop(ShopRequestDto.Post postRequestBody);
}
