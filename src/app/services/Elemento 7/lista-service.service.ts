import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaServiceService {

  constructor( private httpClient: HttpClient ) { }

  crearLista(datos) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Authorization': token
    });
    return this.httpClient.post('http://localhost:3000/lista/create', datos, { headers });
  }

  getLista() {
    return this.httpClient.get('http://localhost:3000/lista/');
  }

  getSpecificLista( id:String) {
    return this.httpClient.get(`http://localhost:3000/lista/${id}`);
  }
}
