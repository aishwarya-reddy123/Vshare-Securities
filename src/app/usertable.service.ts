import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsertableService {

  private baseUrl = 'http://localhost:8080/api/v1/stocks';

 constructor(private http: HttpClient){}

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  
}
