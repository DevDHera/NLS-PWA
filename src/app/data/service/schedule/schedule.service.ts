import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ISchedule } from '@data/schema/schedule';

@Injectable({
    providedIn: 'root',
})
export class ScheduleService {
    baseUrl: string;
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getSchedules() {
        return this.http.get<ISchedule[]>(this.baseUrl + '/schedules');
    }

    getSchedule(id: number) {
        return this.http.get<ISchedule>(this.baseUrl + `/schedules/${id}`);
    }
}