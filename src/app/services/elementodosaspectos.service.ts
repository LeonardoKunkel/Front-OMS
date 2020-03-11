import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementodosaspectosService {

  constructor(private http: HttpClient) { }

  createPdf(body) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.http.post<any>('localhost:3000/dos/create', body, {headers});
  }
}
