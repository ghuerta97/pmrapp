import { Paciente } from './paciente';
import { Medico } from './medico';

export interface Cesfam {
    id: number;
    nombre: string;
    descripcion: string;
    ubicacion: string;
    telefonos: string[];
    createdAtCesfam: Date;
    paciente: Array<Paciente>[];
    medico: Array<Medico>[];
}