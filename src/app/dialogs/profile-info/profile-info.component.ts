import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
    profileForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ProfileInfoComponent>,
              private fb: FormBuilder,
              ) {
      this.profileForm = fb.group({

          'university':  [null, Validators.required],

      });
  }
    onNoClick(): void {
        this.dialogRef.close();
    }
  ngOnInit() {
  }

}
