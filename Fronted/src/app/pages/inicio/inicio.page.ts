import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RutValidator } from 'ng2-rut';
import { Storage } from '@ionic/storage';
import { LoadingController, Platform } from '@ionic/angular';
import $ from 'jquery';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, OnChanges {
  
  public col: string = 'col-md-offset-4';
  public rut: string ;
  public formRut: FormGroup;
  public session: boolean = false;
  public proceso: boolean = false;
  public paciente: Paciente;

  mask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.' , /\d/, /\d/, /\d/, '-',  /[0-9|k]/ ]
  constructor(
    private fb: FormBuilder,
    private rutValidator: RutValidator,
    private storage: Storage,
    private loadingController: LoadingController,
    private plt: Platform,
    private pacienteService: PacienteService
  ) {
    this.formRut = this.fb.group({
      rut: ['', [Validators.required, this.rutValidator, Validators.maxLength(10)]]
    });
    this.storage.get('rut').then((val) => {
      this.rut = ''+val;
      this.plt.is("cordova") ? this.getPersonCordova() : this.getPerson();
    })
  }

  ngOnInit() {
    this.storage.get('session').then((val) => {
      this.session = val;
    });
    this.isMobileMenu();
  }
  ngOnChanges(changes: SimpleChanges): void {}
  onSubmit(inputRut) {
    this.rut = inputRut.value;
    this.plt.is("cordova") ? this.getPersonCordova() : this.getPerson();
  }
  async setSession() {
    this.storage.set('rut', this.rut);
    this.storage.set('session', true);
    this.session = true;
  }

  isMobileMenu() {
    if ($(window).width() > 799) {
      this.col = 'col-md-offset-4';
      return;
    }
    this.col = 'col-md-offset-3';
  }

  getPersonCordova(){
    this.pacienteService.getPacienteWithRunCordova(this.rut).then((response) => {
    })
  }

  getPerson() {
    this.pacienteService.getPacienteWithRun(this.rut).subscribe( async response => {
      if (response) {
        this.paciente = response;
        const loading = await this.loadingController.create({
          duration: 2000,
          message: 'Please wait...',
          translucent: true,
          mode: 'md',
        });

        await loading.present();
        this.proceso = true;
        setTimeout(() => {
          this.proceso = false;
        }, 2000);
        await this.setSession();
      }
    }, error => {
      console.log(error);
    }); 
   }
}
