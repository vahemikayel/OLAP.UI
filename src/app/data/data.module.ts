import { NgModule } from '@angular/core';
import { } from 'xlsx';
import { ImportComponent } from './import/import.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DataRoutingModule } from './data-routing.component'
import { DataModel } from './models/data.model';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        ImportComponent
      ],
      imports: [
        CommonModule,
        DataRoutingModule,
        SharedModule,
        ToastrModule.forRoot()
      ]
    })
export class DataModule { }