import {Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {ContactsProvider, Contact} from '../../providers/contacts/contacts';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';

@Component({
    selector: 'app-page-contact',
    templateUrl: 'contact.html',
    styleUrls: ['contact.scss']
})
export class ContactPage implements OnInit {

    public contact: any;
    id: number;
    private sub: any;
    public imagePath:string;

    constructor(private platform: Platform, private contactsProvider: ContactsProvider, private router: Router, private route: ActivatedRoute, private location: Location, private file: File) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.loadContact(this.id);
         });
      }

      async loadContact(id) {
                console.log('Load contact');
                const contact = await this.contactsProvider.getContactCustom(id);
                console.log(contact);
                this.contact = JSON.parse( String(contact));
                this.imagePath = this.file.documentsDirectory + 'data/assets/' + this.contact.image;
            }
        
            goBack() {
                this.location.back();
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
