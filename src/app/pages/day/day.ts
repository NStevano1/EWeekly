import {Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {DaysProvider, Day, Event} from '../../providers/days/days';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    selector: 'app-page-day',
    templateUrl: 'day.html',
    styleUrls: ['day.scss']
})
export class DayPage implements OnInit {

    public day: any;
    id: number;
    private sub: any;

    constructor(private platform: Platform, private router: Router, private daysProvider: DaysProvider, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.loadDay(this.id);
         });
      }

    async loadDay(id) {

        console.log('Load day');
        const day = await this.daysProvider.getDayCustom(id);
        console.log(day);
        this.day = JSON.parse( String(day));
    }

    goBack() {
        this.location.back();
    }

    setEvent(id) {
        this.router.navigate(['/event', id]);

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
