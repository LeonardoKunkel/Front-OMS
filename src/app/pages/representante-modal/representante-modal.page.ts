import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { RepresentanteTecnicoServiceService } from 'src/app/services/Elemento 6/representante-tecnico-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
@Component({
  selector: 'app-representante-modal',
  templateUrl: './representante-modal.page.html',
  styleUrls: ['./representante-modal.page.scss'],
})
export class RepresentanteModalPage implements OnInit {
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
    private pdfMaker: PdfMakerService,
    public toast: ToastController,
    private representanteService:RepresentanteTecnicoServiceService,
    private estacionService: EstacionServicioDatosService,
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService
    ) { 
      this.getRepresentanteTecnico();
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

  async closeModal() {
    await this.modalController.dismiss();
  }
  
  getStationService(){
    this.estacionService.getEstacion().subscribe((data:any) =>{
      let datoConsultado = data.findEstacion.length -1;
      this.datosEstacion = data.findEstacion[datoConsultado];
  });
}

  getRepresentanteTecnico(){
    this.representanteService.getRepresentante().subscribe((data:any) =>{
       this.datos = data.newRepresentante[data.newRepresentante.length - 1];
      console.log(this.datos);
    })
    
  }

  crearDirector() {
    this.representanteService.createRepresentante(this.datos).subscribe((data:any) =>{
      console.log(data);
    })

  }

   print() {
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;  
    let footer = this.myImage;
    let ddd = this.datosEstacion;
  var dd = {
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
                    {text: 'Representante Técnico', colSpan: 3},
                    {},
                    {}
                   ],
                   [
                    {text: 'AREA', bold: true},
                    {text: 'Dirección', colSpan: 3},
                    {},
                    {}
                   ],
                   [
                    {text: 'JEFE INMEDIATO', bold: true},
                    {text: 'DIRECCIÓN', colSpan: 3},
                    {},
                    {}
                   ],
                   [
                    {text: 'OBJETIVO DEL PUESTO', bold: true},
                    {text: 'Implementación adecuada y operación del SASISOPA.', colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'FUNCIONES ESPECIFÍCAS', bold: true},
                    {text: `•	El representante técnico analiza las actividades que desarrolla el personal involucrado en el
                              proceso de recibo de producto, almacenamiento y distribución del producto.\n
                            •	Asegurar que el Sistema es conforme con los requisitos establecidos en los lineamientos y
                              demás normativa aplicable. \n
                            •	Informar a la Dirección de la Estación de Servicio acerca del desempeño del Sistema de Administración.\n
                            •	Desarrollar el perfil de cada puesto.\n
                            • Determinar los criterios específicos que definan la competencia necesaria para los diferentes
                              puestos de la organización.\n
                            • Representar a la Estación de Servicio ante la Agencia.\n
                            • Garantizar una eficaz implementación del Sistema de Administración.\n
                            • Proponer la Adopción de las mejores prácticas en materia de Seguridad Industrial,
                              Seguridad Operacional y Protección al Medio Ambiente.\n
                            • Ser capaz de detectar situaciones críticas por las cuales deba informar a la Agencia.\n
                            • Coordinar las acciones necesarias para subsanar los incumplimientos de la normatividad
                              interna y externa aplicable.`,
                     colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'CONOCIMIENTOS ESPECIFÍCOS', bold: true},
                    {text: `•	P-SA-01 POLÍTICA.\n
                            • P-SA-02 IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN
                              DE RIESGOS Y DE IMPACTOS AMBIENYTALES.\n
                            • P-SA-03 REQUISITOS LEGALES.\n
                            • P-SA-04 OBJETIVOS, METAS E INDICADORES.\n
                            • P-SA-05 FUNCIONES, RESPONSABILIDADES Y AUTORIDAD.\n
                            • P-SA-06 COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO.\n
                            • P-SA-07 COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA.\n
                            • P-SA-08 CONTROL DE ACTIVIDADES Y PROCESOS.\n
                            • P-SA-09 MEJORES PRÁCTICAS Y ESTÁNDARES\n
                            • P-SA-10 CONTROL DE ACTIVIDADES Y PROCESOS\n
                            • P-SA-11 INTEGRIDAD MECÁNICA\n
                            • P-SA-12 SEGURIDAD DE CONTRATISTAS\n
                            • P-SA-13 PREPARACIÓN Y RESPUESTA A EMERGENCIAS.\n
                            • P-SA-14 MONITOREO, VERIFICACIÓN Y EVALUACIÓN.\n
                            • P-SA-15 AUDITORÍAS.\n
                            • P-SA-16 INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES.\n
                            • P-SA-17 REVISIÓN DE RESULTADOS.\n
                            • P-SA-18 INFORMES DE DESEMPEÑO.`, colSpan: 3, alignment: 'justify'},
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
                   ]
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
  this.pdfMaker.generate(dd, 'Perfil del Representante');
   }
}
