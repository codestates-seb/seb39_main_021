package mainproject.nosleep.config;

import mainproject.nosleep.auth.service.PrincipalOauth2UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity(debug = true)
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig {

    @Autowired
    private PrincipalOauth2UserService principalOauth2UserService;
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        // H2 Console화면 사용을 위해 CSRF / frameOptions disable
        http
                .csrf().disable();
        //        .httpBasic().disable()
        //        .formLogin().disable();
        http.headers().frameOptions().disable();
        //http.cors();


        http.addFilterAfter(new FirstFilter(), LogoutFilter.class);
        http.authorizeRequests()
                .anyRequest().permitAll()           // 지정된 URL 이외엔 아무나 허용

                .and()
                .oauth2Login()
                .loginPage("/toggleMenu")
                .userInfoEndpoint()
                .userService(principalOauth2UserService)
//                .loginPage("/login")
//                .defaultSuccessUrl("/loginTest")
//                .userInfoEndpoint()
//                .userService(principalOAuth2UserService)



        ; // 추가
        return http.build();
    }

}