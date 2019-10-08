import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { EventEmitter } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {

  token: string = null;

  newClient = new EventEmitter;

  constructor(private http: HttpClient) { }

  createEvent(body:any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.http.post<any>(`http://localhost:3000/evento/create`, body, {headers});
  }

  getEventos() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.http.get<any>(`http://localhost:3000/evento`, {headers});
  }
}
