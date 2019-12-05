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
  puntos:any[] = [];
  constructor(private puntoDosService: PuntodosService) {  }

  ngOnInit() {
    // this.puntos = this.puntoDosService.getLocalitation();
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
      
    ];

    var infowindow = new google.maps.InfoWindow();

    let marker, i;

    const icon = {
      url: '../../../assets/imagenes/Punto11/InspeccionDeDispensarios-01.png',
      scaledSize: new google.maps.Size( 80, 80 )
    };

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][2], locations[i][3]),
        map: this.map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][1]);
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

}