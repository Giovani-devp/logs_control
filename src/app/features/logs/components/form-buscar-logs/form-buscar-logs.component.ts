import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MockLogsService } from 'src/app/shared/service/mock-logs.service';

@Component({
  selector: 'app-form-buscar-logs',
  templateUrl: './form-buscar-logs.component.html',
  styleUrls: ['./form-buscar-logs.component.scss']
})
export class FormBuscarLogsComponent implements OnInit {

  public paginationConfig: any;
  public page: number = 0;
  public count: number = 0;
  public pageSize: number = 10;
  public pageSizes = [5, 10, 15, 20];
  public lastPage: any;

  public show: boolean = false;

  public buttonName: string = 'Mostrar...';

  public mockId = '2bdad3bd-07cc-4aac-bf9d-c64bd4d61ffa';

  public mockData: any;

  public mockLogs: any;

  public formFilters!: FormGroup;

  public isLoading: boolean = false;

  public logContext: string = '';

  public mockLogsStatusCode: any;

  public stackTraceData: any;

  constructor(
    private fb: FormBuilder,
    private mockLogsService: MockLogsService,
    private snackBar: MatSnackBar
  ) {
    
  }

  ngOnInit(): void {
    this.formFilters = this.fb.group({
      traceId: [''],
      sessionId: [''],
      innicialDate: [''],
      lastDate: [''],
      errors: [''],
      method: [''],
      route: [''],
      statusCode: [''],
    })
    this.getLogsId();
  }

  changePaginationSize(event: any) {
    this.pageSize = event;
    this.setLastPage();
  }

  setLastPage(): void {
    this.lastPage = Math.floor(this.mockData.length / this.pageSize);
    return this.mockData.length % this.pageSize === 0 ? this.lastPage : this.lastPage++;
  }

  onTableDataChange(event?: any) {
    this.page = event;
  }

  onTableSizeChange(event?: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }

  toggle() {
    this.show = !this.show;

    if (this.show)
      this.buttonName = "Esconder...";
    else
      this.buttonName = "Mostrar...";
  }

  resetForm() {
    this.formFilters?.reset();
  }

  getClass(statusCode: number): any {
    const types: any = {
      200: 'success',
      400: 'warning',
      423: 'warning',
      500: 'error',
      'default': 'info'
    };
    return (types[statusCode] || types['default']);
  }

  getClassSpan(statusCode: number): any {
    const types: any = {
      200: 'success-badge',
      400: 'warning-badge',
      423: 'warning-badge',
      500: 'error-badge',
      'default': 'info'
    };
    return (types[statusCode] || types['default']);
  }

  getClassMethod(method: string): any {
    const types: any = {
      'GET': 'info-badge',
      'POST': 'success-badge',
      'PUT': 'warning-badge',
      'DELETE': 'error-badge',
      'default': 'info-badge'
    };
    return (types[method] || types['default']);
  }

  getClassMethodAlert(method: string): any {
    const types: any = {
      'GET': 'alert alert-info',
      'POST': 'alert alert-success',
      'PUT': 'alert alert-warning',
      'DELETE': 'alert alert-danger',
      'default': 'info'
    };
    return (types[method] || types['default']);
  }


  getLogsId() {
    this.isLoading = true;
    this.mockLogsService.getDataById(this.mockId)
      .subscribe((response: any) => {

        this.paginationConfig = response.data;
        this.pageSize = this.paginationConfig.totalItens;
        console.log(this.pageSize);
        
        this.page = this.paginationConfig.page;
        this.count = this.paginationConfig.totalItems;

        this.mockData = response.data.results;
        this.setLastPage();

        response.data.results.forEach((elem: any) => {
          this.mockLogs = elem.logs;

          elem.logs.map((element: any) => {

            this.stackTraceData = element?.contexData?.stackTrace || '';
            if (this.stackTraceData !== '') {
              // console.log(this.stackTraceData.indexOf('at'));
            }

            this.logContext = element.context;
            this.mockLogsStatusCode = element.contexData?.statusCode;
          })
        })
        this.isLoading = false;
      });
  }

  public onClipboardCopy(successful: boolean): void {
    if (successful) {
      this.snackBar.open('Copiado com sucesso!', undefined, {
        duration: 2000,
        panelClass: ['success-snack-bar'],
      });
    } else {
      this.snackBar.open('Algo deu errado', undefined, {
        duration: 2000,
        panelClass: ['error-snackbar'],
      });
    }
  }


}
