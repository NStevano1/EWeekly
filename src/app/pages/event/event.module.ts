import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EventPage } from './event';

import { EventRoutingModule } from './event-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventRoutingModule
  ],
  declarations: [EventPage]
})
export class EventModule {}
