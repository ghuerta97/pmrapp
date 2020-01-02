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
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.MedicoRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.PacienteRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author root
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
    
    @GetMapping("byEspecialidad")
    public List<HoraEspecialista> indexAll (@RequestParam("nombre") String especialidad) {
        Optional<Especialidad> opEsp = this.especialidadRepository.findBynombre(especialidad);
        if(opEsp.isPresent()) {
            return this.horasRepository.findAllByespecialidad(opEsp.get());
        }
        return null;
    }
    
    @PutMapping("toPaciente")
    public HoraEspecialista asignarPaciente(@RequestParam("id") Long id, @RequestBody Paciente paciente ){
        Optional<HoraEspecialista> opHora = this.horasRepository.findById(id);
        if (opHora.isPresent()) {
            HoraEspecialista horaEspecialista = opHora.get();
            Optional<Paciente> opPaciente = this.pacienteRepository.findById(paciente.getId());
            horaEspecialista.setPaciente(opPaciente.isPresent() ? opPaciente.get() : null);
            this.horasRepository.save(horaEspecialista);
            return horaEspecialista;
        }
        return null;
    }
}
