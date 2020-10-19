import { FirmaRepresentanteService } from './../../services/firma-representante.service';
import { EstacionServicioDatosService } from './../../services/estacion-servicio-datos.service';
import { IconoEstacionService } from './../../services/iconosEstacion.service';
import { MarcaAguaServiceService } from './../../services/marca-agua-service.service';
import { FirmaEstacionServiceService } from './../../services/firma-estacion-service.service';
import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-punto-doce-carta',
  templateUrl: './punto-doce-carta.page.html',
  styleUrls: ['./punto-doce-carta.page.scss'],
})
export class PuntoDoceCartaPage implements OnInit {

  estacione: any[] = [];
  myImage = null;
  firmaEstacion = null;
  firmaRepresentante = null;
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
    private pdfMaker: PdfMakerService,
    private firma: FirmaEstacionServiceService,
    private marca: MarcaAguaServiceService,
    private icono: IconoEstacionService,
    private datosEstacionService: EstacionServicioDatosService,
    private firmaRepresente: FirmaRepresentanteService
  ) { this.getDatosEstacion(); }

  ngOnInit() {
    this.imagen64();
    this.getMarcaAgua();
    this.getFirma();
    this.getIcono();
    this.getFirmaRepresentante();
  }

  getDatosEstacion() {
    this.datosEstacionService.getEstacion().subscribe((data: any) => {
      // console.log(data.findEstacion[data.findEstacion.length -1]);
      this.datosEstacion = data.findEstacion[data.findEstacion.length - 1];
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
  getFirmaRepresentante() {
    this.firmaRepresente.getFirmaRepresentante().subscribe((data: any) => {
      // console.log(data);
      this.firmaRepresentante = data.findFirmaRepresentante[data.findFirmaRepresentante.length - 1].firma;
      // console.log(this.firmaRepresentante);
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
      background() {
        return {
          image: `${marcaAgua}`,
          width: 300,
          height: 370,
          absolutePosition: {x: 250, y: 140},
          opacity: 0.5
        };
      },
      header() {
        return {
          table: {widths: [150, 570],
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
              },
              {}
            ],
            [
              {
                text: 'SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y PROTECCIÓN DEL MEDIO AMBIENTE',
                colSpan: 2,
                alignment: 'center',
                bold: true
              },
              {},
              {}
            ],
            [
              {
                text: 'XII. SEGURIDAD DE CONTRATISTAS',
                colSpan: 2,
                alignment: 'center',
                bold: true,
                fillColor: '#ddd'
              },
              {},
              {}
            ]
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
          text: 'Carta Responsiva',
          bold: true,
          alignment: 'center',
          fontSize: 30,
          margin: [0, 30]
        },
        {
          stack: [
            {
              text:
                `En la Estación de Servicio “Gasolinera El Carril S.A. de C.V.” reconoce la importancia del
                control de los aspectos ambientales y de los riesgos que están asociados a las actividades
                propias de la instalación, con motivo de las actividades rutinarias y no rutinarias,
                inclusive aquellas que desarrollen los contratistas, subcontratistas, proveedores y
                prestadores de servicios que impliquen riesgos para la población, el consumidor o las
                instalaciones, o impactos al ambiente, por lo cual se obliga a emitir y a vigilar las
                medidas de control en materia de seguridad industrial, seguridad operativa y protección del
                medio ambiente, que deben observar los terceros, así como vigilar su cumplimiento.\n\n`,
              alignment: 'justify',
              fontSize: 15,
              margin: [30, 0]
            },
            {
              text:
                `En razón de lo anterior asume la responsabilidad de la administración de los riesgos e impactos
                al ambiente que se originen con motivo de las actividades realizadas por los contratistas,
                prestadores de servicio y proveedores, que se ejecuten dentro de nuestras instalaciones.`,
              alignment: 'justify',
              fontSize: 15,
              margin: [30, 0]
            }
          ]
        },
        {
          style: 'tableExample',
          table: {
            widths: [200],
            headerRows: 1,
            body: [
              [''],
              [{text: 'REPRESENTANTE LEGAL', alignment: 'center'}],
              ['']
            ]
          },
          layout: 'headerLineOnly',
          margin: [170, 120],
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Carta responsiva de contratista');
  }
}
