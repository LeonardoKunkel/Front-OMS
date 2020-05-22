import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstacionServicioDatosService {

  constructor( private httpClient: HttpClient) { }

  crearDatos(datos){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.post('http://localhost:3000/estacionServicio/create', datos, {headers})
  }

  getEstacion(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.get('http://localhost:3000/estacionServicio/',{headers})
  }

  getEstacionById(id){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.get(`http://localhost:3000/estacionServicio/${id}`,{headers})
  }
}
