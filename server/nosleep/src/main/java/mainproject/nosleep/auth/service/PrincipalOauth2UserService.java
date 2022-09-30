package mainproject.nosleep.auth.service;

import mainproject.nosleep.auth.entity.PrincipalDetails;
import mainproject.nosleep.member.entity.Member;
import mainproject.nosleep.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
public class PrincipalOauth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        OAuth2User oauth2User = super.loadUser(userRequest);

        String provider = userRequest.getClientRegistration().getClientId();
        String providerId = oauth2User.getAttribute("sub");
        String username = oauth2User.getAttribute("name");
        String email = oauth2User.getAttribute("email");
        Member.Role role = Member.Role.NORMAL;
        Member.Status status = Member.Status.ACTIVE;

        Member member = memberRepository.findByEmail(email);

        if(member == null) {
            member = Member.builder()
                    .nickname(username)
                    .email(email)
                    .role(role)
                    .provider(provider)
                    .providerId(providerId)
                    .status(status)
                    .build();
            memberRepository.save(member);
        }

        return new PrincipalDetails(member, oauth2User.getAttributes());
    }
}