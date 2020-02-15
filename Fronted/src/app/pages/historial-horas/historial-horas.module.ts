import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialHorasPageRoutingModule } from './historial-horas-routing.module';

import { HistorialHorasPage } from './historial-horas.page';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialHorasPageRoutingModule,
    AngularMaterialModule
  ],
  declarations: [HistorialHorasPage]
})
export class HistorialHorasPageModule {}
