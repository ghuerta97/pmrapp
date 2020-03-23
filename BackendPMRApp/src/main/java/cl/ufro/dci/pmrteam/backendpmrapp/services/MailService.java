/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.services;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Usuario;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

/**
 *
 * @author Gustavo Huerta
 */
@Service
public class MailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    public void sendEmail(String to, String subject, String content) {
        SimpleMailMessage email = new SimpleMailMessage();
        
         email.setTo(to);
        email.setSubject(subject);
        email.setText(content);
       
        mailSender.send(email);
    }
    
    public void sendEmail(List<Usuario> listClients, String subject, String content) {

        for (Usuario c : listClients) 
        { 
            SimpleMailMessage email = new SimpleMailMessage();
            
            //recorremos la lista y enviamos a cada cliente el mismo correo
            email.setTo(c.getEmail());
            email.setSubject(subject);
            email.setText(content);
            
            mailSender.send(email);
        }
    }
    
}
