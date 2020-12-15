import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirmaRepresentanteService {

  constructor(
    private httpClient: HttpClient
  ) { }

  postFirmaRepresentante(body) {
    const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   Authorization: token
    // });
    return this.httpClient.post<any>('http://localhost:3000/firmaRepresentante/create', body);
  }
  getFirmaRepresentante() {
    const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   Authorization: token
    // });
    return this.httpClient.get('http://localhost:3000/firmaRepresentante/');
}

}
