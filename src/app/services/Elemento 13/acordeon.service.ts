import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcordeonService {

  constructor( private httpClient: HttpClient) { }

  createAcordeon(datos){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization':token
    });
    return this.httpClient.post('http://localhost:3000/acordeon/create',datos,{headers});
  }
}
