import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesListPageRoutingModule } from './solicitudes-list-routing.module';

import { SolicitudesListPage } from './solicitudes-list.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageModule,
    SolicitudesListPageRoutingModule
  ],
  declarations: [SolicitudesListPage]
})
export class SolicitudesListPageModule {}
