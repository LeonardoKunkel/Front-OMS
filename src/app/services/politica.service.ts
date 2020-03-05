// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

// const URL = environment.url;

// @Injectable({
//   providedIn: 'root'
// })
// export class PoliticaService {

//   constructor( private http:HttpClient ) { }

//   getPolitica(){
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({  
//       'Authorization': token
//     });
//     return this.http.get('http://localhost:300/politica/',{headers});
//   }

//   createPolitica(politica){
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({
//       'Authorization': token
//     })
//     return this.http.post('http://localhost:3000/politica/create',politica,{headers});
//   }
// }
