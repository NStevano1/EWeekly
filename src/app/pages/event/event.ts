import {Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {DaysProvider, Day, Event} from '../../providers/days/days';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DocumentsProvider, Doc, Document } from '../../providers/documents/documents';

@Component({
    selector: 'app-page-event',
    templateUrl: 'event.html',
    styleUrls: ['event.scss']
})
export class EventPage implements OnInit {

    public event: any;
    id: number;
    private sub: any;

    constructor(private platform: Platform, private daysProvider: DaysProvider, private router: Router, private route: ActivatedRoute, private location: Location, private documentProvider: DocumentsProvider) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.loadEvent(this.id);
         });
      }

    async loadEvent(id) {
        console.log('Load event');
        const event = await this.daysProvider.getEventCustom(id);
        console.log(event);
        this.event = JSON.parse( String(event));
    }

    goBack() {
        this.location.back();
    }

    showContacts(id){
        this.router.navigate(['/contact/id']);
    }

    openDoc(document:Document){
        this.documentProvider.openDocumentIonic(document);
    }

    goToDaysPage(){
        this.router.navigate(['/days']);
    }
    
    goToDocumentsPage() {
        this.router.navigate(['/documents']);
    }

    goToContactsPage() {
        this.router.navigate(['/contacts']);
    }
}
