import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudFormPage } from './solicitud-form.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudFormPageRoutingModule {}
