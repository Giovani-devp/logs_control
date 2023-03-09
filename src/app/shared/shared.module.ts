import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockLogsService } from './service/mock-logs.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  providers: [MockLogsService],
  exports: []
})
export class SharedModule { }
