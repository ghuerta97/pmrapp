import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { LoadingController, Platform } from '@ionic/angular';
import $ from 'jquery';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { finalize } from 'rxjs/operators';
import { AuthMovilService } from 'src/app/services/authmovil.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public col: string = 'col-md-offset-4';
  public rut: string;
  public password: string;
  loginForm: FormGroup;
  submitted: boolean = false;
  mask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /[0-9|k]/]
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loadingController: LoadingController,
    private plataform: Platform,
    private authMovilService: AuthMovilService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      rut: ['', [Validators.required, Validators.maxLength(12)]],
      password: ['', Validators.required]
    });
    this.isMobileMenu();
  }
  // convenience getter for easy access to form fields
  get user() { return this.loginForm.controls; }

  async loadingPresent() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Cargando ...',
      spinner: 'circles'
    }).then(a => {
      a.present().then(() => {
        console.log('loading presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort laoding'));
        }
      });
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.submitted = true;
      this.isLoading = true;
      this.loadingPresent();
      if (this.plataform.is('desktop')) {
        this.authService.login(this.user.rut.value, this.user.password.value)
          .pipe(finalize(() => this.loadingController.dismiss({ message: 'Listo', spinner: 'ok' })))
          .subscribe(response => {
            if (response.token) {
              this.authService.authenticated = true;
              this.router.navigateByUrl('principal');
            }
            localStorage.setItem('token_user', response.token);
          }, error => {
            console.error(error);
          });
      } else if (this.plataform.is('android')) {
        this.authMovilService.login(this.user.rut.value, this.user.password.value)
          .then(data => {
            if (data.data) {
              this.authMovilService.authenticated = true;
              this.authMovilService.currentUserSubject.next(data.data.username);
              this.router.navigateByUrl('principal')
            }
            localStorage.setItem('token_user', data.data.token);
          }, error => {
            console.error(error);
          })
      }

    }
  }

  isMobileMenu() {
    if ($(window).width() > 799) {
      this.col = 'col-md-offset-4';
      return;
    }
    this.col = 'col-md-offset-3';
  }

}
