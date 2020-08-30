import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../reservation/model/reservation';

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient ) {}
 

 
 getReservation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/gettablebyid/${id}`);
  }

  createReservation(table: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addtable`, table);
  }

  updateReservation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatetablebyid/${id}`, value);
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletetablebyid/${id}`, { responseType: 'text' });
  }

  getReservationList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/gettablelist`);
  }
}