import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudFormPageRoutingModule } from './solicitud-form-routing.module';

import { SolicitudFormPage } from './solicitud-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudFormPageRoutingModule
  ],
  declarations: [SolicitudFormPage]
})
export class SolicitudFormPageModule {}
