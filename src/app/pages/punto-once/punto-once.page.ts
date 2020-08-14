import { IconoEstacionService } from './../../services/iconosEstacion.service';
import { EstacionServicioDatosService } from './../../services/estacion-servicio-datos.service';
import { FirmaEstacionServiceService } from './../../services/firma-estacion-service.service';
import { MarcaAguaServiceService } from './../../services/marca-agua-service.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-punto-once',
  templateUrl: './punto-once.page.html',
  styleUrls: ['./punto-once.page.scss'],
})
export class PuntoOncePage implements OnInit {

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
    firmaEstacion = null;
    iconoEstacion = null;
    marcaAguaEstacion = null;

  constructor(
    private navCtrl: NavController,
    private pdfMaker: PdfMakerService,
    private marca: MarcaAguaServiceService,
    private firma: FirmaEstacionServiceService,
    private datosEstacionService: EstacionServicioDatosService,
    private icono: IconoEstacionService
  ) { this.getDatosEstacion(); }

  ngOnInit() {
    this.imagen64();
    this.marcaAgua();
    this.getIcono();
    this.getFirma();
  }

    goOnceProcedimiento() {
        this.navCtrl.navigateForward('/punto-once-procedimiento');
    }

    goOnceLista() {
        this.navCtrl.navigateForward('/punto-once-lista');
    }

    goOnceEvidencia() {
        this.navCtrl.navigateForward('/punto-once-evidencia');
    }

    getIcono() {
        // this.marca.getMarcaAgua().subscribe((data: any) => {
        //     // console.log(data);
        //     this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua;
        // });
        this.icono.getPolitica().subscribe((data: any) => {
            this.iconoEstacion =  data.findPolitica[data.findPolitica.length - 1].imagen;
        });
    }

    getFirma() {
        this.firma.getFirmaEstacion().subscribe((data: any) => {
          // console.log(data);
          this.firmaEstacion = this.firma = data.findFirma[data.findFirma.length - 1].firma;
        });
    }

