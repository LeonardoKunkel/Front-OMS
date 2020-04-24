import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnexoSeguridadService {

  constructor( private httpClient: HttpClient) { }

  createAnexo(datos){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token
    });
    return this.httpClient.post('http://localhost:3000/anexoSeguridadElemento12/create',datos,{headers});
    }
  }

