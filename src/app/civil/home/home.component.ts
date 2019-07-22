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
            photo: 'assets/img/research.jpg',
            text: '”Lorem ipsum dolor sit amet,\n' +
                'consectetuer adipiscing elit, sed diam\n' +
                'nonummy nibh euismod tincidunt ut laoreet\n' +
                'dolore magna aliquam erat volutpat. Ut wisi\n' +
                'enim ad minim veniam, quis nostrud exerci\n' +
                'tation ullamcorper suscipit lobortis nisl ut\n' +
                'aliquip ex ea commodo consequat.„\n'
        },
        {
            photo: 'assets/img/img223.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores atque cumque dignissimos doloremque ducimus eligendi excepturi iusto, minus nemo neque nostrum quae, qui quis quod ratione rem tenetur.'
        }];

    faqDetails = [
        {
            Question: 'This is Test',
            Answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores atque cumque dignissimos Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores atque cumque dignissimos Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores atque cumque dignissimos Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores atque cumque dignissimos Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores atque cumque dignissimos Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores atque cumque dignissimos '
        },
        {
            Question: 'This is Test 2',
            Answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores atque cumque dignissimos Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad asperiores atque cumque dignissimos '
        }
    ];

    constructor(private translateService: TranslateService,
                private _appService: AppService,
                private fb: FormBuilder) {
        this.myForm = fb.group({
            'food': [null, Validators.required],
            'comment': [null, Validators.required],
            'phone': [null, Validators.required],
            'message': [null, Validators.required],
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



