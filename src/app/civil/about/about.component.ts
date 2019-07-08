import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    collapsed = false;
    myForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
    }

}
