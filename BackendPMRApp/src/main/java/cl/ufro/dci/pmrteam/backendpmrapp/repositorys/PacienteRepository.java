/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.repositorys;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Paciente;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author ghuerta
 */
public interface PacienteRepository extends CrudRepository<Paciente, Long>{
    
}
