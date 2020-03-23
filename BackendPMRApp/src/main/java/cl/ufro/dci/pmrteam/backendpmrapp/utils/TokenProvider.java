/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.utils;

import cl.ufro.dci.pmrteam.backendpmrapp.security.Constrants;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.sql.Date;
import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/**
 *
 * @author Gustavo Huerta
 */
public class TokenProvider {

    public static String generateToken(Authentication authentication) {
        // Genera el token con roles, issuer, fecha, expiración (8h)
        final String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));
        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(Constrants.AUTHORITIES_KEY, authorities)
                .signWith(SignatureAlgorithm.HS256, Constrants.SUPER_SECRET_KEY)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setIssuer(Constrants.ISSUER_INFO)
                .setExpiration(new Date(System.currentTimeMillis() + Constrants.TOKEN_EXPIRATION_TIME))
                .compact();
    }

    public static String getUserName(String token) {
        final JwtParser jwtParser = Jwts.parser().setSigningKey(Constrants.SUPER_SECRET_KEY);

        final Jws<Claims> claimsJws = jwtParser.parseClaimsJws(token);

        return claimsJws.getBody().getSubject();
    }

    public static UsernamePasswordAuthenticationToken getAuthentication(String token, UserDetails user) {
        final JwtParser jwtParser = Jwts.parser().setSigningKey(Constrants.SUPER_SECRET_KEY);

        final Jws<Claims> claimsJws = jwtParser.parseClaimsJws(token);

        final Claims claims = claimsJws.getBody();

        final Collection<SimpleGrantedAuthority> authorities
                = Arrays.stream(claims.get(Constrants.AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        return new UsernamePasswordAuthenticationToken(user, "", authorities);
    }

}
