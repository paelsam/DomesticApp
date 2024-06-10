import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerPage } from './worker.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerPage,
    children: [
      {
        path: 'solicitudes',
        loadChildren: () => import('./pages/solicitudes-list/solicitudes-list.module').then( m => m.SolicitudesListPageModule)
      },
      {
        path: 'cuenta',
        loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
      },
      {
        path: 'calificaciones',
        loadChildren: () => import('./pages/calificaciones-historial/calificaciones-historial.module').then( m => m.CalificacionesHistorialPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerPageRoutingModule {}
