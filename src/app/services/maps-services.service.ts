import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MapsServicesService {

  constructor( private http:HttpClient) { }
  // getDatos(){
  //   const Token = localStorage.getItem('Token'),
  //   const headers = new HttpHeaders({
  //     'Authorization':Token
  //   });
  //   return this.http.get("localhost:3000/lo")
  // }
}
