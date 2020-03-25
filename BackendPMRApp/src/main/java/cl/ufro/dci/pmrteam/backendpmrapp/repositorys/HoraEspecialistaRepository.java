/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.repositorys;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Especialidad;
import cl.ufro.dci.pmrteam.backendpmrapp.models.HoraEspecialista;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Paciente;
import java.sql.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author ghuerta
 */
@PreAuthorize("hasRole('ROLE_ADMIN') OR hasRole('ROLE_PACIENTE')")
@RepositoryRestResource(path = "hora", collectionResourceRel = "hours")
public interface HoraEspecialistaRepository extends CrudRepository<HoraEspecialista, Long>{
    
    List<HoraEspecialista> findAllByespecialidadAndAsignada(Especialidad especialidad, boolean asignada);
    
    List<HoraEspecialista> findAllBypacienteAndRealizada(Paciente paciente, boolean realizada);
    
    List<HoraEspecialista> findAllBypaciente(Paciente paciente);

    List<HoraEspecialista> findAllBypacienteAndFechaConsulta(Paciente pac, Date date);
}
