import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RutValidator } from 'ng2-rut';
import {Storage} from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import $ from 'jquery';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  public col: string = 'col-md-offset-4';
  public rut: string = '';
  public formRut: FormGroup;
  public session: boolean = false;
  public proceso: boolean = false;
  constructor(
    fb: FormBuilder, 
    rutValidator: RutValidator, 
    private storage: Storage, 
    private router: Router,
    private loadingController: LoadingController,
    private plt: Platform) {
    this.formRut = fb.group({
      rut: ['19478971', [Validators.required, rutValidator, Validators.maxLength(10)]]
    });
   }

  ngOnInit() {
    if(this.plt.is('cordova')){
      this.storage.set('session',false);
    }
    this.storage.get('session').then((val) => {
      this.session = val;
    });
    this.isMobileMenu();
  }
  

  async onSubmit() {
    const loading = await this.loadingController.create({
      duration: 2000,
      message: 'Please wait...',
      translucent: true,
      mode: 'md',
    });

    await loading.present();
    this.proceso = true;
    setTimeout(()=> {
      this.proceso = false;
    }, 2000);
    await this.setSession();
    const {role, data} = await loading.onDidDismiss();
    
  }


  async setSession( ){
    this.storage.set('rut', this.rut);
    this.storage.set('session',true); 
    this.session = true;
  }

  isMobileMenu() {
    if ($(window).width() > 799) {
      this.col = 'col-md-offset-4';
      return;
    }
    this.col = 'col-md-offset-3';
  }
   }
