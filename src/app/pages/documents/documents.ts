import {Component} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DocumentsProvider, Doc } from '../../providers/documents/documents';


@Component({
    selector: 'app-page-documents',
    templateUrl: 'documents.html',
    styleUrls: ['documents.scss']
})

export class DocumentsPage {

    public error: any;
    docs:Doc[];
    doc:Doc;

    constructor(private platform: Platform, private router: Router, private documentProvider: DocumentsProvider,
        private location: Location) {
        this.platform.ready().then(() => {
            this.loadDocuments();
        });
    }

    async loadDocuments() {

        console.log('Load documents');
        //const docs = await this.documentProvider.getDocumentsCustom();
        const docs = await this.documentProvider.getDocumentsCustom();
        console.log(docs);
        this.docs = docs;
        console.log('docs --')
        this.docs = JSON.parse( String(docs));
        //this.days = JSON.parse( String(days));
    }

    goBack() {
        this.location.back();
    }


    goToDaysPage() {
        this.router.navigate(['/days']);
    }

    goToContactsPage() {
        this.router.navigate(['/contacts']);
    }
      
    openDoc(fileName) {
        this.documentProvider.openDocumentIonic(fileName);
    }
}
