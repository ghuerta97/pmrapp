import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorasSolicitadasPageRoutingModule } from './horas-solicitadas-routing.module';

import { HorasSolicitadasPage, DialogCancelar } from './horas-solicitadas.page';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { IonicStorageModule } from '@ionic/storage';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorasSolicitadasPageRoutingModule,
    AngularMaterialModule,
    IonicStorageModule.forRoot(),
    InfiniteScrollModule
  ],
  declarations: [
    HorasSolicitadasPage,
    DialogCancelar
  ],
  entryComponents: [
    DialogCancelar
  ]
})
export class HorasSolicitadasPageModule {}
