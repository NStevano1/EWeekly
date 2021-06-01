import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { Plugins } from '@capacitor/core';

const { CustomFileReader } = Plugins;

export interface Event {
    id: number;
    day_id: number;
    contact_id?: any;
    title: string;
    type?: any;
    time_from: string;
    time_to: string;
    location_name: string;
    location_address?: any;
    location_postal?: any;
    description?: any;
    body?: any;
    is_meal: number;
    created_at: string;
    updated_at: string;
    description_html: string;
    body_html: string;
}

export interface Day {
    id: number;
    trip_id: number;
    name: string;
    date: string;
    created_at: string;
    updated_at: string;
    events: Event[];
}


@Injectable()
export class DaysProvider {

    data: any;
    dayUrl: string;
    daysUrl: string;


    constructor(private http: HttpClient, private file: File) {
       this.data = null;
    }

    all(): Observable<Day[]> {
        
        return this.http.get<Day[]>('assets/data/days.json');

    }

    async getDaysCustom() {
        const result = await CustomFileReader.getFile( {value: 'data/days.json'});
        console.log(result.data);
        return result.data;

    }

    getDays() {
        
        const path = this.file.documentsDirectory + 'data';
        console.log('IN getDays using path ', path);
        this.file.readAsText( path, 'days.json').then( result => {
          console.log('Days file: ');
          console.log(result);
          return result;
        }).catch(error => {
            console.error(error);
        });
    }


    async getDayCustom(id) {
        const result = await CustomFileReader.getFile( {value: 'data/days/' + id +'.json'});
        console.log(result.data);
        return result.data;

    }

    getDay(id): any {
        
        this.file.readAsText(this.file.documentsDirectory + 'data/days', id +'.json').then( result => {
            console.log(result);
        
            return result;
          }).catch(error => {
            console.error(error);
        });
    }


    get(id): Observable<Day> {
        
        this.dayUrl = this.file.documentsDirectory + 'NoCloud/data/days/' + id + '.json';
        console.log('Day ', id);
        console.log('Get ', this.dayUrl);
        return this.http.get<Day>(this.dayUrl);
    }

    async getEventCustom(id) {
        const result = await CustomFileReader.getFile( {value: 'data/events/' + id +'.json'});
        console.log(result.data);
        return result.data;

    }


}
