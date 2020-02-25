import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementoUnoService {

  constructor(private http: HttpClient) { }

  createPolitica(body) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': token
    });
    return this.http.post<any>('localhost:3000/uno/create', body, {headers});
  }
}