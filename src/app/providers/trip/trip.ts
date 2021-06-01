import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { Plugins } from '@capacitor/core';

const { CustomFileReader } = Plugins;

export interface Day {
  id: number;
  trip_id: number;
  name: string;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface Trip {
  id: number;
  code: string;
  name: string;
  description?: any;
  secretkey: string;
  created_by_id: number;
  created_at: string;
  updated_at: string;
  update_url: string;
  days: Day[];
}


@Injectable()
export class TripProvider {

    data: any;

    constructor(public http: HttpClient, private file: File) {
        this.data = null;
    }

    get(): Observable<Trip> {

      return this.http.get<Trip>('assets/data/trip.json');

    }

    async getTripCustom() {
      const result = await CustomFileReader.getFile( {value: 'data/trip.json'});
      console.log(result.data);
      return result.data;
  }

    getTrip(): any {
      
      this.file.readAsText(this.file.documentsDirectory + '/data/', 'trip.json').then( result => {
        console.log(result);
        return result;
      });
    }

}
