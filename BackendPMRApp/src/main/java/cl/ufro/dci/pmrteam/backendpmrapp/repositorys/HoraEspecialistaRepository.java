/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.repositorys;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Especialidad;
import cl.ufro.dci.pmrteam.backendpmrapp.models.HoraEspecialista;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 * @author ghuerta
 */
@RepositoryRestResource(path = "hora", collectionResourceRel = "hours")
public interface HoraEspecialistaRepository extends CrudRepository<HoraEspecialista, Long>{
    
    List<HoraEspecialista> findAllByespecialidad(Especialidad especialidad);
}
