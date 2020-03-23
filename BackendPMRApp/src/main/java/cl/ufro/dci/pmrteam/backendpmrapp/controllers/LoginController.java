/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.controllers;

import cl.ufro.dci.pmrteam.backendpmrapp.models.UserDetails;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.UsuarioRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.security.Constrants;
import cl.ufro.dci.pmrteam.backendpmrapp.utils.TokenProvider;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

/**
 *
 * @author Gustavo Huerta
 */
@RestController
@RequestMapping("")
@RepositoryRestController
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping(value = "login", consumes = {"application/x-www-form-urlencoded", "application/json"})
    public UserDetails login(@RequestBody UserDetails usuario) {
        Authentication auth = this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(usuario.getUsername(), usuario.getPassword()));
        UserDetails userAuth = new UserDetails();
        if (this.isAuthenticated(auth)) {
            userAuth.setUsername(auth.getName());
            userAuth.setToken(TokenProvider.generateToken(auth));
            userAuth.setPassword("");
            return userAuth;
        }
        return null;
    }

//    private String getJWTToken(Authentication authentication) {
//        String authorities = authentication.getAuthorities().stream()
//                .map(GrantedAuthority::getAuthority)
//                .collect(Collectors.joining(","));
//        return Jwts.builder().setIssuedAt(new Date()).setIssuer(Constrants.ISSUER_INFO)
//                .setSubject(authentication.getName())
//                .claim(Constrants.AUTHORITIES_KEY, authorities)
//                .setExpiration(new Date(System.currentTimeMillis() + Constrants.TOKEN_EXPIRATION_TIME))
//                .signWith(SignatureAlgorithm.HS512, Constrants.SUPER_SECRET_KEY).compact();
//    }

    private boolean isAuthenticated(Authentication authentication) {
        return authentication != null && !(authentication instanceof AnonymousAuthenticationToken) && authentication.isAuthenticated();
    }
}
