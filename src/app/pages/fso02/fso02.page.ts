import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
@Component({
  selector: 'app-fso02',
  templateUrl: './fso02.page.html',
  styleUrls: ['./fso02.page.scss'],
})
export class Fso02Page implements OnInit {

  constructor(private navCtrl: NavController, private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
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
             [{text:'PRUEBA OPERATIVA DE DISPOSITIVOS DE SEGURIDAD',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [
       {
           table:{
               widths:[90,90,70,70,202], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,],
               body:[
                   [{text:'PAROS DE EMERGENCIA', bold:true, fillColor:'#ddd', alignment:'center',colSpan:2},{text:''},{text: 'HORA', bold:true, fillColor:'#ddd',alignment: 'center'},{text: 'RESULTADO', bold:true, fillColor:'#ddd',alignment: 'center'},{text: 'OBSERVACIONES', bold:true, fillColor:'#ddd',alignment: 'center'},],
                   [{text:'Tanques'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Dispensario 1'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Dispensario 2'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Dispensario 3'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Dispensario 4'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Dispensario 5'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Oficinas'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Oficinas'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'VÁLVULAS SHUT-0FF Y PISTOLAS', bold:true, fillColor:'#ddd', alignment:'center',colSpan:2},{text:''},{text: 'HORA', bold:true, fillColor:'#ddd',alignment: 'center'},{text: 'RESULTADO', bold:true, fillColor:'#ddd',alignment: 'center'},{text: 'OBSERVACIONES', bold:true, fillColor:'#ddd',alignment: 'center'},],
                   [{text:'\nDispensario 1',alignment: 'center',rowSpan:2},{text:'Magna'},{},{},{}],
                   [{text:''},{text:'Premium'},{},{},{}],
                   [{text:'\nDispensario 2',alignment: 'center',rowSpan:2},{text:'Magna'},{},{},{}],
                   [{text:''},{text:'Premium'},{},{},{}],
                   [{text:'\nDispensario 3',alignment: 'center',rowSpan:2},{text:'Magna'},{},{},{}],
                   [{text:''},{text:'Premium'},{},{},{}],
                   [{text:'\nDispensario 4',alignment: 'center',rowSpan:2},{text:'Diésel'},{},{},{}],
                   [{text:''},{text:'Magna'},{},{},{}],
                   [{text:'\nDispensario 5',alignment: 'center',rowSpan:2},{text:'Diésel'},{},{},{}],
                   [{text:''},{text:'Magna'},{},{},{}],
                   [{text:'\nDispensario 6',alignment: 'center',rowSpan:2},{text:'Diésel'},{},{},{}],
                   [{text:''},{text:'Magna'},{},{},{}],
                   [{text:'SENSORES DE LÍQUIDOS', bold:true, fillColor:'#ddd', alignment:'center',colSpan:2},{text:''},{text: 'HORA', bold:true, fillColor:'#ddd',alignment: 'center'},{text: 'RESULTADO', bold:true, fillColor:'#ddd',alignment: 'center'},{text: 'OBSERVACIONES', bold:true, fillColor:'#ddd',alignment: 'center'},],
                   [{text:'Tanque de Magna',alignment: 'center',rowSpan:2},{text:'Motobomba'},{},{},{}],
                   [{text:''},{text:'Espacio anular'},{},{},{}],
                   [{text:'Tanque de Premium',alignment: 'center',rowSpan:2},{text:'Motobomba'},{},{},{}],
                   [{text:''},{text:'Espacio anular'},{},{},{}],
                   [{text:'Tanque de Diésel',alignment: 'center',rowSpan:2},{text:'Motobomba'},{},{},{}],
                   [{text:''},{text:'Espacio anular'},{},{},{}],
                   [{text:'Dispensario 1'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Dispensario 2'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Dispensario 3'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Dispensario 4'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Dispensario 5'},{text:'1',alignment: 'center'},{},{},{}],
                   [{text:'Pozos Observ.'},{text:'2',alignment: 'center'},{},{},{}],
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
 };
   
    this.pdfMaker.generate(dd, 'XI.FO-01 INSPECCIÓN DE TANQUES Y REGISTROS.pdf');
    
    
  }



}
