/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package cl.ufro.dci.pmrteam.backendpmrapp;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 *
 * @author ghuerta
 */
@SpringBootApplication
public class Application {
//    @GenericGenerator(
//    name = "cesfam-sequence",
//    strategy = "enhanced-sequence",
//    parameters = {
//        @Parameter(name="prefer_sequence_per_entity", value="true"),
//        @Parameter(name="optimizer", value="hilo"),
//        @Parameter(name="increment_size", value="1")})
    
    public static void main(String... args){
        SpringApplication.run(Application.class, args);
    }
}
