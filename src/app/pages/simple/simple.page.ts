import { PuntodosService } from './../../services/puntodos.service';
import { ElementRef, AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { MapaService } from 'src/app/services/mapa.service';
declare var google;

@Component({
  selector: 'app-simple',
  templateUrl: './simple.page.html',
  styleUrls: ['./simple.page.scss'],
})
export class SimplePage implements OnInit, AfterViewInit {
  private map: any;
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  estacionBuscar = '';
  estaciones:any = {};
  lugares:any[] = [];
  puntos:any[] = [];
  constructor(private puntoDosService: PuntodosService) { this.traemeDatos(); }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let latLng = new google.maps.LatLng(23.6345005, -102.5527878 );//sacra coordenas de queretaro o poner la localizacion
    let mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapNativeElement.nativeElement, mapOptions);

    let locations = [
      ['ESTACION DE SERVICIO CALAFIA, S.A. DE C.V.', 32.47641, -116.9214 , 4],
      ['PL/538/EXP/ES/2015', 25.66026, -100.1466 , 5],
      ['PL/619/EXP/ES/2015', 25.44151, -100.9274 , 3],
      ['PL/443/EXP/ES/2015', 26.06297, -98.32712 , 2],
      ['PL/689/EXP/ES/2015', 19.03549, -104.2109 , 1]
    ];

    var infowindow = new google.maps.InfoWindow();

    let marker, i;

    const icon = {
      url: '../../../assets/imagenes/Punto11/InspeccionDeDispensarios-01.png',
      scaledSize: new google.maps.Size( 80, 80 )
    };

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: this.map,
        icon: icon
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(this.map, marker);
        }
      })(marker, i));
    }
  }

  buscar(event) {
    const texto = event.target.value;
    this.estacionBuscar = texto;
    console.log(texto);
  }

  traemeDatos() {
    this.puntoDosService.getLocalitation().subscribe((data: any) => {
      //console.log(data);
      this.estaciones = data;
      console.log(this.estaciones.puntos);
      this.puntos = this.estaciones.puntos;
      console.log(this.puntos);
      let nuevo = this.puntos.map((obj) => {
        let rObj = [];
        
      })
    });
  }
}