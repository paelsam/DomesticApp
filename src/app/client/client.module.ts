import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';
import { SharedPageModule } from '../shared/shared.module';
import { BuscarServiciosComponent } from './pages/buscar-servicios/buscar-servicios.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageModule,
    ClientPageRoutingModule
  ],
  declarations: [
    ClientPage,
    BuscarServiciosComponent,
    CuentaComponent,
    ServiciosComponent,
    SolicitudesComponent
  ]
})
export class ClientPageModule {}
