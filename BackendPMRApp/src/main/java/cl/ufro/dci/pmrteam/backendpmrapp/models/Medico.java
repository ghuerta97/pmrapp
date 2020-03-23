package cl.ufro.dci.pmrteam.backendpmrapp.models;

import java.sql.Timestamp;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;

@Entity
@Data
public class Medico {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "medico_sequence")
    private Long id;
    private String nombres;
    private String apellidos;
    private String run;
    @OneToOne
    private Especialidad especialidad;
    @CreationTimestamp
    @Column( nullable = true)
    private Timestamp createdAtProfesional;
    @ManyToOne(optional = false, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    public Cesfam cesfam;
    @OneToMany
    public List<HoraEspecialista> horaEspecialista;

}
