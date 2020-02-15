import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCesfamPage } from './info-cesfam.page';

const routes: Routes = [
  {
    path: '',
    component: InfoCesfamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCesfamPageRoutingModule {}
