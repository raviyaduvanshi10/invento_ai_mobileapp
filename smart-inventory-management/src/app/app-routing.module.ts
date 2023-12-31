import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then(m => m.ViewMessagePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./pages/object-detection/object-detection.module').then(m => m.ObjectDetectionPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryPageModule)
  },
  {
    path: 'barcode',
    loadChildren: () => import('./barcode/barcode.module').then(m => m.BarcodePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./pages/contactus/contactus.module').then(m => m.ContactusPageModule)
  },
  {
    path: 'object-detection',
    loadChildren: () => import('./pages/object-detection/object-detection.module').then(m => m.ObjectDetectionPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'objectdetection',
    loadChildren: () => import('./pages/object-detection/object-detection.module').then(m => m.ObjectDetectionPageModule)
  },
  {
    path: 'showclass',
    loadChildren: () => import('./pages/showclass/showclass.module').then(m => m.ShowclassPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'advance-slotting',
    loadChildren: () => import('./pages/advance-slotting/advance-slotting.module').then(m => m.AdvanceSlottingPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./pages/login2/login2.module').then(m => m.Login2PageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'goods-issue',
    loadChildren: () => import('./pages/goods-issue/goods-issue.module').then(m => m.GoodsIssuePageModule)
  },
  {
    path: 'goods-receive',
    loadChildren: () => import('./pages/goods-receive/goods-receive.module').then( m => m.GoodsReceivePageModule)
  },
  {
    path: 'confirm-putawaytask',
    loadChildren: () => import('./pages/confirm-putawaytask/confirm-putawaytask.module').then( m => m.ConfirmPutawaytaskPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
