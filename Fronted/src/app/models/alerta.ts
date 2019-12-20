import { HoraEspecialista } from './horaespecialista';

export class Alerta {
    id: number;
    fechaAlarma: Date;
    frecuencia: number;
    tipoFrecuencia: string;
    comentario: string;
    createdAtAlert: Date;
    horaEspecialista: HoraEspecialista
}