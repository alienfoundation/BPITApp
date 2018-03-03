import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
    http: any;
    baseUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/student";
    }

    getData(enrollment, pass) {
        return this.http.get(this.baseUrl+"/"+enrollment+"/"+pass)
            .map(res => res.json());
    }
}