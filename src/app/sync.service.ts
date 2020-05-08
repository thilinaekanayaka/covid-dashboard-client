import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITest } from './Test';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  constructor(private http: HttpClient) { }

  test(): Observable<ITest[]> {
    return this.http.get<ITest[]>('http://localhost:3000/', {
      params: {
        test: 'message',
        cnt: '1'
      }
    });
  }

  test2(): Observable<ITest[]> {
    return this.http.post<ITest[]>('http://localhost:3000/', {
      test: "new"
    });
  }

  getAllCases(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/all-cases').pipe(
      map((data) => {
        return data;
      })
    );
  }

  getNumbersByDistrict(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/numbers-by-district').pipe(
      map((data) => {
        return data;
      })
    );
  }

  getCasesByDistrict(id: any): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/cases-by-district', {
      params: {
        _id: id
      }
    }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getCaseByID(id: any): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/case-by-id', {
      params: {
        _id: id
      }
    }).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
