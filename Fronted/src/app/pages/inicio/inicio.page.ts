import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RutValidator } from 'ng2-rut';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  rut: string = '';
  digitador: '';
  formRut: FormGroup;

  constructor(fb: FormBuilder, rutValidator: RutValidator) {
    this.formRut = fb.group({
      rut: ['19478971', [Validators.required, rutValidator, Validators.maxLength(10)]],
      digitador: ['8', [Validators.required,Validators.maxLength(1)]]
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.rut);
  }

}
