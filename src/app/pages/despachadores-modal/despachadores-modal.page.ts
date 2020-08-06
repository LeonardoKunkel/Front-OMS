import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { DespachadoresServiceService } from '../../services/Elemento 6/despachadores-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';
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
  myImage = null;
  firmaEstacion = null;
  firmaRepresentante = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;

  constructor(
    private modalController: ModalController,
    private pdfMaker: PdfMakerService,
    public toast: ToastController,
    private despachadoresServices: DespachadoresServiceService,
    private estacionService: EstacionServicioDatosService,
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService,
    private firmaRepresente : FirmaRepresentanteService,
    ) {
      this.getDespachadores();
      this.getStationService();
     }


  ngOnInit() {
    this.imagen64();
    this.getMarcaAgua();
    this.getFirma();
    this.getIcono();
    this.getFirmaRepresentante();
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
  getFirmaRepresentante(){
    this.firmaRepresente.getFirmaRepresentante().subscribe((data:any) =>{
      //console.log(data);
       this.firmaRepresentante = data.findFirmaRepresentante[data.findFirmaRepresentante.length -1].firma;
       //console.log(this.firmaRepresentante);
      
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
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;  
    let footer = this.myImage;
    let firmaRepresentanteTecnico = this.firmaRepresentante;
    let ddd = this.datosEstacion;
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
 const dd = {
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
      image: `${marcaAgua}`, width: 300,height: 350, 
      absolutePosition: {x: 150, y: 160},opacity: 0.5}
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
                    width: 45,
                    height: 60,
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
footer: function(currentPage, pageCount){
  return {
      table:{
    headerRows:1, 
    widths: [510],
         body : [
         [{columns:[
             'Página ' + currentPage.toString() + ' de ' + pageCount,
             {text:`FS-14 Rev., ${day}/${month}/${year}`,width: 180}
             ]}],
         [{
          image: `${footer}`,
          pageBreak: 'after',
          width: 510,
          height: 60,
           },],
         [''],
             ]
       }, layout : 'headerLineOnly',
      margin: [72,20],
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
             widths: [200,200,140],
             heights: [50,30],
             body: [
                 [
                     {
                       image:`${firmaRepresentanteTecnico}`,
                        fit:[100,50],
                        alignment:'center',
                        border:[true,true,true,false]
                     },{
                       image:`${firmaEstacion}`,
                       fit:[200,80],
                       alignment:'center',
                       border:[true,true,true,false]
                     },{
                      text:'',
                        fit:[100,50],
                        alignment:'center',
                        border:[true,true,true,false]
                     }],
                [
                    {text:`REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,alignment:'center',border:[true,false,true,true]},
                    {text:`APROBADO POR:\n${ddd.maximaAutoridad}\nMAXIMA AUTORIDAD`,alignment:'center',border:[true,false,true,true]},
                    {text:`FECHA DE APROBACIÓN:\n ${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true]}]
             ]
        },
    layout:{
      defaultBorder: false
    }
       }

   ],
   pageSize: 'LETTER',
   pageMargins: [22, 130]
 };
 this.pdfMaker.generate(dd, 'Perfil de Despachador');
   }
}
