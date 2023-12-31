import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectDetectionPageRoutingModule } from './object-detection-routing.module';

import { ObjectDetectionPage } from './object-detection.page';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ObjectDetectionPageRoutingModule,
    MatSlideToggleModule,
    FlexLayoutModule
  ],
  declarations: [ObjectDetectionPage]
})
export class ObjectDetectionPageModule { }
