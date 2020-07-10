import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirmaEstacionServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  postFirmaEstacion(body) {
    const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   Authorization: token
    // });
    return this.httpClient.post<any>('http://localhost:3000/firmaEstacion/create', body);
  }
  getFirmaEstacion() {
    const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   Authorization: token
    // });
    return this.httpClient.get('http://localhost:3000/firmaEstacion/');
  }
}
