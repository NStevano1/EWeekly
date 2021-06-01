import {Component} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import {ContactsProvider, Contact} from '../../providers/contacts/contacts';
import { Location } from '@angular/common';


@Component({
    selector: 'app-page-contacts',
    templateUrl: 'contacts.html',
    styleUrls: ['contacts.scss']
})

export class ContactsPage {

    public contacts: Contact[];
    public error: any;

    constructor(private platform: Platform, private router: Router,
        private contactsProvider: ContactsProvider, private location: Location) {
        this.platform.ready().then(() => {
            this.loadContacts();
        });
    }

    async loadContacts() {
        
        console.log('Load contacts');
        const contacts = await this.contactsProvider.getContactsCustom();
        console.log(contacts);
        this.contacts = JSON.parse( String(contacts));
        
    }

    goToContactPage(id) {
        this.router.navigate(['/contact', id]);
    }

    goBack() {
        this.location.back();
    }


    goToDocumentsPage() {
        this.router.navigate(['/documents']);
    }

    goToDaysPage() {
        this.router.navigate(['/days']);
    }
      

}
