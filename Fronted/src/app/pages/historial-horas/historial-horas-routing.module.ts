import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialHorasPage } from './historial-horas.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialHorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialHorasPageRoutingModule {}
