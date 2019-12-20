import { Usuario } from './usuario';
import { Cesfam } from './cesfam';

export interface Paciente {
    id: number;
    nombres: string;
    apellidos: string;
    run: string;
    cronico: boolean;
    createdAtPaciente: Date;
    usuario: Usuario;
    cesfam: Cesfam;

}