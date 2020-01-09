import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';
import { HoraEspecialista } from '../models/horaespecialista';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  constructor(private http: HttpClient, private nativeHttp: HTTP) { }

  getHorasEspecilistas(search): Observable<HoraEspecialista[]> {
    return this.http.get<HoraEspecialista[]>(environment.api+'hora/byEspecialidad?nombre='+search);
  }
}
