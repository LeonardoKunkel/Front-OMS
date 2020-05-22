import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-punto-once-lista',
  templateUrl: './punto-once-lista.page.html',
  styleUrls: ['./punto-once-lista.page.scss'],
})
export class PuntoOnceListaPage implements OnInit {

  datos: any = {
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
    check7: false,
    check8: false,
    check9: false,
    check10: false,
    check11: false,
    check12: false,
    check13: false,
    check14: false,
    check15: false,
    check16: false,
    check17: false,
    check18: false,
    check19: false,
    check20: false,
    check21: false,
    check22: false,
    check23: false,
    check24: false,
    check25: false,
    check26: false,
    check27: false,
    check28: false,
    check29: false,
    num1: '',
    num2: '',
    num3: '',
    num4: '',
    num5: '',
    num6: '',
    num7: '',
    num8: '',
    num9: '',
    num10: '',
    num11: '',
    num12: '',
    num13: '',
    num14: '',
    num15: '',
    num16: '',
    num17: '',
    num18: '',
};

  constructor( private pdfMaker: PdfMakerService, public toast: ToastController ) { }

  ngOnInit() {
  }

  async enviarForm(formulario) {
    console.log(this.datos);
    const toast = await this.datos.create({
        message: 'Datos guardados',
        duration: 2000
    });
    toast.present();
  }

