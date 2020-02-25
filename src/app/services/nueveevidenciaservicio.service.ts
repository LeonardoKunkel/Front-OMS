import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NueveevidenciaservicioService {

  constructor(private http: HttpClient) { }

  getEvidencia() {
    const tokken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': tokken
    });
    return this.http.get("localhost:3000/lo")
  }
}
