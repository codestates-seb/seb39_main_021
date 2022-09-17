package mainproject.nosleep.review.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import mainproject.nosleep.shop.entity.ShopStatus;

import java.util.Arrays;

@Getter
@AllArgsConstructor
public enum ReviewStatus {
    common("일반"),
    close("탈퇴"),
    black("블랙");

    final String krStatus;

    public static ReviewStatus of(String status){
        return Arrays.stream(ReviewStatus.values())
                .filter(s -> s.getKrStatus().equals(status))
                .findAny()
                .orElseThrow(); //ReviewStatus타입입니다.

    }
}
