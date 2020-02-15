import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorasSolicitadasPageRoutingModule } from './horas-solicitadas-routing.module';

import { HorasSolicitadasPage } from './horas-solicitadas.page';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorasSolicitadasPageRoutingModule,
    AngularMaterialModule
  ],
  declarations: [HorasSolicitadasPage]
})
export class HorasSolicitadasPageModule {}
