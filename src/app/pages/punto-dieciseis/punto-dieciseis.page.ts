import { FirmaEstacionServiceService } from './../../services/firma-estacion-service.service';
import { EstacionServicioDatosService } from './../../services/estacion-servicio-datos.service';
import { IconoEstacionService } from './../../services/iconosEstacion.service';
import { MarcaAguaServiceService } from './../../services/marca-agua-service.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-punto-dieciseis',
  templateUrl: './punto-dieciseis.page.html',
  styleUrls: ['./punto-dieciseis.page.scss'],
})
export class PuntoDieciseisPage implements OnInit {

  myImage = null;
  firmaEstacion = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;
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
    private navCtrl: NavController,
    private pdfMaker: PdfMakerService,
    private marca: MarcaAguaServiceService,
    private firma: FirmaEstacionServiceService,
    private icono: IconoEstacionService,
    private datosEstacionService: EstacionServicioDatosService
  ) { this.getDatosEstacion(); }

  ngOnInit() {
    this.imagen64();
    this.marcaAgua();
    this.getFirma();
    this.getIcono();
  }

  goPuntoProcedimiento() {
    this.navCtrl.navigateForward('/elemento16-investigacion-accidentes');
  }

  goPuntoProcedimiento2() {
    this.navCtrl.navigateForward('/elemento16-arbol-fallas');
  }

  goPuntoFormato() {
    this.navCtrl.navigateForward('/elemento16-causa-raiz');
  }

  goPuntoEstadistica() {
    this.navCtrl.navigateForward('/elemento16-estadistica');
  }
  goEvidencia() {
    this.navCtrl.navigateForward('/punto-dieciseis-evidencia');
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

  marcaAgua() {
    return this.marca.getMarcaAgua().subscribe((data: any) => {
      // console.log(data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua);
      this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua;
    });
  }

  imagen64() {
    this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
      base64 => {
        this.myImage = base64;
      }
    );
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
          absolutePosition: {x: 250, y: 120}, opacity: 0.4
        };
      },
      header: () => {
        return {
          table: {
            widths: [150, 570],
            heights: [30, 10, 10],
            body: [
              [
                {
                  image: `${iconoEstacion}`,
                  width: 45,
                  height: 60,
                  alignment: 'center',
                  border: [true, true, false, true],
                },
                {
                  text: `${ddd.nombreEstacionServicio}`, bold: true, fontSize: 25, alignment: 'center', margin: [15, 20],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'XVI. INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES',
                  alignment: 'center',
                  bold: true
                },
                {}
              ],
              [
                {
                  text: 'COMPROBACIÓN DE HIPÓTESIS DE TRABAJO',
                  alignment: 'center',
                  bold: true,
                  fillColor: '#ddd'
                },
                {}
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
            widths: [650],
            body : [
              [
                {
                  columns: [
                    'Página' + currentPage.toString() + ' de ' + pageCount,
                    {text: `FO-12 Rev. 0,  ${day}/${month}/${year}`, width: 180}
                  ]
                }
              ],
              [
                {
                  image: `${footer}`,
                  pageBreak: 'after',
                  alignment: 'center',
                  width: 510,
                  height: 60
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
            widths: [100, 120, 130, 100, 130, 115],
            body: [
              [
                {text: 'DESCRIPCIÓN DEL INCIDENTE:\n\n', bold: true, colSpan: 6},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: 'ID DEL INCIDENTE', bold: true, alignment: 'center', fillColor: '#ddd'},
                {},
                {text: 'FECHA DEL INCIDENTE', bold: true, alignment: 'center', fillColor: '#ddd'},
                {},
                {text: 'FECHA DE ANÁLISIS', bold: true, alignment: 'center', fillColor: '#ddd'},
                {}
              ],
              [
                {text: 'ÁREA O EQUIPO', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: '', colSpan: 2},
                {},
                {text: 'SERVICIO', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: '', colSpan: 2},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [25, 120, 210, 100, 50, 190],
            body: [
              [
                {text: 'OBSERVACIÓN No.     ', colSpan: 2, bold: true, fontSize: 10},
                {},
                {text: 'DESCRIPCIÓN', colSpan: 4, bold: true, fontSize: 10},
                {},
                {},
                {}
              ],
              [
                {text: 'No.', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
                {text: 'DESCRIPCIÓN DE LA HIPÓTESIS', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
                {text: 'ACCIÓN DE COMPROBACIÓN', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
                {text: 'RESPONSABLE', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
                {text: 'FECHA', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
                {text: 'RESULTADOS', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 10},
              ],
              [
                {text: '1', alignment: 'center', fontSize: 10},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '2', alignment: 'center', fontSize: 10},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '3', alignment: 'center', fontSize: 10},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '4', alignment: 'center', fontSize: 10},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '5', alignment: 'center', fontSize: 10},
                {},
                {},
                {},
                {},
                {},
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [25, 350, 169, 169],
            body: [
              [
                {text: `PERSONAL QUE PARTICIPA EN LA
                        INVESTIGACIÓN CAUSA RAÍZ`, alignment: 'center', fillColor: '#ddd', bold: true, colSpan: 4, fontSize: 10},
                {},
                {},
                {},
              ],
              [
                {text: 'No.', alignment: 'center', bold: true, fontSize: 10},
                {text: 'NOMBRE', alignment: 'center', bold: true, fontSize: 10},
                {text: 'CARGA', alignment: 'center', bold: true, fontSize: 10},
                {text: 'FIRMA', alignment: 'center', bold: true, fontSize: 10},
              ],
              [
                {text: '1', alignment: 'center', bold: true, fontSize: 10},
                {},
                {},
                {}
              ],
              [
                {text: '2', alignment: 'center', bold: true, fontSize: 10},
                {},
                {},
                {}
              ],
              [
                {text: '3', alignment: 'center', bold: true, fontSize: 10},
                {},
                {},
                {}
              ],
              [
                {text: '4', alignment: 'center', bold: true, fontSize: 10},
                {},
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
    this.pdfMaker.generate(dd, 'Hipotesis');
  }

  pdf2() {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const marcaAgua = this.marcaAguaEstacion;
    const iconoEstacion = this.iconoEstacion;
    const firmaEstacion = this.firmaEstacion;
    const footer = this.myImage;
    const ddd = this.datosEstacion;
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
          absolutePosition: {x: 170, y: 210}, opacity: 0.4
        };
      },
      header() {
        return {
          table: {
            widths: [150, 400],
            heights: [50, 15, 15],
            body: [
              [
                {
                  image: `${iconoEstacion}`,
                  width: 45,
                  height: 60,
                  alignment: 'center',
                  border: [true, true, false, true],
                },
                {
                  text: `${ddd.nombreEstacionServicio}`,
                  bold: true,
                  fontSize: 25,
                  alignment: 'center',
                  margin: [15, 20],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'XVI. INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES',
                  alignment: 'center',
                  bold: true,
                  colSpan: 2
                },
                {}
              ],
              [
                {
                  text: 'ENTREVISTA DE TESTIGOS PARA LA ICR',
                  alignment: 'center',
                  bold: true,
                  fillColor: '#ddd',
                  colSpan: 2
                },
                {}
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
            widths: [510],
            body : [
              [
                {
                  columns: [
                    'Página' + currentPage.toString() + ' de ' + pageCount,
                    {text: `FS-09 Rev. 0,  ${day}/${month}/${year}`, width: 180}
                  ]
                }
              ],
              [
                {
                  image: `${footer}`,
                  pageBreak: 'after',
                  width: 510,
                  height: 60,
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
            widths: [560],
            body: [
              [
                {text: '1. GENERALES', bold: true, fillColor: '#ddd', fontSize: 9},
              ],
              [
                {text: 'Lugar y fecha de la entrevista:', fontSize: 9}
              ],
              [
                {text: 'Nombre del entrevistado:', fontSize: 9}
              ],
              [
                {text: 'Puesto del entrevistado:', fontSize: 9}
              ],
              [
                {text: 'Funciones:', fontSize: 9}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [25, 527],
            body: [
              [
                {text: 'No.', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 9},
                {text: '2. NOMBRES DE LOS PARTICIPANTES O TESTIGOS DEL INCIDENTE', bold: true, fillColor: '#ddd', fontSize: 9}
              ],
              [
                {text: '1', alignment: 'center', fontSize: 9},
                {}
              ],
              [
                {text: '2', alignment: 'center', fontSize: 9},
                {}
              ],
              [
                {text: '3', alignment: 'center', fontSize: 9},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [25, 527],
            body: [
              [
                {text: 'No.', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 9},
                {text: `3. EQUIPOS, MATERIALES, VEHÍCULOS, HERRAMIENTAS QUE
                        INTERVINIERON EN EL HECHO`, bold: true, fillColor: '#ddd', fontSize: 9}
              ],
              [
                {text: '1', alignment: 'center', fontSize: 9},
                {}
              ],
              [
                {text: '2', alignment: 'center', fontSize: 9},
                {}
              ],
              [
                {text: '3', alignment: 'center', fontSize: 9},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [560],
            body: [
              [
                {text: '4. CUESTIONAMIENTOS', bold: true, fillColor: '#ddd', fontSize: 9}
              ],
              [
                {text: '1.  ¿Qué actividades realizaba antes de ocurrir el incidente?\n\n', fontSize: 9}
              ],
              [
                {text: '2.  ¿Participaron otros trabajadores en el incidente?\n\n', fontSize: 9}
              ],
              [
                {text: '3.  ¿En qué condiciones se encontraban los equipos, herramientas, accesorios?\n\n', fontSize: 9}
              ],
              [
                {text: '4.  ¿La herramienta o accesorios eran apropiados para realizar el trabajo?\n\n', fontSize: 9}
              ],
              [
                {text: '5.  ¿Observó alguna condición anormal antes de ocurrir el incidente?\n\n', fontSize: 9}
              ],
              [
                {text: '6.  ¿Observó algún acto inseguro antes de ocurrir el incidente?\n\n', fontSize: 9}
              ],
              [
                {text: '7.  ¿Cómo ocurrió el incidente?\n\n', fontSize: 9}
              ],
              [
                {text: '8.  ¿Cuántas horas trabajó antes del incidente?\n\n', fontSize: 9}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [276, 276],
            body: [
              [
                {
                  image: `${firmaEstacion}`,
                  fit: [100, 50],
                  alignment: 'center',
                  border: [true, true, true, false],
                  pageBreak: 'before'
                },
                {
                  text: '',
                  fit: [100, 50],
                  alignment: 'center',
                  border: [true, true, true, false],
                  pageBreak: 'before'
                }
              ],
              [
                {
                  text: `REVISADO POR:\n ${ddd.representanteTecnico}\nRepresentante Técnico`,
                  alignment: 'center',
                  fontSize: 9
                },
                {
                  text: '\n\nNombre\nPersonal Entrevistado',
                  alignment: 'center',
                  fontSize: 9
                }
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Entrevista');
  }
}
