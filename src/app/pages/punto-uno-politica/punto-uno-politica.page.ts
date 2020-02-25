import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AlertController, IonSlides, ActionSheetController } from "@ionic/angular";
import { async } from "@angular/core/testing";
import EventClicking from "@fullcalendar/core/interactions/EventClicking";
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { ElementoUnoPoliticaService } from 'src/app/services/elemento-uno-politica.service';

@Component({
  selector: 'app-punto-uno-politica',
  templateUrl: './punto-uno-politica.page.html',
  styleUrls: ['./punto-uno-politica.page.scss'],
})
export class PuntoUnoPoliticaPage implements OnInit {
  @ViewChild("texto") texto;
  @ViewChild("texto2") texto2;
  @ViewChild("texto3") texto3;

  politica:string = '';
  constructor(public alertController: AlertController,
    private actionSheetCtrl:ActionSheetController,
    private pdfMakerService: PdfMakerService, private puntoUnoService: ElementoUnoPoliticaService) { }

  ngOnInit() {
  }

  crearPolitica(politica) {
    this.puntoUnoService.getPolitica(politica).subscribe((data:any) => {
      console.log(data);
      this.politica = data.politica;
    })
  }

  btn1() {
    var politicaUno =' En la Estación de Servicio “Super Servicio La Concha S.A. de C.V.” conscientes con la naturaleza de los peligros y aspectos ambientales asociados a las actividades propias de la instalación, trabajadores y contratistas estamos comprometidos en mejorar nuestro desempeño en materia de Seguridad Industrial, Seguridad Operativa y Protección del medio ambiente, en todos los niveles de la organización, juntos orientamos nuestros esfuerzos para la evaluación, reducción y control de los riesgos e impactos ambientales, el cumplimiento normativo, mediante un proceso de mejora'
    var P1 = this.texto.el.innerText;
    this.change(P1);
    console.log(P1);
    this.crearPolitica(politicaUno);
  }
  btn2() {
    var politicaDos ='En “Super Servicio La Concha S.A. de C.V.” estamos comprometidos en todos los niveles de la organización con la seguridad de las instalaciones, los trabajadores, contratistas y medio ambiente, controlando los peligros, riesgos e impactos ambientales derivados de la operación normal de la estación, enfocándonos en el cumplimento de la normatividad y la mejora continua en materia Seguridad Industrial, Seguridad Operativa y Protección del medio ambiente.'
    var P2 = this.texto2.el.innerText;
    this.change(P2);
    console.log(P2);
  }
  btn3() {
    var P3 = this.texto3.el.innerText;
    var politica2 = 'Considerando los peligros, riesgos e impactos ambientales  que se generan en la operación de esta estación de servicio, en “Super Servicio La Concha S.A. de C.V.” estamos comprometidos en todos los niveles de la organización en establecer los controles necesarios y buscar continuamente su mejora en materia de Seguridad Industrial, Seguridad Operativa y Protección del medio ambiente.'
   this.change(P3);
    console.log(P3);
  }
  

  change(oo){
    var c1 = this.texto.el.innerText;
    var c2 = this.texto2.el.innerText;
    var c3 = this.texto3.el.innerText;

    if (oo === c1) {
      return this.politica1(oo);
    }
    if (oo === c2) {
      return this.politica2(oo);
    }
    if (oo === c3) {
      return this.politica3(oo);
    }
  }


