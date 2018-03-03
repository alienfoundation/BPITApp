import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TimetableService {
    http: any;
    baseUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/timetable";
    }

    getData(year, branch) {
        return this.http.get(this.baseUrl+"/"+year+"/"+branch)
            .map(res => res.json());
    }
}