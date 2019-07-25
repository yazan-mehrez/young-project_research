import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public collapsed = false;
    isMyPaper = true;
    constructor() {
    }


    showMyPapers() {
        this.isMyPaper = true;

        // let myDiv = document.getElementsByClassName('line-paper');
        // // myDiv.style.border = '0px solid #FDD97A';
        // myDiv.style.color = 'orange';
    }

    shoBookmarks() {

        this.isMyPaper = false;

    }

    ngOnInit() {
    }

}
