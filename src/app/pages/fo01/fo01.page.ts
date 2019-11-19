import { Component, OnInit ,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
@Component({
  selector: 'app-fo01',
  templateUrl: './fo01.page.html',
  styleUrls: ['./fo01.page.scss'],
})
export class FO01Page implements OnInit {
  @ViewChild('slider') slider: IonSlides
  constructor(private navCtrl: NavController, private pdfMaker: PdfMakerService) { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
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

  enviarForm(formulario){
    console.log("hola world");
    
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
             [{text:'INSPECCIÓN DE TANQUES Y REGISTROS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [{text:'\n'},
       {
           table:{
               widths:[300,15,15,15,15,15,15,285,], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text: 'ACCESORIOS TANQUES DE ALMACENAMINTO', bold:true, fillColor:'#ddd', alignment:'center', rowSpan:2},{text: '1', bold:true, fillColor:'#ddd'},{text: '2', bold:true, fillColor:'#ddd'},{text: '3', bold:true, fillColor:'#ddd'},{text: '4', bold:true, fillColor:'#ddd'},{text: '5', bold:true, fillColor:'#ddd'},{text: '6', bold:true, fillColor:'#ddd'},{text: '\n\nOBSERVACIONES', bold:true, fillColor:'#ddd', alignment:'center',rowSpan:4}],
                   [{},{},{},{},{},{},{},{},],
                   [{text: 'ACCESORIO', bold:true, fillColor:'#ddd', alignment:'center'},{},{},{},{},{},{},{},],
                   [{text: 'Motobombas', bold:true, fillColor:'#ddd'},{text: 'C', bold:true, fillColor:'#ddd'},{text: 'C', bold:true, fillColor:'#ddd'},{text: 'C', bold:true, fillColor:'#ddd'},{text: 'C', bold:true, fillColor:'#ddd'},{text: 'C', bold:true, fillColor:'#ddd'},{text: 'C', bold:true, fillColor:'#ddd'},{},],
                   [{text:'Libre de Fugas'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Libre de Óxido'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Válvula de corte buen estado y libre de fugas'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Conexión sensor mecánico de fugas'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Tapa de registro entrada hombre, hermética'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor limpio y seco'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Tubería, buen estado y sin fugas'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Mangueras metálicas flexibles, buen estado'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Cajas de conexiones (condulet) con tapa y junta'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Sellos EYS con tapón y sello'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Conexión a tierra'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Sensor de líquidos, operando'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Alarmas visibles /audible, operando'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor buen estado, sin fracturas, hermético'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Tapa de contenedor hermética'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Botas (sello flexible) en buen estado y apretadas'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Control de inventarios', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd', alignment:'center'},],
                   [{text:'Tapa del tubo hermética'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Cable buen estado'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'En operación (transmite señal)'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Tapa de registro hermética, pintada'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor limpio y seco'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Caja de conexión, con tapa y junta'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Sello EYS con tapón y sello'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor buen estado, sin fracturas, hermético'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor boquilla de llenado', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Tapa con empaque (hermética)'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Válvula de drenado operando'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Válvula de sobrellenado buen estado, completa'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Válvula de sobrellenado cierra al 95%'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Tapa de registro hermética'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor limpio y seco'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor buen estado, sin fracturas, hermético'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Recuperación de vapores', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Tapa de válvula con tapa y empaque (hermética)'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Adaptador de recuperación de vapores hermético'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Tapa de registro hermética'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor limpio y seco'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor buen estado, sin fracturas, hermético'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   ]
           }
       },
       {text: '\n'},
       {
           table:{
               widths:[300,15,15,15,15,15,15,285], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'Especio anular', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Tapa de tubería en buen estado y hermética'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Sensor operando'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Alimentación eléctrica a prueba de explosión'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Alarma audible y/o visible'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Tapa de registro hermética (operando)'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor limpio y seco'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Caja de conexión (condulet) con tapa y junta'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Sello EYS con tapón y sello'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor buen estado, sin fracturas'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Purga', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Tapa en buen estado, hermética'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Libre de óxido'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Tapa de registro hermética'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor limpio y seco'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor buen estado, sin fracturas'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor llenado remoto', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Tapa con empaque (hermética)'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Válvula de drenado operando'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Tapa de registro hermética'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor limpio y seco'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Contenedor buen estado, sin fracturas'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   ]
           },
       },
       {text: '\n'},
       {
           table:{
               widths:[300,15,15,15,15,15,15,285],heights:[10,10,10],
               body:[
                   [{text:'NIVEL DE AGUA EN TANQUES', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Control de Inventarios (mm)'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   [{text:'Física (mm)'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   ]
           }
       },
       {text: '\n'},
       {
           table:{
               widths:[300,15,15,15,15,15,15,285],heights:[10,10,10],
               body:[
                   [{text:'Pozos de Monitoreo', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Presencia de Hidrocarburo'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                   ]
           }
       },
       {text: '\n'},
       {
           table:{
               widths:[738],heights:[15,15,15,15,15,15,15,15],
               body:[
                   [{text:'NOTAS', bold:true, fillColor:'#ddd'},],
                   [{text:''}],
                   [{text:''}],
                   [{text:''}],
                   [{text:''}],
                   [{text:''}],
                   [{text:''}],
                   [{text:''}]
                   ]
           }
       },
       {text:'\n\n'},
            {
               table: {
                   widths: [482,241], heights: [50,],
                   body: [
                       [{text:'\n\nCinthya Karime Bedoy DÍaz\nENCARGADO DE LA ESTACIÓN DE SERVICIO', bold:true, },{text: '\nMES:', bold:true,}]
                       ]
               }
            }
   ],
   
   
     pageOrientation: 'landscape',
     pageSize: 'LETTER',
       pageMargins: [22,120]
 }
   
    this.pdfMaker.generate(dd, 'XI.FO-01 INSPECCIÓN DE TANQUES Y REGISTROS.pdf');
    
    
  }


}
