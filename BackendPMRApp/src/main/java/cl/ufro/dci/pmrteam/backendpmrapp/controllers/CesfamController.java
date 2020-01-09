/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.controllers;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Cesfam;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Paciente;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.CesfamRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.PacienteRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author root
 */
@RepositoryRestController
@RestController
@RequestMapping("cesfam")
public class CesfamController {
    
    @Autowired
    private CesfamRepository cesfamRepository;
    
    @Autowired
    private PacienteRepository pacienteRepository;
    
    @PutMapping("addPaciente")
    private Cesfam addPacienteCesfam(@RequestParam("id") Long id, @RequestBody Paciente paciente) {
        Optional<Cesfam> opCes = this.cesfamRepository.findById(id);
        if(opCes.isPresent()){
            Cesfam cesfam = opCes.get();
            List<Paciente> listPac = cesfam.getPaciente();
            listPac.add(this.pacienteRepository.findById(paciente.getId()).get());
            cesfam.setPaciente(listPac);
            paciente.setCesfam(cesfam);
            this.pacienteRepository.save(paciente);
            return this.cesfamRepository.save(cesfam);
            
        }
        return null;
    }
}
