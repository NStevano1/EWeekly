import {Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {DaysProvider, Day, Event} from '../../providers/days/days';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-event',
    templateUrl: 'event.html',
    styleUrls: ['event.scss']
})
export class EventPage implements OnInit {

    public event: any;
    id: number;
    private sub: any;

    constructor(private platform: Platform, private daysProvider: DaysProvider, private router: Router, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.loadDay(this.id);
            // In a real app: dispatch action to load the details here.
         });
      }

    async loadDay(id) {
//        this.daysProvider.get(id).subscribe( ( data: Day ) => this.day = data); //console.log(data));

        console.log('Load event');
        const event = await this.daysProvider.getEventCustom(id);
        console.log(event);
        this.event = JSON.parse( String(event));
    }

    goBack() {
        this.location.back();
    }

    showContacts(){
        this.router.navigate(['/contacts']);
    }

    openDocs(){
        this.router.navigate(['/documents']);
    }
}
