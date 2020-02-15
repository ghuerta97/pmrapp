import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoCesfamPageRoutingModule } from './info-cesfam-routing.module';

import { InfoCesfamPage } from './info-cesfam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoCesfamPageRoutingModule
  ],
  declarations: [InfoCesfamPage]
})
export class InfoCesfamPageModule {}
