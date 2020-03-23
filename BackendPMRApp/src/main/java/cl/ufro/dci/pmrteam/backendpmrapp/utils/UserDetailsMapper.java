/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.utils;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Rol;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Usuario;
import java.util.HashSet;
import java.util.Set;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

/**
 *
 * @author Gustavo Huerta
 */
public class UserDetailsMapper {

    public static UserDetails build(Usuario user) {
        return new User(user.getUsername(), user.getPassword(), getAuthorities(user));
    }

    private static Set<? extends GrantedAuthority> getAuthorities(Usuario retrievedUser) {
        Rol rol = retrievedUser.getRol();
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(rol.getAuthority()));
        return authorities;
    }
}
