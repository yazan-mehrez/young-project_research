import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../classes/user';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private api: ApiService) {
    }

    registerService(data: User): Observable<Object> {
        return this.api.registerPage('register'  , data);
    }

    uploadImageService(data: FormData): Observable<Object> {
        return this.api.uploadImagePage('add_paper'  , data);
    }

}

