/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.repositorys;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Especialidad;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 * @author root
 */
@RepositoryRestResource(path = "especialidad", collectionResourceRel = "especialidad")
public interface EspecialidadRepository extends CrudRepository<Especialidad, Long>{

    public Optional<Especialidad> findBynombre(@Param("nombre") String nombre);
    
}
