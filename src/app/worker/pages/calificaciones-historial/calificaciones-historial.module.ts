import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionesHistorialPageRoutingModule } from './calificaciones-historial-routing.module';

import { CalificacionesHistorialPage } from './calificaciones-historial.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageModule,
    CalificacionesHistorialPageRoutingModule
  ],
  declarations: [CalificacionesHistorialPage]
})
export class CalificacionesHistorialPageModule {}
