import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AuthMovilService } from 'src/app/services/authmovil.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-olvide-password',
  templateUrl: './olvide-password.page.html',
  styleUrls: ['./olvide-password.page.scss'],
})
export class OlvidePasswordPage implements OnInit {

  emailForm: FormGroup;
  isLoading = false;
  submitted = false;
  movil = false;
  public col: string = 'col-md-offset-4';

  constructor(private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private plataform: Platform,
    private authService: AuthService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {

    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    });

    this.isMobileMenu();
  }

  get user() { return this.emailForm.controls; }

  onSubmit() {

    if (this.emailForm.invalid) {
      return;
    } else {
      this.submitted = true;
      this.isLoading = true;
      this.loadingPresent();
      if (this.plataform.is('desktop')) {
        this.authService.setpassword(this.user.email.value)
          .pipe(finalize(() => this.loadingController.dismiss()))
          .subscribe(result => {
            if (result) {
              console.log('correo enviado');
              this.router.navigateByUrl('');
            }
          }, error => {

          })
      }
    }

  }

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

  isMobileMenu() {
    if ($(window).width() > 799) {
      this.movil = false;
      this.col = 'col-md-offset-4';
      return;
    }
    this.col = 'col-md-offset-3';
    this.movil = true;
  }

}
