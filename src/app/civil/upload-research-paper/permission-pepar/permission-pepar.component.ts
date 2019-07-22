import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@Component({

  selector: 'app-permission-pepar',
  templateUrl: './permission-pepar.component.html',
  styleUrls: ['./permission-pepar.component.css']
})
export class PermissionPeparComponent implements OnInit {
  permissionForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.permissionForm = fb.group({
      // 'File': [''],
    });
  }

  ngOnInit() {
  }

}
