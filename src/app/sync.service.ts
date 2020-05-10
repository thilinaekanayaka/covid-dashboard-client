import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  constructor(private http: HttpClient) { }

  addAuthHeader() {
    return 'heXdXxRU33TrW24S';
  }

  getAllCases(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/all-cases', { headers: { 'auth_token': this.addAuthHeader() } }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getNumbersByDistrict(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/numbers-by-district', { headers: { 'auth_token': this.addAuthHeader() } }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getCasesByDistrict(id: any): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/cases-by-district', {
      params: {
        _id: id
      },
      headers: {
        'auth_token': this.addAuthHeader()
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
      },
      headers: {
        'auth_token': this.addAuthHeader()
      }
    }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  createCase(caseData: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:3000/create-case',
      caseData,
      {
        headers: { 'auth_token': this.addAuthHeader() }
      }
    ).pipe(
      map((data) => {
        return data;
      })
    );;
  }

  editCase(caseData: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:3000/edit-case',
      caseData,
      {
        headers: { 'auth_token': this.addAuthHeader() }
      }
    ).pipe(
      map((data) => {
        return data;
      })
    );;
  }

  removeCase(id: any): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/remove-case', {
      params: {
        _id: id
      },
      headers: {
        'auth_token': this.addAuthHeader()
      }
    }).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
