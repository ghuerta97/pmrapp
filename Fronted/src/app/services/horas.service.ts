import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HoraEspecialista } from '../models/horaespecialista';
import { environment } from 'src/environments/environment';
import { Paciente } from '../models/paciente';
import { Storage } from '@ionic/storage';
import { AuthService, HTTP_OPTIONS } from './auth.service';

const TOKEN = '';

@Injectable({
  providedIn: 'root'
})
export class HorasService implements OnInit {

  

  public token: string = '';
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //    // 'Access-Control-Allow-Origin': '*',
  //     'Content-Type':  'application/json',
  //     'Authorization': 'Bear '+localStorage.getItem('token_user')
  //   })
  // };

  constructor(
    private http: HttpClient, 
    private storage: Storage,
    private authService: AuthService) { }
   ngOnInit() {
    this.storage.get('token_user')
    .then(value=>{ 
        this.token = value;
    })
   }

  getHorasEspecilistas(search): Observable<HoraEspecialista[]> {
    return this.http.get<HoraEspecialista[]>(environment.api+'api/hora/byEspecialidad?nombre='+search, HTTP_OPTIONS);
  }

  getEspecialidades(): Observable<any>{
    return this.http.get<any>(environment.api+'api/especialidad', HTTP_OPTIONS);
  }

  asignarHoratoPaciente(hora: HoraEspecialista, paciente_rut: string) {
   // console.log(this.httpOptions)
    return this.http.post(environment.api+'api/hora/toPaciente?id='+hora.id,{'run':paciente_rut},HTTP_OPTIONS);
  }

  getHorasByPacienteRut(rut: string): Observable<HoraEspecialista[]> {
    return this.http.get<HoraEspecialista[]>(environment.api+'api/hora/byPaciente?rut='+rut, HTTP_OPTIONS);
  }

  cancelarHoraMedica(hora: HoraEspecialista ) {
    return this.http.post<boolean> (environment.api+'api/hora/cancelar',hora, HTTP_OPTIONS);
  }
}
