import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { DespachadoresServiceService } from '../../services/Elemento 6/despachadores-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';

@Component({
  selector: 'app-despachadores-modal',
  templateUrl: './despachadores-modal.page.html',
  styleUrls: ['./despachadores-modal.page.scss'],
})
export class DespachadoresModalPage implements OnInit {
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
  datos: any = {
    requerimientosFisicos: '',
    herramientasEquipos: '',
    equipoProteccion: '',
    nivelAcademico: '',
    personalCargo: ''
  };

  constructor(
    private modalController: ModalController,
    private pdfMaker: PdfMakerService,
    public toast: ToastController,
    private despachadoresServices: DespachadoresServiceService,
    private estacionService: EstacionServicioDatosService
    ) {
      this.getDespachadores();
      this.getStationService();
     }


  ngOnInit() {
  }

  getDespachadores(){
    this.despachadoresServices.getDespachadores().subscribe((data:any) => {
      this.datos = data.newDirector[data.newDirector.length - 1];
    })
  }

  getStationService(){
    this.estacionService.getEstacion().subscribe((data:any) =>{
      let datoConsultado = data.findEstacion.length -1;
      this.datosEstacion = data.findEstacion[datoConsultado];
  });
}

  async closeModal() {
    await this.modalController.dismiss();
  }

  async enviarForm(formulario) {
    console.log(this.datos);
    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  crearDespachador() {
    this.despachadoresServices.createDespachador(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

   print() {
    let ddd = this.datosEstacion;
 const dd = {
   header: function() {
     return {
         table: { widths: [565], heights: [50, 15, 15],
 body: [

  [{text: `${ddd.nombreEstacionServicio}`,bold:true,fontSize:25,alignment:'center'}],
   [{text: 'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO', alignment: 'center', bold: true}],
   [{text: 'PERFIL DE PUESTO DE TRABAJO', alignment: 'center', bold: true, fillColor: '#e6e6e6'}],
 ]

 }, margin: [22, 20]
     };
   },
   footer: function() {
     return {
         table: {
  headerRows: 1,
  widths: [510],
            body : [
            [''],
            [''],
            ['']
                ]
       }, layout : 'headerLineOnly',
         margin: [70, 90]
     };
   },

   content: [
       {
           table: {
               widths: [140, 160, 100, 140],
               heights: [0, 0, 0, 0, 40, 40, 40, 20, 20, 40, 20, 40],
               body: [
                   [
                    {text: 'PUESTO', bold: true}, {text: 'DESPACHADOR', bold: true, colSpan: 3},
                    {},
                    {}
                   ],
                   [
                    {text: 'ÁREA', bold: true},
                    {text: 'SASISOPA', colSpan: 3},
                    {},
                    {}
                   ],
                   [
                    {text: 'JEFE INMEDIATO', bold: true},
                    {text: 'Jefe de Estación de Servicio', colSpan: 3},
                    {},
                    {}
                   ],
                   [
                    {text: 'OBJETIVO DEL PUESTO', bold: true},
                    {text: 'Despacho de combustible a clientes', colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'FUNCIONES ESPECIFÍCAS', bold: true},
                    {text: `•	En caso de detectar alguna falla en los sistemas de seguridad reportarlo
                              inmediatamente al Jefe de Estación de Servicio.\n
                            •	Cumplir en tiempo y forma con el programa de mantenimiento preventivo y predictivo,
                              así como con el mantenimiento correctivo a los sistemas de seguridad. \n
                            •	Retroalimentar al permisionario en caso de requerir refacciones y/o servicios
                              para dar cumplimiento a sus funciones. \n`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'CONOCIMIENTOS ESPECIFÍCOS', bold: true},
                    {text: 'Conocimiento y aplicación de procedimiento de Despacho de combustible.', colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'CARACTERÍSTICAS PERSONALES', bold: true},
                    {text: `${this.datos.caracteristicasPersonales}`},
                    {text: 'DESTREZAS TÉCNICAS', bold: true},
                    {text: '•Comunicación\n•Responsabilidad\n•Amabilidad\n•Proactividad'}
                   ],
                   [
                    {text: 'NIVEL ACADEMICO REQUERIDO', bold: true},
                    {text: `${this.datos.nivelAcademico}`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'REQUERIMIENTOS FÍSICOS', bold: true},
                    {text: `${this.datos.requerimientosFisicos}`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'PERSONAL A SU CARGO', bold: true},
                    {text: `${this.datos.personalCargo}`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'HERRAMIENTAS Y O EQUIPOS', bold: true},
                    {text: `${this.datos.herramientasEquipos}`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'EQUIPO DE PROTECCION PERSONAL', bold: true},
                    {text: `${this.datos.equipoProteccion}`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                 ],
               ]
           }
       },
       {
        text: '\n\n'
       },
       {
        table: {
          widths: [175, 185, 185],
          heights: [50],
          body: [
            [`REVISADO POR:\n\n\n\n ${ddd.representanteTecnico}\n\n REPRESENTANTE TÉCNICO`, `APROBADO POR:\n\n\n\n${ddd.maximaAutoridad}`, `FECHA DE APROBACIÓN:\n\n\n\nAgregar fecha "10/10/2018"`]
         ]
        }

       }

   ],
   pageSize: 'LETTER',
   pageMargins: [22, 130]
 };
 this.pdfMaker.generate(dd, 'Perfil de Despachador');
   }
}
