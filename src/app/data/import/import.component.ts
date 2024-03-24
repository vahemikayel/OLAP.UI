import { Component, OnInit } from '@angular/core';
import { read, utils, writeFile } from 'xlsx';
// import * as XLSX from 'xlsx/xlsx.mjs';
import { DataModel } from '../models/data.model';
import { DataItemModel } from '../models/dataitem.model';
import { ExcelService } from '../excel.service';
import { DataService } from '../data.service';

@Component({
    selector: 'import',
    templateUrl: './import.component.html',
    styleUrls: ['./import.component.scss']
  })

export class ImportComponent implements OnInit {
    file: any;
    arrayBuffer: string | ArrayBuffer= "";
    filelist: [] = [];
    data: DataModel;
    constructor(private excelService: ExcelService, private dataService: DataService) {
        this.data = new DataModel();
    }

    ngOnInit(): void {
        // this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
        // this.createLoginForm();
    }

    csvImport(event: any) {
        const files = event.target.files;
        if (files.length)
            this.file = files[0];
        
      }

      async readFile() {
        if (!this.file) {
            alert('Please select a file.');
            return;
          }
          try {
            this.data.items = await this.excelService.readExcel(this.file);
            this.dataService.uploadData(this.data).subscribe({
                next: (res) => {
                    alert('Data has been imported.');
                  },
                  error: (error) => {
                    console.log(error);
                  }
            });
          } 
          catch (error) {
                console.error('Error reading file:', error);
          }
      }
        // const files = event.target.files;
        // if (files.length){
        //     const file = files[0];
        //     const xlsxFile = require('read-excel-file/node');
        //     xlsxFile(file)
        //             .then((rows:any) => {
        //                 const columnNames = rows.shift(); // Separate first row with column names
        //                 const objs = rows.map((row:any) => { // Map the rest of the rows into objects
        //                 const obj = {}; // Create object literal for current row
        //                 row.forEach((cell:any, i:number) => {
        //                     obj[columnNames[i]] = cell; // Use index from current cell to get column name, add current cell to new object
        //                 });
        //                 return obj;
        //                 console.log(objs); // Display the array of objects on the console
        //                 });
        //             });
        //     // const reader = new FileReader();
        //     // reader.onload = (evt: any) => {
        //     //     const wb = read(evt.target.result);
        //     //     const sheets = wb.SheetNames;
        //     //     if (sheets.length){
        //     //         const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
        //     //         var items = JSON.parse(rows);
                    
        //     //         this.data.items = rows.map(item => new DataItemModel(item['Country Code'],
        //     //                                                              item['Country Name'],
        //     //                                                              item['Indicator Name'],
        //     //                                                              item['Indicator Code'],
        //     //                                                              item['Frequency'],
        //     //                                                              item['Date'],
        //     //                                                              item['Value']));
        //     //     }
        //     // }
        //     // reader.readAsArrayBuffer(file);
        // }
    //}

    // addfile(event: any)     
    // {    
    //     this.file= event.target.files[0];     
    //     let fileReader = new FileReader();    
    //     fileReader.readAsArrayBuffer(this.file);     
    //     fileReader.onload = (e) => {    
    //         if (this.arrayBuffer != null) 
    //             this.arrayBuffer = fileReader.result as ArrayBuffer;    
    //         var data = new Uint8Array(this.arrayBuffer);    
    //         var arr = new Array();    
    //         for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
    //         var bstr = arr.join("");    
    //         var workbook = XLSX.read(bstr, {type:"binary"});    
    //         var first_sheet_name = workbook.SheetNames[0];    
    //         var worksheet = workbook.Sheets[first_sheet_name];    
    //         console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));    
    //             var arraylist = XLSX.utils.sheet_to_json(worksheet,{raw:true});     
    //                 this.filelist = [];    
    //                 console.log(this.filelist)    
            
    //     }    
    // }    
}