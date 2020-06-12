import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RepresentanteTecnicoServiceService {

  constructor( private httpClient: HttpClient) { }

  createRepresentante(datos){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization' : token
    });
    return this.httpClient.post('http://localhost:3000/copetenciaPersonalRepresentante/create', datos ,{headers});
  }

  getRepresentante(){
    return this.httpClient.get('http://localhost:3000/copetenciaPersonalRepresentante');
  }
}