/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.repositorys;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Especialidad;
import cl.ufro.dci.pmrteam.backendpmrapp.models.Medico;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

/**
 *
 * @author ghuerta
 */
@PreAuthorize("hasRole('ROLE_ADMIN')")
@RepositoryRestResource(path = "medico", collectionResourceRel = "medics")
public interface MedicoRepository extends CrudRepository<Medico, Long>{
    List<Medico> findAllByespecialidad(Especialidad especialidad);
}
