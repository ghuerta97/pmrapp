/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.controllers;

import cl.ufro.dci.pmrteam.backendpmrapp.Validars.RutValidator;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Cesfam;
import cl.ufro.dci.pmrteam.backendpmrapp.models.HoraEspecialista;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Paciente;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Usuario;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.CesfamRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.PacienteRepository;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.UsuarioRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
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
    
    @GetMapping("byRun")
    public Paciente indexByRun(@RequestParam("run") String run){
        return RutValidator.validaRut(run) ? this.patientRepo.findByrun(run) : null ;
    }
    
    @GetMapping("byCesfam")
    public List<Paciente> indexByCesfam(@RequestParam("id") Long id){
        return this.patientRepo.findBycesfam(this.cesfamRepo.findById(id).get());
    }
    
    @PutMapping("byUser")
    public Paciente saveUser(@RequestParam("id") Long id, @RequestBody Usuario usuario){
        Optional<Paciente> op = this.patientRepo.findById(id);
        if(op.isPresent()) {
            this.usuarioRepo.save(usuario);
            Paciente pac = op.get();
            pac.setUsuario(usuario);
            return this.patientRepo.save(pac);
        }
        return null;
    }
    
    @PutMapping("addHoratoPaciente")
    public List<HoraEspecialista> addHora(@RequestParam("id") Long id, @RequestBody HoraEspecialista horaAsignada) {
        Optional<Paciente> opPaciente = patientRepo.findById(id);
        if (opPaciente.isPresent()) {
            Paciente pac = opPaciente.get();
            ArrayList<HoraEspecialista> listHora = (ArrayList<HoraEspecialista>)pac.getHistorialHoras();
            listHora.add(horaAsignada);
            pac.setHistorialHoras(listHora);
            return listHora;
        }
        return null;
    }
}
