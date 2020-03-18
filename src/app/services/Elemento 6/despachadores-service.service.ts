import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DespachadoresServiceService {

  constructor( private hhtpClient:HttpClient) { }

  createDespachador(datos){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.hhtpClient.post('http://localhost:3000/coptenciaPersonalDespachadores/create',datos,{headers});
  }
}
