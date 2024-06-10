import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesListPage } from './solicitudes-list.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesListPageRoutingModule {}
