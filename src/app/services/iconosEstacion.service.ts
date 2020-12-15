import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconoEstacionService {

  constructor(private http: HttpClient) { }

  createPolitica(body) {
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //     'Authorization': token
    // });
    return this.http.post<any>('http://localhost:3000/iconosEstacion/create', body);
  }

  getPolitica() {
    const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   Authorization: token
    // });
    return this.http.get('http://localhost:3000/iconosEstacion/');
  }
}
