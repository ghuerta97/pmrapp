/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.services;

import cl.ufro.dci.pmrteam.backendpmrapp.models.Cesfam;

/**
 *
 * @author root
 */
public interface CesfamService {
    public Cesfam updateCesfam(Long id, Cesfam cesfam);
}
