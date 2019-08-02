import { Component, OnInit } from '@angular/core';
import { CpService } from 'src/app/services/cp.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-cinco',
  templateUrl: './punto-cinco.page.html',
  styleUrls: ['./punto-cinco.page.scss'],
})
export class PuntoCincoPage implements OnInit {

  cp: number;
  respuestaCP: any= {};

  constructor(
    private cpService: CpService,
    private pdfMaker: PdfMakerService
  ) { }

  ngOnInit() {
  }

  cambio(event) {
    const cambio = event.target.value;
    this.cp = cambio;
    this.peticiones(cambio);
  }

  peticiones(cp){
    this.cpService.getCp(cp).subscribe((data:any) =>{
      console.log(data);
      this.respuestaCP = data;
    })
  }

  enviarForm(formulario) {
    console.log(formulario);
  }

  pdf(){
    var dd = {
      header: function(){
        return {
              table: {widths: [320, 20, 200],
              heights: [30,10,10],
          body: [
            [{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',colSpan:3},{},{}],
            [{text:'V. FUNCIONES RESPONSABILIDAD Y AUTORIDAD',colSpan:3,alignment: 'center'},{},{}],
            [{text:'DESIGNACIÓN DEL REPRESENTANTE TÉCNICO',colSpan:3,alignment: 'center',bold:true,fillColor: '#dddddd'},{},{}]
          ]
        }, margin: [22,20]
        };
      },
      footer: function(){
        return {
            table:{
          headerRows:1, 
          widths: [510],
               body : [
               [''],
               [''],
               ['']
                   ]
             }, layout : 'headerLineOnly',
            margin: [70,90]
        };
      },
      
      content:[
          {
              text:'CARTA DE DESIGNACIÓN', bold:true,style:'header',alignment:'center',fontSize:20
              
          },
          {
              text:'Ciudad, Estado. a días del mes de 2018',alignment:'right'
              
          },
          {
              text:'\nC. Cinthya Karime Bedoy DÍaz',fontSize:10
          },{
              text:'Encargado',fontSize:10
          },{
              text:'Presente. -',fontSize:10
          },{
              text: '\nEn seguimiento al proceso de la Implantación del Sistema de Administración de la Seguridad Industrial,Seguridad Operativa y Protección al medio Ambiente, en la Gasolinera El Carril S.A. de C.V., ubicada en Gomez Farias #387, C.P. 45680, El Salto, Jalisco, el que suscribe Roberto Muñoz Torres, Representante Legal me permito hacer de su conocimiento que ha sido designado Representante Técnico, para fungir como Representante de la Estación de Servicio ante la ASEA, y para cumplir con lo siguiente:\n\n', style: 'header',alignment: 'justify',fontSize:10
          },
      {
        type: 'lower-alpha',
        ol: [
          'Asegurar que el SA es conforme con los requisitos establecidos en los lineamientos y demás normativa aplicable.',
          'Informar a la alta dirección de la Estación de Servicio acerca del desempeño del Sistema de Administración.',
          'Proponer la adopción de las mejores prácticas nacionales e internacionales en la implementación del Sistema de Administración.',
            'Coordinar las acciones necesarias para subsanar los incumplimientos de la normatividad interna y externa aplicable.',
            'Informar a la Agencia de cualquier situación que pudiera poner en riesgo la seguridad Industrial, seguridad Operativa y Protección al Ambiente.'
        ],alignment:'justify',fontSize:10
      },{
          text:'\nPor lo anterior se le ha asignado el siguiente buzón de correo electrónico estación de handy_elsalto@hotmail.com el número de teléfono: 01(33) 37-32-23-90, y el domicilio ubicado en Gomez Farias #387 , C.P. 45680 El Salto, Jalisco. , para oír y recibir notificaciones.',alignment:'justify',fontSize:10
      },{
          text:'Sin más por el momento, no dudando que realizará las actividades asignadas de acuerdo a su acostumbrado desempeño quedo de usted.',fontSize:10
      },{
          text:'\n\nAtentamente',alignment:'center'
      },{
          text:'\nFernando Bedoy Ruiz ',alignment:'center'
      },{
          text:'\n\nRepresentante Legal',alignment:'center'
      }
         
          
          ]
     ,
      pageSize: 'LETTER',
      pageMargins: [72,150]
    };

    this.pdfMaker.generate(dd, 'V. Funciones de funcionalidad y responsabilidad.pdf');
  }

}