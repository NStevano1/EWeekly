import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { Plugins } from '@capacitor/core';

const { CustomFileReader } = Plugins;

export interface Contact {
    id: number;
    trip_id: number;
    first_name: string;
    last_name: string;
    email: string;
    telephone: string;
    title: string;
    image: string;
    body: string;
    created_at: string;
    updated_at: string;
    name: string;
    image_url: string;
    body_html: string;
}


@Injectable()
export class ContactsProvider {

    data: any;
    contactUrl: string;

    constructor(private http: HttpClient) {
       this.data = null;
    }

    all(): Observable<Contact[]> {
        
        return this.http.get<Contact[]>('assets/data/people.json');

    }

    get(id): Observable<Contact> {
        this.contactUrl = 'assets/data/people/' + id + '.json';
        console.log('Contact ', id);
        console.log('Get ', this.contactUrl);
        return this.http.get<Contact>(this.contactUrl);
    }

    async getContactsCustom() {
        const result = await CustomFileReader.getFile( {value: 'data/people.json'});
        console.log(result.data);
        return result.data;
    }


    async getContactCustom(id) {
        const result = await CustomFileReader.getFile( {value: 'data/people/' + id +'.json'});
        console.log(result.data);
        return result.data;

    }

}
