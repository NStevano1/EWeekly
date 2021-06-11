import {Component} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import {DaysProvider, Day, Event} from '../../providers/days/days';
import {TripProvider, Trip} from '../../providers//trip/trip';
import { Location } from '@angular/common';

@Component({
    selector: 'page-days',
    templateUrl: 'days.html',
    styleUrls: ['days.scss']
})

export class DaysPage {

    public days: Day[];
    public trip: Trip;
    public error: any;

    constructor(private platform: Platform, private router: Router,
        private daysProvider: DaysProvider, private tripProvider: TripProvider, private location: Location) {
        this.platform.ready().then(() => {
            this.loadDays();
            this.loadTrip();
        });
    }

    async loadDays() {

        console.log('Load days');
        const days = await this.daysProvider.getDaysCustom();
        console.log(days);
        this.days = JSON.parse( String(days));
    }

    async loadTrip() {
        console.log('Load trip');
        const trip = await this.tripProvider.getTripCustom();
        console.log(trip);
        this.trip = JSON.parse( String(trip));
 
    }

    goToDayPage(id) {
        this.router.navigate(['/day', id]);
    }

    goToSyncPage() {
        this.router.navigate(['/home']);
    }

    goToDocumentsPage() {
        this.router.navigate(['/documents']);
    }

    goToContactsPage() {
        this.router.navigate(['/contacts']);
    }
      
}