    getDatosEstacion() {
        this.datosEstacionService.getEstacion().subscribe((data: any) => {
          // console.log(data.findEstacion[data.findEstacion.length -1]);
          this.datosEstacion = data.findEstacion[data.findEstacion.length - 1];
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
        const footer = this.myImage;
        const marcaAgua = this.marcaAguaEstacion;
        const iconoEstacion = this.iconoEstacion;
        const firmaEstacion = this.firmaEstacion;
        const ddd = this.datosEstacion;
        const fecha = new Date();
        const day = fecha.getDate();
        const month = fecha.getUTCMonth() + 1;
        const year = fecha.getFullYear();
        const dd = {
            background(currentPage, pageSize) {
                return {
                    image: `${marcaAgua}`,
                    width: 290,
                    height: 400,
                    absolutePosition: {x: 170, y: 210}, opacity: 0.4
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
                                    width: 45,
                                    height: 60,
                                    alignment: 'center',
                                    border: [true, true, false, true],
                                },
                                {
                                    text: `${ddd.nombreEstacionServicio}`,
                                    bold: true,
                                    fontSize: 17,
                                    alignment: 'center',
                                    margin: [0, 15],
                                    border: [false, true, true, true],
                                }
                            ],
                            [
                                {
                                    text: 'XI. INTEGRIDAD MECÁNICA Y ASEGURAMIENTO DE LA CALIDAD',
                                    alignment: 'center',
                                    bold: true,
                                    colSpan: 2
                                },
                                {}
                            ],
                            [
                                {
                                    text: 'PLAN DE MANTENIMIENTO',
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
                        widths: [510],
                        body : [
                            [
                                {
                                    columns: [
                                        'Página ' + currentPage.toString() + ' de ' + pageCount,
                                        {text: `FS-20 Rev. 0, ${day}/${month}/${year}`, width: 180}
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
                {text: 'Plan de Mantenimiento del Sistema de Almacenamiento\n\n', bold: true, fontSize: 14},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Equipo', alignment: 'center', bold: true, colSpan: 2, fontSize: 10},
                                {},
                                {text: 'Actividades', bold: true, alignment: 'center', rowSpan: 2, fontSize: 10},
                                {text: 'Frecuencia', bold: true, rowSpan: 2, fontSize: 10}
                            ],
                            [
                                {text: 'Principal', fontSize: 10},
                                {text: 'Secundario', fontSize: 10},
                            ],
                            [
                                {text: 'Tanque', bold: true, rowSpan: 32},
                                {text: 'Contenedor Primario', fontSize: 8, alignment: 'center', rowSpan: 4},
                                {text: 'Medir agua físicamente y drenar el agua cuando se detecte', fontSize: 8},
                                {text: 'Mensual', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {},
                                {text: 'Realizar Limpieza de tanque cuando presente alto contenido de sólidos en el producto', fontSize: 8},
                                {text: '10 años', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {},
                                {text: 'Pruebas de hermeticidad, laboratorio de pruebas acreditado', fontSize: 8},
                                {text: 'Anual', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {},
                                {text: 'Realizar calibración volumétrica del tanque', fontSize: 8},
                                {text: '10 años', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Contenedor secundario', fontSize: 8},
                                {text: 'Probar el sensor de líquidos (Alarma visual y sonora)', fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Contenedor Espacio Anular', fontSize: 8, rowSpan: 2},
                                {text: `Verificar que sea hermético y que no esté fracturado, que cuente con tapa y empaque,
                                        el tubo del sensor con tapa y empaque.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, rowSpan: 2, alignment: 'center'}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar estado de tubería Conduit, cajas de conexiones con tapas
                                        y glándula, los sellos EYS con tapón y cemento sellador`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Motobombas y bombas de transferencia', fontSize: 8, alignment: 'center', rowSpan: 4},
                                {text: `Revisar condiciones de operación, voltajes, estado de capacitor,
                                        limpieza de conexiones y caja, registros eléctricos y la conexión a tierra física`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 4}
                            ],
                            [
                                {},
                                {},
                                {text: 'Revisar integridad mecánica (pintura, óxidación) y contención de producto.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que el sensor mecánico de fugas esté conectado.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que no presente ruidos extraños o vibración durante la operación.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Contenedor de bomba sumergible y de accesorios', fontSize: 8, alignment: 'center', rowSpan: 7},
                                {text: `Revisar que esté limpio yseco, que los, empaques(botas), estén ajustados,
                                        que sea hermétcio(que no presente fracturas)`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 6}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar estado de tubería Conduit, cajas de conexiones con tapas y
                                        glándula, los sellos EYS con tapón y cemento sellador`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Probar el sensor de líquidos (verificar alarma visual y sonora) y
                                        que se esté 1 cm. del piso`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `La válvula de cierre rápido debe mantener la contención y no debe
                                        presentar oxidación.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `La tubería flexible no debe estar deformada, oxidada y debe mantener
                                        la contención.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar el estado de la tapa metálica hermética', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Pintura y rotulado de acuerdo con el producto.', fontSize: 8},
                                {text: '6 meses', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Válvula de prevención de sobrellenado', fontSize: 8, alignment: 'center', rowSpan: 4},
                                {text: `Verificar que la válvula esté completa y que tenga el tubo de extensión
                                        hasta el fondo.`, fontSize: 8},
                                {text: '6 meses', fontSize: 8, alignment: 'center', rowSpan: 4}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar funcionamineto de flotador interno', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que la válvula esté hermética', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que su ubicación impida que el tanque se sobrellene arriba
                                        del 95% de su capacidad total.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Contenedor de derrame en boquilla de llenado', fontSize: 8, alignment: 'center', rowSpan: 5},
                                {text: `Verificar que sea hermético y que no esté fracturado, que cuente con
                                        tapa y empaque, el tubo del sensor con tapa y empaque.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 4}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que cuente con sus respectiva tapa y empaque que permita
                                        el sellado hermético.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que la válvula de drenado se encuentre funcionando.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que el cople de bronce cuente con su tapa Duratuf de 4"
                                        completa con empaque y hermética.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Pintura y rotulado de acuerdo con el producto.', fontSize: 8},
                                {text: '6 meses', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {
                                    text: 'Contenedor del sistema de control de inventarios',
                                    alignment: 'center',
                                    fontSize: 8,
                                    rowSpan: 3,
                                },
                                {text: `Verificar que sea hermético y que no esté fracturado, que cuente con
                                        tapa y empaque, el tubo del sensor con tapa y empaque`, fontSize: 8},
                                {text: '30 días', alignment: 'center', fontSize: 8, rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que el tubo de la sonda cuente con su tapa y empaque.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar estado de tubería Conduit, cajas de conexiones con tapas y
                                        glándula. los sellos EYS con tapón y cemento sellador.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Registro de purga', alignment: 'center', fontSize: 8},
                                {text: `Verificar que sea hermético y que no esté fracturado, que cuente con
                                        tapa y empaque, el tubo del sensor con tapa y empaque`, fontSize: 8},
                                {text: '30 días', alignment: 'center', fontSize: 8}
                            ],
                            [
                                {},
                                {text: 'Entrada hombre', alignment: 'center', fontSize: 8},
                                {text: `Verificar empaque y tornillería completa y uqe esté pintada.`, fontSize: 8},
                                {text: '30 días', alignment: 'center', fontSize: 8}
                            ],
                        ]
                    }
                },
                {text: '\nSistema de Almacenamiento\n', bold: true, fontSize: 14},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Equipo', alignment: 'center', bold: true, colSpan: 2, fontSize: 10},
                                {},
                                {text: 'Actividades', bold: true, alignment: 'center', rowSpan: 2, fontSize: 10},
                                {text: 'Frecuencia', bold: true, rowSpan: 2, fontSize: 10}
                            ],
                            [
                                {text: 'Principal', fontSize: 10},
                                {text: 'Secundario', fontSize: 10},
                            ],
                            [
                                {text: 'Tanque', bold: true, rowSpan: 16},
                                {
                                    text: 'Contenedor de derrame conector recuperación de vapores',
                                    fontSize: 8,
                                    alignment: 'center',
                                    rowSpan: 3
                                },
                                {
                                    text: `Verificar que sea hermético y que no esté fracturado, que cuente con
                                            tapa y empaque, el tubo del sensor con tapa y empaque`,
                                    fontSize: 8
                                },
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {
                                    text: 'Verificar válvula check de 3" que cierre herméticamente, que cuente con su tapa y empaque.',
                                    fontSize: 8
                                },
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Pintura y rotulado de acuerdo con el producto.', fontSize: 8},
                                {text: '90 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Venteo normal', fontSize: 8, alignment: 'center', rowSpan: 3},
                                {text: `Verificar que mantenga su integridad mecánica, que se encuentre conectado a tierra`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {
                                    text: `Verificar que las válvulas de presión y vació estén limpias, libres de
                                            obstrucciones y que mantengan su integridad mecánica.`,
                                    fontSize: 8
                                },
                                {text: '120 días', fontSize: 8, alignment: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: 'Pintura y rotulado de acuerdo con el producto.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Equipo sistema de control de inventarios', fontSize: 8, alignment: 'center', rowSpan: 3},
                                {
                                    text:
                                        `Obtener un reporte impreso de los datos de los tanques que la consola
                                        del equipo señale, respecto a nivel de producto y agua`,
                                    fontSize: 8
                                },
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {
                                    text:
                                        `Se verifica que el equipo del sistema de control de inventarios identifique
                                        correctamente el tanque de almacenamiento.`,
                                    fontSize: 8
                                },
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que indique el nivel del producto y de agua.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {
                                    text: 'Pozos de observación',
                                    fontSize: 8,
                                    alignment: 'center',
                                    rowSpan: 5
                                },
                                {
                                    text:
                                        `Verifica que el sello que se localiza alrededor del tubo, en la parte superior
                                        del pozo sea hermético y no presente filtraciones`,
                                    fontSize: 8
                                },
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que la parte superior metálica del registro esté sellada con cemento pulido y material epóxico para evitar la infiltración de agua o líquido.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Si cuenta con sensor de líquidos realizar prueba de funcionamiento (Alarma visual y sonora).', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Si cuenta con sensor verificar estado de tubería Conduit, cajas de conexiones con tapas y glándula, los sellos EYS con tapón y cemento sellador.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Que la tapa esté pintada y rotulada.', fontSize: 8},
                                {text: '90 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Conectores rápidos y mangueras', fontSize: 8, alignment: 'center', rowSpan: 2},
                                {text: `Verificar que las mangueras y conectores no estén golpeados o dañados y que esté   ensambladas conforme a las recomendaciones y especificaciones del fabricante`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que los accesorios estén completos y se ajusten herméticamente a las boquillas de las mangueras.`, fontSize: 8},
                                {}
                            ],
                        ]
                    }
                },
                {text: '\nPlan de Mantenimiento de Sistemas de Conducción.', bold: true, fontSize: 14, alignment: 'center', pageBreak: 'before'},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Conducción de agua', bold: true, fontSize: 10, rowSpan: 9},
                                {text: 'Tubería', fontSize: 8, alignment: 'center'},
                                {text: 'Verificar que esté libre de fugas', fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Bombas de agua', fontSize: 8, alignment: 'center', rowSpan: 2},
                                {text: `Las bombas de agua para servicio o diversas instalaciones deben funcionar conforme a las especificaciones del fabricante.`, fontSize: 8},
                                {text: '30 días', fontSize: 8}
                            ],
                            [
                                {},
                                {},
                                {text: `Cuando aplique, las bombas de Agua del sistema contra incendio deben funcionar conforme a las especificaciones del fabricante y lo establecido en el Código NFPA 20, o Código o Norma que lo modifique o sustituya.`, fontSize: 8},
                                {text: '1 día', fontSize: 8}
                            ],
                            [
                                {},
                                {text: 'Tinacos y cisternas', fontSize: 8, alignment: 'center', rowSpan: 2},
                                {text: `Realizar limpieza.`, fontSize: 8},
                                {text: '365 días', fontSize: 8}
                            ],
                            [
                                {},
                                {},
                                {text: `Cuando aplique, las bombas de Agua del sistema contra incendio deben funcionar conforme a las especificaciones del fabricante y lo establecido en el Código NFPA 20, o Código o Norma que lo modifique o sustituya.`, fontSize: 8},
                                {text: '30 días', alignment: 'center', fontSize: 8, rowSpan: 5}
                            ],
                            [
                                {},
                                {text: 'Válvula de bloqueo', fontSize: 8, alignment: 'center'},
                                {text: `Verificar cierre, hermeticidad y que no presente fugas.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Trincheras', fontSize: 8, alignment: 'center'},
                                {text: `Verificar condiciones, libre de basura y agua.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Toma de la red', fontSize: 8, alignment: 'center'},
                                {text: `Verificar que no presenten fugas.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Válvula Check', fontSize: 8, alignment: 'center'},
                                {text: `Verificar cierre, hermeticidad y que no presente fugas.`, fontSize: 8},
                                {}
                            ],
                        ]
                    }
                },
                {text: '\nPlan de Mantenimiento del Sistema de Despacho', alignment: 'center', bold: true, fontSize: 14},
                {
                    table: {
                        widths: [100, 373, 70],
                        body: [
                            [
                                {text: 'EQUIPO SECUNDARIO', bold: true, alignment: 'center', fontSize: 10},
                                {text: 'ACTIVIDADES', bold: true, alignment: 'center', fontSize: 10},
                                {text: 'FRECUENCIA', bold: true, alignment: 'center', fontSize: 10},
                            ],
                            [
                                {text: 'Filtros', fontSize: 8},
                                {text: 'Verificar condiciones y sustituir los filtros cuando se encuentran saturados. (perdida de flujo)', fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {text: 'Gabinete accesorio', fontSize: 8, rowSpan: 4},
                                {text: 'Limpieza de dispensarios por el exterior, mangueras y pistolas de despacho.', fontSize: 8},
                                {text: '1 día', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Verificar que se encuentre conectado a tierra.', fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {text: 'Verificar que la instalación eléctrica a prueba de explosión mantenga su integridad eléctrica.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: `Verificar que la tubería flexible, tubería rígida y válvula de cierre rápido mantenga su integridad mecánica y la contención del producto.`, fontSize: 8},
                                {}
                            ],
                            [
                                {text: 'Mangueras de despacho', fontSize: 8, rowSpan: 3},
                                {text: `Comprobar que no presentan daños, o cuarteaduras que permitan fuga de producto o vapores, así como falta de integridad mecánica en sus conexiones.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {text: `Comprobar que al presurizar las líneas de combustibles no existan falta de contención en conexiones y mangueras.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: `Comprobar que no tengan aire las líneas y mangueras de combustibles.`, fontSize: 8},
                                {}
                            ],
                            [
                                {text: 'Válvulas de corte rápido (break-away)', fontSize: 8},
                                {text: `Se verificar que funcionen de acuerdo con las recomendaciones y especificaciones del fabricante, si es reconectable realizar cambio de o-rings de acuerdo con recomendaciones de fabricante.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {text: 'Pistolas para el despacho de combustibles', fontSize: 8, rowSpan: 3},
                                {text: `Verificar que las pistolas no presenten fuga por la boquilla al suspender el despacho de combustible.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {text: `Verificar que realice paro automático, en caso de que no ocurra, proceder a sustituir la boquilla.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: `Verificar que la guarda se encuentre en buen estado sin daños.`, fontSize: 8},
                                {}
                            ],
                            [
                                {text: `Destorcedor.`, fontSize: 8},
                                {text: `Verificar que no existan fugas y que mantenga su integridad mecánica.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {text: `Anclaje en basamento.`, fontSize: 8},
                                {text: `Verificar el sistema de anclaje y los elementos de sujeción, constatando que no esté suelto el dispensario.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {text: 'Válvula de corte rápido shut off y termo fusible de acción mecánica', fontSize: 8, rowSpan: 4},
                                {text: `Accionar el brazo para verificar sellos en compuerta. Revisar que el punto de ruptura esté correctamente colocado y que opere adecuadamente.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 4}
                            ],
                            [
                                {},
                                {text: `Verificar que retirar el seguro la válvula shut-off de la tubería, deje de fluir combustible al dispensario.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: `Verificar que se encuentre debidamente anclada, soportaría completa y tornillos en buen estado.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: `Verificar que mantenga su integridad mecánica.`, fontSize: 8},
                                {}
                            ],
                            [
                                {text: 'Contenedor de derrames', fontSize: 8, rowSpan: 5},
                                {text: `Realizar limpieza del interior.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 5}
                            ],
                            [
                                {},
                                {text: `Verificar que esté libre de líquidos y de basura.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: `Verificar que las conexiones eléctricas y mecánicas están en buen estado.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: `Sellos mecánicos (botas) bien colocados, completos y herméticos.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: `Verificar el funcionamiento del sensor y comprobar que alarme en el equipo de control de inventarios, limpieza y que se encuentre en posición correcta a 1 cm. Del piso del contenedor.`, fontSize: 8},
                                {}
                            ],
                            [
                                {text: 'Protectores', fontSize: 8},
                                {text: `Verificar que no se encuentren dañados o golpeados.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                        ]
                    }
                },
                {text: '\nPlan de Mantenimiento de Señalamientos', bold: true, fontSize: 14, alignment: 'center'},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Equipo', alignment: 'center', bold: true, colSpan: 2, fontSize: 10},
                                {},
                                {text: 'Actividades', bold: true, alignment: 'center', rowSpan: 2, fontSize: 10},
                                {text: 'Frecuencia', bold: true, rowSpan: 2, fontSize: 10}
                            ],
                            [
                                {text: 'Principal', fontSize: 10},
                                {text: 'Secundario', fontSize: 10},
                            ],
                            [
                                {text: 'Señales y avisos', fontSize: 8, rowSpan: 4},
                                {text: 'Verticales', fontSize: 8, rowSpan: 3, alignment: 'center'},
                                {text: 'Verificar ubicación correcta'},
                                {text: '120 días', fontSize: 8, rowSpan: 4, alignment: 'center'}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que estén fijos.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que estén visibles, completos y en buen estado.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Marcaje horizontal en pavimentos.', fontSize: 8, alignment: 'center'},
                                {text: 'Verificar que el marcaje horizontal esté visibles y completos.', fontSize: 8},
                                {}
                            ],
                        ]
                    }
                },
                {text: '\nPlan de Mantenimiento del Seistema Eléctrico', bold: true, fontSize: 14, alignment: 'center'},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Equipo', alignment: 'center', bold: true, colSpan: 2, fontSize: 10},
                                {},
                                {text: 'Actividades', bold: true, alignment: 'center', rowSpan: 2, fontSize: 10},
                                {text: 'Frecuencia', bold: true, rowSpan: 2, fontSize: 10}
                            ],
                            [
                                {text: 'Principal', fontSize: 10},
                                {text: 'Secundario', fontSize: 10},
                            ],
                            [
                                {text: 'Instalaciones Eléctricas', fontSize: 8, rowSpan: 23},
                                {text: 'Sistema de Pararrayos (tanques no confinados)', fontSize: 8, alignment: 'center', rowSpan: 3},
                                {text: `En la revisión de las conexiones y cableado, se debe vigilar que estén libres de óxido, pintura y grasa, que sean de material conductor y no presenten daños mecánicos, y que mantengan la continuidad eléctrica`, fontSize: 8},
                                {text: '1 año', fontSize: 8, alignment: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: 'Realiza las mediciones sistema de pararrayos.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Realizar medición de resistividad de la red de puesta a tierra que se obtengan en esta prueba deben estar comprendidos entre 0 y 25 ohm.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Tablero del centro de control de motores', fontSize: 8},
                                {text: `Verificar que no falte tornillería y limpieza con dieléctrico, que cuente con sus tapas y tornillería, que se encuentre conectado a tierra.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Interruptores manuales', fontSize: 8},
                                {text: `Verificar el funcionamiento de interruptores de circuitos de fuerza e iluminación desde los tableros. Corregir en caso de falla.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Relevadores, arrancadores, capacitores y reguladores', fontSize: 8},
                                {text: `Verificar funcionamiento.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Elementos térmicos en arrancadores', fontSize: 8, rowSpan: 2, pageBreak: 'before'},
                                {text: `Verificar la capacidad.`, fontSize: 8, pageBreak: 'before'},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 2, pageBreak: 'before'}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar la capacidad.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Fotoceldas', fontSize: 8},
                                {text: `Verificar funcionamiento.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Contactos', fontSize: 8},
                                {text: `Verificar estado y comprobar voltaje.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Control eléctrico de sistemas de medición', fontSize: 8},
                                {text: `Verificar estado y comprobar voltaje.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Control sistema electrónico de detección de fugas', fontSize: 8, rowSpan: 3},
                                {text: `Verificar funcionamiento de los sensores.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que las alimentaciones eléctricas son las adecuadas de acuerdo con el diseño de la ingeniería y sean acordes a la clasificación de áreas.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que operen las alarmas audibles y/o visibles.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Alumbrado', fontSize: 8},
                                {text: `Verificar focos fundidos reemplazar en caso necesario.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Iluminación', fontSize: 8},
                                {text: `Verificar focos fundidos reemplazar en caso necesario.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Anuncios', fontSize: 8},
                                {text: `Verificar, reemplazar en caso necesario.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Interruptores de emergencia', fontSize: 8, rowSpan: 3},
                                {text: `Verificar que se encuentre fírmemente sujeto en el lugar donde está instalado y que el pulsador o botón tipo hongo no esté flojo o roto.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar el paro de emergencia esté operable, que, al activar los interruptores de emergencia, se corte el suministro de energía eléctrica a todos los circuitos de fuerza.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que a falla eléctrica el de Paro de Emergencia sus elementos se vayan a posición segura.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Tierras físicas', fontSize: 8, rowSpan: 3},
                                {text: `Verificar que las conexiones y cableado estén libres de óxido, pintura y grasa, que sean de material conductor y no presenten daños mecánicos, y que mantengan la continuidad eléctrica.`, fontSize: 8},
                                {text: '1 año', fontSize: 8, alignment: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Realiza las mediciones sistema de puesta a tierra.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que los valores de la resistencia de la red de puesta a tierra que se obtengan en esta prueba sean de un valor no mayor a 10 ohm, con objeto de drenar a tierra las corrientes generadas por las cargas eléctricas estáticas.`, fontSize: 8},
                                {}
                            ],
                        ]
                    }
                },
                {text: '\nSistema de mantenimiento eléctrico', bold: true, fontSize: 14, alignment: 'center'},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Equipo', alignment: 'center', bold: true, colSpan: 2, fontSize: 10},
                                {},
                                {text: 'Actividades', bold: true, alignment: 'center', rowSpan: 2, fontSize: 10},
                                {text: 'Frecuencia', bold: true, rowSpan: 2, fontSize: 10}
                            ],
                            [
                                {text: 'Principal', fontSize: 10},
                                {text: 'Secundario', fontSize: 10},
                            ],
                            [
                                {text: 'Instalación a prueba de explosión', fontSize: 8, rowSpan: 5},
                                {text: 'Tubería Conduit', fontSize: 8, alignment: 'center'},
                                {text: `Verificar condiciones `, fontSize: 8},
                                {text: '150 días', fontSize: 8, alignment: 'center', rowSpan: 5}
                            ],
                            [
                                {},
                                {text: 'Tapas y cajas', fontSize: 8, alignment: 'center'},
                                {text: 'Verificar condiciones, empaques en buen estado y la correcta colocación de tornillos.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Conexión de equipos', fontSize: 8, alignment: 'center'},
                                {text: 'Verificar condiciones.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Coples flexibles', fontSize: 8, alignment: 'center'},
                                {text: 'Verificar condiciones.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Sellos de EYE´s', fontSize: 8, alignment: 'center'},
                                {text: 'Verificar condiciones, (rellenos con cemento compound) que no falten tapas, tapones y sellos.', fontSize: 8},
                                {}
                            ],
                            [
                                {text: 'Instalaciones especiales (opcionales)', fontSize: 8, rowSpan: 3},
                                {text: 'Aire acondicionado', fontSize: 8, alignment: 'center'},
                                {text: `limpieza de serpentín evaporador y condensadora, cambio de filtros y revisión de presiones `, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Teléfono', fontSize: 8, alignment: 'center'},
                                {text: 'Verificación de funcionamiento de aparatos telefónicos.', fontSize: 8},
                                {text: '30 días', fontSize: 8, alignment: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {text: 'Circuito cerrado de televisión', fontSize: 8, alignment: 'center'},
                                {text: 'Verificación de funcionamiento de cámaras y monitores.', fontSize: 8},
                                {}
                            ],
                            [
                                {text: 'Acometida', fontSize: 8, rowSpan: 2, pageBreak: 'before'},
                                {text: 'Acometida', fontSize: 8, alignment: 'center', pageBreak: 'before'},
                                {text: `Verificación de puntas y esto de conexiones`, fontSize: 8, pageBreak: 'before'},
                                {text: 'anual', fontSize: 8, alignment: 'center', rowSpan: 2, pageBreak: 'before'}
                            ],
                            [
                                {},
                                {text: 'Teransformador', fontSize: 8, alignment: 'center'},
                                {text: 'Verificación de puntas y calentamiento.', fontSize: 8},
                                {}
                            ],
                        ]
                    }
                },
                {text: '\nPlan de Mantenimiento de Pavimentos', bold: true, fontSize: 14, alignment: 'center'},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Equipo', alignment: 'center', bold: true, colSpan: 2, fontSize: 10},
                                {},
                                {text: 'Actividades', bold: true, alignment: 'center', rowSpan: 2, fontSize: 10},
                                {text: 'Frecuencia', bold: true, rowSpan: 2, fontSize: 10}
                            ],
                            [
                                {text: 'Principal', fontSize: 10},
                                {text: 'Secundario', fontSize: 10},
                            ],
                            [
                                {text: 'Pavimientos', fontSize: 8, alignment: 'center', rowSpan: 15},
                                {text: 'Pisos de circulación', fontSize: 8, alignment: 'center', rowSpan: 3},
                                {text: `Verificar que no existan fracturas o fisuras en pisos de zonas de carga y descarga`, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que exista el material sellador en las juntas de expansión.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que no existan baches, los cuales deben ser reparados.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Rampas.', fontSize: 8, alignment: 'center', rowSpan: 3},
                                {text: 'Verificar que no existan fracturas o fisuras en pisos de zonas de carga y descarga.', fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que exista el material sellador en las juntas de expansión.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que estén señaladas.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Guarniciones.', fontSize: 8, alignment: 'center', rowSpan: 2},
                                {text: 'Verificar integridad (que no estén dañadas).', fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: 'Aplicación de recubrimiento.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Estacionamientos.', fontSize: 8, alignment: 'center', rowSpan: 2},
                                {text: 'Verificar que no existan baches, los cuales deben ser reparados.', fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que estén señalados.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Carriles de acceso y salida (carreteras).', fontSize: 8, alignment: 'center', rowSpan: 2},
                                {text: 'Verificar que no existan baches, los cuales deben ser reparados.', fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que estén señalados.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Islas.', fontSize: 8, alignment: 'center', rowSpan: 3},
                                {text: 'Verificar que exista el material sellador en las juntas de expansión.', fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: 'Aplicación de recubrimiento en guarnición.', fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: 'Verificar que no existan fracturas o fisuras en pisos.', fontSize: 8},
                                {}
                            ],
                        ]
                    }
                },
                {text: '\nPlan de Mantenimiento del Sistema de Drenajes', bold: true, fontSize: 14, alignment: 'center'},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Equipo', alignment: 'center', bold: true, colSpan: 2, fontSize: 10},
                                {},
                                {text: 'Actividades', bold: true, alignment: 'center', rowSpan: 2, fontSize: 10},
                                {text: 'Frecuencia', bold: true, rowSpan: 2, fontSize: 10}
                            ],
                            [
                                {text: 'Principal', fontSize: 10},
                                {text: 'Secundario', fontSize: 10},
                            ],
                            [
                                {text: 'Aceitoso', fontSize: 8, alignment: 'center', rowSpan: 8},
                                {text: 'Tubería', fontSize: 8, alignment: 'center'},
                                {text: `Mantener limpios y libres de cualquier obstrucción, y que permita el flujo hacia los sistemas de drenaje municipal o pozos de absorción`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignmnet: 'center'}
                            ],
                            [
                                {},
                                {text: 'Registros', fontSize: 8, alignment: 'center'},
                                {text: `Mantener limpios y libres de cualquier obstrucción, y que permita el flujo hacia los sistemas de drenaje municipal o pozos de absorción`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignmnet: 'center'}
                            ],
                            [
                                {},
                                {},
                                {text: `Desazolvar drenajes`, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center'}
                            ],
                            [
                                {},
                                {text: 'Rejillas metálicas', fontSize: 8, alignment: 'center', rowSpan: 2},
                                {text: `Revisión que no estén dañados, que estén a la medida del registro.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Retirar rejillas y lavar con agua y productos biodegradables.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Trampas de combustibles', fontSize: 8, alignment: 'center', rowSpan: 2},
                                {text: `Verificar que la trampa de gasolina y diésel se conserve libre de Hidrocarburos y se encuentre en condiciones de operación.`, fontSize: 8},
                                {text: '1 día', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Realizar revisión y hacer limpieza de trampas de combustibles y de grasas, cuando se requiera lavar con agua y productos biodegradables y recolectar los residuos flotantes en un tambor cerrado, el cual debe de tener un letrero señalando el producto que contiene en uno de sus costados y la leyenda o aviso que alerte de la peligrosidad de mismo y lodos en depósitos de cierre hermético.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Sistema separador de grasas y combustibles (opcional)', fontSize: 8, alignment: 'center'},
                                {text: `Realizar revisión y hacer limpieza al sistema separador de grasas y combustibles, cuando se requiera lavar con agua y productos biodegradables y recolectar los residuos flotantes en un tambor cerrado, el cual debe de tener un letrero señalando el producto que contiene en uno de sus costados y la leyenda o aviso que alerte de la peligrosidad de este y lodos en depósitos de cierre hermético`, fontSize: 8},
                                {text: '1 día', fontSize: 8, alignmnet: 'center'}
                            ],
                            [
                                {},
                                {text: 'Sistema de aprovechamiento y reúso de aguas residuales', fontSize: 8, alignment: 'center'},
                                {text: `Verificar que las diversas instalaciones deben funcionar conforme a las especificaciones del fabricante`, fontSize: 8},
                                {text: '1 día', fontSize: 8, alignmnet: 'center'}
                            ],
                            [
                                {},
                                {text: 'Colector Municipal', fontSize: 8, alignment: 'center'},
                                {text: `Verificar que el colector municipal se conserve libre de Hidrocarburos y se encuentre en condiciones de operación`, fontSize: 8},
                                {text: '1 día', fontSize: 8, alignmnet: 'center'}
                            ],
                            [
                                {text: 'Pluvial', fontSize: 8, alignment: 'center', rowSpan: 4},
                                {text: 'Tubería', fontSize: 8, alignment: 'center'},
                                {text: `Mantener limpios y libres de cualquier obstrucción, y que permita el flujo hacia los sistemas de drenaje municipal o pozos de absorción`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignmnet: 'center'}
                            ],
                            [
                                {},
                                {text: 'Registros', fontSize: 8, alignment: 'center'},
                                {text: `Mantener limpios y libres de cualquier obstrucción, y que permita el flujo hacia los sistemas de drenaje municipal o pozos de absorción`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignmnet: 'center'}
                            ],
                            [
                                {},
                                {text: 'Rejillas metálicas', fontSize: 8, alignment: 'center', rowSpan: 2},
                                {text: `Revisión que no estén dañados, que estén a la medida del registro.`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Retirar rejillas y lavar con agua y productos biodegradables.`, fontSize: 8},
                                {}
                            ],
                        ]
                    }
                },
                {text: '\nPlan de Mantenimiento de áreas verdes', bold: true, fontSize: 14, alignment: 'center'},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Equipo', alignment: 'center', bold: true, colSpan: 2, fontSize: 10},
                                {},
                                {text: 'Actividades', bold: true, alignment: 'center', rowSpan: 2, fontSize: 10},
                                {text: 'Frecuencia', bold: true, rowSpan: 2, fontSize: 10}
                            ],
                            [
                                {text: 'Principal', fontSize: 10},
                                {text: 'Secundario', fontSize: 10},
                            ],
                            [
                                {text: 'Áreas verdes', fontSize: 8, alignment: 'center', rowSpan: 2},
                                {text: 'Plantas árboles', fontSize: 8, alignment: 'center'},
                                {text: `Se podan plantas y árboles para que no obstruyan cables, canaletas, ni presionen sobre techos o muros, ni sean un peligro para la zona de seguridad`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignmnet: 'center'}
                            ],
                            [
                                {},
                                {text: 'Jardinería', fontSize: 8, alignment: 'center'},
                                {text: `Verificación a jardineras, limpieza en general, remoción de tierra, plantas, flores secas y riego con agua`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignmnet: 'center'}
                            ],
                        ]
                    }
                },
                {text: '\nPlan de Mantenimiento de edificios', bold: true, fontSize: 14, alignment: 'center'},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Equipo', alignment: 'center', bold: true, colSpan: 2, fontSize: 10},
                                {},
                                {text: 'Actividades', bold: true, alignment: 'center', rowSpan: 2, fontSize: 10},
                                {text: 'Frecuencia', bold: true, rowSpan: 2, fontSize: 10}
                            ],
                            [
                                {text: 'Principal', fontSize: 10},
                                {text: 'Secundario', fontSize: 10},
                            ],
                            [
                                {text: 'Edificios', fontSize: 8, alignment: 'center', rowSpan: 35},
                                {text: 'Oficinas', fontSize: 8, alignment: 'center', rowSpan: 5},
                                {text: `Aplicación de recubrimiento a interiores y exteriores`, fontSize: 8},
                                {text: '365 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar estado de Impermeabilización de azoteas.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas.`, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que los elementos metálicos no presenten oxidación.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar el funcionamiento de puertas y ventanas (cerraduras y herrajes).`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Casetas', fontSize: 8, alignment: 'center', rowSpan: 5},
                                {text: `Aplicación de recubrimiento a interiores y exteriores`, fontSize: 8},
                                {text: '365 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar estado de Impermeabilización de azoteas.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas.`, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que los elementos metálicos no presenten oxidación.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar el funcionamiento de puertas y ventanas (cerraduras y herrajes).`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Cuarto de sucios', fontSize: 8, alignment: 'center', rowSpan: 5},
                                {text: `Aplicación de recubrimiento a interiores y exteriores`, fontSize: 8},
                                {text: '365 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar estado de Impermeabilización de azoteas.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas.`, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que los elementos metálicos no presenten oxidación.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar el funcionamiento de puertas y ventanas (cerraduras y herrajes).`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Almacén de residuos peligrosos', fontSize: 8, alignment: 'center', rowSpan: 5},
                                {text: `Aplicación de recubrimiento a interiores y exteriores`, fontSize: 8},
                                {text: '365 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar estado de Impermeabilización de azoteas.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas.`, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que los elementos metálicos no presenten oxidación.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar el funcionamiento de puertas y ventanas (cerraduras y herrajes).`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Cuarto de control eléctrico', fontSize: 8, alignment: 'center', rowSpan: 5},
                                {text: `Aplicación de recubrimiento a interiores y exteriores`, fontSize: 8},
                                {text: '365 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar estado de Impermeabilización de azoteas.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas.`, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que los elementos metálicos no presenten oxidación.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar el funcionamiento de puertas y ventanas (cerraduras y herrajes).`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Cuarto de máquinas', fontSize: 8, alignment: 'center', rowSpan: 5},
                                {text: `Aplicación de recubrimiento a interiores y exteriores`, fontSize: 8},
                                {text: '365 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar estado de Impermeabilización de azoteas.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas.`, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que los elementos metálicos no presenten oxidación.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar el funcionamiento de puertas y ventanas (cerraduras y herrajes).`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Baños', fontSize: 8, alignment: 'center', rowSpan: 5},
                                {text: `Aplicación de recubrimiento a interiores y exteriores`, fontSize: 8},
                                {text: '365 días', fontSize: 8, alignmnet: 'center', rowSpan: 2}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar estado de Impermeabilización de azoteas.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas.`, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 3}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que los elementos metálicos no presenten oxidación.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar el funcionamiento de puertas y ventanas (cerraduras y herrajes).`, fontSize: 8},
                                {}
                            ],
                            [
                                {text: 'Techumbre', fontSize: 8, alignment: 'center', rowSpan: 4},
                                {text: 'Estructuras', fontSize: 8, alignment: 'center'},
                                {text: `Verificar que los elementos metálicos no presenten oxidación`, fontSize: 8},
                                {text: '90 días', fontSize: 8, alignmnet: 'center', rowSpan: 4}
                            ],
                            [
                                {},
                                {text: 'Columnas', fontSize: 8, alignment: 'center'},
                                {text: `Verificar que los elementos metálicos no presenten oxidación`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Láminas', fontSize: 8, alignment: 'center'},
                                {text: `Verificar que no están sueltas o dañadas`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {text: 'Caída de aguas pluviales', fontSize: 8, alignment: 'center'},
                                {text: `Verificar canaletas y bajadas de agua pluvial no estén obstruidas o dañadas`, fontSize: 8},
                                {}
                            ],
                        ]
                    }
                },
                {text: '\nPlan de Mantenimiento de edificios', bold: true, fontSize: 14, alignment: 'center'},
                {
                    table: {
                        widths: [47, 61, 375, 50],
                        body: [
                            [
                                {text: 'Equipo', alignment: 'center', bold: true, colSpan: 2, fontSize: 10},
                                {},
                                {text: 'Actividades', bold: true, alignment: 'center', rowSpan: 2, fontSize: 10},
                                {text: 'Frecuencia', bold: true, rowSpan: 2, fontSize: 10}
                            ],
                            [
                                {text: 'Principal', fontSize: 10},
                                {text: 'Secundario', fontSize: 10},
                            ],
                            [
                                {text: 'Seguridad', fontSize: 8, alignment: 'center', rowSpan: 10},
                                {text: 'Extintores', fontSize: 8, alignment: 'center', rowSpan: 10},
                                {text: `Verificar que se encuentren en la ubicación asignada en plano`, fontSize: 8},
                                {text: '30 días', fontSize: 8, alignmnet: 'center', rowSpan: 8}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que estén instalados a una altura máxima de 1.50 m.  y mínima de 0.10 m.  de nivel de piso terminado.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que se encuentren señalizados.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que cuenten con el sello o fleje de garantía sin violar.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que la aguja del manómetro indique la presión en la zona verde (operable).`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que no existan daños físicos evidentes, tales como corrosión, escape de presión, obstrucción, golpes o deformaciones.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que no existan daños físicos, tales como roturas, desprendimientos, protuberancias o perforaciones, en mangueras, boquillas o palanca de accionamiento.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Verificar que la etiqueta indique la vigencia, después de cada mantenimiento.`, fontSize: 8},
                                {}
                            ],
                            [
                                {},
                                {},
                                {text: `Mantenimiento general y recarga, con personal especializado.`, fontSize: 8},
                                {text: '365 días', fontSize: 8, alignment: 'center'}
                            ],
                            [
                                {},
                                {},
                                {text: `Realizar prueba hidrostática al cilindro.`, fontSize: 8},
                                {text: '5 años', fontSize: 8, alignment: 'center'}
                            ],
                        ]
                    }
                },
                {text: '\n\n'},
                {
                    table: {
                        widths: [220, 220, 103],
                        body: [
                            [
                                {
                                    text: '',
                                    fit: [100, 50],
                                    alignment: 'center',
                                    border: [true, true, true, false],
                                    pageBreak: 'before'
                                },
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
                                    text: `REVISADO POR:\n\n${ddd.representanteTecnico}\nREPRESENTANTE TÉCNICO`,
                                    fontSize: 10,
                                    alignment: 'center'
                                },
                                {
                                    text: `APROBADO POR:\n\n${ddd.maximaAutoridad}\nMÁXIMA AUTORIDAD`,
                                    fontSize: 10,
                                    alignment: 'center'
                                },
                                {text: `FECHA DE APROBACIÓN:\n${day}/${month}/${year}`, fontSize: 10, alignment: 'center'},
                            ]
                        ]
                    }
                }
            ],
            pageSize: 'LETTER',
            pageMargins: [22, 120]
        };
        this.pdfMaker.generate(dd, 'Plan de Mantenimiento');
    }

    pdf2() {
        const footer = this.myImage;
        const marcaAgua = this.marcaAguaEstacion;
        const fecha = new Date();
        const day = fecha.getDate();
        const month = fecha.getUTCMonth() + 1;
        const year = fecha.getFullYear();
        const iconoEstacion = this.iconoEstacion;
        const firmaEstacion = this.firmaEstacion;
        const ddd = this.datosEstacion;
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
                        widths: [150, 583], heights: [30, 10, 10],
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
                                    text: 'XI. INTEGRIDAD MECÁNICA Y ASEGURAMIENTO DE LA CALIDAD',
                                    alignment: 'center',
                                    bold: true,
                                    colSpan: 2
                                },
                                {}
                            ],
                            [
                                {
                                    text: 'PROGRAMA DE MANTENIMIENTO 2020',
                                    alignment: 'center',
                                    bold: true,
                                    fillColor: '#ddd',
                                    colSpan: 2
                                },
                                {}
                            ],
                        ]
                    },
                    margin: [22, 7],
                    // layout: {
                    //     hLineWidth: function (i, node) {
                    //         return (i === 0 || i === node.table.body.length) ? 2 : 1;
                    //     },
                    //     vLineWidth: function (i, node) {
                    //         return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                    //     },
                    //     hLineColor: function (i, node) {
                    //         return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                    //     },
                    //     vLineColor: function (i, node) {
                    //         return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                    //     },
                    // }
                };
            },
            footer(currentPage, pageCount) {
                return {
                    table: {
                        headerRows: 1,
                        widths: [740],
                        body : [
                            [
                                {
                                    columns: [
                                        'Página ' + currentPage.toString() + ' de ' + pageCount,
                                        {text: `FS-20 Rev. 0, ${day}/${month}/${year}`, width: 180}
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
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'AREA-EQUIPO', bold: true, fillColor: '#ddd'},
                                {text: 'PLAN DE MANTENIMIENTO', bold: true, alignment: 'center', fillColor: '#ddd'},
                                {text: 'PERIODO', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 9},
                                {text: 'ENE', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'FEB', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'MAR', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'ABR', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'MAY', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'JUN', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'JUL', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'AGO', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'SEP', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'OCT', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'NOV', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'DIC', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                                {text: 'REPORTE', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 8},
                            ],
                            [
                                {text: 'Tanques', bold: true, alignment: 'center', rowSpan: 8},
                                {text: 'Limpieza área de almacenamiento'},
                                {text: 'diaria', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-06', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Inspección bomba, control inventarios'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-01', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Prueba sensores, bomba, espacio anular', fontSize: 10},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-02', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Inspección, estado contenedores, botas, boquillas y tapas', fontSize: 9},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-01', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Prueba de hermeticidad, control de inventarios'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Medición y purga de agua, si aplica'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión válvula sobrellenado, en operación y completa', fontSize: 10},
                                {text: '6 meses', fontSize: 9},
                                {},
                                {},
                                {text: '', fillColor: '#ddd'},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {text: '', fillColor: '#ddd'},
                                {},
                                {},
                                {},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Pruebas de hermeticidad equipo móvil'},
                                {text: '6 meses', fontSize: 9},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {text: '', fillColor: '#9CC2E5'},
                                {},
                                {},
                                {},
                                {text: 'R', bold: true, alignment: 'center'}
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    table: {
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'Dispensarios', bold: true, alignment: 'center', rowSpan: 6},
                                {text: 'Limpieza gabinete, manguera, pistola'},
                                {text: 'diaria', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-03', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Inspección contenedores y accesorios, sin fuga, buen estado', fontSize: 9},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-03', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Prueba de válvula shut-off'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-02', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Prueba sensor de líquidos'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-02', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Calibración'},
                                {text: 'anual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'R', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Inspección de protectores y anclajes'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {}
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    table: {
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'Tuberías', bold: true, alignment: 'center', rowSpan: 5},
                                {text: 'Inspección de fugas en accesorios, válvulas'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-04', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Tubería de venteo, integridad mecánica'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-04', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión de válvulas de venteo'},
                                {text: '6 meses', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-04', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión de arrestador de flama'},
                                {text: '6 meses', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-04', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Pruebas de hermeticidad'
                                },
                                {text: 'anual', fontSize: 9},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {text: '', fillColor: '#9CC2E5'},
                                {},
                                {},
                                {},
                                {text: 'R', bold: true, alignment: 'center'}
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    table: {
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'Extintores', bold: true, alignment: 'center', rowSpan: 2},
                                {text: 'Inspección, ubicación y estado de accesorios'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-07', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Recarga de polvo o gas'},
                                {text: 'anual', fontSize: 9},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {text: '', fillColor: '#ddd'},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {text: 'R', bold: true, alignment: 'center'}
                            ]
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    table: {
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'Drenajes, Registros, Trampa de combustibles', bold: true, alignment: 'center', rowSpan: 4},
                                {text: 'Inspección de trampa que esté libre de hidrocarburos', fontSize: 10},
                                {text: 'diaria', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-06', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Limpieza Rejillas, registros y trampa'},
                                {text: 'anual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Limpieza ecológica desazolve de registros y trampa', fontSize: 10},
                                {text: '3 meses', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'R', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Retiro residuos peligrosos'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'R', bold: true, alignment: 'center'}
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    table: {
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'Áreas Verdes', bold: true, alignment: 'center'},
                                {text: 'Poda y Limpieza'},
                                {text: '15 días', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {}
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    table: {
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'Instalaciones eléctricas', bold: true, alignment: 'center', rowSpan: 7},
                                {text: 'Inspección general de estado de tierras físicas'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-02', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Inspección alumbrado'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión y prueba de Paros de emergencia'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-02', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Inspección general de instalaciones (integridad eléctrica)', fontSize: 10},
                                {text: '6 meses', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-05', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Medición de resistividad tierras y limpieza'},
                                {text: 'anual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'R', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Mantenimiento a Respaldo (UPS)'},
                                {text: 'anual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'R', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Dictamen por una UVIE'},
                                {text: '5 años', fontSize: 9},
                                {},
                                {},
                                {text: '', fillColor: '#ddd'},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {text: '', fillColor: '#ddd'},
                                {},
                                {},
                                {},
                                {text: 'D', bold: true, alignment: 'center'}
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    table: {
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'Señalamientos', bold: true, alignment: 'center', rowSpan: 6},
                                {text: 'Inspección señalamientos basura, no estacionarse, etc.', fontSize: 10},
                                {text: '4 meses', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-08', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Inspección señalamientos horizontales'},
                                {text: '4 meses', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-08', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Rotulación/sustitución de señalamientos horizontales', fontSize: 10},
                                {text: '6 meses', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Pintura y rotulación tapas contenedores tanques', fontSize: 10},
                                {text: 'anual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Pintura y rotulación tapas pozos de monitoreo observación', fontSize: 10},
                                {text: 'anual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Pintura de tapas de registros eléctricos y drenajes', fontSize: 10},
                                {text: 'anual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    table: {
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'Pozos de Observación y Monitoreo', bold: true, alignment: 'center', rowSpan: 3},
                                {text: 'Inspección tapa hermética, pintura epóxica, cemento pulido', fontSize: 10},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Verificación de ausencia de agua e hidrocarburos'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Rotulación/sustitución de señalamientos horizontales', fontSize: 10},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-02', bold: true, alignment: 'center'}
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    table: {
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'Otros Equipos', bold: true, alignment: 'center', rowSpan: 5},
                                {text: 'Revisión de compresor, lubricación', fontSize: 10},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión de Hidroneumático'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión de Bombas de agua'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión de CCTV'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión de accesorios de descarga, codos, mangueras', fontSize: 10},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-04', bold: true, alignment: 'center'}
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    table: {
                        widths: [77, 257, 38, 15, 14, 18, 16, 17, 16, 16, 17, 15, 16, 17, 13, 43],
                        body: [
                            [
                                {text: 'Edificios', bold: true, alignment: 'center', rowSpan: 6},
                                {text: 'Limpieza'},
                                {text: 'diaria', fontSize: 9},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: '', fillColor: '#ddd'},
                                {text: 'F-06', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Orden, cuarto eléctrico, sucios, máquinas, alm. res. peligro', fontSize: 10},
                                {text: 'diaria', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'F-06', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Azoteas, revisión de bajadas de agua'},
                                {text: 'mensual', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión de pavimentos, libre de baches, fisuras'},
                                {text: '4 meses', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión de pisos de almacenamiento despacho sin fisuras', fontSize: 10},
                                {text: '4 meses', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                            [
                                {},
                                {text: 'Revisión de tinacos y cisternas', fontSize: 10},
                                {text: '6 meses', fontSize: 9},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: '', fillColor: '#9CC2E5'},
                                {text: 'B', bold: true, alignment: 'center'}
                            ],
                        ]
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 2 : 1;
                        },
                        vLineWidth: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    text: `*Todas las actividades deben ser registradas en bitácora, el programa considera
                            las actividades que contempla el plan de mantenimiento de cada área o equipo`, bold: true
                },
                {text: '\n\nReportes que se generan de acuerdo a la actividad:\n\n'},
                {
                    table: {
                        widths: [50, 300],
                        body: [
                            [
                                {text: 'FO-01'},
                                {text: 'Inspección de tanques y registros.'}
                            ],
                            [
                                {text: 'FO-02'},
                                {text: 'Pruebas de dispositivos de seguridad.'}
                            ],
                            [
                                {text: 'FO-03'},
                                {text: 'Inspección de dispensarios'}
                            ],
                            [
                                {text: 'FO-04'},
                                {text: 'Inspección de accesorios de descarga y tubos de venteo.'}
                            ],
                            [
                                {text: 'FO-05'},
                                {text: 'Inspección de instalaciones eléctricas.'}
                            ],
                            [
                                {text: 'FO-06'},
                                {text: 'Programa de limpieza diaria e inspección de trampa de combustibles.'}
                            ],
                            [
                                {text: 'FO-07'},
                                {text: 'Inspección Mensual de Extintores.'}
                            ],
                            [
                                {text: 'FO-08'},
                                {text: 'Revisión de señalamientos Horizontales y verticales'}
                            ],
                            [
                                {text: 'B'},
                                {text: 'Se registra únicamente en bitácora, no genera reporte.'}
                            ],
                            [
                                {text: 'R'},
                                {text: 'Reporte entregado por un tercero.'}
                            ],
                            [
                                {text: 'D'},
                                {text: 'Dictamen entregado por una Unidad de Verificación.'}
                            ],
                        ]
                    }
                },
                {text: '\n\n'},
                // {
                //     table: {
                //         widths: [300, 300],
                //         body: [
                //             [
                //                 {
                //                     image: `${firmaEstacion}`,
                //                     fit: [100, 50],
                //                     alignment: 'center',
                //                     border: [true, true, true, false],
                //                     pageBreak: 'before'
                //                 },
                //                 {
                //                     text: '',
                //                     fit: [100, 50],
                //                     alignment: 'center',
                //                     border: [true, true, true, false],
                //                     pageBreak: 'before'
                //                 },
                //             ],
                //             [
                //                 {text: '\n\nEncargado de la estación de servicio'},
                //             ],
                //             [
                //                 {text: `Fecha:\n\n${day}/${month}/${year}`}
                //             ]
                //         ]
                //     }
                // }
            ],
            pageOrientation: 'landscape',
            pageSize: 'LETTER',
            pageMargins: [22, 120]
        };
        this.pdfMaker.generate(dd, 'Programa de Mantenimiento de equipos');
    }
}
