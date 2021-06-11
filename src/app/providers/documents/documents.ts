import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { Plugins } from '@capacitor/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';


const { CustomFileReader } = Plugins;

export interface Doc {
    fileName: string;
}

export interface Document {
    id: number;
    trip_id: number;
    document_type: string;
    name: string;
    file: string;
    sort_id: number;
    is_protected: number;
    created_at: string;
    updated_at: string;
}

@Injectable()
export class DocumentsProvider {

    data: any;
    dirUrl: string;


    constructor(private http: HttpClient, private file: File, private fileOpener: FileOpener) {
       this.data = null;
    }

    async getDocumentsCustom() {
        this.dirUrl = this.file.documentsDirectory + 'data/assets/documents'; 
        console.log(this.dirUrl);
        const result = await CustomFileReader.getDocs( {value: this.dirUrl});
        console.log(result.data);
        return result.data;

    }

    async getDocuments() {
        const result = await CustomFileReader.getFile( {value: 'data/documents.json'});
        console.log(result.data);
        return result.data;

    }

    async openDocumentIonic(document:Document) {
        console.log('ionic filename is:' + document.name);
        const fullPath = this.dirUrl = this.file.documentsDirectory + 'data/assets/' + document.file;
        var fileMIME = this.getMIMEtype(document.document_type);
        this.fileOpener.open(fullPath, fileMIME);
    }

    getMIMEtype(extn){
        let ext = extn.toLocaleLowerCase();
        let MIMETypes = {
          'pdf' : 'application/pdf',
          'docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'doc' : 'application/msword',
          'xls' : 'application/vnd.ms-excel',
          'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'ppt' : 'application/vnd.ms-powerpoint',
          'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        }
        return MIMETypes[ext];
      }

}
