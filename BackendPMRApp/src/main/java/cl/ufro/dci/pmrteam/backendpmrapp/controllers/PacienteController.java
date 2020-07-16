/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.controllers;

import cl.ufro.dci.pmrteam.backendpmrapp.utils.RutValidator;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Cesfam;
import cl.ufro.dci.pmrteam.backendpmrapp.models.HoraEspecialista;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Paciente;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Rol;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Usuario;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.CesfamRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.PacienteRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.UsuarioRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.services.MailService;
import cl.ufro.dci.pmrteam.backendpmrapp.utils.EmailVerificador;
import cl.ufro.dci.pmrteam.backendpmrapp.utils.PasswordGenerate;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ghuerta
 */
@RepositoryRestController
@RestController
@RequestMapping("paciente")
public class PacienteController {
    
    @Autowired
    private PacienteRepository patientRepo;
    
    @Autowired
    private CesfamRepository cesfamRepo;
    
    @Autowired
    private UsuarioRepository usuarioRepo;
    
    @Autowired
    private MailService mailService;
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping("byRun")
    public Paciente indexByRun(@RequestParam("run") String run) {
        return RutValidator.validaRut(run) ? this.patientRepo.findByrun(run) : null;
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("byCesfam")
    public List<Paciente> indexByCesfam(@RequestParam("id") Long id) {
        return this.patientRepo.findBycesfam(this.cesfamRepo.findById(id).get());
    }
    

//    @PreAuthorize("hasRole('ROLE_PACIENTE')")
//    @PutMapping("addHoratoPaciente")
//    public List<HoraEspecialista> addHora(@RequestParam("id") Long id, @RequestBody HoraEspecialista horaAsignada) {
//        Optional<Paciente> opPaciente = patientRepo.findById(id);
//        if (opPaciente.isPresent()) {
//            Paciente pac = opPaciente.get();
//            ArrayList<HoraEspecialista> listHora = (ArrayList<HoraEspecialista>) pac.getHistorialHoras();
//            listHora.add(horaAsignada);
//            pac.setHistorialHoras(listHora);
//            return listHora;
//        }
//        return null;
//    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("sendPassword")
    public boolean sendEmailPassword(@RequestBody JSONObject datos) throws Exception{
        String rut = datos.getAsString("rut");
        if(!RutValidator.validaRut(rut)){
            throw new Exception("Formato de rut no valido");
        }
        if(!EmailVerificador.verificar(datos.getAsString("email"))){
            throw  new Exception("Email no valido");
        }
        if (Optional.of(rut).isPresent()) {
            Paciente pac = this.patientRepo.findByrun(rut);
            if (Optional.ofNullable(pac).isPresent()) {
                
                String pass = PasswordGenerate.generatePassayPassword();
                System.out.println("password = "+pass);
                Optional<Usuario> d = Optional.ofNullable(pac.getUsuario());
                if (d.isEmpty()) {
                    Usuario usuario = new Usuario();
                    usuario.setEmail(datos.getAsString("email"));
                    usuario.setPassword(this.bCryptPasswordEncoder.encode(pass));
                    usuario.setUsername(rut);
                    usuario.setRol(Rol.ROLE_PACIENTE);
                    pac.setUsuario(this.usuarioRepo.save(usuario));
                    this.patientRepo.save(pac);
                } else {
                    Usuario p = pac.getUsuario();
                    Optional<Usuario> user =  Optional.ofNullable(this.usuarioRepo.findByemail(datos.getAsString("email")));
                    if(user.isEmpty() || p.getEmail().equalsIgnoreCase(datos.getAsString("email"))) {
                        p.setEmail(datos.getAsString("email"));
                        p.setPassword(this.bCryptPasswordEncoder.encode(pass));
                        pac.setUsuario(this.usuarioRepo.save(p));
                        this.patientRepo.save(pac);
                    }else {
                        throw new Exception("Email existe en otro usuario");
                    }
                    
                    
                }
                
                this.mailService.sendEmail(datos.getAsString("email"), "Envio de password para pmrapp", ""
                        + "La password es: " + pass) ;
                return true;
            }
        }
        
        return false;
    }
    
    @PreAuthorize("hasRole('ROLE_PACIENTE')")
    @PostMapping("updateImage")
    public ResponseEntity<Boolean> updatePicture(@RequestBody JSONObject json, Principal user){
        System.out.println(user.getName());
        Optional<Paciente> op = Optional.ofNullable(this.patientRepo.findByrun(user.getName()));
        if(op.isPresent()){
            Paciente pac = op.get();
            System.out.println(json.getAsString("url"));
            pac.setImagen(json.getAsString("url"));
            this.patientRepo.save(pac);
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    } 
}
