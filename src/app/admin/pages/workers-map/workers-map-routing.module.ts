import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkersMapPage } from './workers-map.page';

const routes: Routes = [
  {
    path: '',
    component: WorkersMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkersMapPageRoutingModule {}
