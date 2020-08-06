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
  datosEstacion:any={
    calleNumero:'',
    ciudad:'',
    colonia:'',
    correoElectronico:'',
    cp:'',
    estado:'',
    gerenteEstacion:'',
    maximaAutoridad:'',
    nombreEstacionServicio:'',
    representanteTecnico:'',
    telefono:''
  };

  constructor(
    private navCtrl: NavController,
    private pdfMaker: PdfMakerService,
    private marca: MarcaAguaServiceService,
    private firmaRepresente : FirmaRepresentanteService,
    private estacionService: EstacionServicioDatosService,
  ) { }

  ngOnInit() {
    this.imagen64();
    this.marcaAgua();
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
    const footer = this.myImage;
    const marcaAgua = this.marcaAguaEstacion;
    const dd = {
      background(currentPage, pageSize) {
        return {
          image: `${marcaAgua}`, width: 290, height: 400,
          absolutePosition: {x: 250, y: 120}, opacity: 0.4
        };
      },
      header: () => {
        return {
          table: {
            widths: [740], heights: [50, 15, 15],
            body: [
              [{text: ''}],
              [{text: 'VIII. CONTROL DE DOCUMENTOS Y REGISTROS', alignment: 'center', bold: true}],
              [{text: 'LISTA DE DISTRIBUCIÓN DE DOCUMENTOS', alignment: 'center', bold: true, fillColor: '#ddd'}],
            ]
          },
          margin: [22, 15],
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
                  pageBreak: 'after',
                  alignment: 'center',
                  width: 510,
                  height: 80
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
                {text: 'VALIDA:\n\nGamaliel Chavarría\nREPRESENTANTE TÉCNICO', fontSize: 9},
                {text: 'FECHA:', fontSize: 9}
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
}
