import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Simulacro2Service {

  constructor( private httpClient: HttpClient ) { }

  crearSimulacro2(datos) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.post('http://localhost:3000/simulacro2/create', datos, { headers });
  }

  getSimulacro2() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.get('http://localhost:3000/simulacro2/', {headers});
  }
}
