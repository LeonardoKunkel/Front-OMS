import { FirmaEstacionServiceService } from './../../services/firma-estacion-service.service';
import { IconoEstacionService } from './../../services/iconosEstacion.service';
import { EstacionServicioDatosService } from './../../services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { ToastController, Platform } from '@ionic/angular';
import { EvaluacionCatorceService } from 'src/app/services/Elemento 14/evaluacion-catorce.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';

@Component({
  selector: 'app-punto-catorce-evaluacion',
  templateUrl: './punto-catorce-evaluacion.page.html',
  styleUrls: ['./punto-catorce-evaluacion.page.scss'],
})
export class PuntoCatorceEvaluacionPage implements OnInit {

  datos: any = {
    fecha1: 0,
    fecha2: 0,
    fecha3: 0,
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
    trimestre: ''
  };

  datos2: any = {
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
    check22: ''
  };

  myImage = null;
  firmaEstacion = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;
  firmaRepresentante = null;
  datosEstacion: any = {
    calleNumero: '',
    ciudad: '',
    colonia: '',
    correoElectronico: '',
    cp: '',
    estado: '',
    gerenteEstacion: '',
    maximaAutoridad: '',
    nombreEstacionServicio: '',
    representanteTecnico: '',
    telefono: ''
  };

  constructor(
    private pdfMaker: PdfMakerService,
    public toast: ToastController,
    private evalReqLeg: EvaluacionCatorceService,
    private marca: MarcaAguaServiceService,
    private datosEstacionService: EstacionServicioDatosService,
    private icono: IconoEstacionService,
    private firma: FirmaEstacionServiceService
  ) {
    this.consultar();
    this.cambiar();
    this.getFirma();
    this.getIcono();
    this.getDatosEstacion();
  }

  ngOnInit() {
    this.imagen64();
    this.marcaAgua();
  }

  getDatosEstacion() {
    this.datosEstacionService.getEstacion().subscribe((data: any) => {
      // console.log(data.findEstacion[data.findEstacion.length -1]);
      this.datosEstacion = data.findEstacion[data.findEstacion.length - 1];
    });
  }
  getIcono() {
    this.icono.getPolitica().subscribe((data: any ) => {
      console.log(data);
      this.iconoEstacion =  data.findPolitica[data.findPolitica.length - 1].imagen;
    });
  }

  getFirma() {
    this.firma.getFirmaEstacion().subscribe((data: any) => {
      // console.log(data);
      this.firmaEstacion = this.firma = data.findFirma[data.findFirma.length - 1].firma;
    });
  }

