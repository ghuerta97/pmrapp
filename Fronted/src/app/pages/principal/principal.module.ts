import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';
import { AngularMaterialModule } from '../../angularmaterial.module';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule,
    AngularMaterialModule
  ],
  declarations: [PrincipalPage, ToolbarComponent]
  ,
  entryComponents: [ToolbarComponent]
})
export class PrincipalPageModule {}
