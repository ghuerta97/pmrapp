/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.repositorys;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Especialidad;
import cl.ufro.dci.pmrteam.backendpmrapp.models.HoraEspecialista;
import java.sql.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author ghuerta
 */
@RepositoryRestResource(path = "hora", collectionResourceRel = "hours")
public interface HoraEspecialistaRepository extends CrudRepository<HoraEspecialista, Long>{
    
    List<HoraEspecialista> findAllByespecialidad(Especialidad especialidad);
    
    @Query(value = "SELECT * FROM hora_especialista WHERE hora_especialista.paciente_id = :pacienteid AND hora_especialista.fecha_consulta BETWEEN :start AND :end", nativeQuery = true)
    List<HoraEspecialista> findBypacienteAndfechaConsultaBetween(@Param("pacienteid") Long id, @Param("start") Date start, @Param("end") Date end);
    
    List<HoraEspecialista> findByfechaConsultaBetween(Date start, Date end);
}
