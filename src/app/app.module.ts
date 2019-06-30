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
import {BsDatepickerModule, BsDropdownModule, DatepickerModule} from 'ngx-bootstrap';
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
import {ReactiveFormsModule} from '@angular/forms';

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
        FormsExamplesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SlideshowModule,
        SwiperModule,
        MatCardModule,
        HttpClientModule,
        RouterModule,
        MatFormFieldModule,
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
