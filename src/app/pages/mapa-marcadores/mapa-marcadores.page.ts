import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GasolineraService } from 'src/app/services/gasolinera.service';
import { GasolineraPage } from '../gasolinera/gasolinera.page'
//require('../../../assets/icon/ASEA-01.png')
declare var google:any;
interface Marker {
  position:{
    lat: number,
    lng: number
  };
  title: string,
  icon: string
}
@Component({
  selector: 'app-mapa-marcadores',
  templateUrl: './mapa-marcadores.page.html',
  styleUrls: ['./mapa-marcadores.page.scss'],
})
export class MapaMarcadoresPage implements OnInit {
  map = null;
  //mark: Mark []=[];
  markers: Marker[] = [
    {
      position: {
        lat: 20.5839692,
        lng: -100.3936024,
      },
      title: 'Gasolinera Total',
      icon:"assets/icon/iconogas.png"
      
    },
    {
      position: {
        lat: 20.5694923,
        lng: -100.4013434,
      },
      title: 'Gasolinera 2',
      icon:"assets/icon/iconogas.png"
    },
    {
      position: {
        lat: 20.5663055,
        lng: -100.3865674,
      },
      title: 'Movil',
      icon:"assets/icon/iconogas.png"
    },
    {
      position: {
        lat: 20.5869568,
        lng: -100.3905156,
      },
      title: 'Pemex',
      icon:"assets/icon/iconogas.png"
    },
  ];
  constructor(
    public modalCtrl: ModalController,
    private gasService: GasolineraService 
  ) { }

  ngOnInit() {
    this.getGas();
    this.loadMap();
  }

  getGas(){
    this.gasService.getGas().subscribe((data:any) =>{
      //console.log(data);
      //this.markers = data.findGasolinera;
      // for (let index = 0; index < data.findGasolinera.length; index++) {
      //   console.log(data.findGasolinera[index]);
        
      // }
    });
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat:20.5839692, lng:-100.3936024};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const marker = {
        position: {
          lat:4.65284775987,
          lng: -74.255487895
        },
        title:'punto uno'
      };
      this.renderMarkers();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker){

    const contentString =
      '<div id="content">' + marker.icon +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
      "sandstone rock formation in the southern part of the " +
      "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
      "south west of the nearest large town, Alice Springs; 450&#160;km " +
      "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
      "features of the Uluru - Kata Tjuta National Park. Uluru is " +
      "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
      "Aboriginal people of the area. It has many springs, waterholes, " +
      "rock caves and ancient paintings. Uluru is listed as a World " +
      "Heritage Site.</p>" +
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
      "(last visited June 22, 2009).</p>" +
      "</div>" +
      "</div>";
    const infoWindow = new google.maps.InfoWindow({
      content: contentString
    });

    var pinImage = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/009900/");
    

    const marcador = new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
      icon: pinImage
    });

    marcador.addListener('click', ()=>{
      infoWindow.open(this.map, marcador);
    });
  }

  findMe(){

    console.log('njnjdnjdd');
    
  }

  async add(){
    const modal = await this.modalCtrl.create({
      component:GasolineraPage,
    });
    return await modal.present();
  }
  

}
