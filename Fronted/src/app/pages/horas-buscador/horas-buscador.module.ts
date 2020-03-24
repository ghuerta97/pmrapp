import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorasBuscadorPageRoutingModule } from './horas-buscador-routing.module';

import { HorasBuscadorPage } from './horas-buscador.page';
import { BuscadorComponent } from '../../components/buscador/buscador.component';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { IonicStorageModule } from '@ionic/storage';
import { DialogConfirmationComponent } from './DialogConfirmation/dialog-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorasBuscadorPageRoutingModule,
    AngularMaterialModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [
    HorasBuscadorPage, 
    BuscadorComponent, 
    DialogConfirmationComponent
  ], 
  entryComponents: [
    BuscadorComponent,
    DialogConfirmationComponent,
  ]
})
export class HorasBuscadorPageModule {}
