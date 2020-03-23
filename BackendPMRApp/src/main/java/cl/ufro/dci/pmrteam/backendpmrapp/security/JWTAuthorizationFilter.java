/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.security;

import static cl.ufro.dci.pmrteam.backendpmrapp.security.Constrants.AUTHORITIES_KEY;
import cl.ufro.dci.pmrteam.backendpmrapp.services.UsuarioDetailsServiceImpl;
import cl.ufro.dci.pmrteam.backendpmrapp.utils.TokenProvider;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.filter.OncePerRequestFilter;

/**
 *
 * @author Gustavo Huerta
 */
public class JWTAuthorizationFilter extends OncePerRequestFilter {
    
    private UsuarioDetailsServiceImpl userService;

    public JWTAuthorizationFilter(UsuarioDetailsServiceImpl userService) {
        this.userService = userService;
    }
    
    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        String header = req.getHeader(Constrants.HEADER_AUTHORIZACION_KEY);
        if (header == null || !header.startsWith(Constrants.TOKEN_BEARER_PREFIX)) {
            chain.doFilter(req, res);
            return;
        }
        String token = req.getHeader(Constrants.HEADER_AUTHORIZACION_KEY);
        String d = token.replace(Constrants.TOKEN_BEARER_PREFIX, "");
        String userName = TokenProvider.getUserName(d);
        UserDetails user = this.userService.loadUserByUsername(userName);
        UsernamePasswordAuthenticationToken authenticationToken = TokenProvider.getAuthentication(d, user);
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        chain.doFilter(req, res);
    }

    public static UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
        final String token = request.getHeader(Constrants.HEADER_AUTHORIZACION_KEY);
        if (token != null) {
            // Se procesa el token y se recupera el usuario.
            final JwtParser jwtParser = Jwts.parser().setSigningKey(Constrants.SUPER_SECRET_KEY);
            final Jws<Claims> claimsJws = jwtParser.parseClaimsJws(token);
            final Claims claims = claimsJws.getBody();
            String user = Jwts.parser()
                    .setSigningKey(Constrants.SUPER_SECRET_KEY)
                    .parseClaimsJws(token.replace(Constrants.TOKEN_BEARER_PREFIX, ""))
                    .getBody()
                    .getSubject();
            Collection<SimpleGrantedAuthority> authorities
                    = Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                            .map(SimpleGrantedAuthority::new)
                            .collect(Collectors.toList());
            if (user != null) {
                return new UsernamePasswordAuthenticationToken(user, null, authorities);
            }
            return null;
        }
        return null;
    }
}
