import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {
  urlGas :'http://localhost:3000/gasolinera'

  constructor(
    private http:HttpClient
  ) { }

  postGas(body){
    return this.http.post(`http://localhost:3000/gasolinera/create`,body);
  }

  getGas(){
    return this.http.get(`http://localhost:3000/gasolinera/`);
  }
}
