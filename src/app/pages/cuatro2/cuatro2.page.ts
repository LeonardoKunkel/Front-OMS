import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren} from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { ObjetivosMetasService } from '../../services/Elemento 4/objetivos-metas.service';
import { AlertController, ToastController, IonCheckbox } from '@ionic/angular';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';
import { Observable } from 'rxjs';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
@Component({
  selector: 'app-cuatro2',
  templateUrl: './cuatro2.page.html',
  styleUrls: ['./cuatro2.page.scss'],
})
export class Cuatro2Page implements OnInit {

  objetivos: string;
  datos: {
    meta1,
    meta2,
    meta3
  };
  data = [
    {
      name: 'Reducción en generacion de residuos peligrosos',
      selected: false,
      value: 'Reducción en generacion de residuos peligrosos',
      img: '../../../assets/Imagenes/Elemento 4/reducción en generacion de residuos-01.png',
      met1: 'Reducción en la fuente, separación y valorización de los residuos',
      met2: 'Implementación del esquema “Producción más limpia”',
      meth3: 'Extremar medidas de seguridad en el almacenamiento de los productos peligrosos para evitar derrames o escapes',
      id: 'residuosPeligrosos'
    },
    {
      name: 'Reducción en el consumo de agua',
      selected: false,
      value: 'Reducción en el consumo de agua',
      img: '../../../assets/Imagenes/Elemento 4/reduccion de consumo de agua-01.png',
      met1: 'Reducir un 5% anual los residuos del vital liquido.',
      met2: 'Solventar las fugas.',
      meth3: 'Potencias sistema de limpieza en seco (barrer,aspirar).',
      id: 'consumoAgua'
    },
    {
      name: 'Reducción en el consumo de energia',
      selected: false,
      value: 'Reducción en el consumo de energia',
      img: '../../../assets/Imagenes/Elemento 4/reduccion de energia electrica-01-01.png',
      met1: 'Reducir un 5% anual los residuos del vital liquido.',
      met2: 'Solventar las fugas.',
      meth3: 'Potencias sistema de limpieza en seco (barrer,aspirar).',
      id: 'consumoEnergia'
    },
    {
      name: 'Cumplimiento al programa de mantenimiento',
      selected: false,
      value: 'Cumplimiento al programa de mantenimiento',
      img: '../../../assets/Imagenes/Elemento 4/cumplimiento programa de mantenimiento-01.png',
      met1: 'Reducir un 5% anual los residuos del vital liquido.',
      met2: 'Solventar las fugas.',
      meth3: 'Potencias sistema de limpieza en seco (barrer,aspirar).',
      id: 'programaMantenimiento'
    },
    {
      name: 'Incrementar capacitaciones a los trabajadores',
      selected: false,
      value: 'Incrementar capacitaciones a los trabajadores',
      img: '../../../assets/Imagenes/Elemento 4/incrementar capacitaciones-01 (1).png',
      met1: 'Reducir un 5% anual los residuos del vital liquido.',
      met2: 'Solventar las fugas.',
      meth3: 'Potencias sistema de limpieza en seco (barrer,aspirar).',
      id: 'capacitacionesTrabajadores'
    },
    {
      name: 'Incrementar venta 5% anualmente',
      selected: false,
      value: 'Incrementar venta 5% anualmente',
      img: '../../../assets/Imagenes/Elemento 4/incrementar venta 10-01.png',
      met1: 'Reducir un 5% anual los residuos del vital liquido.',
      met2: 'Solventar las fugas.',
      meth3: 'Potencias sistema de limpieza en seco (barrer,aspirar).',
      id: 'ventaAnualmente'
    },
  ];

  generacionResiduosPeligrosos: any = {
    objetivo: 'Reducción en la generación de residuos peligrosos',
    proceso: 'Acciones y medidas preventivas',
    meta1: 'Reducción en la fuente, separación y valorización de los residuos',
    meta2: 'Implementación del esquema “Producción más limpia”',
    meta3: 'Extremar medidas de seguridad en el almacenamiento de los productos peligrosos para evitar derrames o escapes',
    a1: `Evitar clasificar materiales como desecho o residuo en tanto no haya concluido su vida útil
        o sea efectivo dada la concentración establecida en el principio activo`,
    a2: `Involucrar a todos los miembros de la Estación de Servicio que tienen contacto con los
        residuos peligrosos para que colaboren en la minimización de residuos.`,
    a3: 'Adecuación de maquinaria y herramientas.Mantenimiento al cuarto de residuos peligrosos',
    i1: 'Reporte entregado por un tercero',
    i2: 'Reporte entregado por un tercero',
    i3: 'Reporte entregado por un tercero',
    S1: 'Bitácora de operación y mantenimiento',
    S2: 'Bitácora de operación y mantenimiento',
    S3: 'Bitácora de operación y mantenimiento',
    fE1: 'Trimestral',
    fE2: 'Trimestral',
    fE3: 'Trimestral',
    cA1: '5%',
    cA2: '5%',
    cA3: '5%',
  };

