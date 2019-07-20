import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {TranslateModule} from '@ngx-translate/core';
import {ProfileInfoComponent} from '../app/dialogs/profile-info/profile-info.component';

@NgModule({
    declarations: [ProfileInfoComponent],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        TranslateModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,

        MatSelectModule,
        ReactiveFormsModule,

    ],
    entryComponents: [
        ProfileInfoComponent
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        BrowserAnimationsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule {
}
