import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import { Zip } from '@ionic-native/zip/ngx';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

export interface Week {
    trip_name: string;
    trip_id: number;
}


@Injectable()
export class RootProvider {

    dataDirectory = '';
    api_key = 'fCzF9UKa4qo8AhitH0zTfcB5RQaHUi3Yk47nGExqpKK9kWP6Jyoe7tvrFafQ';
    tripId = '';
    api_url = 'https://ebrief.csps-efpc.net/api';
    list: any;
    tripOwner: string;
    win: any = window;

    weekUrl: string;

    constructor(private router: Router, private http: HttpClient, private nativeHTTP: HTTP, private file: File, private zip: Zip) {

     }

    getCourseList(tripOwner): Observable<Week[]> {
       this.tripOwner = tripOwner;
        const header = {
            headers: new HttpHeaders()
              .set('Authorization',  'Bearer '+this.api_key )};

        this.weekUrl = this.api_url + '/trips/'+ this.tripOwner;

        return this.http.get<Week[]>(this.weekUrl,  header);
      }

      public downloadFileAndStore(tripId) {
        //
        const filePath = this.file.documentsDirectory + 'package.zip';
        const unzipPath = this.file.documentsDirectory + 'data';
        this.tripId = tripId; 
        const updateUrl = this.api_url + '/trips/' + this.tripId + '/download?api_token=' + this.api_key;


        this.file.createDir(this.file.documentsDirectory, 'data', true).then(response => {

          console.log('Directory create'+response);

          this.nativeHTTP.downloadFile(updateUrl, {}, {}, filePath).then(response2 => {
            // prints 200
            console.log('success block...', response2);
            // unzip file
            this.zip.unzip(filePath, unzipPath,
             (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
               .then((result) => {
               if(result === 0)
               {
                 console.log('UNZIP SUCCESS');
                 this.router.navigate(['/days']);
               }
               if(result === -1) {
                 console.log('UNZIP FAILED');
               }
         });
         }).catch(err => {
             // prints 403
             console.log('error block ... ', err.status);
             // prints Permission denied
             console.log('error block ... ', err.error);
         });

        }).catch(err => {
          console.log('Directory no create'+JSON.stringify(err));
        });

     }

}
