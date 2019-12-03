package cl.ufro.dci.pmrteam.backendpmrapp.models;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;

@Entity
@Data
public class Alerta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private Timestamp fechaAlarma;
    @Column
    private Integer frecuencia;
    @Column
    private String comentario;
    @CreationTimestamp
    @Column( nullable = false)
    private Timestamp createdAtAlert;
    @ManyToOne
    public HoraEspecialista horaEspecialista;

}
