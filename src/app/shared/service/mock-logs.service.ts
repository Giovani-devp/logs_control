import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockLogsService {

   mock = 'https://run.mocky.io/v3';
  //  mockId = '2bdad3bd-07cc-4aac-bf9d-c64bd4d61ffa';

  constructor(private http: HttpClient) { }


  getAllData(): Observable<any> {
    return this.http.get(`${this.mock}`);
  }

  getDataById(traceId: string): Observable<any> {
    return this.http.get(`${this.mock}/${traceId}`);
  }

  postDataById(traceId: string, searchLog: string): Observable<any> {
    return this.http.post(`${this.mock}/${traceId}`, searchLog);
  }
}
