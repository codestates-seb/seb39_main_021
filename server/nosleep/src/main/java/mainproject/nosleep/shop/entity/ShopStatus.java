package mainproject.nosleep.shop.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;

@Getter
@AllArgsConstructor
public enum ShopStatus {
    trust("인증"),
    common("일반"),
    close("탈퇴"),
    black("블랙");

    final String style;


    public static ShopStatus of(String status){
        return Arrays.stream(ShopStatus.values())
                .filter(s -> s.getStyle().equals(status))
                .findAny()
                .orElseThrow();//ShopStatus타입입니다.
    }
}
