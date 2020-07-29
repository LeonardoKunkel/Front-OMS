import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoCriticoService {

  constructor( private httpClient: HttpClient ) { }

  crearOnce(datos) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
    'Authorization': token
    });
    return this.httpClient.post('http://localhost:3000/equipoCritico/create', datos, { headers });
  }

  getOnce() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.get('http://localhost:3000/equipoCritico/', { headers });
  }
}
