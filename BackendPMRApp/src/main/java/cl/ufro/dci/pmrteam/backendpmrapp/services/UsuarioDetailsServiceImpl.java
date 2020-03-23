/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.services;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Usuario;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.UsuarioRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.utils.UserDetailsMapper;
import java.util.Collections;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gustavo Huerta
 */
@Service
public class UsuarioDetailsServiceImpl implements UserDetailsService{
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @Override
    public UserDetails loadUserByUsername(String arg0) throws UsernameNotFoundException {
        Optional<Usuario>  op = Optional.of(this.usuarioRepository.findByusername(arg0));
        
        if(!op.isPresent()) {
            throw  new UsernameNotFoundException(arg0);
        }else {
            
        }
        
        return UserDetailsMapper.build(op.get());
    }
    
}
