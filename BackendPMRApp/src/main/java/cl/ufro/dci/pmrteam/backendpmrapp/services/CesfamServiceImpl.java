/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.services;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Cesfam;
import cl.ufro.dci.pmrteam.backendpmrapp.repositorys.CesfamRepository;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author root
 */
@Service
public class CesfamServiceImpl implements CesfamService {
    @Autowired
    private CesfamRepository cesfamRepo;

    @Override
    public Cesfam updateCesfam(Long id, Cesfam cesfam) {
        System.out.println("Updated ");
        if(cesfamRepo.findById(id).isPresent()){
            Cesfam cesfamExisting = this.cesfamRepo.findById(id).get();
            cesfamExisting.setAdministrador2(cesfam.getAdministrador2());
            cesfamExisting.setDescripcion(cesfam.getDescripcion());
            cesfamExisting.setMedico(cesfam.getMedico());
            cesfamExisting.setPaciente(cesfam.getPaciente());
            System.out.println(Arrays.asList(cesfam.getPaciente()));
            cesfamExisting.setTelefonos(cesfam.getTelefonos());
            cesfamExisting.setNombre(cesfam.getNombre());
            cesfamExisting.setUbicacion(cesfam.getUbicacion());
            Cesfam updatedcesfam = this.cesfamRepo.save(cesfamExisting);
            return updatedcesfam;
        } else {
            return null;
        }
    }
    
}
