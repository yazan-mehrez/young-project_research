import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('fadeInOut', [
            state('void', style({
                opacity: 0
            })),
            transition('void => *', animate(1000)),
        ]),
    ]
})
export class HomeComponent implements OnInit {
    collapsed = false;

    constructor(private translateService: TranslateService, private _appService: AppService) {
    }

    ngOnInit() {

    }
}



