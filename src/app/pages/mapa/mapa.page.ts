import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit,AfterViewInit {

  lat: number = 20.5931;
  lng: number =  -100.392;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHNvdG9nOCIsImEiOiJjank3Z3hkOHMwMGJ5M2lxZnBocGNkZ2R0In0.BOlNXfF5YdTFCyvsWorKRw';
    
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng, this.lat],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map'
      });

      map.on('load', () => {
        // Insert the layer beneath any symbol layer.
        map.resize();

        //Maeker

        let marker = new mapboxgl.Marker()
        .setLngLat([this.lng, this.lat])
        .addTo(map);

        const layers = map.getStyle().layers;
         
        let labelLayerId;
          for (let i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
            }
          }
         
        map.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
          'fill-extrusion-color': '#FCBD06',
          
          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
          'interpolate', ['linear'], ['zoom'],
          15, 0,
          15.05, ['get', 'height']
          ],
          'fill-extrusion-base': [
          'interpolate', ['linear'], ['zoom'],
          15, 0,
          15.05, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': .5
          }
          }, labelLayerId);
      });
  }


}
