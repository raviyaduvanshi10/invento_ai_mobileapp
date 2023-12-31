import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmPutawaytaskPage } from './confirm-putawaytask.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmPutawaytaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmPutawaytaskPageRoutingModule {}
