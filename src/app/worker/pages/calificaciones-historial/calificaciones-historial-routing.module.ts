import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificacionesHistorialPage } from './calificaciones-historial.page';

const routes: Routes = [
  {
    path: '',
    component: CalificacionesHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificacionesHistorialPageRoutingModule {}
