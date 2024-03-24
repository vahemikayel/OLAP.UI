import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, of, ReplaySubject } from 'rxjs';
import { environment } from './../../environments/environment';
import { DataModel } from './models/data.model';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
    baseUrl: string = environment.apiUrl;
    baseApiVersion: string = environment.apiVersion;
    baseUrlWithVersion = this.baseUrl + this.baseApiVersion;
    baseDataUrl = this.baseUrlWithVersion + 'data/';

    constructor(private http: HttpClient) { }

    uploadData(data: DataModel) {
        return this.http.post<DataModel>(this.baseDataUrl + 'AddData', data);
      }
  }