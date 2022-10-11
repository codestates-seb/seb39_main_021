package mainproject.nosleep.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mainproject.nosleep.member.entity.Member;

public class MemberResponseDto {

    @Getter
    @Setter
    @AllArgsConstructor
    //@NoArgsConstructor
    public static class Patch {
        private String businessNumber;
        private Member.Role role;
        private Member.Status status;
        private String nickname;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    //@NoArgsConstructor
    public static class Post {

    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Get {

        private String businessNumber;
        private Member.Role role;
        private Member.Status status;
        private String nickname;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    //@NoArgsConstructor
    public static class Delete {

        private String businessNumber;
        private Member.Status status;
        private String email;
        private String nickname;

    }
}
