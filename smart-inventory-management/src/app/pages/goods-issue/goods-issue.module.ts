import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodsIssuePageRoutingModule } from './goods-issue-routing.module';

import { GoodsIssuePage } from './goods-issue.page';
import { GoodsIssueTaskComponent } from 'src/app/components/goods-issue-task/goods-issue-task.component';
import { MessageComponent } from 'src/app/message/message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodsIssuePageRoutingModule,
  ],
  declarations: [GoodsIssuePage, GoodsIssueTaskComponent, MessageComponent]
})
export class GoodsIssuePageModule { }
