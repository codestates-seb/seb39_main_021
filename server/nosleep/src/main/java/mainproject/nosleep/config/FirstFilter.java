package mainproject.nosleep.config;

import javax.servlet.*;
import javax.servlet.FilterConfig;
import java.io.IOException;

public class FirstFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
        System.out.println("FirstFilter Created");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        System.out.println("========First Filter Start========");
        chain.doFilter(request, response);

        System.out.println("========First Filter End========");
    }

    @Override
    public void destroy() {
        System.out.println("FirstFilter Destroyed");
        Filter.super.destroy();
    }
}