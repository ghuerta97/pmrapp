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
public class HoraEspecialista {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "hora_sequence")
    private Long id;
    private Time horaConsulta;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Time getHoraConsulta() {
        return horaConsulta;
    }

    public void setHoraConsulta(Time horaConsulta) {
        this.horaConsulta = horaConsulta;
    }

    public Date getFechaConsulta() {
        return fechaConsulta;
    }

    public void setFechaConsulta(Date fechaConsulta) {
        this.fechaConsulta = fechaConsulta;
    }

    public boolean isRealizada() {
        return realizada;
    }

    public void setRealizada(boolean realizada) {
        this.realizada = realizada;
    }

    public boolean isAsignada() {
        return asignada;
    }

    public void setAsignada(boolean asignada) {
        this.asignada = asignada;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public Timestamp getIngresada() {
        return ingresada;
    }

    public void setIngresada(Timestamp ingresada) {
        this.ingresada = ingresada;
    }

    public Cesfam getCesfam() {
        return cesfam;
    }

    public void setCesfam(Cesfam cesfam) {
        this.cesfam = cesfam;
    }

    public Medico getProfesional() {
        return profesional;
    }

    public void setProfesional(Medico profesional) {
        this.profesional = profesional;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    public Alerta getAlerta() {
        return alerta;
    }

    public void setAlerta(Alerta alerta) {
        this.alerta = alerta;
    }

    public Especialidad getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(Especialidad especialidad) {
        this.especialidad = especialidad;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 53 * hash + Objects.hashCode(this.horaConsulta.getTime());
        hash = 53 * hash + Objects.hashCode(this.fechaConsulta.getTime());
        hash = 53 * hash + Objects.hashCode(this.profesional.getRun());
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final HoraEspecialista other = (HoraEspecialista) obj;
        if (!Objects.equals(this.horaConsulta.getTime(), other.horaConsulta.getTime())) {
            return false;
        }
        if (!Objects.equals(this.fechaConsulta.getTime(), other.fechaConsulta.getTime())) {
            return false;
        }
        if (!Objects.equals(this.profesional.getRun(), other.profesional.getRun())) {
            return false;
        }
        return true;
    }

    

    @Override
    public String toString() {
        return "HoraEspecialista{" + "id=" + id + ", horaConsulta=" + horaConsulta + ", fechaConsulta=" + fechaConsulta + ", realizada=" + realizada + ", asignada=" + asignada + ", observacion=" + observacion + ", ingresada=" + ingresada + ", cesfam=" + cesfam + ", profesional=" + profesional + ", paciente=" + paciente + ", alerta=" + alerta + ", especialidad=" + especialidad + '}';
    }
    
    

}
