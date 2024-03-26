import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { DataByRowReadModel } from '../models/databyrowread.model';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { CountryModel } from '../models/country.model';
import { IndicatorModel } from '../models/indicator.model';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

@Component({
    selector: 'simpleanalize',
    templateUrl: './simpleanalize.component.html',
    styleUrls: ['./simpleanalize.component.scss'],
    standalone: true,
    imports: [
        PivotViewModule,
        RouterModule,
        MatFormFieldModule, 
        MatSelectModule,
        FormsModule
    ]
})
export class SimpleAnalizeComponent implements OnInit {
    countries: CountryModel[] = []
    selectedCountry: CountryModel = new CountryModel();
    indocators: IndicatorModel[] = [];
    selectedIndicator: IndicatorModel = new IndicatorModel();

    public pivotData: IDataSet[];
    public dataSourceSettings: IDataOptions;

    constructor(private dataService: DataService) {
        this.pivotData = [];
        this.dataSourceSettings = { };
    }

    ngOnInit(): void {
        this.dataService.getCountries().subscribe({
            next: (res) => {
                if (res && res.length > 0) {
                    res.forEach(item => {
                        this.countries.push(Object.assign(new CountryModel(), item));
                    })
                    console.log(res);
                }
              },
            error: (error) => {
                console.log(error);
              }
        });

        // this.pivotData = [
        //     { 'value': 16.358, 'indicator': 'Average CPI inflation, percent change', 'country': 'Afgh anistan', 'frequency': 'A', 'date': '2004-01-01', 'quarter': 'Q1' },
        //     { 'value': 20.539, 'indicator': 'Average CPI inflation, percent change', 'country': 'Ar menia', 'frequency': 'Q', 'date': '2018-05-01', 'quarter': 'Q2' },
        //     { 'value': 20.539, 'indicator': 'Nominal GDP in US Dollars', 'country': 'Afghanistan', 'frequency': 'Q', 'date': '2018-04-01', 'quarter': 'Q2' },
        //     { 'value': 20.758, 'indicator': 'Nominal GDP in US Dollars', 'country': 'Afghanistan', 'frequency': 'Q', 'date': '2018-07-01', 'quarter': 'Q3' },
        //     { 'value': 20.875, 'indicator': 'Nominal GDP in US Dollars', 'country': 'Armenia', 'frequency': 'Q', 'date': '2018-10-01', 'quarter': 'Q4' },
        //     { 'value': 35.663, 'indicator': 'Average CPI inflation, percent change', 'country': 'Armenia', 'frequency': 'A', 'date': '2003-01-01', 'quarter': 'Q1' },
        //     { 'value': 16.358, 'indicator': 'Average CPI inflation, percent change', 'country': 'USA', 'frequency': 'A', 'date': '2004-01-01', 'quarter': 'Q1' },
        //     { 'value': 20.539, 'indicator': 'Average CPI inflation, percent change', 'country': 'Armenia', 'frequency': 'Q', 'date': '2018-05-01', 'quarter': 'Q2' },
        //     { 'value': 20.758, 'indicator': 'Average CPI inflation, percent change', 'country': 'Afg hanistan', 'frequency': 'Q', 'date': '2018-06-01', 'quarter': 'Q3' },
        //     { 'value': 20.875, 'indicator': 'Nominal GDPd in US Dollars', 'country': 'Armenia', 'frequency': 'Q', 'date': '2018-11-01', 'quarter': 'Q4' },
        //     { 'value': 35.663, 'indicator': 'Average CPI inflation, percent change', 'country': 'Armenia', 'frequency': 'A', 'date': '2003-02-01', 'quarter': 'Q1' },
        //     { 'value': 16.358, 'indicator': 'Average CPI inflation, percent change', 'country': 'Afgha nistan', 'frequency': 'A', 'date': '2004-01-01', 'quarter': 'Q1' },
        //     { 'value': 20.539, 'indicator': 'Nominal GDP in US Dollars', 'country': 'Afghanistan', 'frequency': 'Q', 'date': '2018-04-01', 'quarter': 'Q2' },
        //     { 'value': 20.758, 'indicator': 'Nominal GDP in US Dollars', 'country': 'Afghanistan', 'frequency': 'Q', 'date': '2018-07-01', 'quarter': 'Q3' },
        //     { 'value': 20.875, 'indicator': 'Nominal GDP in US Dollars', 'country': 'Armenia', 'frequency': 'Q', 'date': '2018-10-01', 'quarter': 'Q4' },
        //     { 'value': 35.663, 'indicator': 'Average CPI inflation, percent change', 'country': 'Armenia', 'frequency': 'A', 'date': '2003-01-01', 'quarter': 'Q1' },
        //     { 'value': 16.358, 'indicator': 'Average CPI inflation, percent change', 'country': 'Afgh anistan', 'frequency': 'A', 'date': '2004-01-01', 'quarter': 'Q1' },
        //     { 'value': 20.539, 'indicator': 'Average CPI inflation, percent change', 'country': 'Armenia', 'frequency': 'Q', 'date': '2018-05-01', 'quarter': 'Q2' },
        // ];

        this.dataSourceSettings = {
            dataSource: this.pivotData,
            enableSorting: true,
            expandAll: false,
            formatSettings:[{ name: 'value', format: 'N4' } ],
            columns: [ {name:'indicator', caption: 'Indicator'}, { name: 'quarter', caption: 'Quarter' }, { name: 'date', caption: 'Date' } ],
            values: [ { name: 'value', caption: 'Value' } ],
            rows: [{ name: 'country', caption: 'Country' }, { name: 'frequency', caption: 'Frequency' }]
        };
    }

    loadData(): void {
        this.pivotData = [];

        this.dataService.getDataByRow().subscribe({
            next: (res) => {
                if (res && res.length > 0) {
                    this.pivotData = res;
                    // res.forEach(item => {
                    //     this.pivotData.push(item);
                    // })
                    console.log(res);
                }
              },
            error: (error) => {
                console.log(error);
              }
        });
    }
}