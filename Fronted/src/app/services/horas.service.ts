import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HoraEspecialista } from '../models/horaespecialista';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';


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
    private authService: AuthService) { }
   ngOnInit() {
   }

  getHorasEspecilistas(search): Observable<HoraEspecialista[]> {
    return this.http.get<HoraEspecialista[]>(environment.api+'api/hora/byEspecialidad?nombre='+search,this.authService.httpOptions);
  }

  getEspecialidades(): Observable<any>{
    return this.http.get<any>(environment.api+'api/especialidad',this.authService.httpOptions);
  }

  asignarHoratoPaciente(hora: HoraEspecialista, paciente_rut: string, comment: string) {
   // console.log(this.httpOptions)
    return this.http.post(environment.api+'api/hora/toPaciente?id='+hora.id,{'run':paciente_rut, 'comment': comment},this.authService.httpOptions);
  }

  getHorasByPacienteRut(rut: string): Observable<HoraEspecialista[]> {
    return this.http.get<HoraEspecialista[]>(environment.api+'api/hora/byPaciente?rut='+rut,this.authService.httpOptions);
  }

  cancelarHoraMedica(hora: HoraEspecialista ) {
    return this.http.post<boolean> (environment.api+'api/hora/cancelar',hora,this.authService.httpOptions);
  }
}
