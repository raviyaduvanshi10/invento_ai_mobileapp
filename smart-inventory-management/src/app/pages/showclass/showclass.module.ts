import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowclassPageRoutingModule } from './showclass-routing.module';

import { ShowclassPage } from './showclass.page';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowclassPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule
  ],
  declarations: [ShowclassPage]
})
export class ShowclassPageModule {}
