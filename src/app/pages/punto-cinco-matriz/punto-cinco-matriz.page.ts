import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-cinco-matriz',
  templateUrl: './punto-cinco-matriz.page.html',
  styleUrls: ['./punto-cinco-matriz.page.scss'],
})
export class PuntoCincoMatrizPage implements OnInit {
 datos:any={

 }
  constructor(
    private pdfMaker: PdfMakerService,
    ) { }

  ngOnInit() { 
  }
  // agregar(){
  //   console.log('Agregar input');
  //   var carta= document.getElementById('contenido');
  //   let caja = document.createElement("ion-button");
  //   caja.type="button";
  //   carta.appendChild(caja);
  //   console.log(carta);
  // }
  
  agregar(){
    var i;

    for(i = 0; i<=4; i++ ){
        console.log(i);
        
    }

    console.log('Agregar input');
     var txt_01 = document.createTextNode('Ingrese puesto');
    let carta= document.getElementById('jj');
    let caja = document.createElement("ion-input");
    caja.type="text";
    caja.id=''
    carta.appendChild(txt_01);
    carta.appendChild(caja);
    
  }
  enviarForm(formulario){
    console.log(this.datos);
    
  }
  pdf(){
    var dd = {
      header: function(){
        return {
            table: {widths: [320, 20, 200],
            heights: [15,10,10],
  body: [
  [{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',colSpan:3},{},{}],
  [{text:'V. FUNCIONES, RESPONSABILIDAD Y AUTORIDAD',colSpan:3,alignment: 'center'},{},{}],
  [{text:'MATRIZ DE RESPONSABILIDADES',colSpan:3,alignment: 'center',bold:true,fillColor: '#dddddd'},{},{}]
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
         
          {style: 'tableExample',
  table: {
     widths: [30,300,8,8,8,8,8,8,8],
     
    
  body: [
  [{text:'E\nL\nE\nM\nE\nN\nT\nO',fillColor: '#eeeeee'}, {text:'\n\n\n\n\n\n\n\n\n\n\n\nDESCRIPCION',alignment: 'center',fillColor: '#eeeeee',bold:true }, {text:'Direccion',fillColor: '#eeeeee'},{text:'Representante tecnico',fillColor: '#eeeeee'},{text:'Encargado',fillColor: '#eeeeee'},{text:'Jefe de piso',fillColor: '#eeeeee'},{text:'Despachadores',fillColor: '#eeeeee'},{text:'Personal de mantenimiento',fillColor: '#eeeeee'},{text:'Contratistas,Proveedores',fillColor: '#eeeeee'}],
  [{text:'I',fillColor: '#eeeeee',rowSpan:4}, {text:'Politica',fillColor: '#eeeeee'}, {text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a.Establecer la Política'},{},{},{},{},{},{},{}],
          [{},{text:'b. Comunicar la Política'},{},{},{},{},{},{},{}],
          [{},{text:'c. Evaluar la Política anualmente'},{},{},{},{},{},{},{}],
          //HAy que romper la pagina
          [{text:'III',fillColor: '#eeeeee',rowSpan:6},{text:'Identificación de Peligros y de aspectos ambientales para la Evaluación de los Riesgos e Impactos Ambientales.',fillColor: '#eeeeee'},{fillColor: '#eeeeee',text:''},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'', pageBreak: "after" },{},{},{},{},{},{},{}],
     [{},{text:'a.Identificar los aspectos ambientales.'},{},{},{},{},{},{},{}],
     [{},{text:'b. Identificar los Riesgos'},{},{},{},{},{},{},{}],
     [{},{text:'c. Evaluar los aspectos ambientales'},{},{},{},{},{},{},{}],
     [{},{text:'d. Realizar el Análisis de Riesgo de la estación de Servicio'},{},{},{},{},{},{},{}],
  //cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
  [{text:'III',fillColor: '#eeeeee',rowSpan:3},{text:'Requisitos Legales',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Identificar los requisitos legales'},{},{},{},{},{},{},{}],
     [{},{text:'b. Comunicar los requisitos legales'},{},{},{},{},{},{},{}],
     //cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'IV',fillColor: '#eeeeee',rowSpan:5},{text:'Objetivos Metas e indicadores.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Establecer los Objetivos y metas'},{},{},{},{},{},{},{}],
     [{},{text:'b. Diseñar los indicadores'},{},{},{},{},{},{},{}],
     [{},{text:'c. Elaborar programa de gestión de objetivos y metas'},{},{},{},{},{},{},{}],
     [{},{text:'d. Comunicar los objetivos'},{},{},{},{},{},{},{}],
     //ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'V',fillColor: '#eeeeee',rowSpan:5},{text:'Funciones, Responsabilidad y Autoridad.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Establecer la estructura para implantar el SA'},{},{},{},{},{},{},{}],
     [{},{text:'b. Establecer funciones y responsabilidades'},{},{},{},{},{},{},{}],
     [{},{text:'c. Designar al Representante técnico'},{},{},{},{},{},{},{}],
     [{},{text:'d. Establecer los recursos para implantar el SA'},{},{},{},{},{},{},{}],
     //ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'VI',fillColor: '#eeeeee',rowSpan:6},{text:'Competencia, Capacitación y Entrenamiento',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Elaborar perfiles del puesto'},{},{},{},{},{},{},{}],
     [{},{text:'b. Detectar las Necesidades de Capacitación'},{},{},{},{},{},{},{}],
     [{},{text:'c. Elaborar programa de capacitación y entrenamiento'},{},{},{},{},{},{},{}],
     [{},{text:'d. Aplicar programa de capacitación'},{},{},{},{},{},{},{}],
     [{},{text:'e. Evaluar la eficacia de la capacitación'},{},{},{},{},{},{},{}],
     //cccccccccccccccccccccccccccccccccccccccccccccccccc
     [{},{text:'', pageBreak: "after"},{},{},{},{},{},{},{}],
     [{text:'VII',fillColor: '#eeeeee',rowSpan:5},{text:'Comunicación, Participación y Consulta.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Comunicar la información relacionada con el SA.'},{},{},{},{},{},{},{}],
     [{},{text:'b. Recibir las quejas y sugerencias, o solicitud de información del SA'},{},{},{},{},{},{},{}],
     [{},{text:'c.Participar en el SA mediante sugerencias o quejas.'},{},{},{},{},{},{},{}],
     [{},{text:'d. Atender y dar seguimiento a las quejas y sugerencias.'},{},{},{},{},{},{},{}],
     //ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'VIII',fillColor: '#eeeeee',rowSpan:5},{text:'Control de Documentos y Registros.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Comunicar la información relacionada con el SA'},{},{},{},{},{},{},{}],
     [{},{text:'b. Mantener y resguardar documentos y registros'},{},{},{},{},{},{},{}],
     [{},{text:'c. Participar en el SA mediante sugerencias o quejas.'},{},{},{},{},{},{},{}],
     [{},{text:'d. Atender y dar seguimiento a las quejas y sugerencias.'},{},{},{},{},{},{},{}],
     //cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'VIII',fillColor: '#eeeeee',rowSpan:3},{text:'Control de Documentos y Registros.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Establecer los criterios para el control de documentos'},{},{},{},{},{},{},{}],
     [{},{text:'b. Mantener y resguardar documentos y registros'},{},{},{},{},{},{},{}],
                      //ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'IX',fillColor: '#eeeeee',rowSpan:3},{text:'Mejores Prácticas y estándares.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Identificar las mejores prácticas y estándares.'},{},{},{},{},{},{},{}],
     [{},{text:'b. Mantener actualizado el inventario de códigos y estándares'},{},{},{},{},{},{},{}],
     //cccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'X',fillColor: '#eeeeee',rowSpan:5},{text:'Control de Actividades y Procesos.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
         [{},{text:'a. Identificar los criterios para control de riesgos y aspectos ambientales'},{},{},{},{},{},{},{}],
     [{},{text:'b. Documentar los procedimientos para control de actividades y procesos'},{},{},{},{},{},{},{}],
     [{},{text:'c. Comunicar los controles de actividades y procesos a contratistas'},{},{},{},{},{},{},{}],
     [{},{text:'d. Aplicar Controles de aspectos ambientales y riesgos'},{},{},{},{},{},{},{}],
     //cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{},{text:'', pageBreak: "after"},{},{},{},{},{},{},{}],
     [{text:'XI',fillColor: '#eeeeee',rowSpan:5},{text:'Integridad Mecánica y Aseguramiento de la Calidad.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
         [{},{text:'a. Elaborar programa de mantenimiento preventivo'},{},{},{},{},{},{},{}],
     [{},{text:'b.Elaborar Listado de equipos críticos'},{},{},{},{},{},{},{}],
     [{},{text:'c. Desarrollar procedimientos de mantenimiento'},{},{},{},{},{},{},{}],
     [{},{text:'d. Cumplir programa de mantenimiento'},{},{},{},{},{},{},{}],
     //ccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'XII',fillColor: '#eeeeee',rowSpan:4},{text:'Seguridad de Contratistas.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Determinar la responsabilidad de contratistas.'},{},{},{},{},{},{},{}],
     [{},{text:'b. Seleccionar contratistas.'},{},{},{},{},{},{},{}],
     [{},{text:'c. Evaluar contratistas'},{},{},{},{},{},{},{}],
     //cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'XIII',fillColor: '#eeeeee',rowSpan:5},{text:'Preparación y Respuesta a Emergencias.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Identificar situaciones potenciales de emergencia'},{},{},{},{},{},{},{}],
     [{},{text:'b. Elaborar Planes de Respuesta de cada emergencia identificada'},{},{},{},{},{},{},{}],
     [{},{text:'c. Integrar Brigadas de emergencia'},{},{},{},{},{},{},{}],
     [{},{text:'d. Planear, ejecutar y evaluar los simulacros de emergencias'},{},{},{},{},{},{},{}],
     //cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'XIV',fillColor: '#eeeeee',rowSpan:4},{text:'Monitoreo, verificación y evaluación.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Identificar operaciones a monitorear y medir.'},{},{},{},{},{},{},{}],
     [{},{text:'b. Evaluar cumplimiento de requisitos legales.'},{},{},{},{},{},{},{}],
     [{},{text:'c. Administrar hallazgos derivados del monitoreo del SA'},{},{},{},{},{},{},{}],
                      //ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc	   
     [{text:'XV',fillColor: '#eeeeee',rowSpan:4},{text:'Auditorías',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Planificar, implementar y mantener un programa de auditorias'},{},{},{},{},{},{},{}],
     [{},{text:'b. Establecer criterios de competencia para selección de auditores'},{},{},{},{},{},{},{}],
     [{},{text:'c. Atender hallazgos de auditoría'},{},{},{},{},{},{},{}],
     //ccccccccccccccccccccccccccccccccccc
     [{},{text:'', pageBreak: "after"},{},{},{},{},{},{},{}],
     [{text:'XVI',fillColor: '#eeeeee',rowSpan:4},{text:'Investigación de Incidentes y Accidentes.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Registrar, reportar e investigar accidentes e incidentes'},{},{},{},{},{},{},{}],
     [{},{text:'b. Atender recomendaciones originadas de la investigación de incidentes'},{},{},{},{},{},{},{}],
     [{},{text:'c. Elaborar Estadística de incidentes y accidentes'},{},{},{},{},{},{},{}],
     //cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
     [{text:'XVII',fillColor: '#eeeeee',rowSpan:4},{text:'Revisión de Resultados.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Preparar información para el informe de resultados'},{},{},{},{},{},{},{}],
     [{},{text:'b. Realizar Revisión de Resultados'},{},{},{},{},{},{},{}],
     [{},{text:'c. Atender acciones resultantes por desviaciones del SA'},{},{},{},{},{},{},{}],
     //cccccccccccccccccccccccccccccccccccccccc
     [{text:'XVII',fillColor: '#eeeeee',rowSpan:2},{text:'Informes de Desempeño.',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'},{text:'',fillColor: '#eeeeee'}],
     [{},{text:'a. Comunicar los Resultados del desempeño a todos los niveles'},{},{},{},{},{},{},{}],
     [{},{text:'b. Informar a la ASEA el desempeño del SA'},{},{},{},{},{},{},{}],
     
  ]
  }
  },
  {
     text:'\nA: AUTORIDAD, R: RESPONSABILIDAD, I: INVOLUCRADO\n'
  },{text:'\n'},{ 
     table: {
         
             //margin:[20,28],
           heights: [50],
           widths: [150,150,150],
  body: [
     
  ['REVISADO POR:\n\n\n\n Roberto Muñoz Torres REPRESENTANTE TÉCNICO', 'APROBADO POR:\n\n\n\nFernando Bedoy Ruiz', 'FECHA DE APROBACIÓN:\n\n\n\nAgregar fecha "10/10/2018"']
  ]
  }
  }
         
          
          ]
     ,
      pageSize: 'LETTER',
      pageMargins: [72,150]
  };
  this.pdfMaker.generate(dd, 'V. Matriz de responsabilidad.pdf');
  }

}
