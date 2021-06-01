import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DocumentsPage } from './documents';

import { DocumentsRoutingModule } from './documents-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsRoutingModule
  ],
  declarations: [DocumentsPage]
})
export class DocumentsModule {}
