import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContaModule } from './features/conta/conta.module';
import { LogsModule } from './features/logs/logs.module';
import { AuthGuard } from './shared/service/auth.guard';
import { SharedModule } from './shared/shared.module';
import { LocalStorageUtils } from './shared/utils/localstorage';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    LogsModule,
    ContaModule,
  ],
  providers: [LocalStorageUtils, AuthGuard],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