  async politica1(res) {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Seguro de imprimir politica 1",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Okay");
            this.print1()
            
          }
        }
      ]
    });
    await alert.present();
  }

  async politica2(res) {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Seguro de imprimir politica 2",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Okay");
            this.print2()
            
          }
        }
      ]
    });
    await alert.present();
  }

  async politica3(res) {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Seguro de imprimir politica 3",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Okay");
            this.print3()
            
          }
        }
      ]
    });
    await alert.present();
  }

  print1(){
    console.log('Politica 1');
    const dd = {
      header: function(){
        return {
              table: {widths: [320, 20, 200],
              heights: [30,10,10],
          body: [
            [{text:`lorem`,colSpan:3,bold:true},{},{}],
            [{text:'kfkfkfkkffk',colSpan:3},{},{}],
            [{text:'1.Politica',colSpan:3,alignment: 'center'},{},{}]
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
            margin: [72,40]
        };
      },
      
      content:[
          {text: new Date().toTimeString()},
          {
              text:`POLITICA`,bold:true,alignment: 'center',Style:'header',fontSize:25
          },{
             text:'\n\n\nEn la Estación Servicio “Servicio El Carril S.A. de C.V.” conscientes con la naturaleza de los peligros y aspectos ambientales asociados a las actividades propias de la instalación, trabajadores y contratistas estamos comprometidos en mejorar nuestro desempeño en materia de Seguridad Industrial, Seguridad Operativa y Protección del medio ambiente, en todos los niveles de la organización, juntos orientamos nuestros esfuerzos para la evaluación, reducción y control de los riesgos e impactos ambientales, el cumplimiento normativo, mediante un proceso de mejora continua.\n\n' 
             ,fontSize:17,alignment:'justify'
          },
          //lineas para la firma
            {
        style: 'tableExample',
        table: {widths: [200], headerRows:1, 
          body: [
            [''],
            [{text:'REPRESENTANTE LEGAL',alignment:'center'}],
            ['']
          ]
        },layout : 'headerLineOnly',
            margin: [150,40],
      }
          
          ]
     ,
      pageSize: 'LETTER',
      pageMargins: [72,150]
    };
    this.pdfMakerService.generate(dd, 'Politica');  
  }

  print2(){
    console.log('Politica 2');
    const dd = {
      header: function(){
        return {
              table: {widths: [320, 20, 200],
              heights: [30,10,10],
          body: [
            [{text:`lorem`,colSpan:3,bold:true},{},{}],
            [{text:'kfkfkfkkffk',colSpan:3},{},{}],
            [{text:'1.Politica',colSpan:3,alignment: 'center'},{},{}]
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
            margin: [72,40]
        };
      },
      
      content:[
          {text: new Date().toTimeString()},
          {
              text:`POLITICA`,bold:true,alignment: 'center',Style:'header',fontSize:25
          },{
             text:'\n\n\nEn la Estación Servicio “Servicio El Carril S.A. de C.V.” conscientes con la naturaleza de los peligros y aspectos ambientales asociados a las actividades propias de la instalación, trabajadores y contratistas estamos comprometidos en mejorar nuestro desempeño en materia de Seguridad Industrial, Seguridad Operativa y Protección del medio ambiente, en todos los niveles de la organización, juntos orientamos nuestros esfuerzos para la evaluación, reducción y control de los riesgos e impactos ambientales, el cumplimiento normativo, mediante un proceso de mejora continua.\n\n' 
             ,fontSize:17,alignment:'justify'
          },
          //lineas para la firma
            {
        style: 'tableExample',
        table: {widths: [200], headerRows:1, 
          body: [
            [''],
            [{text:'REPRESENTANTE LEGAL',alignment:'center'}],
            ['']
          ]
        },layout : 'headerLineOnly',
            margin: [150,40],
      }
          
          ]
     ,
      pageSize: 'LETTER',
      pageMargins: [72,150]
    };
    this.pdfMakerService.generate(dd, 'Politica'); 
    
  }
  print3(){
    console.log('Politica 3');
    const dd = {
      header: function(){
        return {
              table: {widths: [320, 20, 200],
              heights: [30,10,10],
          body: [
            [{text:`lorem`,colSpan:3,bold:true},{},{}],
            [{text:'kfkfkfkkffk',colSpan:3},{},{}],
            [{text:'1.Politica',colSpan:3,alignment: 'center'},{},{}]
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
            margin: [72,40]
        };
      },
      
      content:[
          {text: new Date().toTimeString()},
          {
              text:`POLITICA`,bold:true,alignment: 'center',Style:'header',fontSize:25
          },{
             text:'\n\n\nEn la Estación Servicio “Servicio El Carril S.A. de C.V.” conscientes con la naturaleza de los peligros y aspectos ambientales asociados a las actividades propias de la instalación, trabajadores y contratistas estamos comprometidos en mejorar nuestro desempeño en materia de Seguridad Industrial, Seguridad Operativa y Protección del medio ambiente, en todos los niveles de la organización, juntos orientamos nuestros esfuerzos para la evaluación, reducción y control de los riesgos e impactos ambientales, el cumplimiento normativo, mediante un proceso de mejora continua.\n\n' 
             ,fontSize:17,alignment:'justify'
          },
          //lineas para la firma
            {
        style: 'tableExample',
        table: {widths: [200], headerRows:1, 
          body: [
            [''],
            [{text:'REPRESENTANTE LEGAL',alignment:'center'}],
            ['']
          ]
        },layout : 'headerLineOnly',
            margin: [150,40],
      }
          
          ]
     ,
      pageSize: 'LETTER',
      pageMargins: [72,150]
    };
    this.pdfMakerService.generate(dd, 'Politica'); 
    
  }
}
