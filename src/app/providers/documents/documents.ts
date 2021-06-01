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

    async openDocumentIonic(fileName) {
        console.log('ionic filename is:' + fileName);
        const fullPath = this.dirUrl = this.file.documentsDirectory + 'data/assets/documents/' + fileName;
        var fileMIME
        this.getMIMEextension(fileName).then(res => {
            fileMIME = res;
          });
        this.fileOpener.open(fullPath, fileMIME);
    }

    async getMIMEextension(fileName){

        var fileExt = fileName.split('.').pop();
        var fileMIME
        if(fileExt == 'pdf'){
            fileMIME = 'application/pdf'
            return fileMIME
        }
        if(fileExt == 'doc'){
            fileMIME = 'application/msword'
            return fileMIME
        }
        if(fileExt == 'doc'){
            fileMIME = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            return fileMIME
        }

    }

}
