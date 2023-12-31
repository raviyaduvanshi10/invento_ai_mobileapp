import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsReceivePage } from './goods-receive.page';

const routes: Routes = [
  {
    path: '',
    component: GoodsReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsReceivePageRoutingModule {}
