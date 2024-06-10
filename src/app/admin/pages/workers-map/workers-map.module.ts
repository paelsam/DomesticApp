import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkersMapPageRoutingModule } from './workers-map-routing.module';

import { WorkersMapPage } from './workers-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkersMapPageRoutingModule
  ],
  declarations: [WorkersMapPage]
})
export class WorkersMapPageModule {}
