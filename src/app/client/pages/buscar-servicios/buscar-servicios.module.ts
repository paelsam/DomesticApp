import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarServiciosPageRoutingModule } from './buscar-servicios-routing.module';

import { BuscarServiciosPage } from './buscar-servicios.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageModule,
    BuscarServiciosPageRoutingModule
  ],
  declarations: [BuscarServiciosPage]
})
export class BuscarServiciosPageModule {}
