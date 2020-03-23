/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.controllers;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Especialidad;
import cl.ufro.dci.pmrteam.backendpmrapp.models.HoraEspecialista;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Paciente;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.EspecialidadRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.HoraEspecialistaRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.PacienteRepository;
import java.security.Principal;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Gustavo Huerta
 */
@RepositoryRestController
@RestController
@RequestMapping("hora")
public class HorasController {
    
    @Autowired
    private EspecialidadRepository especialidadRepository;
    
    @Autowired
    private HoraEspecialistaRepository horasRepository;
    
    @Autowired
    private PacienteRepository pacienteRepository;
    
    @PreAuthorize("hasRole('ROLE_PACIENTE') OR hasRole('ROLE_ADMIN')")
    @GetMapping("byEspecialidad")
    public List<HoraEspecialista> indexAll (@RequestParam("nombre") String especialidad, Principal user) {
        Optional<Especialidad> opEsp = this.especialidadRepository.findBynombre(especialidad);
        if(opEsp.isPresent()) {
            return this.horasRepository.findAllByespecialidad(opEsp.get());
        }
        return null;
    }
    @PreAuthorize("hasRole('ROLE_PACIENTE')")
    @GetMapping("byPaciente")
    public List<HoraEspecialista> indexHoras(@RequestParam("rut") String rut) {
        Optional<Paciente> op = Optional.of(this.pacienteRepository.findByrun(rut));
       Paciente pac = new Paciente();
        if(op.isPresent()){
             pac = op.get();
        }
        return this.horasRepository.findAllBypaciente(pac);
    }
    @PreAuthorize("hasRole('ROLE_PACIENTE')")
    @PostMapping(value= "toPaciente")
    public HoraEspecialista asignarPaciente(@RequestParam("id") Long id, @RequestBody Paciente paciente, Principal user ) {

        Optional<HoraEspecialista> opHora = this.horasRepository.findById(id);
        Optional<Paciente> opPaciente = Optional.of(this.pacienteRepository.findByrun(paciente.getRun()));
        if (opHora.isPresent() && opPaciente.isPresent()  && opPaciente.get().getRun().equalsIgnoreCase(user.getName())) {
            HoraEspecialista horaEspecialista = opHora.get();
            horaEspecialista.setPaciente( opPaciente.get());
            horaEspecialista.setAsignada(true);
            this.horasRepository.save(horaEspecialista);
            return horaEspecialista;
        }
        
        return null;
    }
    @PreAuthorize("hasRole('ROLE_PACIENTE')")
    @PostMapping(value = "cancelar")
    public boolean cancelarPeticion(@RequestBody HoraEspecialista hora) {
        Optional<HoraEspecialista> horaOp = Optional.of(hora);
        if (horaOp.isPresent()) {
          horaOp= Optional.of(this.horasRepository.save(horaOp.get()));
          if(horaOp.isPresent()){
              return true;
          }
        }
        return false;
    }
}
