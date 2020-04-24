import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-doce-carta',
  templateUrl: './punto-doce-carta.page.html',
  styleUrls: ['./punto-doce-carta.page.scss'],
})
export class PuntoDoceCartaPage implements OnInit {

  constructor(
    private pdfMaker:PdfMakerService
  ) { }

  ngOnInit() {
  }

  pdf(){
    var dd = {
      header: function(){
         return {
               table: {widths: [315, 20, 200],
               heights: [30,10,10],
           body: [
             [{text:'SOFTOIL S.A. de C.V.',fontSize:19,colSpan:3,bold:true,alignment:'center'},{},{}],
             [{text:'SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y PROTECCIÓN DEL MEDIO AMBIENTE',colSpan:3, alignment: 'center', bold:true},{},{}],
             [{text:'XII. SEGURIDAD DE CONTRATISTAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [
               {text:'Carta Responsiva',bold:true,alignment:'center',fontSize:30,margin:[0,30]},
               {
                   stack:[
                       
               {text:'En la Estación de Servicio “Gasolinera El Carril S.A. de C.V.” reconoce la importancia del control de los aspectos ambientales y de los riesgos que están asociados a las actividades propias de la instalación, con motivo de las actividades rutinarias y no rutinarias, inclusive aquellas que desarrollen los contratistas, subcontratistas, proveedores y prestadores de servicios que impliquen riesgos para la población, el consumidor o las instalaciones, o impactos al ambiente, por lo cual se obliga a emitir y a vigilar las medidas de control en materia de seguridad industrial, seguridad operativa y protección del medio ambiente, que deben observar los terceros, así como vigilar su cumplimiento.\n\n',alignment:'justify',fontSize:15,margin:[30,0]},
               {text:'En razón de lo anterior asume la responsabilidad de la administración de los riesgos e impactos al ambiente que se originen con motivo de las actividades realizadas por los contratistas, prestadores de servicio y proveedores, que se ejecuten dentro de nuestras instalaciones.',alignment:'justify',fontSize:15,margin:[30,0]}     
                       ]
               },
               
             {
                  style: 'tableExample',
                  table: {widths: [200], headerRows:1, 
                           body: [
                                     [''],
                                      [{text:'REPRESENTANTE LEGAL',alignment:'center'}],
                                      ['']
                                 ]
                          },layout : 'headerLineOnly',
                             margin: [170,120],
               }
       
       ],
     pageSize: 'LETTER',
       pageMargins: [22,120]
 };
 this.pdfMaker.generate(dd,'Carta responsiva de contratista');
  }
}
