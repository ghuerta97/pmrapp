package cl.ufro.dci.pmrteam.backendpmrapp.models;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;
@Entity
@Data
public class Paciente implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombres;
    private String apellidos;
    private String run;
    private boolean cronico;
    @CreationTimestamp
    @Column( nullable = false)
    private Timestamp createdAtPaciente;
    @OneToOne
    public Usuario usuario;
    @OneToOne(optional = false)
    public Cesfam cesfam;
}
