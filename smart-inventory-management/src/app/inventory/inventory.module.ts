import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventoryPageRoutingModule } from './inventory-routing.module';

import { InventoryPage } from './inventory.page';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponentModule } from '../message/message.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventoryPageRoutingModule,
    ReactiveFormsModule,
    MessageComponentModule
  ],
  declarations: [InventoryPage]
})
export class InventoryPageModule {}
