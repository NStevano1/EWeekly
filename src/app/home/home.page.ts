import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import {RootProvider, Week} from '../providers/root/root';
import { Location } from '@angular/common';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public error: any;
  public CourseList: any;
  public lists: Week[];
  public isVisible: boolean;

  dataDirectory: string = '';
  trip_id: string = '1';
  trip_owner: string = '';

  constructor(private rootProvider: RootProvider, private file: File, private location: Location, private loadingController: LoadingController) {

      if( this.file.checkDir(file.documentsDirectory, 'data') ){
          this.isVisible = true;
      } else{
          this.isVisible = false; 
      }

  }

  async syncData() {

    let loader = this.loadingController.create({
      message: "Attempting to sync data... if the application does not refresh after this message disappears, there may have been a network issue",
      duration: 2000
    });
    (await loader).present()

    this.rootProvider.downloadFileAndStore(this.trip_id);

  }

  setDataDirectory(value) {
    this.dataDirectory = value;
  }

  getDataDirectory() {
    return this.dataDirectory;
  }

  setTripId(value) {
    localStorage.setItem('trip_id', value);
    this.trip_id = value;
  }

  getTripId() {
    return this.trip_id;
  }
  setTripOwner(value) {
    localStorage.setItem('trip_owner', value);
    this.trip_owner = value;
  }

  getTripOwner() {
    return this.trip_owner;
  }

  tripSelected(event) {
    const tripId = event.detail.value;
    console.log('Trip ID is ', tripId);
    this.trip_id = tripId.toString();;
    localStorage.setItem('trip_id', this.trip_id);

  }

getCourseList() {

  console.log('Trip owner: '+this.trip_owner);
  this.rootProvider.getCourseList(this.trip_owner).subscribe( ( data: Week[] ) => 
  {
    this.lists = data;
    console.log('Week data', this.lists); 
  },
  error => this.error = error
  );
}

goBack() {
  this.location.back();
}

}
