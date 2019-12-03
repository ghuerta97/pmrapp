import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import {Ng2Rut} from 'ng2-rut';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InicioPageRoutingModule,
    AngularMaterialModule,
    Ng2Rut
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
