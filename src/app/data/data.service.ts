import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, of, ReplaySubject } from 'rxjs';
import { environment } from './../../environments/environment';
import { DataModel } from './models/data.model';
import { DataByRowReadModel } from './models/databyrowread.model';

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

    getData(countryName?: string, countryCode?: string, indicatorName?: string, indicatorCode?: string) {
        let params = new HttpParams();
        if (countryName) {
          params = params.append('CountryName', countryName);
        }
        if (countryCode) {
          params = params.append('CountryCode', countryCode);
        }
        if (indicatorName) {
          params = params.append('IndicatorName', indicatorName);
        }
        if (indicatorCode) {
          params = params.append('IndicatorCode', indicatorCode);
        }
        return this.http.get<[]>(this.baseDataUrl + 'GetData', { params });
      }
      
      getDataByRow(countryName?: string, countryCode?: string, indicatorName?: string, indicatorCode?: string) {
        let params = new HttpParams();
        if (countryName) {
          params = params.append('CountryName', countryName);
        }
        if (countryCode) {
          params = params.append('CountryCode', countryCode);
        }
        if (indicatorName) {
          params = params.append('IndicatorName', indicatorName);
        }
        if (indicatorCode) {
          params = params.append('IndicatorCode', indicatorCode);
        }
        return this.http.get<[]>(this.baseDataUrl + 'GetDataByRow', { params });
      }

      getCountries() {
        let params = new HttpParams();
        return this.http.get<[]>(this.baseDataUrl + 'GetCountries', { params });
      }

      getIndicators() {
        let params = new HttpParams();
        return this.http.get<[]>(this.baseDataUrl + 'GetIndicators', { params });
      }
  }