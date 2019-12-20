import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorasBuscadorPage } from './horas-buscador.page';

const routes: Routes = [
  {
    path: '',
    component: HorasBuscadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorasBuscadorPageRoutingModule {}
