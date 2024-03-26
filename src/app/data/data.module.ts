import { NgModule } from '@angular/core';
import { } from 'xlsx';
import { ImportComponent } from './import/import.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DataRoutingModule } from './data-routing.component'
import { DataModel } from './models/data.model';
import { ToastrModule } from 'ngx-toastr';
import { SimpleAnalizeComponent } from './simpleanalize/simpleanalize.component'

@NgModule({
    declarations: [
        ImportComponent
      ],
      imports: [
        CommonModule,
        DataRoutingModule,
        SharedModule,
        ToastrModule.forRoot(),
        SimpleAnalizeComponent
      ]
    })
export class DataModule { }