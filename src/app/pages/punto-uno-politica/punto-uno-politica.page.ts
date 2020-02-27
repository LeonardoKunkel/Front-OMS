import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AlertController, IonSlides, ActionSheetController } from "@ionic/angular";
import { async } from "@angular/core/testing";
import EventClicking from "@fullcalendar/core/interactions/EventClicking";
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PoliticaService } from 'src/app/services/Elemento1/politica.service';

@Component({
  selector: 'app-punto-uno-politica',
  templateUrl: './punto-uno-politica.page.html',
  styleUrls: ['./punto-uno-politica.page.scss'],
})
export class PuntoUnoPoliticaPage implements OnInit {
  @ViewChild("texto") texto;
  @ViewChild("texto2") texto2;
  @ViewChild("texto3") texto3;

  politica: string = '';

  constructor(public alertController: AlertController,
              private actionSheetCtrl:ActionSheetController,
              private pdfMakerService: PdfMakerService,
              private politicaService: PoliticaService) { this.politicaService.getPolitica().subscribe(data => console.log(data))}

  ngOnInit() {
  }

  createPolitica() {
    let politic = 'eduardo'
    this.politicaService.createPolitica(politic);
  }


  btn1() {
    this.createPolitica();
    // var P1 = this.texto.el.innerText;
    // this.condicion(P1);
    // this.createPolitica(P1)
  }
  btn2() {
    // var P2 = this.texto2.el.innerText;
    // this.condicion(P2);
    // this.createPolitica(P2);
  }
  btn3() {
    // var P3 = this.texto3.el.innerText;
    // this.condicion(P3);
    // this.createPolitica(P3);
  }
  
  condicion(res) {
    var c1 = this.texto.el.innerText;
    var c2 = this.texto2.el.innerText;
    var c3 = this.texto3.el.innerText;
    if (res === c1) {
      console.log(c1);
      this.change(res)
    }
    if (res === c2) {
      console.log(c2);
      this.change(res)
    }
    if (res === c3) {
      console.log(c3);
      this.change(res)
    }
  }
  public disabled= true;

  change(oo){
    var c1 = this.texto.el.innerText;
    var c2 = this.texto2.el.innerText;
    var c3 = this.texto3.el.innerText;
    if (oo === c1) {
      this.disabled=false;
      return this.politica1(oo);
    }
    if (oo === c2) {
      this.disabled=false;
      return this.politica2(oo);
    }
    if (oo === c3) {
      this.disabled=false;
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
