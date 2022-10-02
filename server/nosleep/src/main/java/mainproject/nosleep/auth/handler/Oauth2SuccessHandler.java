package mainproject.nosleep.auth.handler;

import mainproject.nosleep.auth.jwt.JwtTokenizer;
import mainproject.nosleep.auth.utils.CustomAuthorityUtils;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class Oauth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
     private final JwtTokenizer jwtTokenizer;
     private final CustomAuthorityUtils authorityUtils;


    public Oauth2SuccessHandler(JwtTokenizer jwtTokenizer,
                CustomAuthorityUtils authorityUtils) {
            this.jwtTokenizer = jwtTokenizer;
            this.authorityUtils = authorityUtils;
        }

        @Override
        public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
            var oAuth2User = (OAuth2User)authentication.getPrincipal();
            String email = String.valueOf(oAuth2User.getAttributes().get("email"));
            List<String> authorities = authorityUtils.createRoles(email);

            redirect(request, response, email, authorities);
        }



        private void redirect(HttpServletRequest request, HttpServletResponse response, String email, List<String> authorities) throws IOException {
            String accessToken = delegateAccessToken(email, authorities);
            String refreshToken = delegateRefreshToken(email);

            String uri = createURI(accessToken, refreshToken).toString();
            getRedirectStrategy().sendRedirect(request, response, uri);
        }

        private String delegateAccessToken(String email, List<String> authorities) {
            Map<String, Object> claims = new HashMap<>();
            claims.put("email", email);
            claims.put("roles", authorities);


            Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

            String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

            String accessToken = jwtTokenizer.generateAccessToken(claims, email, expiration, base64EncodedSecretKey);

            return accessToken;
        }

        private String delegateRefreshToken(String email) {
            Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
            String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

            String refreshToken = jwtTokenizer.generateRefreshToken(email, expiration, base64EncodedSecretKey);

            return refreshToken;
        }

        private URI createURI(String accessToken, String refreshToken) {
            MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
            queryParams.add("access_token", accessToken);
            queryParams.add("refresh_token", refreshToken);

            return UriComponentsBuilder
                    .newInstance()
                    .scheme("http")
                    .host("localhost")
                    //.port(3000)
                    .path("/loginSuccessful")
                    .queryParams(queryParams)
                    .build()
                    .toUri();
        }


//        getRedirectStrategy().sendRedirect(request, response, "http://localhost:3000/login");

}
