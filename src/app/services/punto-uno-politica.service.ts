import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
import { UiService } from './ui.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PuntoUnoPoliticaService {
  datos={}
  constructor(private http: HttpClient, 
    private navCtrl: NavController, 
    private uiService: UiService) { }
}

// servicioPolitica(){
  
// }
