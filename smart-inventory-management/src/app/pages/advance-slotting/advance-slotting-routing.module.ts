import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvanceSlottingPage } from './advance-slotting.page';

const routes: Routes = [
  {
    path: '',
    component: AdvanceSlottingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvanceSlottingPageRoutingModule {}
