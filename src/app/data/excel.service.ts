import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  readFile(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();

      reader.onload = (e: any) => {
        const data: Uint8Array = new Uint8Array(e.target.result);
        const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });
        const sheetName: string = workbook.SheetNames[0];
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 }, );

        // Assuming the first row contains headers
        const headers: string[] = jsonData[0];
        const rows: any[] = [];

        // Start from the second row to skip headers
        for (let i = 1; i < jsonData.length; i++) {
          const row: any = {};
          for (let j = 0; j < headers.length; j++) {
            row[headers[j]] = jsonData[i][j];
          }
          rows.push(row);
        }

        resolve(rows);
      };

      reader.onerror = (error) => reject(error);

      reader.readAsArrayBuffer(file);
    });
  }

  readExcel(file: File): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const data: any = new Uint8Array(e.target.result);
        const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });
        const sheetName: string = workbook.SheetNames[0];
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        resolve(this.removeSpacesFromHeaders(jsonData));
      };
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  }

  // Function to remove spaces from headers
  private removeSpacesFromHeaders(data: any[]): any[] {
    const headers: string[] = data[0];
    const newData: any[] = [];
    for (let i = 1; i < data.length; i++) {
      const row: any = {};
      for (let j = 0; j < headers.length; j++) {
        const headerWithoutSpace: string = headers[j].replace(/\s+/g, '');
        row[headerWithoutSpace] = data[i][j];
      }
      newData.push(row);
    }
    return newData;
  }
}