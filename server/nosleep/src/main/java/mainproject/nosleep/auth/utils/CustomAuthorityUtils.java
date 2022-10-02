package mainproject.nosleep.auth.utils;

import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.member.service.MemberService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {

    private final MemberService memberService;

    public CustomAuthorityUtils (MemberService memberService) {
        this.memberService = memberService;
    }
    @Value("${mail.address.admin}")
    private String adminMailAddress;

    private final List<GrantedAuthority> ADMIN_ROLES = AuthorityUtils.createAuthorityList("ADMIN", "BUSINESS", "NORMAL");
    private final List<GrantedAuthority> BUSINESS_ROLES = AuthorityUtils.createAuthorityList("BUSINESS", "NORMAL");
    private final List<GrantedAuthority> NORMAL_ROLES = AuthorityUtils.createAuthorityList("NORMAL");
    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN", "BUSINESS", "NORMAL");
    private final List<String> BUSINESS_ROLES_STRING = List.of("BUSINESS", "NORMAL");
    private final List<String> NORMAL_ROLES_STRING = List.of("NORMAL");


    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
        return authorities;
    }


    public List<String> createRoles(String email) {
        Member member = memberService.findMemberByEmail(email);
        if (member == null) {
            return new ArrayList<>();
        }
        else if(member.getRole().toString().equals(Member.Role.ADMIN.toString())) {
            return ADMIN_ROLES_STRING;
        }
        else if(member.getRole().toString().equals(Member.Role.BUSINESS.toString())) {
            return BUSINESS_ROLES_STRING;
        }
        else {
            return NORMAL_ROLES_STRING;
        }
    }
}