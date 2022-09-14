package mainproject.nosleep.shop.entity;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum ShopStatus {
    trust("인증"),
    common("일반"),
    close("탈퇴"),
    black("블랙");

    final String style;
}