  reduccionConsumoAgua: any = {
    objetivo: 'Reducción en el consumo de agua',
    proceso: 'Acciones y medidas correctivas',
    meta1: 'Reducción del 10% anual de los residuos del vital líquido',
    meta2: 'Solventar las fugas',
    meta3: 'Potencias sistemas de limpieza en seco (barrer, aspirar, etc)',
    a1: 'Monitorizar y analizar el consumo de agua',
    a2: 'Asignar al personal de mantenimiento en la atención y arreglo de las fugas en tuberías, filtración o evaporación de agua',
    a3: 'Obtención del equipo necesario (escobas y aspiradoras) e involucrar al personal en estas tareas.',
    i1: 'Reducción en el recibo de agua',
    i2: 'Reducción en el recibo de agua',
    i3: 'Reducción en el recibo de agua',
    S1: 'Bitácora de operación y mantenimiento.',
    S2: 'Bitácora de operación y mantenimiento.',
    S3: 'Bitácora de operación y mantenimiento.',
    fE1: 'Semestral',
    fE2: 'Semestral',
    fE3: 'Semestral',
    cA1: '5%',
    cA2: '5%',
    cA3: '5%',
  };

  reduccionConsumoEnergia: any = {
    objetivo: 'Reducción en el consumo de energía eléctrica',
    proceso: 'Acciones y medidas correctivas',
    meta1: 'Reducción del 10% anual del consumo de energía',
    meta2: 'Aprovechar el punto máximo la luz natural',
    meta3: 'Usar bombillos ahorradores',
    a1: 'Monitorizar y analizar el consumo de energía eléctrica',
    a2: 'No encender bombillos durante periodos con luz natural',
    a3: 'Adquisición e instalación de bombillos de bajo consumo eléctrico.',
    i1: 'Reducción en el recibo de agua',
    i2: 'Reducción en el recibo de agua',
    i3: 'Reducción en el recibo de agua',
    S1: 'Bitácora de operación y mantenimiento',
    S2: 'Bitácora de operación y mantenimiento',
    S3: 'Bitácora de operación y mantenimiento',
    fE1: 'Semestral',
    fE2: 'Semestral',
    fE3: 'Semestral',
    cA1: '5%',
    cA2: '5%',
    cA3: '5%',
  };

  cumplimientoProgramaMantenimiento: any = {
    objetivo: 'Cumplimiento al programa de mantenimiento',
    proceso: 'Acciones y medidas correctivas',
    meta1: 'Reparación de equipo dañado',
    meta2: 'Planificación de mantenimiento preventivo periódicamente',
    meta3: 'Seguimiento puntual de la bitácora de operación y mantenimiento',
      a1: 'Cumplimiento del FS-20 Programa anual de mantenimiento',
      a2: 'Cumplimiento del FS-20 Programa anual de mantenimiento',
      a3: 'Cumplimiento del FS-20 Programa anual de mantenimiento',
      i1: 'Funcionamiento óptimo de la ES',
      i2: 'Reducción en el recibo de agua',
      i3: 'Reducción en el recibo de agua',
      S1: 'Bitácora de operación y mantenimiento',
      S2: 'Bitácora de operación y mantenimiento',
      S3: 'Bitácora de operación y mantenimiento',
      fE1: 'Semestral',
      fE2: 'Semestral',
      fE3: 'Semestral',
      cA1: '80%',
      cA2: '80%',
      cA3: '80%',
  };

