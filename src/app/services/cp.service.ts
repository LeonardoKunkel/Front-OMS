import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CpService {

  constructor(private http: HttpClient) { }

  getCp(cp){
    return this.http.get(`http://api-codigos-postales.herokuapp.com/v2/codigo_postal/${cp}`)
  }
}
