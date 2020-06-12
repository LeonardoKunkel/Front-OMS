import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PersonalMantenimientoServiceService} from '../../services/Elemento 6/personal-mantenimiento-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';

@Component({
  selector: 'app-mantenimiento-modal',
  templateUrl: './mantenimiento-modal.page.html',
  styleUrls: ['./mantenimiento-modal.page.scss'],
})
export class MantenimientoModalPage implements OnInit {
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
    private pdfMaker: PdfMakerService ,
    private mantenimientoService: PersonalMantenimientoServiceService,
    public toast: ToastController,
    private estacionService: EstacionServicioDatosService
    ) { 
      this.getMantenimiento();
      this.getStationService();
    }

  ngOnInit() {
  }

  getStationService(){
    this.estacionService.getEstacion().subscribe((data:any) =>{
      let datoConsultado = data.findEstacion.length -1;
      this.datosEstacion = data.findEstacion[datoConsultado];
  });
}

  getMantenimiento(){
    this.mantenimientoService.getDirector().subscribe((data:any) =>{
      this.datos = data.newRepresentante[data.newRepresentante.length - 1];
    })
  }

  mantenimiento() {
    this.mantenimientoService.mantenimientoCreado(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

  async closeModal(){
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

   print(){
    let ddd = this.datosEstacion;
 var dd = {
   header: function(){
     return {
         table: { widths: [565],heights:[50,15,15],
 body: [

  [{text: `${ddd.nombreEstacionServicio}`,bold:true,fontSize:25,alignment:'center'}],
   [{text:'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',alignment:'center',bold:true}],
   [{text:'PERFIL DE PUESTO DE TRABAJO',alignment:'center',bold:true,fillColor: '#e6e6e6'}],
 ]
 
 }, margin: [22,20]
     };
   },
   footer: function(){
     return {
         table:{
  headerRows:1, 
  widths: [510],
            body : [
            [''],
            [''],
            ['']
                ]
       }, layout : 'headerLineOnly',
         margin: [70,90]
     }; 
   },
   
   content:[
       {
           table:{
               widths: [140,160,100,140],
               heights:[0,0,0,0,40,40,40,20,20,40,20,40],
               body:[
                   [{text:'PUESTO',bold:true},{text:'Director',colSpan:3},{},{}],
                   [{text:'AREA',bold:true},{text:'Dirección',colSpan:3},{},{}],
                   [{text:'JEFE INMEDIATO',bold:true},{text:'',colSpan:3},{},{}],
                   [{text:'OBJETIVO DEL PUESTO',bold:true},{text:'Supervisar la correcta aplicación de los procedimientos que involucran controles de los aspectos ambientales significativos y de riesgos de las actividades propias de las operaciones y procesos de la Planta de Distribución.',colSpan:3,alignment:'justify'},{},{}],
                   [{text:'FUNCIONES ESPECIFÍCAS',bold:true},{text:'•	Capacitar al personal en los procedimientos aplicables al control de los aspectos ambientales significativos y riesgos.\n•	Cumplir el programa de mantenimiento a sistemas, instalaciones, equipos o accesorios de la Planta de Distribución. \n•	Establecer en coordinación del representante Técnico, las funciones, responsabilidad y autoridad de los integrantes de la Organización \n•	Identificar, asignar y demostrar que se cuenta con los recursos necesarios para implementar el Sistema de Administración (SA).',colSpan:3,alignment:'justify'},{},{}],
                   [{text:'CONOCIMIENTOS ESPECIFÍCOS',bold:true},{text:'•	P-SA-06 COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRANAMIENTO',colSpan:3,alignment:'justify'},{},{}],
                   [{text:'CARACTERÍSTICAS PERSONALES',bold:true},{text:`${this.datos.caracteristicasPersonales}`},{text:'DESTREZAS TÉCNICAS',bold:true},{text:'•Comunicación\n•Responsabilidad\n•Amabilidad\n•Proactividad'}],
                   [{text:'NIVEL ACADEMICO REQUERIDO',bold:true},{text:'Preparatoria',colSpan:3,alignment:'justify'},{},{}],
                   [{text:'REQUERIMIENTOS FÍSICOS',bold:true},{text:`${this.datos.requerimientosFisicos}`,colSpan:3,alignment:'justify'},{},{}],
                   [{text:'PERSONAL A SU CARGO',bold:true},{text:'•Encargado de anden\n•Llenadores\n•Personal de Mantenimiento',colSpan:3,alignment:'justify'},{},{}],
                   [{text:'HERRAMIENTAS Y O EQUIPOS',bold:true},{text:`${this.datos.herramientasEquipos}`,colSpan:3,alignment:'justify'},{},{}],
                   [{text:'EQUIPO DE PROTECCION PERSONAL',bold:true},{text:`${this.datos.equipoProteccion}`,colSpan:3,alignment:'justify'},{},{}],
                   [{text: 'NIVEL ACADÉMICO', bold: true}, {text: `${this.datos.nivelAcademico}`, colSpan: 3, alignment: 'justify'}, {}, {}],
                   [{text: 'PERSONAL A SU CARGO', bold: true}, {text: `${this.datos.personalCargo}`, colSpan: 3, alignment: 'justify'}, {}, {}],
                   ]
           }
       },{
           text:'\n\n'
       },{
           table:{
                widths:[175,185,185],
                heights:[50],
                
               body:[
                [`REVISADO POR:\n\n\n\n ${ddd.representanteTecnico}\n\n REPRESENTANTE TÉCNICO`, `APROBADO POR:\n\n\n\n${ddd.maximaAutoridad}`, `FECHA DE APROBACIÓN:\n\n\n\nAgregar fecha "10/10/2018"`]
             ]
           }
           
           
       }
       
       
        ]
  ,
   pageSize: 'LETTER',
   pageMargins: [22,130]
 };
 this.pdfMaker.generate(dd, 'Objetivos,Etas e Indicadores');
   }
 



}