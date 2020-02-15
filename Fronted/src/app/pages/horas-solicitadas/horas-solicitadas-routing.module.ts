import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorasSolicitadasPage } from './horas-solicitadas.page';

const routes: Routes = [
  {
    path: '',
    component: HorasSolicitadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorasSolicitadasPageRoutingModule {}
