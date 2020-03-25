import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorasBuscadorPageRoutingModule } from './horas-buscador-routing.module';

import { HorasBuscadorPage } from './horas-buscador.page';
import { AngularMaterialModule } from 'src/app/angularmaterial.module';
import { IonicStorageModule } from '@ionic/storage';
import { DialogConfirmationComponent } from './DialogConfirmation/dialog-confirmation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorasBuscadorPageRoutingModule,
    AngularMaterialModule,
    IonicStorageModule.forRoot(),
    NgbModule
  ],
  declarations: [
    HorasBuscadorPage, 
    DialogConfirmationComponent
  ], 
  entryComponents: [
    DialogConfirmationComponent,
  ]
})
export class HorasBuscadorPageModule {}
