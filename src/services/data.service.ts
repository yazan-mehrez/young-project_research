import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private api: ApiService) {
    }

    // getMainSliderService(): Observable<Object> {
    //     return this.api.getMainSlider('mainslideshow',
    //         environment.API_Generic_Content.ServiceName,
    //         environment.API_Generic_Content.GetGenericContentByUniqueName);
    // }

}

