package mainproject.nosleep.store.entity;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum StoreStatus {
    trust("인증"),
    common("일반"),
    close("탈퇴"),
    black("블랙");

    final String style;
}
