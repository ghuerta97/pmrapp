import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../models/paciente';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {HTTP} from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient, private plt: Platform, private http2: HTTP) { }

  getPacienteWithRun(rut: string): Observable<Paciente>{
    return this.http.get<Paciente>(environment.api+'paciente/byRun?run='+rut);  
  }

  getPacienteWithRunCordova(rut: string){
    return this.http2.get(environment.api+'paciente/byRun?run='+rut,{},{}) ;
  }
}
