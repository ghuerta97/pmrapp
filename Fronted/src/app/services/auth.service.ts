import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable, BehaviorSubject } from 'rxjs';

import * as jwt_decode from 'jwt-decode';
import { map } from 'rxjs/operators';

export const TOKEN_NAME: string = 'token_user';

@Injectable( {
    providedIn: 'root'
})
export class AuthService {

    public httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    private _autenticated = false;
    public get authenticated(): boolean { return this._autenticated};
    
    public get headers(): any { return this.httpOptions;}

    public currentUserSubject = new BehaviorSubject<any>(null); 

     constructor(
         private http: HttpClient
     ) {

     }

     public set authenticated(autenticated: boolean) {
      this._autenticated = autenticated;
     }

     login (username: string, password: string): Observable<any>{
        return this.http.post<any>(environment.api+'login',{'username': username, 'password': password},this.httpOptions )
        .pipe(map(data => {
          localStorage.setItem(TOKEN_NAME,data.token);
          this.httpOptions.headers = new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer '+localStorage.getItem(TOKEN_NAME)
          })
          this.currentUserSubject.next(data.username); // <-- pump the value in here

        return data;
        }));
     }

     getToken(): string {
      return localStorage.getItem(TOKEN_NAME);
    }
  
    setToken(token: string): void {
      localStorage.setItem(TOKEN_NAME, token);
    }

    getCurrentUser(): Observable<any> {
      return this.currentUserSubject.asObservable();
    }
  
    getTokenExpirationDate(token: string): Date {
      const decoded = jwt_decode(token);
  
      if (decoded.exp === undefined) return null;
  
      const date = new Date(0); 
      date.setUTCSeconds(decoded.exp);
      return date;
    }
  
    isTokenExpired(token?: string): boolean {
      if(!token) token = this.getToken();
      if(!token) return true;
  
      const date = this.getTokenExpirationDate(token);
      if(date === undefined) return false;
      return !(date.valueOf() > new Date().valueOf());
    }

    setpassword(email: string): Observable<boolean> {
      return this.http.post<boolean>(environment.api+'api/usuario/sendPassword',{email: email },this.httpOptions);
    }
}