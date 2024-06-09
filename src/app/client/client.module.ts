import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';
import { CardComponent } from '../shared/components/card/card.component';
import { SharedPageModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageModule,
    ClientPageRoutingModule
  ],
  declarations: [ClientPage],
  exports: []
})
export class ClientPageModule {}
