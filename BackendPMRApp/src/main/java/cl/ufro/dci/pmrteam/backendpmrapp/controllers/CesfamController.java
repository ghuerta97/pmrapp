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
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
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
@RequestMapping("cesfam")
public class CesfamController {
    
    @Autowired
    private CesfamRepository cesfamRepository;
    
    @Autowired
    private PacienteRepository pacienteRepository;
    
}
