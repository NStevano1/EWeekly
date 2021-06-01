import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import { Zip } from '@ionic-native/zip/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import {DaysProvider} from './providers/days/days';
import {TripProvider} from './providers//trip/trip';
import {RootProvider} from './providers/root/root';
import {ContactsProvider} from './providers/contacts/contacts';
import {DocumentsProvider} from './providers/documents/documents';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, File, HTTP, Zip,
    RootProvider, DaysProvider, TripProvider, ContactsProvider, DocumentsProvider, FileOpener],
  bootstrap: [AppComponent],
})
export class AppModule {}
