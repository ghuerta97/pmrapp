import { Time } from '@angular/common';
import { Cesfam } from './cesfam';
import { Medico } from './medico';
import { Paciente } from './paciente';
import { Alerta } from './alerta';
import { Especialidad } from './especialidad';

export class HoraEspecialista {
    id: number;
    horaConsulta: Time;
    fechaConsulta: Date;
    ingresada: Date;
    cesfam: Cesfam;
    profesional: Medico;
    paciente: Paciente;
    alerta: Alerta;
    especialidad: Especialidad;
}