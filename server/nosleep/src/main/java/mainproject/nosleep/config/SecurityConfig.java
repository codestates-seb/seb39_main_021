package mainproject.nosleep.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutFilter;

@Configuration
@EnableWebSecurity(debug = true)
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig {

    //    @Autowired
//    private PrincipalOAuth2UserService principalOAuth2UserService;
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        // H2 Console화면 사용을 위해 CSRF / frameOptions disable
        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.cors();


        http.addFilterAfter(new FirstFilter(), LogoutFilter.class);
        http.authorizeRequests()
//                .antMatchers("path").authenticated()
                .anyRequest().permitAll()           // 지정된 URL 이외엔 아무나 허용

//                .and()
//                .formLogin()
//
//                .loginPage("/login")
//                .loginProcessingUrl("/api/login")
//                .defaultSuccessUrl("/login")             // 프론트측에서 redirect되는 url이 아니라 GET요청을 보내는 url


//                .and()                              // OAuth2 기반 로그인, 쿠키 문제로 비활성화
//                .oauth2Login()
//                .loginPage("/login")
//                .defaultSuccessUrl("/loginTest")
//                .userInfoEndpoint()
//                .userService(principalOAuth2UserService)



        ; // 추가
        return http.build();
    }

}