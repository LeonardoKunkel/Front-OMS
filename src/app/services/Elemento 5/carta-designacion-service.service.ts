import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartaDesignacionServiceService {

  constructor( private httpClient: HttpClient) { }

  getcartaDesignacion(carta) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization' : token
    });
    return this.httpClient.post('http://localhost:3000/cartaDesignacion/create', carta, {headers});
  }

}
