import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class StudentAttService {
    http: any;
    baseUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/studentatt";
    }

    getAtt(year, branch) {
        return this.http.get(this.baseUrl)
            .map(res => res.json());
    }
}