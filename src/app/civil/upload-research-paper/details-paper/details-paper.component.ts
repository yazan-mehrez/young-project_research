import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-details-paper',
  templateUrl: './details-paper.component.html',
  styleUrls: ['./details-paper.component.css']
})
export class DetailsPaperComponent implements OnInit {
  uploadPaperForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.uploadPaperForm = fb.group({
      // 'File': [''],
    });
  }


  ngOnInit() {
  }

}
