import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-fo04',
  templateUrl: './fo04.page.html',
  styleUrls: ['./fo04.page.scss'],
})
export class Fo04Page implements OnInit {
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
               table: {widths: [500, 20, 200],
               heights: [30,10,10],
           body: [
             [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
             [{text:'XI. INTEGRIDAD MECÁNICA Y ASEGURAMIENTO DE LA CALIDAD',colSpan:3, alignment: 'center', bold:true},{},{}],
             [{text:'INSPECCIÓN DE ACCESORIOS DE DESCARGA, TUBOS DE VENTEO Y POZOS DE OBSERVACIÓN',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [
       {
           table:{
               widths:[328,70,321], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'ACCESORIO',bold:true,fillColor:'#ddd'},{text:'\nCUMPLE',bold:true,fillColor:'#ddd',rowSpan:2,alignment:'center'},{text:'\nOBSERVACIONES',bold:true,fillColor:'#ddd',rowSpan:2,alignment:'center'}],
                   [{text:'Accesorios de descarga',bold:true,fillColor:'#ddd'},{text:''},{text:''}],
                   [{text:'Codo de descarga buen estado, hermético (empaque)'},{},{}],
                   [{text:'Manguera de descarga, buen estado, conectores y empaques'},{},{}],
                   [{text:'Codo de recuperación de vapores buen estado y hermético'},{},{}],
                   [{text:'Manguera de Rec. Vapores en buen estado y hermética'},{},{}],
                   [{text:'Cable de tierra física, con pinzas y en buen estado'},{},{}],
                   [{text:'Biombos de descarga completos'},{},{}],
                   [{text:'Tuberías de venteo',bold:true,fillColor:'#ddd'},{text:'CUMPLE',bold:true,fillColor:'#ddd',alignment:'center'},{text:'OBSERVACIONES',bold:true,fillColor:'#ddd',alignment:'center'}],
                   [{text:'Integridad mecánica (libres de corrosión)'},{},{}],
                   [{text:'Elementos de sujeción firmes'},{},{}],
                   [{text:'Conectores y cable de tierra, bien conectado sin pintura,'},{},{}],
                   [{text:'Válvulas de venteo o presión vacío',bold:true,fillColor:'#ddd'},{text:'CUMPLE',bold:true,fillColor:'#ddd',alignment:'center'},{text:'OBSERVACIONES',bold:true,fillColor:'#ddd',alignment:'center'}],
                   [{text:'Limpia y libre de obstrucciones.'},{},{}],
                   [{text:'Integridad mecánica'},{},{}],
                   [{text:'Arrestador de flama',bold:true,fillColor:'#ddd'},{text:'CUMPLE',bold:true,fillColor:'#ddd',alignment:'center'},{text:'OBSERVACIONES',bold:true,fillColor:'#ddd',alignment:'center'}],
                   [{text:'Integridad mecánica'},{},{}],
                   [{text:'Limpio y libre de obstrucciones'},{},{}],
                   [{text:'Área de Almacenamiento',bold:true,fillColor:'#ddd'},{text:'CUMPLE',bold:true,fillColor:'#ddd',alignment:'center'},{text:'OBSERVACIONES',bold:true,fillColor:'#ddd',alignment:'center'}],
                   [{text:'Orden y Limpieza general'},{},{}],
                   [{text:'Drenajes Limpios, libres de obstrucción'},{},{}],
                   [{text:'Fisuras en los pisos'},{},{}],
                   [{text:'Pozos de observación y monitoreo',bold:true,fillColor:'#ddd'},{text:'CUMPLE',bold:true,fillColor:'#ddd',alignment:'center'},{text:'OBSERVACIONES',bold:true,fillColor:'#ddd',alignment:'center'}],
                   [{text:'Libre de agua de hidrocarburos'},{},{}],
                   ]
           },
       },
       {text:'\n\n'},
            {
               table: {
                   widths: [477,250], heights: [30,30],
                   body: [
                       [{text: '\nCinthya Karime Bedoy DÍaz\nENCARGADO DE LA ESTACIÓN DE SERVICIO', bold:true, },{text: '\nMES:', bold:true,}]
                       ]
               }
            }
   ],
   
     pageOrientation: 'landscape',
     pageSize: 'LETTER',
       pageMargins: [22,120]
 }
    this.pdfMaker.generate(dd, 'XI.FO-04 INSPECCIÓN DE ACCESORIOS DE DESCARGA.pdf');
    
    
  }

}
