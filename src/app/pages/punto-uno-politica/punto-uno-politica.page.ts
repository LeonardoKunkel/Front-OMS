import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AlertController, IonSlides, ActionSheetController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PoliticaService } from 'src/app/services/Elemento1/politica.service';
import { EstacionServicioDatosService } from '../../services/estacion-servicio-datos.service';

@Component({
selector: 'app-punto-uno-politica',
templateUrl: './punto-uno-politica.page.html',
styleUrls: ['./punto-uno-politica.page.scss']
})
export class PuntoUnoPoliticaPage implements OnInit {

  @ViewChild('carta1') carta1;
  @ViewChild('carta2') carta2;
  @ViewChild('carta3') carta3;

  lista: any[] = [];
  lista2: any[] = [];
  datos: any = {
    hh: ''
  };

  doRefresh(event) {
    this.consultar();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  consultarDatos() {
    this.estacionServicioService.getEstacion().subscribe((data: any) => {
      const datoConsultado = data.findEstacion.length - 1;
      const ff = data.findEstacion[datoConsultado];
      this.lista.push(ff);
      const eS = this.lista[0].nombreEstacionServicio;
      this.datos = {
         hh: eS
      };
      return console.log(this.lista[0].nombreEstacionServicio);
    });
  }

  constructor(
    public alertController: AlertController,
    private pdfMakerService: PdfMakerService,
    private politicaService: PoliticaService,
    private estacionServicioService: EstacionServicioDatosService
  ) {
    this.consultarDatos();
    this.consultar();
  }

  ngOnInit() {}

  async condicion() {
    const alert = await this.alertController.create({
      header: 'Escoge una política',
      inputs: [
        {
          name: 'politica1',
          type: 'radio',
          label: 'Politica 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'politica2',
          type: 'radio',
          label: 'Politica 2',
          value: 'value2'
        },
        {
          name: 'politica3',
          type: 'radio',
          label: 'Politica 3',
          value: 'value3',
          id:   'politica3'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {  // data es oara que nos traiga los valores de los radio buttons
            console.log('Confirm Ok');
            const politic1 = this.carta1.nativeElement.innerText;
            const politic2 = this.carta2.nativeElement.innerText;
            const politic3 = this.carta3.nativeElement.innerText;
            if (data === 'value1') {
              console.log('escogiste politica 1');
              this.createPolitica(politic1);
            } else if (data === 'value2') {
              console.log('escogiste politica 2');
              this.createPolitica(politic2);
            } else if (data === 'value3') {
              console.log('escogiste politica 3');
              this.createPolitica(politic3);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  createPolitica(politic) {
    const newPolitica = {
      politica: politic
    };
    this.politicaService.createPolitica(newPolitica).subscribe(data => console.log(data));
  }

  consultar() {
    this.politicaService.getPolitica().subscribe((data: any) => {
      const datoConsultado = data.findPolitica.length - 1;
      const ff = data.findPolitica[datoConsultado]; // Hay que almacenar en otro vector no en el mismo de lista
      this.lista2.push(ff);
      console.log(this.lista2.length);
      return console.log(this.lista2);
    });
  }

  pdf() {
    // //console.log(this.datos.hh);
    // console.log(this.lista2[0].politica);
    const nombre = this.datos.hh;
    const politicaString = this.lista2[0].politica;
    const dd = {
      header: () => {
        return {
          table: {
            widths: [320, 20, 200],
            heights: [30, 10, 10],
            body: [
              [{text: `${nombre}`, colSpan: 3, bold: true, fontSize: 20, alignment: 'center'}, {}, {}],
              [{text: `SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y
                    PROTECCIÓN DEL MEDIO AMBIENTE`, colSpan: 3, fontSize: 9}, {}, {}],
              [{text: 'I.Politica', colSpan: 3, alignment: 'center'}, {}, {}]
            ]
          },
          margin: [22, 20]
        };
      },
      footer: () => {
        return {
            table: {
          headerRows: 1,
          widths: [510],
               body : [
               [''],
               [''],
               ['']
                   ]
             }, layout : 'headerLineOnly',
            margin: [72, 40]
        };
      },
      content: [
        {
          text: `POLITICA`, bold: true, alignment: 'center', Style: 'header', fontSize: 25
        },
        {
          text: `\n\n${politicaString}\n\n`, fontSize: 17, alignment: 'justify'
        },
          // lineas para la firma
        {
          style: 'tableExample',
          table: {
            widths: [200], headerRows: 1,
            body: [
              [''],
              [{text: 'REPRESENTANTE LEGAL', alignment: 'center'}],
              ['']
            ]
          },
          layout : 'headerLineOnly',
          margin: [150, 40],
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [72, 150]
    };
    this.pdfMakerService.generate(dd, 'P-SA-01 POLÍTICA');
  }
}
