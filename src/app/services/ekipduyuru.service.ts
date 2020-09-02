import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EkipDuyuruService {
  private baseUrl = 'http://localhost:8080/EkipDuyuru';

  constructor(private http: HttpClient ) {}

  getekipduyuruList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createEkipDuyuru(ekipduyuru: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, ekipduyuru);
  }

  deleteEkipDuyuru(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  updateEkipDuyuru(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getEkipDuyuru(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
