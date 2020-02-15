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
      },
      {
        path: 'historial-horas',
        loadChildren: () => import('../historial-horas/historial-horas.module').then( m => m.HistorialHorasPageModule)
      },
      {
        path: 'info-cesfam',
        loadChildren: () => import('../info-cesfam/info-cesfam.module').then( m => m.InfoCesfamPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
