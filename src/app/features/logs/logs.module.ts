import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { LogsComponent } from '../logs/logs.component';
import { FormBuscarLogsComponent } from './components/form-buscar-logs/form-buscar-logs.component';
import { LogsRoutingModule } from './logs-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    LogsComponent,
    FormBuscarLogsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    LogsRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCardModule,
    NgxPaginationModule,
    ClipboardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  providers: [MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
  ],
  exports: [LogsComponent]
})
export class LogsModule { }
