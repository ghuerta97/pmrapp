import { Cesfam } from './cesfam';
import { HoraEspecialista } from './horaespecialista';

export class Medico {
    id: number;
    nombres: string;
    apellidos: string;
    run: string;
    especialidad: string;
    createdAtProfesional: Date;
    cesfam: Cesfam;
    horaEspecialista: Array<HoraEspecialista>[];
}