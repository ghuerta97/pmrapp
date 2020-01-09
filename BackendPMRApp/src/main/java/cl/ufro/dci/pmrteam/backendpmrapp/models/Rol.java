/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.models;

/**
 *
 * @author root
 */
public enum Rol {
    ROLE_ADMIN, ROLE_PACIENTE;

  public String getAuthority() {
    return name();
  }
}