  pdf() {
    const dd = {
      header: () => {
        return {
          table: {
            widths: [740], heights: [50, 15, 15],
            body: [
              [{text: ''}],
              [{text: 'XI. INTEGRIDAD MECÁNICA', alignment: 'center', bold: true}],
              [{text: 'INFORMACIÓN DE LOS EQUIPOS', alignment: 'center', bold: true, fillColor: '#ddd'}],
            ]
          },
          margin: [22, 15]
        };
      },
      footer: () => {
        return {
          table: {
            headerRows: 1,
            widths: [750],
            body : [
              [''],
              [''],
              ['']
            ]
          },
          layout : 'headerLineOnly',
          margin: [30, 85]
        };
      },
      content: [
        {
            table: {
                widths: [250, 20, 200, 200],
                body: [
                    [
                        {text: 'PRODUCTO MANEJADO', fillColor: '#ddd', bold: true, colSpan: 2},
                        {},
                        {text: 'NO. DE TANQUES', fillColor: '#ddd', bold: true},
                        {text: 'NO. DE DISPENSARIOS POR TANQUE', fillColor: '#ddd', bold: true},
                    ],
                    [
                        {text: 'MAGNA'},
                        {text: `${this.datos.check1}`, alignment: 'center'},
                        {text: `${this.datos.num1}`, alignment: 'center'},
                        {text: `${this.datos.num2}`, alignment: 'center'},
                    ],
                    [
                        {text: 'PREMIUM'},
                        {text: `${this.datos.check2}`, alignment: 'center'},
                        {text: `${this.datos.num3}`, alignment: 'center'},
                        {text: `${this.datos.num4}`, alignment: 'center'},
                    ],
                    [
                        {text: 'DIESEL'},
                        {text: `${this.datos.check3}`, alignment: 'center'},
                        {text: `${this.datos.num5}`, alignment: 'center'},
                        {text: `${this.datos.num6}`, alignment: 'center'},
                    ],
                ]
            },
        },
        {text: '\n'},
        {
          table: {
              widths: [30, 150, 60, 310, 45, 45, 45],
              body: [
                [
                    {text: 'NO.', bold: true, fillColor: '#ddd', alignment: 'center'},
                    {text: 'TIPO DE EQUIPO', bold: true, fillColor: '#ddd'},
                    {text: 'CANTIDAD', bold: true, fillColor: '#ddd'},
                    {text: 'DESCRIPCIÓN', bold: true, fillColor: '#ddd'},
                    {text: 'PRODUCTO', bold: true, fillColor: '#ddd', colSpan: 3},
                    {},
                    {}
                ],
                [
                    {text: '1', alignment: 'center'},
                    {text: 'Tanque Horizontal'},
                    {text: ''},
                    {text: 'Almacenamiento de gasolina'},
                    {text: 'MG'},
                    {text: 'PR'},
                    {text: 'DL'},
                ],
                [
                    {text: '2', alignment: 'center'},
                    {text: 'Dispensario'},
                    {text: ''},
                    {text: 'Despacho de producto a vehículos'},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
                [
                    {text: '3', alignment: 'center'},
                    {text: 'Extintores'},
                    {text: ''},
                    {text: 'Protección C.I.'},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
                [
                    {text: '4', alignment: 'center'},
                    {text: 'Válvula presión-vacío'},
                    {text: ''},
                    {text: 'Retención -expulsión de vapores de gasolina'},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
                [
                    {text: '5', alignment: 'center'},
                    {text: 'Arrestador de flama'},
                    {text: ''},
                    {text: 'Retención de flamas'},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
                [
                    {text: '6', alignment: 'center'},
                    {text: 'Pozos de Observación'},
                    {text: ''},
                    {text: 'Monitoreo de fugas'},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
                [
                    {text: '7', alignment: 'center'},
                    {text: 'Drenajes'},
                    {text: ''},
                    {text: 'Contención y conducción de agua aceitosa'},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
                [
                    {text: '8', alignment: 'center'},
                    {text: 'Trampa de combustible'},
                    {text: ''},
                    {text: 'Contención y separación de producto con agua'},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
                [
                    {text: '9', alignment: 'center'},
                    {text: 'Tierras Eléctricas'},
                    {text: ''},
                    {text: 'Disipación de cargas estáticas y atmosféricas '},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
                [
                    {text: '10', alignment: 'center'},
                    {text: 'Control de Inventarios'},
                    {text: ''},
                    {text: 'Medición de nivel de producto en tanques'},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
                [
                    {text: '11', alignment: 'center'},
                    {text: 'Sensores de fugas'},
                    {text: ''},
                    {text: 'Detección de fugas de producto en tanques y accesorios'},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
                [
                    {text: '12', alignment: 'center'},
                    {text: 'Tablero de control Eléctrico'},
                    {text: ''},
                    {text: 'Control de suministro de e.e., arranque y paro de bombas'},
                    {text: ''},
                    {text: ''},
                    {text: ''},
                ],
              ]
          }
        },
        {text: '\n\n'},
        {
            table: {
                widths: [30, 160, 120, 403],
                body: [
                    [
                        {text: 'NO.', bold: true, fillColor: '#ddd', alignment: 'center'},
                        {text: 'TIPO DE EQUIPO', bold: true, fillColor: '#ddd'},
                        {text: 'APLICA/NO APLICA', bold: true, fillColor: '#ddd'},
                        {text: 'DESCRIPCIÓN', bold: true, fillColor: '#ddd'},
                    ],
                    [
                        {text: '13', alignment: 'center'},
                        {text: 'Compresor'},
                        {},
                        {}
                    ],
                    [
                        {text: '14', alignment: 'center'},
                        {text: 'Pararrayos'},
                        {},
                        {}
                    ],
                    [
                        {text: '15', alignment: 'center'},
                        {text: 'Área cambio de aceite'},
                        {},
                        {}
                    ],
                    [
                        {text: '16', alignment: 'center'},
                        {text: 'Hidroneumático'},
                        {},
                        {}
                    ],
                    [
                        {text: '17', alignment: 'center'},
                        {text: 'Cisterna'},
                        {},
                        {}
                    ],
                    [
                        {text: '18', alignment: 'center'},
                        {text: 'Bodega de lubricantes'},
                        {},
                        {}
                    ],
                    [
                        {text: '19', alignment: 'center'},
                        {text: 'Bomba de agua'},
                        {},
                        {}
                    ],
                    [
                        {text: '20', alignment: 'center'},
                        {text: 'Almacén de residuos peligrosos'},
                        {},
                        {}
                    ],
                    [
                        {text: '21', alignment: 'center'},
                        {text: 'Paros de emergencia'},
                        {},
                        {}
                    ],
                    [
                        {text: '22', alignment: 'center'},
                        {text: 'Transformador'},
                        {},
                        {}
                    ],
                    [
                        {text: '23', alignment: 'center'},
                        {text: 'Motobomba'},
                        {},
                        {}
                    ],
                    [
                        {text: '24', alignment: 'center'},
                        {text: 'Tubería de venteo'},
                        {},
                        {}
                    ],
                ]
            }
        }
      ],
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Equipos');
  }
}
