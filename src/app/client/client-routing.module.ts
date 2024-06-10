import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'servicios',
    pathMatch: 'full'

  },
  {
    path: '',
    component: ClientPage,
    children: [
      {
        path: 'servicios',
        loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosPageModule)
      },
      {
        path: 'buscar-servicios',
        loadChildren: () => import('./pages/buscar-servicios/buscar-servicios.module').then(m => m.BuscarServiciosPageModule)
      },
      {
        path: 'solicitudes',
        loadChildren: () => import('./pages/solicitudes/solicitudes.module').then(m => m.SolicitudesPageModule),
        children: [
          {
            path: 'solicitud-form',
            loadChildren: () => import('./pages/solicitud-form/solicitud-form.module').then( m => m.SolicitudFormPageModule)
          }
        ]
      },
      {
        path: 'cuenta',
        loadChildren: () => import('./pages/cuenta/cuenta.module').then(m => m.CuentaPageModule)
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule { }
