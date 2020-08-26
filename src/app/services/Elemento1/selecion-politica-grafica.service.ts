import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelecionPoliticaGraficaService {

  constructor( 
    private httpClient: HttpClient
  ) { }

  postPoliticaGrafica(data){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization' : token
    });
    return this.httpClient.post('http://localhost:3000/seleccionPoliticaGrafica/create',data)
  }
  getPoliticaGrafica(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: token
    });
    return this.httpClient.get('http://localhost:3000/seleccionPoliticaGrafica/');
  }
}
