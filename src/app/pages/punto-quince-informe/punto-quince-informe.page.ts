import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';

@Component({
  selector: 'app-punto-quince-informe',
  templateUrl: './punto-quince-informe.page.html',
  styleUrls: ['./punto-quince-informe.page.scss'],
})
export class PuntoQuinceInformePage implements OnInit {
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
  myImage = null;
  firmaRepresentante = null;
  firmaEstacion = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;

  constructor(
    private pdfMaker: PdfMakerService,
    private estacionService: EstacionServicioDatosService,
    private firma: FirmaEstacionServiceService,
    private marca: MarcaAguaServiceService,
    private icono: IconoEstacionService,
    private firmaRepresente: FirmaRepresentanteService,
    )  {
      this.getStationService();
      this.imagen64();
      this.getMarcaAgua();
      this.getFirma();
      this.getIcono();
      this.getFirmaRepresentante();
    }

  ngOnInit() {
  }
  getFirmaRepresentante() {
    this.firmaRepresente.getFirmaRepresentante().subscribe((data: any) => {
      // console.log(data);
       this.firmaRepresentante = data.findFirmaRepresentante[data.findFirmaRepresentante.length - 1].firma;
       // console.log(this.firmaRepresentante);
    });
  }

  getStationService() {
    this.estacionService.getEstacion().subscribe((data: any) => {
      const datoConsultado = data.findEstacion.length - 1;
      this.datosEstacion = data.findEstacion[datoConsultado];
  });
  }
  getIcono() {
    this.icono.getPolitica().subscribe((data: any) => {
     // console.log(data);
      this.iconoEstacion =  data.findPolitica[data.findPolitica.length - 1].imagen;
    });
  }
  getMarcaAgua() {
    this.marca.getMarcaAgua().subscribe((data: any) => {
      // console.log(data);
      this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua;
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
        // console.log(this.myImage);
      }
    );
  }
  convertFileDataURLviaFileReader(url: string) {
    return Observable.create(observer => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onload = function(){
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
    const marcaAgua = this.marcaAguaEstacion;
    const iconoEstacion = this.iconoEstacion;
    const firmaEstacion = this.firmaEstacion;
    const footer = this.myImage;
    const ddd = this.datosEstacion;
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const firmaRepresentanteTecnico = this.firmaRepresentante;
    // playground requires you to assign document definition to a variable called dd
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
      background(currentPage, pageSize) {
        return {
          image: `${marcaAgua}`,
          width: 300,
          height: 350,
          absolutePosition: {x: 150, y: 160},
          opacity: 0.5
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
                  fontSize: 25,
                  margin: [55, 20],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'INFORME DE AUDITORÍA',
                  fontSize: 9,
                  alignment: 'center',
                  colSpan: 2,
                  border: [true, true, true, true],
                },
                {}
              ],
              [
                {
                  text: 'XV. AUDITORÍAS',
                  bold: true,
                  alignment: 'center',
                  colSpan: 2,
                  fillColor: '#eeeeee',
                  border: [true, true, true, true],
                },
                {}
              ]
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
            widths: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
            heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            body: [
              [
                {text: `ORIGEN`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `Programa de auditoría interna`, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
                {text: `FECHA DE EJECUCIÓN`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 3, alignment: 'center'},
                {},
                {},
                {text: `Enero de ${year}`, fontSize: 9, colSpan: 4, bold: true},
                {},
                {},
                {},
              ],
              [
                {text: `TIPO DE AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center', colSpan: 3},
                {},
                {},
                {text: `SISOPA`, fontSize: 9, colSpan: 2},
                {},
                {text: `CRITERIO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 5},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `OBJETIVO DE LA AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `ALCANCE DE LA AUDITORIA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `AUDITOR LÍDER`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
                {text: `AUDITOR 1`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
              ],
              [
                {text: `PERSONAL QUE ATIENDE LA AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `NOMBRE`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 4, alignment: 'center'},
                {},
                {},
                {},
                {text: `PUESTO `, fontSize: 9, bold: true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: `NOMBRE`, fontSize: 9, bold: true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 4},
                {},
                {},
                {},
                {text: `PUESTO `, fontSize: 9, bold:  true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 2},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {
          table: {
            widths: [15, 150, 170, 10, 15, 150],
            heights: [10, 10, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            body: [
              [
                {text: `RESULTADO DE AUDITORÍA`, fontSize: 9, colSpan: 6, bold: true, fillColor: '#a5c3dd'},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `NO.`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `HALLAZGO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `ELEMENTO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `C`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `NC`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `CRITERIO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'}
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
                {},
                {},
                {},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            heights: [8, 40, 10, 40],
            widths: [560],
            body: [
              [{text: 'OPORTUNIDADES DE MEJORA', bold: true, fillColor: '#a5c3dd', fontSize: 9}],
              [{}],
              [{text: 'CONCLUSIONES', bold: true, fillColor: '#a5c3dd', fontSize: 9}],
              [{}]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [230, 230],
            heights: [10, 30, 30],
            body: [
              [
                {
                  text: 'AUDITOR LÍDER',
                  fillColor: '#a5c3dd',
                  bold: true,
                  fontSize: 9,
                  alignment: 'center',
                  border: [true, true, true, false]
                },
                {
                  text: 'REPRESENTANTE TÉCNICO',
                  fillColor: '#a5c3dd',
                  border: [true, true, true, false],
                  bold: true,
                  fontSize: 9,
                  alignment: 'center'
                }
              ],
              [
                {
                  text: '',
                  fit: [100, 30],
                  alignment: 'center',
                  border: [true, true, true, false]
                },
                {
                  image: `${firmaRepresentanteTecnico}`,
                  fit: [100, 30],
                  alignment: 'center',
                  border: [true, true, true, false]
                }
              ],
              [
                {
                  text: `NOMBRE Y FIRMA`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                },
                {
                  text: `NOMBRE Y FIRMA\n ${ddd.representanteTecnico}`,
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
          margin: [22, 0]
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 150]
    };
    this.pdfMaker.generate(dd, 'prueba');
  }


  pdf2() {
    const marcaAgua = this.marcaAguaEstacion;
    const iconoEstacion = this.iconoEstacion;
    const firmaEstacion = this.firmaEstacion;
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
        printing: 'highResolution', // 'lowResolution'
        modifying: false,
        copying: false,
        annotating: true,
        fillingForms: true,
        contentAccessibility: true,
        documentAssembly: true
      },
      background(currentPage, pageSize) {
        return {
          image: `${marcaAgua}`,
          width: 300,
          height: 350,
          absolutePosition: {x: 150, y: 160},
          opacity: 0.5
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
                  border: [true, true, false, true]
                },
                {
                  text: `${ddd.nombreEstacionServicio}`,
                  bold: true,
                  fontSize: 25,
                  margin: [55, 20],
                  border: [false, true, true, true]
                }
              ],
              [
                {
                  text: 'INFORME DE AUDITORÍA',
                  fontSize: 9,
                  alignment: 'center',
                  colSpan: 2,
                  border: [true, true, true, true]
                },
                {}
              ],
              [
                {
                  text: 'XV. AUDITORÍAS',
                  bold: true,
                  alignment: 'center',
                  colSpan: 2,
                  fillColor: '#eeeeee',
                  border: [true, true, true, true]
                },
                {}
              ]
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
                }
              ],
              [''],
            ]
          },
          layout : 'headerLineOnly',
          margin: [72, 20],
        };
      },
      content: [
        {
          table: {
            widths: [38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38],
            heights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            body: [
              [
                {text: `ORIGEN`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `Programa de auditoría interna`, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
                {text: `FECHA DE EJECUCIÓN`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 3, alignment: 'center'},
                {},
                {},
                {text: `Diciembre de ${year}`, fontSize: 9, colSpan: 4, bold: true},
                {},
                {},
                {},
              ],
              [
                {text: `TIPO DE AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center', colSpan: 3},
                {},
                {},
                {text: `SISOPA`, fontSize: 9, colSpan: 2},
                {},
                {text: `CRITERIO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 5},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `OBJETIVO DE LA AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `ALCANCE DE LA AUDITORIA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `AUDITOR LÍDER`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
                {text: `AUDITOR 1`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: ``, fontSize: 9, colSpan: 4},
                {},
                {},
                {},
              ],
              [
                {text: `PERSONAL QUE ATIENDE LA AUDITORÍA`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `NOMBRE`, fontSize: 9, bold: true, fillColor: '#a5c3dd', colSpan: 4, alignment: 'center'},
                {},
                {},
                {},
                {text: `PUESTO `, fontSize: 9, bold: true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 2},
                {},
                {text: `NOMBRE`, fontSize: 9, bold: true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 4},
                {},
                {},
                {},
                {text: `PUESTO `, fontSize: 9, bold: true, alignment: 'center', fillColor: '#a5c3dd', colSpan: 2},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: ``, fontSize: 9, colSpan: 12},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {
          table: {
            widths: [15, 150, 170, 10, 15, 150],
            heights: [10, 10, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            body: [
              [
                {text: `RESULTADO DE AUDITORÍA`, fontSize: 9, colSpan: 6, bold: true, fillColor: '#a5c3dd'},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: `NO.`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `HALLAZGO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `ELEMENTO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text:  `C`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `NC`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'},
                {text: `CRITERIO`, fontSize: 9, bold: true, fillColor: '#a5c3dd', alignment: 'center'}
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
                {},
                {},
                {},
                {},
                {},
                {},
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            heights: [8, 40, 10, 40],
            widths: [560],
            body: [
              [{text: 'OPORTUNIDADES DE MEJORA', bold: true, fillColor: '#a5c3dd', fontSize: 9}],
              [{}],
              [{text: 'CONCLUSIONES', bold: true, fillColor: '#a5c3dd', fontSize: 9}],
              [{}]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [230, 230],
            heights: [10, 30, 30],
            body: [
              [
                {
                  text: 'AUDITOR LÍDER',
                  fillColor: '#a5c3dd',
                  bold: true,
                  fontSize: 9,
                  alignment: 'center',
                  border: [true, true, true, false]
                },
                {
                  text: 'REPRESENTANTE TÉCNICO',
                  fillColor: '#a5c3dd',
                  border: [true, true, true, false],
                  bold: true,
                  fontSize: 9,
                  alignment: 'center'
                }
              ],
              [
                {
                  text: '',
                  fit: [100, 30],
                  alignment: 'center',
                  border: [true, true, true, false]
                },
                {
                  image: `${firmaRepresentanteTecnico}`,
                  fit: [100, 30],
                  alignment: 'center',
                  border: [true, true, true, false]
                }
              ],
              [
                {
                  text: `NOMBRE Y FIRMA`,
                  alignment: 'center',
                  border: [true, false, true, true],
                  fontSize: 7
                },
                {
                  text: `NOMBRE Y FIRMA\n ${ddd.representanteTecnico}`,
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
          margin: [22, 0]
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 150]
    };
    this.pdfMaker.generate(dd, 'prueba');
  }

}
