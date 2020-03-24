import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthMovilService } from '../services/authmovil.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private authMovilService: AuthMovilService,
    private plataform : Platform
  ) {

  }

  canActivate(): boolean  {
    if(this.plataform.is('desktop')){
      if (!this.authService.isTokenExpired()) {
        return true;
      }
    } else if(this.plataform.is('android')){
      if(!this.authMovilService.isTokenExpired()) {
        return true;
      }
    }
    

    this.router.navigate(['/']);
    return false;
  }
  
}
