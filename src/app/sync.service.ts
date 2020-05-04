import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITest } from './Test';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  constructor(private http: HttpClient) { }

  test(): Observable<ITest[]> {
    return this.http.get<ITest[]>('http://localhost:3000/', {
      params: {
        appid: 'id1234',
        cnt: '5'
      }
    });
  }

  test2(): Observable<ITest[]> {
    return this.http.post<ITest[]>('http://localhost:3000/', { test : "new"});
  }
}
