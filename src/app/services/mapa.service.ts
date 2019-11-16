import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  token: string = null;


  constructor(private http: HttpClient) { }

  getLocation() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.http.get(`${URL}/location/`, {headers});
  }
}
