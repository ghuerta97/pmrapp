package cl.ufro.dci.pmrteam.backendpmrapp.models;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;
@Entity
@Data
public class Administrador {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String nombres;
    @Column
    private String apellidos;
    @Column
    private String run;
    @CreationTimestamp
    @Column( nullable = false)
    private Timestamp createdAtAdmi;
    @ManyToOne
    public Cesfam cesfam;
    @OneToOne
    public Usuario usuario;


}
