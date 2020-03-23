/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.repositorys;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Administrador;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

/**
 *
 * @author ghuerta
 */
@PreAuthorize("hasRole('ROLE_ADMIN')")
@RepositoryRestResource(path = "admin", collectionResourceRel = "admins")
public interface AdministradorRepository extends CrudRepository<Administrador, Long>{
    
}
