import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PersonalMantenimientoServiceService} from '../../services/Elemento 6/personal-mantenimiento-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';

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
  myImage = null;
  firmaEstacion = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;

  constructor(
    private modalController: ModalController,
    private pdfMaker: PdfMakerService ,
    private mantenimientoService: PersonalMantenimientoServiceService,
    public toast: ToastController,
    private estacionService: EstacionServicioDatosService,
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService
    ) { 
      this.getMantenimiento();
      this.getStationService();
    }

  ngOnInit() {
    this.imagen64();
    this.getMarcaAgua();
    this.getFirma();
    this.getIcono();
  }
  getIcono(){
    this.icono.getPolitica().subscribe((data:any)=>{
     // console.log(data);
      this.iconoEstacion =  data.findPolitica[data.findPolitica.length -1].imagen;
    })
  }
  getMarcaAgua(){
    this.marca.getMarcaAgua().subscribe((data:any)=>{
      //console.log(data);
      this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua;
    })
  }
  getFirma(){
    this.firma.getFirmaEstacion().subscribe((data:any) =>{
      //console.log(data);
      this.firmaEstacion =this.firma = data.findFirma[data.findFirma.length -1].firma;
    })
  }
  imagen64(){
 
      this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
        base64 =>{
          this.myImage = base64;
          //console.log(this.myImage);
        }
        
      )
  }
  convertFileDataURLviaFileReader(url: string){
    return Observable.create(observer =>{
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onload = function(){
        let reader: FileReader = new FileReader();
        reader.onloadend = function(){
          observer.next(reader.result);
          observer.complete();
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    })
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
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;  
    let footer = this.myImage;
    let ddd = this.datosEstacion;
 var dd = {
  userPassword: '123',
  ownerPassword: '123456',
  permissions: {
    printing: 'highResolution', //'lowResolution'
    modifying: false,
    copying: false,
    annotating: true,
    fillingForms: true,
    contentAccessibility: true,
    documentAssembly: true
  },
  background: function(currentPage, pageSize) {
  return {
      image: `${marcaAgua}`, width: 500,height: 500, 
      absolutePosition: {x: 60, y: 150},opacity: 0.5}
},
header: function(){
  return {
    table:{
        widths: [150,400],
        heights: [30,10,10],
        body:[
            [
                {
                    image:`${iconoEstacion}`,
                width: 70,
                height: 70,
                alignment:'center',
                border:[true,true,false,true],
                },{
                    text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:17,alignment: 'center', margin:[0,15],
                border:[false,true,true,true],
                }
            ],[
                {
                    text:'PERFIL DE PUESTO DE TRABAJO',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                },{
                    
                }
                ],[
                    {
                      text:'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                    },{
                        
                    }
                    ]
          ]
    },margin: [22,15],
    
      layout:{
        defaultBorder: false
      }
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
           [{
            image: `${footer}`,
            pageBreak: 'after',
            width: 510,
            height: 80,
             }]
               ]
         }, layout : 'headerLineOnly',
        margin: [72,20]
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