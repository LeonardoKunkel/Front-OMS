 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  getEventos() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.http.get(`${URL}/evento/`, {headers});
  }

  createEvent(body) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.http.post(`${URL}/evento/create`, body, {headers});
  }
}
