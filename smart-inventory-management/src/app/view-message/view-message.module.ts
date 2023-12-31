import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewMessagePage } from './view-message.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-message-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  declarations: [ViewMessagePage]
})
export class ViewMessagePageModule { }
