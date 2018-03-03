import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TeacherClassService {
    http: any;
    baseUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/tclass";
    }

    getTeachData(teacher_id) {
        return this.http.get(this.baseUrl+"/"+teacher_id)
            .map(res => res.json());
    }
}