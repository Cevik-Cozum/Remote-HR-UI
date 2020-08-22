import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient ) {}

  getReservation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbyid/${id}`);
  }

  createReservation(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, employee);
  }

  updateReservation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletebyid/${id}`, { responseType: 'text' });
  }

  getReservationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getlist`);
  }
}