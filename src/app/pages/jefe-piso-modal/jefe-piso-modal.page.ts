import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { JefePisoServiceService } from '../../services/Elemento 6/jefe-piso-service.service'
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';

@Component({
  selector: 'app-jefe-piso-modal',
  templateUrl: './jefe-piso-modal.page.html',
  styleUrls: ['./jefe-piso-modal.page.scss'],
})
export class JefePisoModalPage implements OnInit {
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
    private modalController: ModalController ,
    private pdfMaker: PdfMakerService,
    private jefeService: JefePisoServiceService,
    public toast: ToastController,
    private estacionService: EstacionServicioDatosService,
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService
    ) { 
      this.getJefe();
      this.getStationService()
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


  async closeModal() {
    await this.modalController.dismiss();
  }


  getJefe(){
    this.jefeService.getDirector().subscribe((data:any) =>{
      this.datos = data.newRepresentante[data.newRepresentante.length - 1];
    })
  }

  getStationService(){
    this.estacionService.getEstacion().subscribe((data:any) =>{
      let datoConsultado = data.findEstacion.length -1;
      this.datosEstacion = data.findEstacion[datoConsultado];
  });
}
  async enviarForm(formulario) {

    console.log(this.datos);
    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

 crearJefe() {
   this.jefeService.createJefe(this.datos).subscribe((data: any) => {
     console.log(data);
   });
 }

  print() {
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;  
    let footer = this.myImage;
    let ddd = this.datosEstacion;
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
      
     content: [
         {
             table: {
                 widths: [140, 160, 100, 140],
                 heights: [0, 0, 0, 0, 40, 40, 40, 20, 20, 40, 20, 40],
                 body: [
                     [
                      {text: 'PUESTO', bold: true},
                      {text: 'Jefe de Piso', colSpan: 3},
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
                      {text: `Atender y getionar todo lo relacionado en la parte operativa de la
                              Estación de Servicio.`, colSpan: 3, alignment: 'justify'},
                      {},
                      {}
                     ],
                     [
                      {text: 'FUNCIONES ESPECIFÍCAS', bold: true},
                      {text: `•	Atender las necesidades técnicas cuando el Encargado de la Estación de Servicio no esté disponible.\n
                              •	Participar en la Planeación del Trabajo y en la identificación y aplicaciónde medidas de seguridad.\n
                              •	Apegarse a las políticas de seguridad de la estación de servicio.\n
                              •	Portar el equipo de protección personal.\n
                              • Cumplir con los procedimientos de Operación y Mantenimiento de la
                                NOM-005-ASEA-2016.`, colSpan: 3, alignment: 'justify'},
                      {},
                      {}
                     ],
                     [
                      {text: 'CONOCIMIENTOS ESPECIFÍCOS', bold: true},
                      {text: `•	Conocimiento y aplicación de procedimientos de Operación, Mantenimiento
                                y Trabajo Seguro de la Estación de Servicio.\n
                              • Conocimientos de la metodología de despacho.\n
                              • Conocimientos del plan anual de mantenimiento`, colSpan: 3, alignment: 'justify'},
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
                         text:'',
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
                      {text:`FECHA DE APROBACIÓN:\nAgregar fecha "10/10/2018"`,alignment:'center',border:[true,false,true,true]}]
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
    this.pdfMaker.generate(dd, 'Perfil de Jefe de Piso');
  }
}
