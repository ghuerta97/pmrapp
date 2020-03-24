import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage,
    children: [
      {
        path: 'buscador',
        loadChildren: () => import('../horas-buscador/horas-buscador.module').then( m => m.HorasBuscadorPageModule)
      },
      {
        path: 'horas-solicitadas',
        loadChildren: () => import('../horas-solicitadas/horas-solicitadas.module').then(m => m.HorasSolicitadasPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
