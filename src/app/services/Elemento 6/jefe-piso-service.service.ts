import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JefePisoServiceService {

  constructor(private httpClient:HttpClient) {  }

  createJefe(datos){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.post('http://localhost:3000/copetenciaPersonalJefe/create',datos,{headers})
  }

  getDirector(){
    return this.httpClient.get('http://localhost:3000/copetenciaPersonalJefe');
  }

}
