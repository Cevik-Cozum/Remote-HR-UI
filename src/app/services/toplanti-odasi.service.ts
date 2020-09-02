import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToplantiOdasiService {
  private baseUrl = 'http://localhost:8080/ToplantiOdasi';

  constructor(private http: HttpClient ) {}

  gettoplantiodasiList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createToplantiOdasi(toplantiodasi: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, toplantiodasi);
  }

  deleteToplantiOdasi(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updateToplantiOdasi(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getToplantiOdasi(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
