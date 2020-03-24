/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.controllers;

import cl.ufro.dci.pmrteam.backendpmrapp.FCMInitializer;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Usuario;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.UsuarioRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.services.MailService;
import cl.ufro.dci.pmrteam.backendpmrapp.utils.PasswordGenerate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private MailService mailService;

    Logger logger = LoggerFactory.getLogger(UsuarioController.class);

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("byName")
    public Usuario indexName(@RequestParam("username") String username) {
        return userRepo.findByusername(username);
    }

    @PreAuthorize("hasRole('ROLE_PACIENTE')")
    @PostMapping("changePassword")
    public void saveUsuario(@RequestBody Usuario user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        this.userRepo.save(user);
    }

    @PostMapping("sendPassword")
    public boolean sendPassword(@RequestBody Usuario user) {
        Optional<Usuario> op = Optional.ofNullable(this.userRepo.findByemail(user.getEmail()));
        if (op.isPresent()) {
            Usuario usuario = op.get();
            String pass = PasswordGenerate.generatePassayPassword();
            usuario.setPassword(bCryptPasswordEncoder.encode(pass));
            try {
                this.mailService.sendEmail(usuario.getEmail(), "Reenvio de contraseña", "La contraseña es:" + pass);
                this.userRepo.save(usuario);
            } catch (Exception ex) {
                logger.error(ex.getMessage());
            }
            return true;
        }
        return false;
    }
}
