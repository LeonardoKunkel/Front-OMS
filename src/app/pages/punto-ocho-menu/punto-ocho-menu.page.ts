import { IconoEstacionService } from './../../services/iconosEstacion.service';
import { FirmaEstacionServiceService } from './../../services/firma-estacion-service.service';
import { MarcaAguaServiceService } from './../../services/marca-agua-service.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { Observable } from 'rxjs';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';

@Component({
  selector: 'app-punto-ocho-menu',
  templateUrl: './punto-ocho-menu.page.html',
  styleUrls: ['./punto-ocho-menu.page.scss'],
})
export class PuntoOchoMenuPage implements OnInit {

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
    private navCtrl: NavController,
    private pdfMaker: PdfMakerService,
    private datosEstacionService: EstacionServicioDatosService,
    private firma: FirmaEstacionServiceService,
    private marca: MarcaAguaServiceService,
    private icono: IconoEstacionService,
    private firmaRepresente: FirmaRepresentanteService
  ) { }

  ngOnInit() {
    this.imagen64();
    this.marcaAgua();
    this.getFirma();
    this.getIcono();
  }

  goOchoLista() {
    this.navCtrl.navigateForward('/punto-ocho-lista');
  }

  goOchoProcedimiento() {
    this.navCtrl.navigateForward('/punto-ocho-procedimiento');
  }

  goOchoInstructivo() {
    this.navCtrl.navigateForward('/punto-ocho-inst');
  }

  goOchoSolicitud() {
    this.navCtrl.navigateForward('/punto-ocho-solicitud');
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
        printing: 'highResolution',
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
                  text: `${ddd.nombreEstacionServicio}`, bold: true, fontSize: 25, alignment: 'center', margin: [15, 20],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'VIII. CONTROL DE DOCUMENTOS Y REGISTROS',
                  alignment: 'center',
                  bold: true,
                  colSpan: 2
                },
                {}
              ],
              [
                {
                  text: 'LISTA DE DISTRIBUCIÓN DE DOCUMENTOS',
                  alignment: 'center',
                  bold: true,
                  fillColor: '#ddd',
                  colSpan: 2
                },
                {}
              ],
            ]
          },
          margin: [22, 15],
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
                    {text: `FS-04 Rev. 0,  ${day}/${month}/${year}`, width: 180}
                  ]
                }
              ],
              [
                {
                  image: `${footer}`,
                  pageBreak: 'after',
                  alignment: 'center',
                  width: 650,
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
            widths: [60, 190, 60, 100, 85, 200],
            body: [
              [
                {text: 'FECHA DE ENTREGA', bold: true, fillColor: '#ddd', alignment: 'center', fontSize: 10},
                {text: 'NOMBRE DE DOCUMENTO', bold: true, fillColor: '#ddd', alignment: 'center', fontSize: 10},
                {text: 'CÓDIGO', bold: true, fillColor: '#ddd', alignment: 'center', fontSize: 10},
                {text: 'FECHA DEL DOCUMENTO', bold: true, fillColor: '#ddd', alignment: 'center', fontSize: 10},
                {text: 'FECHA DEL DOCUMENTO QUE SUSTITUYE', bold: true, fillColor: '#ddd', alignment: 'center', fontSize: 10},
                {text: 'PUESTO DE LA PERSONA QUE RECIBE EL DOCUMENTO', bold: true, fillColor: '#ddd', alignment: 'center', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'POLÍTICA', fontSize: 10},
                {text: 'P-SA-01', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: `IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE
                        RIESGOS Y DE IMPACTOS AMBIENTALES`, fontSize: 8},
                {text: 'P-SA-02', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'REQUISITOS LEGALES', fontSize: 10},
                {text: 'P-SA-03', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'OBJETIVOS, METAS E INDICADORES', fontSize: 10},
                {text: 'P-SA-04', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'FUNCIONES, RESPONSABILIDADES Y AUTORIDAD', fontSize: 10},
                {text: 'P-SA-05', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO', fontSize: 10},
                {text: 'P-SA-06', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA', fontSize: 10},
                {text: 'P-SA-07', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'CONTROL DE DOCUMENTOS Y REGISTROS', fontSize: 10},
                {text: 'P-SA-08', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'MEJORES PRÁCTICAS Y ESTÁNDARES', fontSize: 10},
                {text: 'P-SA-09', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'CONTROL DE ACTIVIDADES Y PROCESOS', fontSize: 10},
                {text: 'P-SA-10', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'INTEGRIDAD MECÁNICA Y ASEGURAMIENTO DE LA CALIDAD', fontSize: 10},
                {text: 'P-SA-11', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'SEGURIDAD DE CONTRATISTAS', fontSize: 10},
                {text: 'P-SA-12', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'PREPARACIÓN Y RESPUESTA A EMERGENCIAS', fontSize: 10},
                {text: 'P-SA-13', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'MONITOREO, VERIFICACIÓN Y EVALUACIÓN', fontSize: 10, pageBreak: 'before'},
                {text: 'P-SA-14', fontSize: 10, alignment: 'center', pageBreak: 'before'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center', pageBreak: 'before'},
                {text: 'N/A', fontSize: 10, alignment: 'center', pageBreak: 'before'},
                {text: 'Representante Técnico', fontSize: 10, pageBreak: 'before'},
              ],
              [
                {text: ''},
                {text: 'AUDITORÍAS', fontSize: 10},
                {text: 'P-SA-15', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES', fontSize: 10},
                {text: 'P-SA-16', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'REVISIÓN DE RESULTADOS', fontSize: 10},
                {text: 'P-SA-17', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'INFORMES DE DESEMPEÑO', fontSize: 10},
                {text: 'P-SA-18', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'RECEPCIÓN DE AUTOTANQUE Y DESCARGA DE PODUCTOS A TANQUES DE ALMACENAMIENTO', fontSize: 9},
                {text: 'P-OP-01', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Despachadores', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'DESPACHO DE PRODUCTOS INFLAMABLES Y COMBUSTIBLES A VEHÍCULOS', fontSize: 9},
                {text: 'P-OP-02', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Despachadores', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'ETIQUETA, CANDADEO Y BLOQUEO PARA INTERRUPCIÓN DE LÍNEAS ELÉCTRICAS', fontSize: 10},
                {text: 'P-TS-01', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Personal de piso', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'ETIQUETA, CANDADEO Y BLOQUEO PARA INTERRPCIÓN DE LÍNEAS CON PRODUCTO', fontSize: 10},
                {text: 'P-TS-02', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Personal de piso', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'TRABAJOS CON HERRAMIENTAS QUE GENEREN FUENTES DE IGNICIÓN', fontSize: 10},
                {text: 'P-TS-03', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Personal de piso', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'TRABAJOS EN ESCALERAS O PLATAFORMAS EN ALTURAS MAYORES A 1.5 m', fontSize: 10},
                {text: 'P-TS-04', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Personal de piso', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'TRABAJOS EN ÁREAS CONFINADAS', fontSize: 10},
                {text: 'P-TS-05', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Personal de piso', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'PERMISO DE TRABAJOS PELIGROSOS', fontSize: 10},
                {text: 'P-TS-06', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Personal de piso', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'ADMINISTRACIÓN DE CAMBIOS DE PERSONAL', fontSize: 10},
                {text: 'P-CP-01', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'ADMINISTRACION DE CAMBIOS DE TECNOLOGÍA', fontSize: 10},
                {text: 'P-CT-01', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'MANTENIMIENTO A DISPENSARIOS', fontSize: 10},
                {text: 'P-IM-01', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Mantenimiento', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'MANTENIMIENTO A TANQUES', fontSize: 10},
                {text: 'P-IM-02', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Mantenimiento', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'MANTENIMIENTO A INSTALACIONES ELÉCTRICAS', fontSize: 10},
                {text: 'P-IM-03', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Mantenimiento', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'MANTENIMIENTO A EDIFICIOS', fontSize: 10},
                {text: 'P-IM-04', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Mantenimiento', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'MANTENIMIENTO A DRENAJES', fontSize: 10},
                {text: 'P-IM-05', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Mantenimiento', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'PLANES DE RESPUESTA A EMERGENCIAS', fontSize: 10},
                {text: 'P-RE-01', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
              [
                {text: ''},
                {text: 'METODOLOGÍA DEL ARBOL DE FALLAS', fontSize: 10},
                {text: 'P-CR-01', fontSize: 10, alignment: 'center'},
                {text: '01/03/2019', fontSize: 10, alignment: 'center'},
                {text: 'N/A', fontSize: 10, alignment: 'center'},
                {text: 'Representante Técnico', fontSize: 10},
              ],
            ]
          }
        },
        {text: '\n\n'},
        {
          table: {
            widths: [482, 241],
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
                  text: `REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 9
                },
                {
                  text: `FECHA DE APROBACIÓN:\n${day}/${month}/${year}`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 9
                }
              ]
            ]
          },
        }
      ],
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Lista de Distribución');
  }

  pdf2() {
    const marcaAgua = this.marcaAguaEstacion;
    const iconoEstacion = this.iconoEstacion;
    // const firmaEstacion = this.firmaEstacion;
    const footer = this.myImage;
    const ddd = this.datosEstacion;
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const firmaRepresentanteTecnico = this.firmaRepresentante;
    const dd = {
      userPassword: '123',
      ownerPassword: '123456',
      permissions: {
        printing: 'highResolution',
        modifying: false,
        copying: false,
        annotating: true,
        fillingForms: true,
        contentAccessibility: true,
        documentAssembly: true
      },
      background(currentPage, pageSize) {
        return {
          image: `${marcaAgua}`, width: 300, height: 350,
          absolutePosition: {x: 150, y: 160}, opacity: 0.5
        };
      },
      header() {
        return {
          table: {
            widths: [150, 400],
            heights: [30, 10, 10],
            body: [
              [
                {
                  image: `${iconoEstacion}`,
                  width: 65,
                  height: 80,
                  alignment: 'center',
                  border: [true, true, false, true],
                },
                {
                  text: `${ddd.nombreEstacionServicio}`,
                  bold: true,
                  fontSize: 20,
                  margin: [55, 20],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'VIII. CONTROL DE DOCUMENTOS',
                  bold: true,
                  alignment: 'center',
                  colSpan: 2,
                  fillColor: '#eeeeee',
                  border: [true, true, true, true],
                },
                {}
              ],
              [
                {
                  text: 'SOLICITUD DE CAMBIOS',
                  fontSize: 9,
                  alignment: 'center',
                  colSpan: 2,
                  border: [true, true, true, true],
                },
                {}
              ],
            ]
          },
          margin: [22, 15],
          layout: {
            defaultBorder: false
          }
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
                    {text: `P-SA-01 Rev.0, ${day}/${month}/${year}`, width: 180}
                  ]
                }
              ],
              [
                {
                  image: `${footer}`,
                  pageBreak: 'after',
                  width: 510,
                  height: 60,
                },
              ],
              [''],
            ]
          },
          layout: 'headerLineOnly',
          margin: [72, 20],
        };
      },
      content: [
        {
          table: {
            widths: [120, 230, 90, 90],
            body: [
              [
                {
                  text: `CODIFICACIÓN`,
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 7
                },
                {},
                {
                  text: `FECHA DE SOLICITUD`,
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 7
                },
                {}
              ],
              [
                {
                  text: `NOMBRE DEL DOCUMENTO`,
                  bold:  true,
                  fillColor: '#a5c3dd',
                  fontSize: 7
                },
                {
                  text: '',
                  colSpan: 3
                },
                {},
                {}
              ],
              [
                {
                  text: `ELEMENTO DEL SISTEMA`,
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 7
                },
                {
                  text: '',
                  colSpan: 3
                },
                {},
                {}
              ],
              [
                {
                  text: `NOMBRE DEL SOLICITANTE`,
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 7
                },
                {},
                {
                  text: `PUESTO`,
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 7
                },
                {}
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [255, 10, 255, 10],
            body: [
              [
                {
                  text: `TIPO DE DOCUMENTO`,
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 9,
                  colSpan: 4
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: `PROCEDIMIENTO DE SISTEMA`,
                  fontSize: 7
                },
                {
                  text: ``,
                  fontSize: 8
                },
                {
                  text: `PROCEDIMIENTO ESPECÍFICO`,
                  fontSize: 7
                },
                {
                  text: ``,
                  fontSize: 8
                }
              ],
              [
                {
                  text: `FORMATO DE SISTEMA`,
                  fontSize: 7
                },
                {
                  text: ``,
                  fontSize: 8
                },
                {
                  text: `FORMATO OPERATIVO`,
                  fontSize: 7
                },
                {
                  text: ``,
                  fontSize: 8
                }
              ],
              [
                {
                  text: `ORIGEN DEL CAMBIO`,
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 9,
                  colSpan: 4
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: `SUGERENCIA`, fontSize: 7
                },
                {
                  text: ``,
                  fontSize: 8
                },
                {
                  text: `HALLAZGO DE AUDITORÍA`, fontSize: 7
                },
                {
                  text: ``,
                  fontSize: 8
                }
              ],
              [
                {
                  text: `RECOMENDACIÓN ICR`,
                  fontSize: 7
                },
                {
                  text: ``,
                  fontSize: 8
                },
                {
                  text: `ACCIÓN DE MEJORA`,
                  fontSize: 7
                },
                {
                  text: ``,
                  fontSize: 8
                }
              ],
              [
                {
                  text: `CAMBIO DE TECNOLOGÍA`,
                  fontSize: 7
                },
                {
                  text: ``,
                  fontSize: 8
                },
                {
                  text: `CAMBIO EN EL PROCESO`,
                  fontSize: 7
                },
                {
                  text: ``,
                  fontSize: 8
                }
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [255, 10, 255, 10],
            heights: [10, 40, 10, 40, 10, 10, 10, 40],
            body: [
              [
                {
                  text: 'ESTADO ACTUAL',
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 7,
                  colSpan: 4
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: '',
                  colSpan: 4
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: 'CAMBIO PROPUESTO',
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 7,
                  colSpan: 4
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: '',
                  colSpan: 4
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: 'RESULTADO DE LA EVALUACIÓN',
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 7,
                  colSpan: 4
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: `ACEPTADA`,
                  fontSize: 7
                },
                {},
                {
                  text: `ACEPTADA`,
                  fontSize: 7
                },
                {}
              ],
              [
                {
                  text: 'MOTIVO DE LA ACEPTACIÓN O RECHAZO',
                  bold: true,
                  fillColor: '#a5c3dd',
                  fontSize: 7,
                  colSpan: 4
                },
                {},
                {},
                {}
              ],
              [
                {
                  text: '',
                  colSpan: 4
                },
                {},
                {},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [360, 185],
            heights: [30, 30],
            body: [
              [
                // {
                //   image: `${firmaRepresentanteTecnico}`,
                //   fit: [100, 50],
                //   alignment: 'center',
                //   border: [true, true, true, false]
                // },
                {
                  text: ' ',
                  fit: [100, 50],
                  alignment: 'center',
                  border: [true, true, true, false]
                }
              ],
              [
                {
                  text: `EVALÚA:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                },
                {
                  text: `FECHA \n ${day}/${month}/${year}`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                }
              ]
            ]
          },
          layout: {
            defaultBorder: false
          },
          margin: [3, 0]
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 150]
    };
    this.pdfMaker.generate(dd, 'sssss');
  }
}
