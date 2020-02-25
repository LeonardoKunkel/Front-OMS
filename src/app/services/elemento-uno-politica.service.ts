import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ElementoUnoPoliticaService {

 

  constructor( private http: HttpClient) { }

  getPolitica(body){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.http.post<any>(`http://localhost:3000/politica/create`,body, {headers});
  }
}