  imagen64() {
    this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
      base64 => {
        this.myImage = base64;
      }
    );
  }

  marcaAgua() {
    return this.marca.getMarcaAgua().subscribe((data: any) => {
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

  enviar() {
    return this.evalReqLeg.crearEvaluacion(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

  consultar() {
    this.evalReqLeg.getEvaluacion().subscribe((data: any) => {
      this.datos = data.findEvaluacion[data.findEvaluacion.length - 1];
      console.log(data.findEvaluacion[data.findEvaluacion.length - 1]);
    });
  }

  cambiar() {
    if (this.datos.check1 === true) {
      this.datos2.check1 = 'Cumple';
    } else {
      this.datos2.check1 = 'No Cumple';
    }
    if (this.datos.check2 === true) {
      this.datos2.check2 = 'Cumple';
    } else {
      this.datos2.check2 = 'No Cumple';
    }
    if (this.datos.check3 === true) {
      this.datos2.check3 = 'Cumple';
    } else {
      this.datos2.check3 = 'No Cumple';
    }
    if (this.datos.check4 === true) {
      this.datos2.check4 = 'Cumple';
    } else {
      this.datos2.check4 = 'No Cumple';
    }
    if (this.datos.check5 === true) {
      this.datos2.check5 = 'Cumple';
    } else {
      this.datos2.check5 = 'No Cumple';
    }
    if (this.datos.check6 === true) {
      this.datos2.check6 = 'Cumple';
    } else {
      this.datos2.check6 = 'No Cumple';
    }
    if (this.datos.check7 === true) {
      this.datos2.check7 = 'Cumple';
    } else {
      this.datos2.check7 = 'No Cumple';
    }
    if (this.datos.check8 === true) {
      this.datos2.check8 = 'Cumple';
    } else {
      this.datos2.check8 = 'No Cumple';
    }
    if (this.datos.check9 === true) {
      this.datos2.check9 = 'Cumple';
    } else {
      this.datos2.check9 = 'No Cumple';
    }
    if (this.datos.check10 === true) {
      this.datos2.check10 = 'Cumple';
    } else {
      this.datos2.check10 = 'No Cumple';
    }
    if (this.datos.check11 === true) {
      this.datos2.check11 = 'Cumple';
    } else {
      this.datos2.check11 = 'No Cumple';
    }
    if (this.datos.check12 === true) {
      this.datos2.check12 = 'Cumple';
    } else {
      this.datos2.check12 = 'No Cumple';
    }
    if (this.datos.check13 === true) {
      this.datos2.check13 = 'Cumple';
    } else {
      this.datos2.check13 = 'No Cumple';
    }
    if (this.datos.check14 === true) {
      this.datos2.check14 = 'Cumple';
    } else {
      this.datos2.check14 = 'No Cumple';
    }
    if (this.datos.check15 === true) {
      this.datos2.check15 = 'Cumple';
    } else {
      this.datos2.check15 = 'No Cumple';
    }
    if (this.datos.check16 === true) {
      this.datos2.check16 = 'Cumple';
    } else {
      this.datos2.check16 = 'No Cumple';
    }
    if (this.datos.check17 === true) {
      this.datos2.check17 = 'Cumple';
    } else {
      this.datos2.check17 = 'No Cumple';
    }
    if (this.datos.check18 === true) {
      this.datos2.check18 = 'Cumple';
    } else {
      this.datos2.check18 = 'No Cumple';
    }
    if (this.datos.check19 === true) {
      this.datos2.check19 = 'Cumple';
    } else {
      this.datos2.check19 = 'No Cumple';
    }
    if (this.datos.check20 === true) {
      this.datos2.check20 = 'Cumple';
    } else {
      this.datos2.check20 = 'No Cumple';
    }
    if (this.datos.check21 === true) {
      this.datos2.check21 = 'Cumple';
    } else {
      this.datos2.check21 = 'No Cumple';
    }
    if (this.datos.check22 === true) {
      this.datos2.check22 = 'Cumple';
    } else {
      this.datos2.check22 = 'No Cumple';
    }
    const fechaa = new Date().getFullYear();
    this.datos.fecha1 = fechaa;
  }

  async enviarForm() {
    this.enviar();
    this.cambiar();
    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  pdf() {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const marcaAgua = this.marcaAguaEstacion;
    const iconoEstacion = this.iconoEstacion;
    const firmaEstacion = this.firmaEstacion;
    const footer = this.myImage;
    const ddd = this.datosEstacion;
    this.cambiar();
    const dd = {
      userPassword: '123',
      ownerPassword: '123456',
      permissions: {
        printing: 'highResolution', // 'lowResolution'
        modifying: false,
        copying: false,
        annotating: true,
        fillingForms: true,
        contentAccessibility: true,
        documentAssembly: true
      },
      background() {
        return {
          image: `${marcaAgua}`, width: 290, height: 400,
          absolutePosition: {x: 250, y: 120}, opacity: 0.5
        };
      },
      header: () => {
        return {
          table: {
            widths: [150, 581],
            heights: [30, 10, 10],
            body: [
              [
                {
                  image: `${iconoEstacion}`,
                  width: 45,
                  height: 60,
                  alignment: 'left',
                  border: [true, true, false, false],
                  margin: [10, 0]
                },
                {
                  text: `${ddd.nombreEstacionServicio}`,
                  bold: true,
                  fontSize: 15,
                  alignment: 'center',
                  margin: [0, 15],
                  border: [false, true, true, true]
                }
              ],
              [
                {
                  text: 'XIV. MONITOREO, VERIFICACIÓN Y EVALUACIÓN',
                  alignment: 'center',
                  bold: true,
                  colSpan: 2
                }
              ],
              [
                {
                  text: 'EVALUACIÓN DEL CUMPLIMIENTO DE REQUISITOS LEGALES',
                  alignment: 'center',
                  bold: true,
                  fillColor: '#ddd',
                  colSpan: 2
                }
              ],
            ]
          },
          margin: [22, 15]
        };
      },
      footer(currentPage, pageCount) {
        return {
          table: {
            headerRows: 1,
            widths: [700],
            body : [
              [
                {
                  columns: [
                    'Página' + currentPage.toString() + ' de ' + pageCount,
                    {text: `FS-31 Rev.0, ${day}/${month}/${year}`, width: 180}
                  ]
                }
              ],
              [
                {
                  image: `${footer}`,
                  width: 510,
                  height: 60,
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
            widths: [400, 200, 100],
            body: [
              [
                {text: `Fecha de evaluación: ${this.datos.fecha2}`},
                {text: `Trimestre: ${this.datos.trimestre}`},
                {text: `Año: ${this.datos.fecha1}`}
              ]
            ]
          },
          layout: 'noBorders'
        },
        {
          table: {
            widths: [80, 160, 70, 90, 70, 225],
            body: [
              [
                {text: 'Materia', alignment: 'center', bold: true, fillColor: '#ddd'},
                {text: 'Requisito Legal', alignment: 'center', bold: true, fillColor: '#ddd'},
                {text: 'Fecha del documento', alignment: 'center', bold: true, fillColor: '#ddd'},
                {text: '¿Presenta cambio?', alignment: 'center', bold: true, fillColor: '#ddd'},
                {text: 'Resultado', alignment: 'center', bold: true, fillColor: '#ddd'},
                {text: 'Observaciones', alignment: 'center', bold: true, fillColor: '#ddd'},
              ],
              [
                {text: 'ASEA', alignment: 'center', bold: true, fillColor: '#ddd', colSpan: 6},
              ],
              [
                {text: 'Emisiones a la atmósfera', alignment: 'center', fontSize: 9},
                {text: 'Licencia Ambiental única del sector Hidrocarburos', fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check1}`},
                {},
              ],
              [
                {text: 'Residuos', alignment: 'center', fontSize: 9},
                {text: 'Cédula de Operación anual del sector Hidrocarburos', fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check2}`},
                {},
              ],
              [
                {text: 'Impacto Ambiental', alignment: 'center', fontSize: 9},
                {text: `Autorización en materia de impacto Ambiental,
                        a través de una Manifestación de Impacto Ambiental (MIA)`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check3}`},
                {},
              ],
              [
                {text: 'Seguridad y Protección Ambiental', alignment: 'center', fontSize: 9},
                {text: `Dictamen de la NOM-005-ASEA-2016 otrogado por una
                        unidad de verificación`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check4}`},
                {},
              ],
              [
                {text: 'Generador de residuos de manejo especial y/o peligrosos', alignment: 'center', fontSize: 9},
                {text: `Contar con su registro como generador de residuos
                        (manejo especial y/o peligrosos) ante la ASEA`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check5}`},
                {},
              ],
              [
                {text: 'Seguridad y Protección Ambiental', alignment: 'center', fontSize: 9},
                {text: `Contar con un sistema de administración en seguridad
                        industrial, seguridad operativa y protección del medio ambiente
                        (SASISOPA), registrado ante la ASEA`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check6}`},
                {},
              ],
              [
                {text: 'COMISIÓN REGULADORA DE ENERGÍA', alignment: 'center', bold: true, fillColor: '#ddd', colSpan: 6},
              ],
              [
                {text: 'Regulación para expendio al público', alignment: 'center', fontSize: 9},
                {text: `Contar con Permiso de expendio de petrolíferos en
                        estaciones de servicio vigente`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check7}`},
                {},
              ],
              [
                {text: 'SECRETARÍA DEL TRABAJO Y PREVENSIÓN SOCIAL', alignment: 'center', bold: true, fillColor: '#ddd', colSpan: 6},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Tener las áreas de la estación delimitadas de tal manera
                        que se disponga de espacios seguros para la realización de
                        las actividades de los trabajadores de acuerdo a la NOM-001-STPS-2008`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check8}`},
                {},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Exhibir ante la autoridad laboral, cuando así lo solicite,
                        la información y documentación que esta NOM-002-STPS-2010
                        le obligue a elaborar o poseer`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check9}`},
                {},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Exhibir ante la autoridad laboral, cuando así lo solicite,
                        la información y documentación que esta NOM-005-STPS-1998
                        le obligue a elaborar o poseer`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check10}`},
                {},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Exhibir ante la autoridad laboral, cuando así lo solicite,
                        la información y documentación que esta NOM-009-STPS-2011 le obligue
                        a elaborar o poseer`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check11}`},
                {},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Contar con evidencia del uso de equipo de protección personal
                        requerido para la realización de las actividades de acuerdo a
                        la NOM-017-STPS-2008`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check12}`},
                {},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Exhibir ante la autoridad laboral, cuando así lo solicite,
                        la información y documentación que esta NOM-020-STPS-2011
                        le obligue a elaborar o poseer, cuando esta así lo solicite`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check13}`},
                {},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Exhibir ante la autoridad laboral, cuando así lo solicite,
                        la información y documentación que esta NOM-022-STPS-2008
                        le obligue a elaborar o poseer`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check14}`},
                {},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Exhibir ante la autoridad laboral, cuando así lo solicite,
                        la información y documentación que esta NOM-025-STPS-2008
                        le obligue a elaborar o poseer`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check15}`},
                {},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Exhibir ante la autoridad laboral, cuando así lo solicite,
                        la información y documentación que esta NOM-026-STPS-2008
                        le obligue a elaborar o poseer`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check16}`},
                {},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Exhibir los documentos que esta NOM-029-STPS-2011 le obligue
                        a elaborar o poseer`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check17}`},
                {},
              ],
              [
                {text: 'Seguridad e higiene', alignment: 'center', fontSize: 9},
                {text: `Exhibir ante la autoridad laboral, cuando así lo solicite,
                        la información y documentación que esta NOM-017-STPS-2008
                        le obligue a elaborar o poseer`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check18}`},
                {},
              ],
              [
                {text: 'SEMARNAT', alignment: 'center', bold: true, fillColor: '#ddd', colSpan: 6},
              ],
              [
                {text: 'Protección ambiental', alignment: 'center', fontSize: 9},
                {text: `Cumplir con los parámetros de descarga de aguas residuales a
                        bienes nacionales mediante pruebas de laboratorio NOM-001-SEMARNAT-1996`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check19}`},
                {},
              ],
              [
                {text: 'Protección ambiental', alignment: 'center', fontSize: 9},
                {text: `Cumplir con los parámetros de descarga de aguas residuales a
                        bienes nacionales mediante pruebas de laboratorio NOM-002-SEMARNAT-1996`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check20}`},
                {},
              ],
              [
                {text: 'Protección ambiental', alignment: 'center', fontSize: 9},
                {text: `Tener Identificados y clasificados sus residuos peligrosos
                        NOM-052-SEMARNAT-1996`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check21}`},
                {},
              ],
              [
                {text: 'Protección ambiental', alignment: 'center', fontSize: 9},
                {text: `Almacenar sus residuos peligrosos de acuerdo a las tablas de
                        incompatibilidad de la norma NOM-054-SEMARNAT-1993`, fontSize: 9, alignment: 'justify'},
                {},
                {text: 'No', alignment: 'center'},
                {text: `${this.datos2.check22}`},
                {},
              ],
              [
                {text: 'LEGISLACIÓN ESTATAL', alignment: 'center', bold: true, fillColor: '#ddd', colSpan: 6},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: 'LEGISLACIÓN LOCAL', alignment: 'center', bold: true, fillColor: '#ddd', colSpan: 6},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {},
                {},
                {},
                {},
                {},
                {},
              ],
            ]
          }
        },
        {
          text: '\n\n'
        },
        {
          table: {
            widths: [241, 241, 241],
            body: [
              [
                {text: 'REVISADO POR:\n\nGamaliel Chavarría\nREPRESENTANTE TÉCNICO', alignment: 'center'},
                {text: 'APROBADO POR:\n\nSergio Lechuga\nMÁXIMA AUTORIDAD', alignment: 'center'},
                {text: 'FECHA DE APROBACIÓN:\n\n\n01/08/2018', alignment: 'center'},
              ]
            ]
          }
        }
      ],
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Evaluación_de_Requisitos_Legales');
  }
}
