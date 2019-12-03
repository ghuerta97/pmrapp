/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.controllers;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Usuario;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.UsuarioRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.querydsl.core.types.Predicate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
/**
 *
 * @author ghuerta
 */
@RepositoryRestController
@RestController
@RequestMapping("usuario")
public class UsuarioController {
    
    @Autowired
    private UsuarioRepository userRepo;
    
    @GetMapping("byName")
    public Usuario indexName(@RequestParam("name") String name){
        return userRepo.findByname(name);
    }
}
