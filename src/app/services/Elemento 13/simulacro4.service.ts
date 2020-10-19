import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Simulacro4Service {

  constructor( private httpClient: HttpClient ) { }

  crearSimulacro4(datos) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.post('http://localhost:3000/simulacro4/create', datos, {headers});
  }

  getSimulacro4() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.get('http://localhost:3000/simulacro4/', {headers});
  }
}
