import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})


export class ProfileInfoComponent implements OnInit {

    profileForm: FormGroup;
    university = new FormControl('', [Validators.required]);
    selectFormControl = new FormControl('', Validators.required);
    public  animals  = [
        {name: 'Dog', sound: 'Woof!'},
        {name: 'Cat', sound: 'Meow!'},
        {name: 'Cow', sound: 'Moo!'},
        {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];
  constructor(private fb: FormBuilder,) {
      this.profileForm = fb.group({

          'university':  [null, Validators.required],

      });
  }
    onNoClick(): void {
        // this.dialogRef.close();
    }
  ngOnInit() {
  }

}
