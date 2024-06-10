import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'mapa',
        loadChildren: () => import('./pages/workers-map/workers-map.module').then(m => m.WorkersMapPageModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosPageModule)
      },
      {
        path: 'solicitudes',
        loadChildren: () => import('./pages/solicitudes/solicitudes.module').then(m => m.SolicitudesPageModule)
      },
      {
        path: 'cuenta',
        loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule { }
