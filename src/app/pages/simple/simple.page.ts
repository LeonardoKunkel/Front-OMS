import { PuntodosService } from './../../services/puntodos.service';
import { ElementRef, AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { MapaService } from 'src/app/services/mapa.service';
import { NavController } from '@ionic/angular';
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
  constructor(private navCtrl: NavController) {  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let latLng = new google.maps.LatLng(23.6345005, -102.5527878 );//sacra coordenas de queretaro o poner la localizacion
    let mapOptions = {
      center: latLng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapNativeElement.nativeElement, mapOptions);

    let locations = [
      ["ESTACION DE SERVICIO CALAFIA, S.A. DE C.V.",32.47641,-116.9214,1],
      ["DIGEPE, S.A. DE C.V. (07356)",20.3037,-99.74484,2],
      ["DIAZ GAS, S.A. DE C.V.",31.71947,-106.4514,3],
      ["COMBU-EXPRESS, S.A. DE C.V.",20.71413,-103.3042,4],
      ["PETROMAX, S.A. DE C.V.",26.03787,-98.29977,5],
      ["ESTACION RAEL, S. DE R.L. DE C.V.",32.51342,-117.0715,6],
      ["MULTISERVICIOS LA PILARICA SA DE CV ",25.7558,-108.9685,7],
      ["PETROMAX, S.A. DE C.V.",25.77202,-100.2918,8],
      ["ESTACION RAEL, S. DE R.L. DE C.V.",31.86546,-116.6079,9],
      ["INMOBILIARIA ESCOGAS SA DE CV",32.31202,-117.0457,10],
      ["PETROMAX, S.A. DE C.V.",25.65562,-100.184,11],
      ["AUTOSERVICIO BERLANGA S.A. DE C.V.",26.92554,-101.4189,12],
      ["PETROMAX, S.A. DE C.V.",25.83842,-97.44485,13],
      ["GRUPO OCTANO, S.A. DE C.V.",21.4739,-105.1947,14],
      ["CIRCULO DOS, S.A. DE C.V.",32.5279,-117.0271,15],
      ["Servicio Sevilla, S.A. de C.V.",19.58616,-99.1973,16],
      ["PETROMAX, S.A. DE C.V.",25.6788,-100.2365,17],
      ["GASOLINERA HUITEPEC, S.A. DE C.V.",16.73187,-92.65437,18],
      ["PETROMAX, S.A. DE C.V.",26.0139,-98.20425,19],
      ["ENERGIA Y SERVICIOS COORDINADOS, S.A. DE C.V.",24.02956,-104.6217,20],
      ["SERVICIO SIERRA DE ARTEAGA SA DE CV",25.57358,-100.9057,21],
      ["COMBUSTIBLES Y LUBRICANTES ATENAS SA DE CV",28.73367,-106.1008,22],
      ["GRUPO OCTANO, S.A. DE C.V.",19.77838,-103.9754,23],
      ["Becktrop Operadora SA de CV",32.45102,-117.0249,24],
      ["YLIGARZA S.A. DE C.V.",25.73174,-100.2726,25],
      ["ESTACION LA VICTORIA, S.A. DE C.V.",32.53171,-117.0466,26],
      ["PETROMAX, S.A. DE C.V.",25.68592,-100.4652,27],
      ["ESTACION LA VICTORIA, S.A. DE C.V.",32.51045,-117.0226,28],
      ["PETROMAX, S.A. DE C.V.",25.66026,-100.1466,29],
      ["PETROMAX, S.A. DE C.V.",25.44151,-100.9274,30],
      ["PETROMAX, S.A. DE C.V.",26.06297,-98.32712,31],
      ["RAMCAL SA DE CV",19.03549,-104.2109,32],
      ["Gasomac, S.A. de C.V.",19.3231,-99.13844,33],
      ["Autoconsumo los Pinos, S.A. de C.V. ",19.30205,-99.16505,34],
      ["SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",25.77298,-109.0001,35],
      ["servicios energeticos plaza industrial sa de cv ",25.2563,-101.1169,36],
      ["SERVICIOS GASOLINEROS DE MEXICO, S.A. DE C.V.",22.12339,-102.2834,37],
      ["OLEUM GAS S.A. DE C.V.",16.73384,-93.09296,38],
      ["SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",25.96616,-109.2961,39],
      ["Gasolinería Cid, S.A. de C.V.",19.64046,-99.36308,40],
      ["Gasolinería Perseo, S.A. de C.V.",19.74912,-99.11606,41],
      ["MULTISERVICIOS LA PILARICA SA DE CV ",25.9744,-109.2856,42],
      ["PETROMAX, S.A. DE C.V.",26.06025,-98.35571,43],
      ["PETROMAX, S.A. DE C.V.",25.7805,-100.1759,44],
      ["PETROMAX, S.A. DE C.V.",20.73139,-103.4519,45],
      ["SERVICIO AVENIDA, S.A. DE C.V.",21.89668,-102.3053,46],
      ["ESTACION DE SERVICIO LEON, S.DER.L. DE C.V.",21.09879,-101.6677,47],
      ["PETROMAX, S.A. DE C.V.",32.63511,-115.3865,48],
      ["ESTACION DE SERVICIO PITS, S. DE R.L. DE C.V.",32.49946,-116.7158,49],
      ["GRUPO GOCALVI SA DE CV",31.5649,-106.3973,50],
      ["Socombumex, S.A. de C.V.",19.07791,-104.288,51],
      ["Gasolinería Segovia, S.A. de C.V.",19.60755,-98.99508,52],
      ["SERVICIO LOS OLIVOS S.A. DE C.V.(E4394)",31.7838,-116.5917,53],
      ["MULTISERVICIOS LA PILARICA SA DE CV ",25.80147,-108.9855,54],
      ["GRUPO OCTANO, S.A. DE C.V.",19.79169,-100.9704,55],
      ["PETROMAX, S.A. DE C.V.",25.82625,-100.2963,56],
      ["GRUPO OCTANO, S.A. DE C.V.",21.52222,-104.8868,57],
      ["Inmobiliaria Corredor Tultitlán, S.A. de C.V. ",19.67871,-99.10838,58],
      ["PETROMAX, S.A. DE C.V.",32.60843,-115.4722,59],
      ["PETROMAX, S.A. DE C.V.",19.63609,-99.10677,60],
      ["GRUPO OCTANO, S.A. DE C.V.",21.47011,-104.8489,61],
      ["PETROMAX, S.A. DE C.V.",25.73217,-100.2104,62],
      ["CRUCERO LAS GOLONDRINAS,SA DE CV",19.14014,-103.7721,63],
      ["Becktrop Operadora SA de CV",32.49127,-116.953,64],
      ["PETROMAX, S.A. DE C.V.",25.70155,-100.1302,65],
      ["ESTACION RAEL, S. DE R.L. DE C.V.",32.51104,-116.9663,66],
      ["GRUPO OCTANO, S.A. DE C.V.",21.54249,-105.2828,67],
      ["ESTACION DE SERVICIO AUTOMOTRIZ DEL NORTE SA DE CV",21.91625,-102.2924,68],
      ["SERVICIO CIBOLA, S.A. DE C.V.",29.30929,-100.9351,69],
      ["PETROMAX, S.A. DE C.V.",25.53419,-103.3228,70],
      ["MULTISERVICIOS SIGAS S.A. DE C.V.",22.14957,-102.4106,71],
      ["SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",25.73669,-109.0138,72],
      ["PETROMAX, S.A. DE C.V.",26.04917,-98.38633,73],
      ["Servicio Vega Atizapan, S.A. de C.V.",19.55827,-99.25086,74],
      ["ESTACION RAEL, S. DE R.L. DE C.V.",32.50455,-116.977,75],
      ["PETROMAX, S.A. DE C.V.",25.72328,-100.1915,76],
      ["ESTACION RAMOS, S.A. DE C.V.",25.52635,-100.941,77],
      ["PETROMAX, S.A. DE C.V.",25.85833,-97.53786,78],
      ["ESTACION DE SERVICIO LEON, S.DER.L. DE C.V.",21.12003,-101.6691,79],
      ["GRUPO OCTANO, S.A. DE C.V.",19.90187,-100.7924,80],
      ["PETROMAX, S.A. DE C.V.",25.64484,-100.1696,81],
      ["PETROLIFEROS LA TERRITORIAL, S. DE R.L. DE C.V.",31.27435,-110.93,82],
      ["PETROMAX, S.A. DE C.V.",25.67366,-100.3682,83],
      ["PETROMAX, S.A. DE C.V.",25.71746,-100.1685,84],
      ["SERVICIO DEL CENTRO HIDALGO SA DE CV ",20.94723,-101.4349,85],
      ["SERV.EL TRIANGULO DEL REFUGIO,S.DER.L.DEC.V.",32.53289,-117.0602,86],
      ["AMC COMBUSTIBLES Y LUBRICANTES S.A. DE C.V.",26.91485,-101.4206,87],
      ["SERVICIO RAMA, S.A. DE C.V.",28.70405,-100.5448,88],
      ["PETROMAX, S.A. DE C.V.",25.81873,-100.2944,89],
      ["Servicio Ravello S.A de C.V.",32.49886,-116.917,90],
      ["ESTACION RAEL, S. DE R.L. DE C.V.",32.63718,-115.3992,91],
      ["PETROMAX, S.A. DE C.V.",28.65146,-106.0694,92],
      ["INMOBILIARIA ANADECA, S.A. DE C.V.",32.51353,-117.1202,93],
      ["SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.",25.81053,-109.0028,94],
      ["MARA ESTACION DE SERVICIOS SA DE CV",21.89202,-102.2631,95]
    ];

    var infowindow = new google.maps.InfoWindow();

    let marker, i;

    const icon = {
      url: '../../../assets/icon/iconogas.png',
      scaledSize: new google.maps.Size( 50, 50 )
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

  regresar() {
    this.navCtrl.navigateForward('/main');
  }

}