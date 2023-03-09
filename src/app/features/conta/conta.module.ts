import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ContaRoutingModule } from './conta-routing.module';
import { LoginComponent } from '../conta/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
// import { ContaGuard } from 'src/app/shared/service/conta.guard';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ContaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatIconModule,
  ],
  // providers: [ContaGuard],
  exports: [LoginComponent]
})
export class ContaModule { }
