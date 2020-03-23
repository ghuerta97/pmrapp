package cl.ufro.dci.pmrteam.backendpmrapp.models;

import java.sql.Timestamp;
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

@Entity
@Data
public class Paciente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "paciente_sequence")
//    @SequenceGenerator(name="paciente_generator", sequenceName = "paciente_seq", allocationSize=1000)
//    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
    private String nombres;
    private String apellidos;
    private String run;
    private String direccion;
    private boolean cronico;
    @CreationTimestamp
    @Column( nullable = true)
    private Timestamp createdAtPaciente;
    @OneToOne
    public Usuario usuario;
    @OneToOne(optional = true)
    public Cesfam cesfam;

}