  incrementarCapacitacionTrabajadores: any = {
    objetivo: 'Incrementar capacitación a los trabajadores',
    proceso: 'Acciones y medidas correctivas',
    meta1: 'Acciones y medidas correctivas',
    meta2: 'Cumplir con el programa anual de capacitación',
    meta3: 'Realizar la evaluación de resultados derivados de las capacitaciones',
    a1: 'Supervisar a los trabajadores y su desempeño analizando cómo pueden mejorar en el cumplimiento de sus actividades',
    a2: 'FS-17 Seguimiento del Programa anual de capacitación',
    a3: 'Verificar que los cursos hayan sido efectivos y evaluados',
    i1: 'Formato con necesidades detectadas',
    i2: 'Formato con programa de capacitación',
    i3: 'Certificados, diplomas, etc.',
    S1: 'FS-15 Detección de necesidades de capacitación',
    S2: 'Cumplimiento del formato',
    S3: 'Exámenes de evaluación firmados',
    fE1: 'Semestral',
    fE2: 'Semestral',
    fE3: 'Semestral',
    cA1: '50%',
    cA2: '50%',
    cA3: '50%'
  };

  incrementarVentas: any = {
    objetivo: 'Incrementar ventas 5%',
    proceso: 'Acciones y medidas correctivas',
    meta1: 'Establecimiento de metas de venta diarias',
    meta2: 'Capacitación al personal que esta en contacto con los clientes para mejor atención',
    meta3: 'Implementar estrategias de marketing',
      a1: 'Supervisar a los trabajadores y su desempeño analizando cómo pueden mejorar en el cumplimiento de sus actividades',
      a2: 'Platicas, cursos y concientización del personal ',
      a3: 'Patrocinar la Estación de Servicio a través de redes sociales y publicidad',
      i1: 'Reducción de quejas',
      i2: 'Cursos, diplomas, certificados, minutas',
      i3: 'Mayor reconocimiento de la Estación de Servicio',
      S1: 'FS-06 Quejas y sugerencias',
      S2: 'FS-06 Quejas y sugerencias',
      S3: 'Servicio de publicidad contratados',
      fE1: 'Anual',
      fE2: 'Anual',
      fE3: 'Anual',
      cA1: '5%',
      cA2: '5%',
      cA3: '5%',
  };
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
  private objetivo: ObjetivosMetasService,
  public alertController: AlertController,
  public toast: ToastController,
  private iconoService: IconoEstacionService,
  private marcaService: MarcaAguaServiceService,
  private firmaService: FirmaEstacionServiceService,
  private firmaRepresente: FirmaRepresentanteService,
  private datosEstacionService: EstacionServicioDatosService
  ) {
    this.getDatosEstacion();
    this.getFirma();
    this.getFirmaRepresentante();
    this.getMarcaAgua();
    this.getIcono();
    this.getObjetivos();
    this.imagen64();
  }
  getDatosEstacion() {
    this.datosEstacionService.getEstacion().subscribe((data: any) => {
      // console.log(data.findEstacion[data.findEstacion.length -1]);
      this.datosEstacion = data.findEstacion[data.findEstacion.length - 1];
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

  getFirma() {
    this.firmaService.getFirmaEstacion().subscribe((data: any) => {
      // console.log(data.findFirma[data.findFirma.length-1].firma);
      this.firmaEstacion = data.findFirma[data.findFirma.length - 1].firma;
    });
  }
  getFirmaRepresentante() {
    this.firmaRepresente.getFirmaRepresentante().subscribe((data: any) => {
      // console.log(data);
      this.firmaRepresentante = data.findFirmaRepresentante[data.findFirmaRepresentante.length - 1].firma;
      // console.log(this.firmaRepresentante);
    });
  }

  getMarcaAgua() {
    this.marcaService.getMarcaAgua().subscribe((data: any) => {
      // console.log(data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua);
      this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua;
    });
  }

  getIcono() {
    this.iconoService.getPolitica().subscribe((data: any) => {
      // console.log(data.findPolitica[data.findPolitica.length -1].imagen);
      this.iconoEstacion = data.findPolitica[data.findPolitica.length - 1].imagen;
    });
  }
  ngOnInit() {
  }
  async alert() {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: 'Se enviara y guardara las metas seleccionadas, ademas se imprimira un documento de estas mismas.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.onClick();
            this.consultarDatos();
          }
        }
      ]
    });

    await alert.present();

  }

  getObjetivos() {
    this.objetivo.getObjetivo().subscribe((data: any) => {
      this.data[0].selected = data.findMetas[data.findMetas.length - 1].reduccionGeneracionResiduos;
      this.data[1].selected = data.findMetas[data.findMetas.length - 1].reduccionConsumoAgua;
      this.data[2].selected = data.findMetas[data.findMetas.length - 1].reduccionConsumoEnergia;
      this.data[3].selected = data.findMetas[data.findMetas.length - 1].cumplimientoProgramaMantenimiento;
      this.data[4].selected = data.findMetas[data.findMetas.length - 1].incrementarCapacitaciones;
      this.data[5].selected = data.findMetas[data.findMetas.length - 1].incrementarVentaAnualmente;
    });
  }

  onClick() {
    const uno = this.data[0].selected;
    const dos = this.data[1].selected;
    const tres = this.data[2].selected;
    const cuatro = this.data[3].selected;
    const cinco = this.data[4].selected;
    const seis = this.data[5].selected;

    if (uno === true && dos === true && tres === true) {
       // alert('123')
     this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoAgua, this.reduccionConsumoEnergia);
    } else if (uno === true && dos === true && cuatro === true) {
       // alert('124')
       this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoAgua, this.cumplimientoProgramaMantenimiento);
    } else if (uno === true && dos === true && cinco === true) {
       // alert('125')
       this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoAgua, this.incrementarCapacitacionTrabajadores);
    } else if (uno === true && dos === true && seis === true) {
       // alert('126')
       this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoAgua, this.incrementarVentas);
    } else if (uno === true && tres === true && cuatro === true) {
       // alert('134')
       this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoEnergia, this.cumplimientoProgramaMantenimiento);
    } else if (uno === true && tres === true && cinco === true) {
       // alert('135')
       this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoEnergia, this.incrementarCapacitacionTrabajadores);
    } else if (uno === true && tres === true && seis === true) {
       // alert('136')
       this.maquetacion(this.generacionResiduosPeligrosos, this.reduccionConsumoEnergia, this.incrementarVentas);
    } else if (uno === true && cuatro === true && cinco === true) {
      // alert('145')
      this.maquetacion(this.generacionResiduosPeligrosos, this.cumplimientoProgramaMantenimiento, this.incrementarCapacitacionTrabajadores);
    } else if (uno === true && cuatro === true && seis === true) {
       // alert('146')
       this.maquetacion(this.generacionResiduosPeligrosos, this.cumplimientoProgramaMantenimiento, this.incrementarVentas);
    } else if (dos === true && tres === true && cuatro === true) {
       // alert('234')
       this.maquetacion(this.reduccionConsumoAgua, this.reduccionConsumoEnergia, this.cumplimientoProgramaMantenimiento);
    } else if (dos === true && tres === true && cinco === true) {
       // alert('235')
       this.maquetacion(this.reduccionConsumoAgua, this.reduccionConsumoEnergia, this.incrementarCapacitacionTrabajadores);
    } else if (dos === true && tres === true && seis === true) {
       // alert('236')
       this.maquetacion(this.reduccionConsumoAgua, this.reduccionConsumoEnergia, this.incrementarVentas);
    } else if (dos === true && cuatro === true && cinco === true) {
      // alert('245')
       this.maquetacion(this.reduccionConsumoAgua, this.cumplimientoProgramaMantenimiento, this.incrementarCapacitacionTrabajadores);
    } else if (dos === true && cuatro === true && seis === true) {
      // alert('246')
       this.maquetacion(this.reduccionConsumoAgua, this.cumplimientoProgramaMantenimiento, this.incrementarVentas);
    } else if (dos === true && cinco === true && seis === true) {
      // alert('256')
       this.maquetacion(this.reduccionConsumoAgua, this.incrementarCapacitacionTrabajadores, this.incrementarVentas);
    } else if (tres === true && cuatro === true && cinco === true) {
      // alert('345')
       this.maquetacion(this.reduccionConsumoEnergia, this.cumplimientoProgramaMantenimiento, this.incrementarCapacitacionTrabajadores);
    } else if (tres === true && cuatro === true && seis === true) {
       // alert('346')
       this.maquetacion(this.reduccionConsumoEnergia, this.cumplimientoProgramaMantenimiento, this.incrementarVentas);
    } else if (tres === true && cinco === true && seis === true) {
       // alert('356')
       this.maquetacion(this.reduccionConsumoEnergia, this.incrementarCapacitacionTrabajadores, this.incrementarVentas);
    } else if (cuatro === true && cinco === true && seis === true) {
      // alert('456')
      this.maquetacion(this.cumplimientoProgramaMantenimiento, this.incrementarCapacitacionTrabajadores, this.incrementarVentas);
    }
  }

  async showAlert(check) {
    const alert = await this.alertController.create({
      header: 'Metas a realizar',
      message: 'Debes de seleccionar un mes con el cual se relaccione la conclucion de tu objetivo' + this.objetivos,
      inputs: [
        {
          name: 'Ingresar mes',
          type: 'text',
          placeholder: 'Enero',
        }],
      buttons: [ {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelado' + check);
          if ( check.value === 'Reducción en generacion de residuos peligrosos') {
            this.data[0].selected = false;
          } else if (check.value === 'Reducción en el consumo de agua') {
            this.data[1].selected = false;
          } else if (check.value === 'Reducción en el consumo de energia') {
            this.data[2].selected = false;
          } else if (check.value === 'Cumplimiento al programa de mantenimiento') {
            this.data[3].selected = false;
          } else if (check.value === 'Incrementar capacitaciones a los trabajadores') {
            this.data[4].selected = false;
          } else if (check.value === 'Incrementar venta 5% anualmente') {
            this.data[5].selected = false;
          }
        }
      }, {
        text: 'Ok',
        handler: (formData) => {
          console.log(formData, 'formDataAlert');

        }
      }
    ]
    });

    await alert.present();
  }

  // Crear el post en la base de datos
  consultarDatos() {
    const dataBase: any = {
      reduccionGeneracionResiduos: this.data[0].selected,
      reduccionConsumoAgua: this.data[1].selected,
      reduccionConsumoEnergia: this.data[2].selected,
      cumplimientoProgramaMantenimiento: this.data[3].selected,
      incrementarCapacitaciones: this.data[4].selected,
      incrementarVentaAnualmente: this.data[5].selected
    };
    // console.log(dataBase);
    this.createMetaObjetivo(dataBase);
  }
  createMetaObjetivo(datillos) {
     this.objetivo.createMetaObjetivo(datillos).subscribe((data: any) => {
     console.log(data);
     });
  }

  async enviarForm(formulario) {

    const toast = await this.toast.create({
      message: 'Datos guardados.',
      duration: 2000
    });
    toast.present();
  }

  maquetacion(data1, data2, data3) {
    const fecha = new Date();
    const day = fecha.getDate();
    const month = fecha.getUTCMonth() + 1;
    const year = fecha.getFullYear();
    const marcaAgua = this.marcaAguaEstacion;
    const iconoEstacion = this.iconoEstacion;
    const firmaEstacion = this.firmaEstacion;
    const firmaRepresentanteTecnico = this.firmaRepresentante;
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
      background(currentPage, pageSize) {
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
          table: {
            widths: [150, 570],
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
                  alignment: 'rigth',
                  margin: [15, 20],
                  border: [false, true, true, true],
                }
              ],
              [
                {
                  text: 'Objetivos, metas e indicadores',
                  fontSize: 9,
                  alignment: 'center',
                  colSpan: 2,
                  border: [true, true, true, true],
                },
                {}
              ],
              [
                {
                  text: 'IV. Objetivos, metas e indicadores',
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
          margin: [22, 7],
          layout: {
            defaultBorder: false
          }
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
                    {text: `FS-12 Rev. 0, ${day}/${month}/${year}`, width: 180}
                  ]
                }
              ],
              [
                {
                  image: `${footer}`,
                  pageBreak: 'after',
                  width: 650,
                  height: 60,
                },
              ],
              [''],
            ]
          },
          layout : 'headerLineOnly',
          margin: [72, 20],
        };
      },
      content: [
        // primera tabla
        {
          table: {
            widths: [110, 460, 70, 70],
            body: [
              [
                {
                  text: 'OBJETIVO ',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: `${data1.objetivo}`,
                  colSpan: 3,
                  fontSize: 12
                },
                {},
                {}
              ],
              [
                {
                  text: 'PROCESO',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: `${data1.proceso}`,
                  colSpan: 3,
                  fontSize: 12
                },
                {},
                {}
              ],
              [
                {
                  text: 'RESPONSABLE',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: 'Representante Técnico',
                  fontSize: 12
                },
                {
                  text: 'PERIODO',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: 'Anual',
                  fontSize: 12
                }
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [15, 170, 180, 75, 90, 94, 74],
            heights: [10, 25, 25, 25],
            body: [
              [
                {
                  text: 'No.',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'METAS',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'ACTIVIDAD',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'INDICADOR',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'SOPORTE',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'FRECUENCIA DE EVALUACIÓN',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'CRITERIO DE ACEPTACIÓN',
                  fontSize: 11,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                }
              ],
              [
                {
                  text: '1'
                },
                {
                  text: `${data1.meta1}`,
                  fontSize: 12,
                },
                {
                  text: `${data1.a1}`,
                  fontSize: 12
                },
                {
                  text: `${data1.i1}`,
                  fontSize: 12
                },
                {
                  text: `${data1.S1}`,
                  fontSize: 12
                },
                {
                  text: `${data1.fE1}`,
                  fontSize: 12
                },
                {
                  text: `${data1.cA1}`,
                  fontSize: 12
                }
              ],
              [
                {
                  text: '2'
                },
                {
                  text: `${data1.meta2}`,
                  fontSize: 12
                },
                {
                  text: `${data1.a2}`,
                  fontSize: 12
                },
                {
                  text: `${data1.i2}`,
                  fontSize: 12
                },
                {
                  text: `${data1.S2}`,
                  fontSize: 12
                },
                {
                  text: `${data1.fE2}`,
                  fontSize: 12
                },
                {
                  text: `${data1.cA2}`,
                  fontSize: 12
                }
              ],
              [
                {
                  text: '3'
                },
                {
                  text: `${data1.meta3}`,
                  fontSize: 12
                },
                {
                  text: `${data1.a3}`,
                  fontSize: 12
                },
                {
                  text: `${data1.i3}`,
                  fontSize: 12
                },
                {
                  text: `${data1.S3}`,
                  fontSize: 12
                },
                {
                  text: `${data1.fE3}`,
                  fontSize: 12
                },
                {
                  text: `${data1.cA3}`,
                  fontSize: 12
                }
              ]
            ]
          },
          pageBreak: 'after'
        },
        // Segunda tabla
        {
          table: {
            widths: [110, 460, 70, 70],
            body: [
              [
                {
                  text: 'OBJETIVO ',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: `${data2.objetivo}`,
                  colSpan: 3,
                  fontSize: 12
                },
                {},
                {}
              ],
              [
                {
                  text: 'PROCESO',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: `${data2.proceso}`,
                  colSpan: 3,
                  fontSize: 12
                },
                {},
                {}
              ],
              [
                {
                  text: 'RESPONSABLE',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: 'Representante Técnico',
                  fontSize: 12
                },
                {
                  text: 'PERIODO',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: 'Anual',
                  fontSize: 12
                }
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [15, 170, 180, 75, 90, 94, 74],
            heights: [10, 25, 25, 25],
            body: [
              [
                {
                  text: 'No.',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'METAS',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'ACTIVIDAD',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'INDICADOR',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'SOPORTE',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'FRECUENCIA DE EVALUACIÓN',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'CRITERIO DE ACEPTACIÓN',
                  fontSize: 11,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                }
              ],
              [
                {
                  text: '1'
                },
                {
                  text: `${data2.meta1}`,
                  fontSize: 12
                },
                {
                  text: `${data2.a1}`,
                  fontSize: 12
                },
                {
                  text: `${data2.i1}`,
                  fontSize: 12
                },
                {
                  text: `${data2.S1}`,
                  fontSize: 12
                },
                {
                  text: `${data2.fE1}`,
                  fontSize: 12
                },
                {
                  text: `${data2.cA1}`,
                  fontSize: 12
                }],
              [
                {
                  text: '2'
                },
                {
                  text: `${data2.meta2}`,
                  fontSize: 12
                },
                {
                  text: `${data2.a2}`,
                  fontSize: 12
                },
                {
                  text: `${data2.i2}`,
                  fontSize: 12
                },
                {
                  text: `${data2.S2}`,
                  fontSize: 12
                },
                {
                  text: `${data2.fE2}`,
                  fontSize: 12
                },
                {
                  text: `${data2.cA2}`,
                  fontSize: 12
                }],
              [
                {
                  text: '3'
                },
                {
                  text: `${data2.meta3}`,
                  fontSize: 12
                },
                {
                  text: `${data2.a3}`,
                  fontSize: 12
                },
                {
                  text: `${data2.i3}`,
                  fontSize: 12
                },
                {
                  text: `${data2.S3}`,
                  fontSize: 12
                },
                {
                  text: `${data2.fE3}`,
                  fontSize: 12
                },
                {
                  text: `${data2.cA3}`,
                  fontSize: 12
                }
              ]
            ]
          },
          pageBreak: 'after'
        },
        // Tercera tabla
        {
          table: {
            widths: [110, 460, 70, 70],
            body: [
              [
                {
                  text: 'OBJETIVO ',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: `${data3.objetivo}`,
                  colSpan: 3,
                  fontSize: 12
                },
                {},
                {}
              ],
              [
                {
                  text: 'PROCESO',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: `${data3.proceso}`,
                  colSpan: 3,
                  fontSize: 12
                },
                {},
                {}
              ],
              [
                {
                  text: 'RESPONSABLE',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: 'Representante Técnico',
                  fontSize: 12
                },
                {
                  text: 'PERIODO',
                  fontSize: 12,
                  fillColor: '#dddddd'
                },
                {
                  text: 'Anual',
                  fontSize: 12
                }
              ]
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [15, 170, 180, 75, 90, 94, 74],
            heights: [10, 25, 25, 25],
            body: [
              [
                {
                  text: 'No.',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'METAS',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'ACTIVIDAD',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'INDICADOR',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'SOPORTE',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'FRECUENCIA DE EVALUACIÓN',
                  fontSize: 12,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                },
                {
                  text: 'CRITERIO DE ACEPTACIÓN',
                  fontSize: 11,
                  fillColor: '#dddddd',
                  alignment: 'center',
                  bold: true
                }
              ],
              [
                {
                  text: '1'
                },
                {
                  text: `${data3.meta1}`,
                  fontSize: 12
                },
                {
                  text: `${data3.a1}`,
                  fontSize: 12
                },
                {
                  text: `${data3.i1}`,
                  fontSize: 12
                },
                {
                  text: `${data3.S1}`,
                  fontSize: 12
                },
                {
                  text: `${data3.fE1}`,
                  fontSize: 12
                },
                {
                  text: `${data3.cA1}`,
                  fontSize: 12
                }
              ],
              [
                {
                  text: '2'
                },
                {
                  text: `${data3.meta2}`,
                  fontSize: 12
                },
                {
                  text: `${data3.a2}`,
                  fontSize: 12
                },
                {
                  text: `${data3.i2}`,
                  fontSize: 12
                },
                {
                  text: `${data3.S2}`,
                  fontSize: 12
                },
                {
                  text: `${data3.fE2}`,
                  fontSize: 12
                },
                {
                  text: `${data3.cA2}`,
                  fontSize: 1,
                }
              ],
              [
                {
                  text: '3'
                },
                {
                  text: `${data3.meta3}`,
                  fontSize: 12
                },
                {
                  text: `${data3.a3}`,
                  fontSize: 12
                },
                {
                  text: `${data3.i3}`,
                  fontSize: 12
                },
                {
                  text: `${data3.S3}`,
                  fontSize: 12
                },
                {
                  text: `${data3.fE3}`,
                  fontSize: 12
                },
                {
                  text: `${data3.cA3}`,
                  fontSize: 1,
                }
              ]
            ]
          }
        },
        {text: '\n\n', pageBreak: 'after'},
        {
          table: {
            widths: [200, 200, 140],
            heights: [50, 30],
            body: [
              [
                {
                  image: `${firmaRepresentanteTecnico}`,
                  fit: [100, 50],
                  alignment: 'center',
                  border: [true, true, true, false]
                },
                {
                  image: `${firmaEstacion}`,
                  fit: [100, 50],
                  alignment: 'center',
                  border: [true, true, true, false]
                },
                {
                  text: '',
                  fit: [100, 50],
                  alignment: 'center',
                  border: [true, true, true, false]
                }
              ],
              [
                {
                  text: `REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,
                  alignment: 'center',
                  border: [true, false, true, true]
                },
                {
                  text: `APROBADO POR:\n${ddd.maximaAutoridad}\nMAXIMA AUTORIDAD`,
                  alignment: 'center',
                  border: [true, false, true, true]
                },
                {
                  text: `FECHA DE APROBACIÓN:\n${day}/${month}/${year}`,
                  alignment: 'center',
                  border: [true, false, true, true]
                }
              ]
            ]
          },
          layout: {
            defaultBorder: false
          },
          margin: [85, 0]
        }
      ],
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22, 130]
    };
    this.pdfMaker.generate(dd, 'Objetivos metas e indicadores');

  }

}
