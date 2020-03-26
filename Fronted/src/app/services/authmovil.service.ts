import { Inject, Injectable } from "@angular/core";
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment';
import {  BehaviorSubject } from 'rxjs';
export const TOKEN_NAME: string = 'token_user';
import * as jwt_decode from 'jwt-decode';
@Injectable({
    providedIn :'root'
})
export class AuthMovilService {

    private _autenticated = false;
    public currentUserSubject = new BehaviorSubject<any>(null); 
    public get authenticated(): boolean { return this._autenticated};
    public set authenticated(autenticated: boolean) {
        this._autenticated = autenticated;
       }
    constructor(
        private http: HTTP
    ) {
    }


    login(username: string, password: string) : Promise<any> {
        return this.http.post(environment.api+'login',{'username': username, 'password': password},{
          'Content-Type':  'application/json',
          'Authorization': 'Bearer '+localStorage.getItem(TOKEN_NAME)
        });
    }

    getToken(): string {
        return localStorage.getItem(TOKEN_NAME);
      }
    
      setToken(token: string): void {
        localStorage.setItem(TOKEN_NAME, token);
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
}