import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from '../../app.service';
import {fadeInOut} from '../../../animations/fadeInOut';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [fadeInOut]
})
export class HomeComponent implements OnInit {
    collapsed = false;
    myForm: FormGroup;

    itemIndex = 0;
    dataList = [
        {
            photo: 'assets/img/library.jpg',
            text: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.'
        },
        {
            photo: 'assets/img/img223.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores atque cumque dignissimos doloremque ducimus eligendi excepturi iusto, minus nemo neque nostrum quae, qui quis quod ratione rem tenetur.'
        }];

    constructor(private translateService: TranslateService,
                private _appService: AppService,
                private fb: FormBuilder) {
        this.myForm = fb.group({
            'food': [null, Validators.required],
            'comment': [null, Validators.required],
        });
    }

    next() {
        if (this.itemIndex == (this.dataList.length - 1)) {
            this.itemIndex = 0;
        } else {
            this.itemIndex += 1;
        }
    }

    prev() {
        if (this.itemIndex == 0) {
            this.itemIndex = (this.dataList.length - 1);
        } else {
            this.itemIndex -= 1;
        }
    }

    ngOnInit() {

    }
}



