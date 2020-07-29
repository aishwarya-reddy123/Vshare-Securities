import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfoliotableService {

  private baseUrl = 'http://localhost:8080/api/v1/portfolio';

  constructor(private http: HttpClient) { }
  getPortfolioList(id:number): Observable<any> {
    return this.http.post(`${this.baseUrl}`,id);
  }

}
