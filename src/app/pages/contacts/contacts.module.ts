import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactsPage } from './contacts';

import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsPage]
})
export class ContactsModule {}
