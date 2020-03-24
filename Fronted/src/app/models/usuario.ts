import { Rol } from './rol';

export class Usuario {
    id: number;
    username: string;
    email: string;
    password: string;
    rol: Rol;
    createdAtUser: Date;
    token ?: string;
}