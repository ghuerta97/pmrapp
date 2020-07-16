package cl.ufro.dci.pmrteam.backendpmrapp.models;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;

@Entity
@Data
public class HoraEspecialista {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "hora_sequence")
    private Long id;
    private Time horaConsulta;
    private String qr;
    private Date fechaConsulta;
    private boolean realizada;
    private boolean asignada;
    @Column(nullable = true)
    private String observacion;
    @CreationTimestamp
    @Column( nullable = true)
    private Timestamp ingresada;
    @OneToOne
    public Cesfam cesfam;
    @OneToOne
    public Medico profesional;
    @OneToOne
    public Paciente paciente;
    @OneToOne
    public Alerta alerta;
    @OneToOne
    public Especialidad especialidad;
}
