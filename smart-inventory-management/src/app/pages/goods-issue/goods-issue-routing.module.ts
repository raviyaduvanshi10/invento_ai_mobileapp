import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsIssueTaskComponent } from 'src/app/components/goods-issue-task/goods-issue-task.component';

import { GoodsIssuePage } from './goods-issue.page';

const routes: Routes = [
  {
    path: '',
    component: GoodsIssuePage
  },
  {
    path: 'goods-issue-task',
    component: GoodsIssueTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsIssuePageRoutingModule { }
