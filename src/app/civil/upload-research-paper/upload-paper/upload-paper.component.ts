import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-upload-paper',
    templateUrl: './upload-paper.component.html',
    styleUrls: ['./upload-paper.component.css']
})
export class UploadPaperComponent implements OnInit {
    collapsed = false;
    uploadPaper: FormGroup;
    @ViewChild('File') InputFile;
    UploadFile: File;
    fileName: string;

    constructor(private fb: FormBuilder) {

        this.uploadPaper = fb.group({
            'File': [''],
        });
    }

    getFile() {
        console.log(this.InputFile);
        const file = this.InputFile.nativeElement;
        if (file.files && file.files[0]) {
            this.UploadFile = file.files[0];
            if (this.UploadFile['type'] === 'application/pdf') {
                this.fileName = this.UploadFile['name'];

            } else {
                this.clearFile();

            }
        }
    }


    clearFile() {
        this.uploadPaper.reset();
        const file = this.InputFile.nativeElement;
        this.UploadFile = file.files[0];

    }

    ngOnInit() {
    }

}
