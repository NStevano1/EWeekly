import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DaysPage } from './days';

import { DaysRoutingModule } from './days-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaysRoutingModule
  ],
  declarations: [DaysPage]
})
export class DaysModule {}
