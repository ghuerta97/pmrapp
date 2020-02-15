import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';
import { HoraEspecialista } from '../models/horaespecialista';
import { environment } from 'src/environments/environment';
import { Especialidad } from '../models/especialidad';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  constructor(private http: HttpClient, private nativeHttp: HTTP) { }

  getHorasEspecilistas(search): Observable<HoraEspecialista[]> {
    return this.http.get<HoraEspecialista[]>(environment.api+'hora/byEspecialidad?nombre='+search);
  }

  getEspecialidades(): Observable<any>{
    return this.http.get<any>(environment.api+'especialidad');
  }

  getHoraBetweenDateStartAndEnd(id_paciente: string, start: string,end: string): Observable<HoraEspecialista[]>{
    return this.http.get<HoraEspecialista[]>(environment.api+'hora/between?paciente='+id_paciente+'&start='+start+'&end='+end);
  }
}
