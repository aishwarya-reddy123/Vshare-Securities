import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanytableService {

  private baseUrl = 'http://localhost:8080/api/v1/stocks';
  items = [];
 
  constructor(private http: HttpClient) { }
  getCompany(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createCompany(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  getCompanyList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  updateCompany(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  addtowatchlist(value) {
    this.items.push(value);
  }
  getItems() {
    return this.items;
  }
  
  getCompanyname(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
