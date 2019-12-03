/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.controllers;

import cl.ufro.dci.pmrteam.backendpmrapp.Validars.RutValidator;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Paciente;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.GetMapping;
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
    
    @GetMapping("byRun")
    public Paciente indexByRun(@RequestParam("run") String run){
        return RutValidator.validaRut(run) ? this.patientRepo.findByrun(run) : null ;
    }
}
