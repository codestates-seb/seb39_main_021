package mainproject.nosleep.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import mainproject.nosleep.member.entity.Member;

public class MemberRequestDto {

    @Getter
    @AllArgsConstructor
    public static class Post {

    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private String nickname;
        private Member.Status status;
        private Member.Role role;
        private String businessNumber;
    }

}
