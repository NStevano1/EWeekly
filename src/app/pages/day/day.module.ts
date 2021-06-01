import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DayPage } from './day';

import { DayRoutingModule } from './day-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayRoutingModule
  ],
  declarations: [DayPage]
})
export class DayModule {}
