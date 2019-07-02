import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-upload-paper',
  templateUrl: './upload-paper.component.html',
  styleUrls: ['./upload-paper.component.css']
})
export class UploadPaperComponent implements OnInit {
  collapsed = false;
  myForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
