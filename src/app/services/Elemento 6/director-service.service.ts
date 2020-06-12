import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectorServiceService {

  constructor( private httpClient: HttpClient) { }

  createDirector(datos) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization' : token
    });
    return this.httpClient.post('http://localhost:3000/copetenciaPersonalDirector/create', datos, {headers});
  }

  getDirector(){
    return this.httpClient.get('http://localhost:3000/copetenciaPersonalDirector');
  }
}
