import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
import { resolve } from 'dns';

const URL = environment.url; 
@Injectable({
  providedIn: 'root'
})
export class QuejasSugerenciasService {
// datos={}
//   constructor(private http: HttpClient, 
//     private navCtrl: NavController, ) { }

//     quejasSugerencias(
//       queja: boolean,
//       sugerencias: boolean,
//       SolicitudInformacion:boolean,
//       condicionRiesgo:boolean,
//       inpactoAmbiente: string,
//       descripcionMotivo: string,
//       nombre: string,
//       correoCelular: string,
//       consecutivo:string,
//       alta:boolean,
//       media:boolean,
//       baja:boolean,
//       fecha: string
//     ){
//         const data={ 
//           queja,
//           sugerencias,
//           SolicitudInformacion,
//           condicionRiesgo,
//           inpactoAmbiente,
//           descripcionMotivo,
//           nombre,
//           correoCelular,
//           alta,
//           media,
//           baja,
//           fecha }
          
//     return this.http.post(`${URL}/evento/create`, body, {headers});
//   }
          
//     }

}



