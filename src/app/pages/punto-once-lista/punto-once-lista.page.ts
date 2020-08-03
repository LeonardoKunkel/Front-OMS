import { FindPolitica } from './../../interfaces/PoliticaInterface';
import { IconoEstacionService } from './../../services/iconosEstacion.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { EquipoCriticoService } from './../../services/Elemento 11/equipo-critico.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { ToastController, AlertController, NavController } from '@ionic/angular';

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
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0,
    num6: 0,
    num7: 0,
    num8: 0,
    num9: 0,
    num10: 0,
    num11: 0,
    num12: 0,
    num13: 0,
    num14: 0,
    num15: 0,
    num16: 0,
    num17: 0,
    num18: 0,
  };

  datosm: any = {
    check1: '',
    check2: '',
    check3: '',
    check4: '',
    check5: '',
    check6: '',
    check7: '',
    check8: '',
    check9: '',
    check10: '',
    check11: '',
    check12: '',
    check13: '',
    check14: '',
    check15: '',
    check16: '',
    check17: '',
    check18: '',
    check19: '',
    check20: '',
    check21: '',
    check22: '',
    check23: '',
    check24: '',
    check25: '',
    check26: '',
    check27: '',
    check28: '',
  };
  myImage = null;
  firmaEstacion = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;


  constructor(
    private pdfMaker: PdfMakerService,
    public toast: ToastController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private eqCrit: EquipoCriticoService,
    private marca: MarcaAguaServiceService,
    private icono: IconoEstacionService
  ) {
      this.checar();
      this.getOnce();
    }

  ngOnInit() {
    this.marcaAgua();
    this.imagen64();
    // this.getIcono();
  }

  // getIcono() {
  //   return this.icono.getPolitica().subscribe((data: any) => {
  //     this.iconoEstacion = data.FindPolitica[data.findPolitica.length - 1].imagen;
  //   });
  // }

  imagen64() {
    this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
      base64 => {
          this.myImage = base64;
      }
    );
  }

  marcaAgua() {
    return this.marca.getMarcaAgua().subscribe((data: any) => {
      // console.log(data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua);
      this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua;
    });
  }

  convertFileDataURLviaFileReader(url: string) {
    return Observable.create(observer => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onload = function() {
        const reader: FileReader = new FileReader();
        reader.onloadend = function() {
          observer.next(reader.result);
          observer.complete();
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }

  getOnce() {
    this.eqCrit.getOnce().subscribe((data: any) => {
      console.log(data.findOnce[data.findOnce.length - 1]);
      this.datos = data.findOnce[data.findOnce.length - 1];
    });
  }

  crear() {
    return this.eqCrit.crearOnce(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

  async enviarForm() {
    this.crear();
    this.checar();
    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  checar() {
    if (this.datos.check1 === true) {
      this.datosm.check1 = 'X';
    } else {
      this.datosm.check1 = '';
    }
    if (this.datos.check2 === true) {
      this.datosm.check2 = 'X';
    } else {
      this.datosm.check2 = '';
    }
    if (this.datos.check3 === true) {
      this.datosm.check3 = 'X';
    } else {
      this.datosm.check3 = '';
    }
    if (this.datos.check4 === true) {
      this.datosm.check4 = 'X';
    } else {
      this.datosm.check4 = '';
    }
    if (this.datos.check5 === true) {
      this.datosm.check5 = 'X';
    } else {
      this.datosm.check5 = '';
    }
    if (this.datos.check6 === true) {
      this.datosm.check6 = 'X';
    } else {
      this.datosm.check6 = '';
    }
    if (this.datos.check7 === true) {
      this.datosm.check7 = 'X';
    } else {
      this.datosm.check7 = '';
    }
    if (this.datos.check8 === true) {
      this.datosm.check8 = 'X';
    } else {
      this.datosm.check8 = '';
    }
    if (this.datos.check9 === true) {
      this.datosm.check9 = 'X';
    } else {
      this.datosm.check9 = '';
    }
    if (this.datos.check10 === true) {
      this.datosm.check10 = 'X';
    } else {
      this.datosm.check10 = '';
    }
    if (this.datos.check11 === true) {
      this.datosm.check11 = 'X';
    } else {
      this.datosm.check11 = '';
    }
    if (this.datos.check12 === true) {
      this.datosm.check12 = 'X';
    } else {
      this.datosm.check12 = '';
    }
    if (this.datos.check13 === true) {
      this.datosm.check13 = 'X';
    } else {
      this.datosm.check13 = '';
    }
    if (this.datos.check14 === true) {
      this.datosm.check14 = 'X';
    } else {
      this.datosm.check14 = '';
    }
    if (this.datos.check15 === true) {
      this.datosm.check15 = 'X';
    } else {
      this.datosm.check15 = '';
    }
    if (this.datos.check16 === true) {
      this.datosm.check16 = 'Aplica';
    } else {
      this.datosm.check16 = 'No Aplica';
    }
    if (this.datos.check17 === true) {
      this.datosm.check17 = 'Aplica';
    } else {
      this.datosm.check17 = 'No Aplica';
    }
    if (this.datos.check18 === true) {
      this.datosm.check18 = 'Aplica';
    } else {
      this.datosm.check18 = 'No Aplica';
    }
    if (this.datos.check19 === true) {
      this.datosm.check19 = 'Aplica';
    } else {
      this.datosm.check19 = 'No Aplica';
    }
    if (this.datos.check20 === true) {
      this.datosm.check20 = 'Aplica';
    } else {
      this.datosm.check20 = 'No Aplica';
    }
    if (this.datos.check21 === true) {
      this.datosm.check21 = 'Aplica';
    } else {
      this.datosm.check21 = 'No Aplica';
    }
    if (this.datos.check22 === true) {
      this.datosm.check22 = 'Aplica';
    } else {
      this.datosm.check22 = 'No Aplica';
    }
    if (this.datos.check23 === true) {
      this.datosm.check23 = 'Aplica';
    } else {
      this.datosm.check23 = 'No Aplica';
    }
    if (this.datos.check24 === true) {
      this.datosm.check24 = 'Aplica';
    } else {
      this.datosm.check24 = 'No Aplica';
    }
    if (this.datos.check25 === true) {
      this.datosm.check25 = 'Aplica';
    } else {
      this.datosm.check25 = 'No Aplica';
    }
    if (this.datos.check26 === true) {
      this.datosm.check26 = 'Aplica';
    } else {
      this.datosm.check26 = 'No Aplica';
    }
    if (this.datos.check27 === true) {
      this.datosm.check27 = 'Aplica';
    } else {
      this.datosm.check27 = 'No Aplica';
    }
    if (this.datos.check28 === true) {
      this.datosm.check28 = 'Aplica';
    } else {
      this.datosm.check28 = 'No Aplica';
    }
    if (this.datos.num1 === '') {
      this.datosm.num1 = 0;
    }
    if (this.datos.num2 === '') {
      this.datosm.num2 = 0;
    }
    if (this.datos.num3 === '') {
      this.datosm.num3 = 0;
    }
    if (this.datos.num4 === '') {
      this.datosm.num4 = 0;
    }
    if (this.datos.num5 === '') {
      this.datosm.num5 = 0;
    }
    if (this.datos.num6 === '') {
      this.datosm.num6 = 0;
    }
    if (this.datos.num7 === '') {
      this.datosm.num7 = 0;
    }
    if (this.datos.num8 === '') {
      this.datosm.num8 = 0;
    }
    if (this.datos.num9 === '') {
      this.datosm.num9 = 0;
    }
    if (this.datos.num10 === '') {
      this.datosm.num10 = 0;
    }
    if (this.datos.num11 === '') {
      this.datosm.num11 = 0;
    }
    if (this.datos.num12 === '') {
      this.datosm.num12 = 0;
    }
    if (this.datos.num13 === '') {
      this.datosm.num13 = 0;
    }
    if (this.datos.num14 === '') {
      this.datosm.num14 = 0;
    }
    if (this.datos.num15 === '') {
      this.datosm.num15 = 0;
    }
    if (this.datos.num16 === '') {
      this.datosm.num16 = 0;
    }
    if (this.datos.num17 === '') {
      this.datosm.num17 = 0;
    }
    if (this.datos.num18 === '') {
      this.datosm.num18 = 0;
    }
  }

  pdf() {
    const marcaAgua = this.marcaAguaEstacion;
    const footer = this.myImage;
    // const iconoEstacion = this.iconoEstacion;
    this.checar();
    const dd = {
      background(currentPage, pageSize) {
        return {
          image: `${marcaAgua}`, width: 290, height: 400,
          absolutePosition: {x: 250, y: 120}, opacity: 0.5
        };
      },
      header: () => {
        return {
          table: {
            widths: [740], heights: [50, 15, 15],
            body: [
              [
                {
                  // image: `${iconoEstacion}`,
                  // width: 70,
                  // height: 70,
                  // alignment: 'center',
                  // border: [true, true, false, true]
                }
              ],
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
            widths: [700],
            body : [
              [
                {
                  image: `${footer}`,
                  width: 510,
                  height: 80,
                  alignment: 'center'
                }
              ]
            ]
          },
          layout : 'headerLineOnly',
          margin: [50, 20]
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
                {text: `${this.datosm.check1}`, alignment: 'center'},
                {text: `${this.datos.num1}`, alignment: 'center'},
                {text: `${this.datos.num2}`, alignment: 'center'},
              ],
              [
                {text: 'PREMIUM'},
                {text: `${this.datosm.check2}`, alignment: 'center'},
                {text: `${this.datos.num3}`, alignment: 'center'},
                {text: `${this.datos.num4}`, alignment: 'center'},
              ],
              [
                {text: 'DIESEL'},
                {text: `${this.datosm.check3}`, alignment: 'center'},
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
                {text: `${this.datos.num7}`},
                {text: 'Almacenamiento de gasolina'},
                {text: 'MG'},
                {text: 'PR'},
                {text: 'DL'},
              ],
              [
                {text: '2', alignment: 'center'},
                {text: 'Dispensario'},
                {text: `${this.datos.num8}`},
                {text: 'Despacho de producto a vehículos'},
                {text: 'MG'},
                {text: 'PR'},
                {text: 'DL'},
              ],
              [
                {text: '3', alignment: 'center'},
                {text: 'Extintores'},
                {text: `${this.datos.num9}`},
                {text: 'Protección C.I.'},
                {text: '', colSpan: 3, fillColor: '#ddd'},
                {text: ''},
                {text: ''},
              ],
              [
                {text: '4', alignment: 'center'},
                {text: 'Válvula presión-vacío'},
                {text: `${this.datos.num10}`},
                {text: 'Retención -expulsión de vapores de gasolina'},
                {text: 'MG'},
                {text: 'PR'},
                {text: 'DL'},
              ],
              [
                {text: '5', alignment: 'center'},
                {text: 'Arrestador de flama'},
                {text: `${this.datos.num11}`},
                {text: 'Retención de flamas'},
                {text: 'Diesel', colSpan: 3},
                {text: ''},
                {text: ''},
              ],
              [
                {text: '6', alignment: 'center'},
                {text: 'Pozos de Observación'},
                {text: `${this.datos.num12}`},
                {text: 'Monitoreo de fugas'},
                {text: '', colSpan: 3, fillColor: '#ddd'},
                {text: ''},
                {text: ''},
              ],
              [
                {text: '7', alignment: 'center'},
                {text: 'Drenajes'},
                {text: `${this.datos.num13}`},
                {text: 'Contención y conducción de agua aceitosa'},
                {text: '', colSpan: 3, fillColor: '#ddd'},
                {text: ''},
                {text: ''},
              ],
              [
                {text: '8', alignment: 'center'},
                {text: 'Trampa de combustible'},
                {text: `${this.datos.num14}`},
                {text: 'Contención y separación de producto con agua'},
                {text: '', colSpan: 3, fillColor: '#ddd'},
                {text: ''},
                {text: ''},
              ],
              [
                {text: '9', alignment: 'center'},
                {text: 'Tierras Eléctricas'},
                {text: `${this.datos.num15}`},
                {text: 'Disipación de cargas estáticas y atmosféricas '},
                {text: '', colSpan: 3, fillColor: '#ddd'},
                {text: ''},
                {text: ''},
              ],
              [
                {text: '10', alignment: 'center'},
                {text: 'Control de Inventarios'},
                {text: `${this.datos.num16}`},
                {text: 'Medición de nivel de producto en tanques'},
                {text: '', colSpan: 3, fillColor: '#ddd'},
                {text: ''},
                {text: ''},
              ],
              [
                {text: '11', alignment: 'center'},
                {text: 'Sensores de fugas'},
                {text: `${this.datos.num17}`},
                {text: 'Detección de fugas de producto en tanques y accesorios'},
                {text: '', colSpan: 3, fillColor: '#ddd'},
                {text: ''},
                {text: ''},
              ],
              [
                {text: '12', alignment: 'center'},
                {text: 'Tablero de control Eléctrico'},
                {text: `${this.datos.num16}`},
                {text: 'Control de suministro de e.e., arranque y paro de bombas'},
                {text: '', colSpan: 3, fillColor: '#ddd'},
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
                {text: `${this.datosm.check16}`, alignment: 'center'},
                {text: 'Máquina para aumentar la presión de un fluido'}
              ],
              [
                {text: '14', alignment: 'center'},
                {text: 'Pararrayos'},
                {text: `${this.datosm.check17}`, alignment: 'center'},
                {text: 'Instrumento para atraer rayos ionizados'}
              ],
              [
                {text: '15', alignment: 'center'},
                {text: 'Área cambio de aceite'},
                {text: `${this.datosm.check18}`, alignment: 'center'},
                {text: 'Espacio determinado'}
              ],
              [
                {text: '16', alignment: 'center'},
                {text: 'Hidroneumático'},
                {text: `${this.datosm.check19}`, alignment: 'center'},
                {text: 'Bombeo de Agua residual'}
              ],
              [
                {text: '17', alignment: 'center'},
                {text: 'Cisterna'},
                {text: `${this.datosm.check20}`, alignment: 'center'},
                {text: 'Depósito para almacenar agua'}
              ],
              [
                {text: '18', alignment: 'center'},
                {text: 'Bodega de lubricantes'},
                {text: `${this.datosm.check21}`, alignment: 'center'},
                {text: 'Espacio determinado'}
              ],
              [
                {text: '18', alignment: 'center'},
                {text: 'Planta de Emergencia'},
                {text: `${this.datosm.check22}`, alignment: 'center'},
                {text: 'Espacio determinado'}
              ],
              [
                {text: '19', alignment: 'center'},
                {text: 'Bomba de agua'},
                {text: `${this.datosm.check23}`, alignment: 'center'},
                {text: 'Máquina para distribuir agua'}
              ],
              [
                {text: '20', alignment: 'center'},
                {text: 'Almacén de residuos peligrosos'},
                {text: `${this.datosm.check24}`, alignment: 'center'},
                {text: 'Almacenaje marcado'}
              ],
              [
                {text: '21', alignment: 'center'},
                {text: 'Paros de emergencia'},
                {text: `${this.datosm.check25}`, alignment: 'center'},
                {text: 'Botones visibles'}
              ],
              [
                {text: '22', alignment: 'center'},
                {text: 'Transformador'},
                {text: `${this.datosm.check26}`, alignment: 'center'},
                {text: 'Instrumento para regular las tensiones eléctricas'}
              ],
              [
                {text: '23', alignment: 'center'},
                {text: 'Motobomba'},
                {text: `${this.datosm.check27}`, alignment: 'center'},
                {text: 'Bomba con motor de gasolina'}
              ],
              [
                {text: '24', alignment: 'center'},
                {text: 'Tubería de venteo'},
                {text: `${this.datosm.check28}`, alignment: 'center'},
                {text: 'Venteo de emergencia'}
              ],
            ]
          }
        },
        {text: '\n\n\n'},
        {
          table: {
            widths: [560, 170],
            body: [
              [
                {text: 'REVISÓ:\n\nGamaliel Chavarría\nREPRESENTANTE TÉCNICO'},
                {text: 'MES:'}
              ]
            ]
          }
        }
      ],
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Equipos_Críticos');
  }
}
