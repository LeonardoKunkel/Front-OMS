import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcaAguaServiceService {

  constructor(private http: HttpClient) { }

  createMarcaAgua(body) {
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //     'Authorization': token
    // });
    return this.http.post<any>('http://localhost:3000/marcaAgua/create', body);
  }
  

  getMarcaAgua() {
    const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   Authorization: token
    // });
    return this.http.get('http://localhost:3000/marcaAgua/');
  }
}
