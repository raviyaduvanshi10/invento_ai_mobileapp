import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodsReceivePageRoutingModule } from './goods-receive-routing.module';

import { GoodsReceivePage } from './goods-receive.page';
import { GoodsIssueTaskComponent } from 'src/app/components/goods-issue-task/goods-issue-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodsReceivePageRoutingModule
  ],
  declarations: [GoodsReceivePage, GoodsIssueTaskComponent]
})
export class GoodsReceivePageModule {}
