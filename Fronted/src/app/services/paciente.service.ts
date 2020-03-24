import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../models/paciente';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HTTP_OPTIONS } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  getPacienteWithRun(rut: string): Observable<Paciente>{
    return this.http.get<Paciente>(environment.api+'paciente/byRun?run='+rut, HTTP_OPTIONS);  
  }
}
