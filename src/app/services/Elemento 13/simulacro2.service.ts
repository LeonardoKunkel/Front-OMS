import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Simulacro2Service {

  constructor( private httpClient: HttpClient ) { }

  crearSimulacro(datos) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.post('http://localhost:3000/simulacro2/create', datos, { headers });
  }

  getSimulacro() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.get('http://localhost:3000/simulacro2/', {headers});
  }
}
