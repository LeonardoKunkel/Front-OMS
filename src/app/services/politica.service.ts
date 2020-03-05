import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RootObject } from '../interfaces/PoliticaInterface';

@Injectable({
  providedIn: 'root'
})
export class PoliticaService {

  constructor( private httpClient: HttpClient) { }

  getPolitica(){
    const tokent = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': tokent
    });
    return this.httpClient.get<RootObject>('http://localhost:3000/politica/',{headers});
  }

  createPolitica(politica){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.post('http://localhost:3000/politica/create', {politica}, {headers});
  }
}
