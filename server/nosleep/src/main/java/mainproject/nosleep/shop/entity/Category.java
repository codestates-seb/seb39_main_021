package mainproject.nosleep.shop.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;

@Getter
@AllArgsConstructor
public enum Category {
    Restaurant("음식점"),
    Cafe("카페"),
    AnimalClinic("동물병원"),
    Pharmacy("약국"),
    Hospital("병원"),
    SingingRoom("노래방"),
    LaundryRoom("세탁방"),
    ConvenienceStore("편의점"),
    UnmannedStore("무인판매점"),
    PCbang("PC방"),
    GasStation("주유소"),
    Etc("기타");

    final String krName;

    public static Category of(String category){
        return Arrays.stream(Category.values())
                .filter(c-> c.getKrName().equals(category))
                .findAny()
                .orElse(Etc);
    }
}
