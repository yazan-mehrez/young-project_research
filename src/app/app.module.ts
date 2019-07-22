import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import {AppSliderComponent} from '../elements/app-slider/app-slider.component';
import {AppSlideshowComponent} from '../elements/app-slideshow/app-slideshow.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SafePipe} from '../pipes/safeURLs.pipe';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {NgProgressModule} from '@ngx-progressbar/core';
import {CivilComponent} from './civil/civil.component';
import {HeaderComponent} from './civil/header/header.component';
import {FooterComponent} from './civil/footer/footer.component';
import {HomeComponent} from './civil/home/home.component';
import {BreadcrumbComponent} from '../elements/breadcrumb/breadcrumb.component';
import {FormsExamplesComponent} from '../elements/forms-examples/forms-examples.component';
import {CaptchaComponent} from '../elements/captcha/captcha.component';
import {AppSwiperComponent} from '../elements/app-swiper/app-swiper.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './civil/register/register.component';
import { ProfileComponent } from './civil/profile/profile.component';
import { UploadPaperComponent } from './civil/upload-research-paper/upload-paper/upload-paper.component';
import { LoginComponent } from './civil/login/login.component';
import { AboutComponent } from './civil/about/about.component';
import { MembersComponent } from './civil/members/members.component';
import {DialogModule} from '../modules/dialog.module';
import { UploadResearchPaperComponent } from './civil/upload-research-paper/upload-research-paper.component';
import { DetailsPaperComponent } from './civil/upload-research-paper/details-paper/details-paper.component';
import { PermissionPeparComponent } from './civil/upload-research-paper/permission-pepar/permission-pepar.component';
import { MatRadioModule } from '@angular/material/radio';
import {FaqSliderComponent} from '../elements/faq-slider/faq-slider.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

@NgModule({
    declarations: [
        AppComponent,
        AppSliderComponent,
        AppSlideshowComponent,
        SafePipe,
        CivilComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        BreadcrumbComponent,
        CaptchaComponent,
        AppSwiperComponent,
        FormsExamplesComponent,
        RegisterComponent,
        ProfileComponent,
        UploadPaperComponent,
        LoginComponent,
        AboutComponent,
        MembersComponent,
        FaqSliderComponent,
        UploadResearchPaperComponent,
        DetailsPaperComponent,
        PermissionPeparComponent,

    ],
    imports: [
        DialogModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        SlideshowModule,
        SwiperModule,
        MatCardModule,
        HttpClientModule,
        RouterModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        DatepickerModule.forRoot(),
        TranslateModule.forRoot(),
        NgProgressModule.withConfig({
            spinner: false,
            color: '#000'
        }),
        NgProgressHttpModule
    ],
    providers: [{
        provide: SWIPER_CONFIG,
        useValue: DEFAULT_SWIPER_CONFIG
    }],


    bootstrap: [AppComponent]
})
export class AppModule {
}
