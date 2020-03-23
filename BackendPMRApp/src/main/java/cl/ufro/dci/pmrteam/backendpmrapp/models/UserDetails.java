/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp.models;

/**
 *
 * @author Gustavo Huerta
 */
public class UserDetails {
    
    private String username;
    private String token;
    private String password;

    public UserDetails(String username, String token) {
        this.username = username;
        this.token = token;
    }

    public UserDetails() {
    }
    
    

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    
}
