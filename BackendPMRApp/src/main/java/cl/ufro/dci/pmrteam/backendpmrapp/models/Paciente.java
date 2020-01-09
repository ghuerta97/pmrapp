package cl.ufro.dci.pmrteam.backendpmrapp.models;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import org.hibernate.annotations.CascadeType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;
@Entity
@Data
public class Paciente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
//    @SequenceGenerator(name="paciente_generator", sequenceName = "paciente_seq", allocationSize=1000)
//    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
    private String nombres;
    private String apellidos;
    private String run;
    private boolean cronico;
    @CreationTimestamp
    @Column( nullable = true)
    private Timestamp createdAtPaciente;
    @OneToOne
    public Usuario usuario;
    @OneToOne(optional = true)
    public Cesfam cesfam;
    @OneToMany(fetch = FetchType.LAZY)
    public List<HoraEspecialista> historialHoras;

}
