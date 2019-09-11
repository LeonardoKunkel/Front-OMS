import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';
import { resolve } from 'q';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PuntodosService {

  token: string = null;

  newPuntodos = new EventEmitter; 

  constructor(private http:HttpClient, private navCtrl: NavController) { }

  createPuntoDos(body) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return new Promise(resolve => {
      this.http.post<any>(`http://localhost:3000/puntodos/create`,body,{headers}).subscribe(data => {
        this.newPuntodos.emit(data['puntodos']);
        resolve(true)
      });
    });
    
  }

  getPuntoDos() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.http.get<any>(`${URL}/puntodos/`, {headers});
  }
}
