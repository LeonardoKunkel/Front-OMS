import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-fo03',
  templateUrl: './fo03.page.html',
  styleUrls: ['./fo03.page.scss'],
})
export class FO03Page implements OnInit {
  @ViewChild('slider') slider: IonSlides

  datos:any = {
    check1:'',
    check2:'',
    check3:'',
    check4:'',
    check5:'',
    check6:'',
    check7:'',
    check8:'',
    check9:'',
    check10:'',
    check11:'',
    check12:'',
    check13:'',
    check14:'',
    check15:'',
    check16:'',
    check17:'',
    check18:'',
    check19:'',
    check20:'',
    check21:'',
    check22:'',
    check23:'',
  }

  constructor( private pdfMaker: PdfMakerService) { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

  goBack(){
    this.slider.lockSwipes(false);
    this.slider.slidePrev();
    this.slider.lockSwipes(true);
  }

  goNext(){
    this.slider.lockSwipes(false);
    this.slider.slideNext();
    this.slider.lockSwipes(true);
  }
  pdf(){
    console.log('hola mundo');
    var dd = {
      header: function(){
         return {
               table: {widths: [320, 20, 200],
               heights: [30,10,10],
           body: [
             [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
             [{text:'XI. INTEGRIDAD MECÁNICA Y ASEGURAMIENTO DE LA CALIDAD',colSpan:3, alignment: 'center', bold:true},{},{}],
             [{text:'INSPECCIÓN DE DISPENSARIOS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [
       {
           table:{
               widths:[225,10,10,10,10,10,10,210], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,],
               body:[
                   [{text:'DISPENSARIOS',bold:true,fillColor:'#ddd'},{text:'1',bold:true,fillColor:'#ddd'},{text:'2',bold:true,fillColor:'#ddd'},{text:'3',bold:true,fillColor:'#ddd'},{text:'4',bold:true,fillColor:'#ddd'},{text:'5',bold:true,fillColor:'#ddd'},{text:'6',bold:true,fillColor:'#ddd'},{text:'\nOBSERVACIONES',bold:true, alignment:'center', fillColor:'#ddd', rowSpan:2}],
                   [{text:'Válvula shut-off (corte rápido)',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:''}],
                   [{text:'Libre de fugas y de óxido'},{},{},{},{},{},{},{}],
                   [{text:'Filtros',bold:true},{},{},{},{},{},{},{}],
                   [{text:'Saturados y limpios (sin manchas)'},{},{},{},{},{},{},{}],
                   [{text:'Válvula shut-off (corte rápido)',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'',fillColor:'#ddd'}],
                   [{text:'Buen estado (sin cuarteaduras)'},{},{},{},{},{},{},{}],
                   [{text:'Libres de fugas (producto, vapores)'},{},{},{},{},{},{},{}],
                   [{text:'Limpias'},{},{},{},{},{},{},{}],
                   [{text:'Destorcedores buen estado'},{},{},{},{},{},{},{}],
                   [{text:'Válvula break-away (corte rápido)',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'',fillColor:'#ddd'}],
                   [{text:'Libre de fugas'},{},{},{},{},{},{},{}],
                   [{text:'Buen estado (sin fracturas)'},{},{},{},{},{},{},{}],
                   [{text:'Pistolas para despacho de combustible',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'',fillColor:'#ddd'}],
                   [{text:'Libre de fuga al suspender despacho'},{},{},{},{},{},{},{}],
                   [{text:'Buen estado'},{},{},{},{},{},{},{}],
                   [{text:'Anclaje a basamento',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'',fillColor:'#ddd'}],
                   [{text:'Tornillería firme (libre de óxido)'},{},{},{},{},{},{},{}],
                   [{text:'Anclado sin movimiento'},{},{},{},{},{},{},{}],
                   [{text:'Conexión a tierra'},{},{},{},{},{},{},{}],
                   [{text:'Elemento protector'},{},{},{},{},{},{},{}],
                   [{text:'Contenedor',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'',fillColor:'#ddd'}],
                   [{text:'Tubería, buen estado y sin fugas'},{},{},{},{},{},{},{}],
                   [{text:'Válvulas de corte libres de fugas'},{},{},{},{},{},{},{}],
                   [{text:'Mangueras metálicas flexibles'},{},{},{},{},{},{},{}],
                   [{text:'Cajas de conexiones y sellos EYS'},{},{},{},{},{},{},{}],
                   [{text:'Sensor de líquidos'},{},{},{},{},{},{},{}],
                   [{text:'Contenedor buen estado, sin fracturas'},{},{},{},{},{},{},{}],
                   [{text:'Botas (sello flexible) en buen estado'},{},{},{},{},{},{},{}],
                   ]
           },
       },
       {text:'\n\n'},
            {
               table: {
                   widths: [380,170], heights: [50,],
                   body: [
                       [{text: '\n\nCinthya Karime Bedoy DÍaz\nENCARGADO DE LA ESTACIÓN DE SERVICIO', bold:true, },{text: '\nMES:', bold:true,}]
                       ]
               }
            }
   ],
   
   
     pageSize: 'LETTER',
       pageMargins: [22,120]
 }
    this.pdfMaker.generate(dd, 'XI.FO-03 INSPECCIÓN DE TANQUES Y REGISTROS.pdf');
    
    
  }
}
