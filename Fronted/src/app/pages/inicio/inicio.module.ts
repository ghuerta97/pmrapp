import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import {Ng2Rut} from 'ng2-rut';
import {IonicStorageModule} from '@ionic/storage';

import { InicioPage } from './inicio.page';
import { LoginComponent } from 'src/app/components/login/login.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InicioPageRoutingModule,
    AngularMaterialModule,
    Ng2Rut,
    IonicStorageModule.forRoot()
  ],
  declarations: [InicioPage, LoginComponent]
})
export class InicioPageModule {}
