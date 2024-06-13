import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPage } from './client.page';
import { BuscarServiciosComponent } from './pages/buscar-servicios/buscar-servicios.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';

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
        component: ServiciosComponent
      },
      {
        path: 'buscar-servicios',
        component: BuscarServiciosComponent
      },
      {
        path: 'solicitudes',
        component: SolicitudesComponent
      },
      {
        path: 'cuenta',
        component: CuentaComponent
      },
      {
        path: '**',
        redirectTo: 'servicios'
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule { }
