import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Fibonacci} from '../model/Fibonacci';
 


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'http://localhost:8080/fibonacci';
  constructor(private http: HttpClient) { }

  generateNumber(fibonacci: Fibonacci ): Observable <Fibonacci> {
    return this.http.post<Fibonacci>(this.baseUrl, fibonacci);
  }

  getUsers() : Observable<Fibonacci[]> {
    return this.http.get<Fibonacci[]>(this.baseUrl);
    
  }

 
}
