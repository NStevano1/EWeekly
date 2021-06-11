import {Component} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DocumentsProvider, Doc, Document } from '../../providers/documents/documents';


@Component({
    selector: 'page-documents',
    templateUrl: 'documents.html',
    styleUrls: ['documents.scss']
})

export class DocumentsPage {

    public error: any;
    docs:Doc[];
    doc:Doc;
    documents:Document[];
    public keys: String[];


    constructor(private platform: Platform, private router: Router, private documentProvider: DocumentsProvider,
        private location: Location) {
        this.platform.ready().then(() => {
            this.loadDocuments();
            
        });
    }

    async loadDocuments() {

        console.log('Load documents');
        //const docs = await this.documentProvider.getDocumentsCustom();
        const docs = await this.documentProvider.getDocuments();
        console.log(docs);
        this.documents = docs;
        console.log('docs --')
        this.documents = JSON.parse( String(docs));
        this.keys = Object.keys(this.documents);
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
      
    openDoc(document:Document) {
        console.log(document);
        this.documentProvider.openDocumentIonic(document);
    }
}
