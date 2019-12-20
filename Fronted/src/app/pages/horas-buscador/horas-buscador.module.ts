import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorasBuscadorPageRoutingModule } from './horas-buscador-routing.module';

import { HorasBuscadorPage } from './horas-buscador.page';
import { BuscadorComponent } from '../../components/buscador/buscador.component';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorasBuscadorPageRoutingModule,
    AngularMaterialModule
  ],
  declarations: [HorasBuscadorPage, BuscadorComponent]
  , entryComponents: [
    BuscadorComponent
  ]
})
export class HorasBuscadorPageModule {}
