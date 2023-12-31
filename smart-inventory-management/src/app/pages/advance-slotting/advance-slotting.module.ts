import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvanceSlottingPageRoutingModule } from './advance-slotting-routing.module';

import { AdvanceSlottingPage } from './advance-slotting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvanceSlottingPageRoutingModule
  ],
  declarations: [AdvanceSlottingPage]
})
export class AdvanceSlottingPageModule {}
