/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.repositorys;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Especialidad;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

/**
 *
 * @author root
 */
@PreAuthorize("hasRole('ROLE_ADMIN')")
@RepositoryRestResource(path = "especialidad", collectionResourceRel = "especialidad")
public interface EspecialidadRepository extends CrudRepository<Especialidad, Long>{

    public Optional<Especialidad> findBynombre(@Param("nombre") String nombre);
    
}
