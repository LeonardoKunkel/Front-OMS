import { Component, OnInit,ViewChild,Renderer } from '@angular/core';

@Component({
  selector: 'app-elemento16-hipotesis-recomendaciones',
  templateUrl: './elemento16-hipotesis-recomendaciones.page.html',
  styleUrls: ['./elemento16-hipotesis-recomendaciones.page.scss'],
})
export class Elemento16HipotesisRecomendacionesPage implements OnInit {
  public anArrayRecomendacion:any=[];
  public anArrayElementoSasisopa:any=[];
  public anArrayResponsable:any=[];
  public anArrayFechaCompromiso:any=[];

  
  public anArrayDescripcion:any=[];
  public anArrayAccionComprobacion:any=[];
  public anArrayResponsable2:any=[];
  public anArrayFecha:any=[];
  public anArrayResultados:any=[];
  data: boolean;

  constructor(
    public renderer:Renderer,

  ) {
    this.goTo();
    this.Add();
    this.Add2();
   }

  ngOnInit() {
  }



  goTo(){
    console.log('this.anArrayRecomendacion',this.anArrayRecomendacion);
    console.log('this.anArrayElementoSasisopa',this.anArrayElementoSasisopa);
    console.log('this.anArrayResponsable',this.anArrayResponsable);
    console.log('this.anArrayFechaCompromiso',this.anArrayFechaCompromiso);
    console.log(' this.anArrayDescripcion',this.anArrayDescripcion);
    console.log('anArrayAccionComprobacion',this.anArrayAccionComprobacion);
    console.log('anArrayResponsable2',this.anArrayResponsable2);
    console.log('anArrayFecha',this.anArrayFecha);
    console.log('anArrayResultados',this.anArrayResultados);
    this.data=true;
    }
   
  Add(){
    this.anArrayRecomendacion.push([]);
    this.anArrayElementoSasisopa.push([]);
    this.anArrayResponsable.push([]);
    this.anArrayFechaCompromiso.push([]);
    console.log(this.data);
 }

 Add2(){
  this.anArrayDescripcion.push([]);
  this.anArrayAccionComprobacion.push([]);
  this.anArrayResponsable2.push([]);
  this.anArrayFecha.push([]);
  this.anArrayResultados.push([]);
  console.log(this.data);

 }

}
