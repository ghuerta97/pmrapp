package cl.ufro.dci.pmrteam.backendpmrapp.models;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
@Entity
@Data
public class Cesfam {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String nombre;
    @Column
    private String descripcion;
    @Column
    private String ubicacion;
    @Column
    private ArrayList<String> telefonos;
    @CreationTimestamp
    @Column( nullable = true)
    private Timestamp createdAtCesfam;
    @OneToMany
    public List<Paciente> paciente;
    @OneToMany
    public List<Medico> medico;
    @OneToMany
    public List<Administrador> administrador2;

}
