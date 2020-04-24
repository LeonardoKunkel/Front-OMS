import { Component, OnInit,ViewChild,Renderer } from '@angular/core';
import { PdfMakerService } from '../../services/pdf-maker.service'; 
import { AcordeonService } from '../../services/Elemento 13/acordeon.service';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss'],
})
export class AcordeonComponent implements OnInit {
   
  acordeonExpand = false;
  acordeonExpand2 = false;
  acordeonExpand3 = false;
  acordeonExpand4 = false;
  acordeonExpand5 = false;
  @ViewChild("cc")  cardContent: any;
  @ViewChild("sismo")  cardContent2: any;
  @ViewChild("derrameDespacho")  cardContent3: any;
  @ViewChild("incendiosElectricos")  cardContent4: any;
  @ViewChild("derrameFuga")  cardContent5: any;
  datos:any={
    mes:" ",
    aviso:' ',
    fecha:' ',
    descripcionEmergencia:' ',
    claseSimulacro:' '
  }
  datos2:any={
    mes:"",
    aviso:'',
    fecha:'',
    descripcionEmergencia:'',
    claseSimulacro:''
  }
  datos3:any={
    mes:"",
    aviso:'',
    fecha:'',
    descripcionEmergencia:'',
    claseSimulacro:''
  }
  datos4:any={
    mes:"",
    aviso:'',
    fecha:'',
    descripcionEmergencia:'',
    claseSimulacro:''
  }
  datos5:any={
    mes:"",
    aviso:'',
    fecha:'',
    descripcionEmergencia:'',
    claseSimulacro:''
  }
  public disabled = false;
  public disabled2 = false;
  public disabled3= false;
  public disabled4= false;
  public disabled5= false;

  constructor( 
    public renderer :Renderer,
    private pdfMaker:PdfMakerService,
    private acordeonServicio:AcordeonService
    ) {
      this.change();
      this.change2();
      this.change3();
      this.change4();
      this.change5();
  }

  ngOnInit() {
    console.log(this.cardContent.el);
  }

  public change() {
    this.disabled = !this.disabled;
  }public change2() {
    this.disabled2 = !this.disabled2;
  }public change3() {
    this.disabled3 = !this.disabled3;
  }public change4() {
    this.disabled4 = !this.disabled4;
  }public change5() {
    this.disabled5 = !this.disabled5;
  }

  toggleAcordeon(){
    if(this.acordeonExpand){
      this.renderer.setElementStyle(this.cardContent.el,"max-height","0px")
    }else{
      this.renderer.setElementStyle(this.cardContent.el,"max-height","800px")
    }
    this.acordeonExpand =!this.acordeonExpand;
  }

  toggleSismo(){
    if(this.acordeonExpand2){
      this.renderer.setElementStyle(this.cardContent2.el,"max-height","0px")
    }else{
      this.renderer.setElementStyle(this.cardContent2.el,"max-height","800px")
    }
    this.acordeonExpand2 =!this.acordeonExpand2;
  }

  toggleDerrameDespacho(){
    if(this.acordeonExpand3){
      this.renderer.setElementStyle(this.cardContent3.el,"max-height","0px")
    }else{
      this.renderer.setElementStyle(this.cardContent3.el,"max-height","800px")
    }
    this.acordeonExpand3 =!this.acordeonExpand3;
  }

  toggleIncendiosElectricos(){
    if(this.acordeonExpand4){
      this.renderer.setElementStyle(this.cardContent4.el,"max-height","0px")
    }else{
      this.renderer.setElementStyle(this.cardContent4.el,"max-height","800px")
    }
    this.acordeonExpand4 =!this.acordeonExpand4;
  }
  

  toggleDerrameFuga(){
    if(this.acordeonExpand5){
      this.renderer.setElementStyle(this.cardContent5.el,"max-height","0px")
    }else{
      this.renderer.setElementStyle(this.cardContent5.el,"max-height","800px")
    }
    this.acordeonExpand5 =!this.acordeonExpand5;
  }

  enviarForm(formulario){
    console.log(this.datos);
    this.crearService(this.datos);
    this.change();
  }

  enviarForm2(formulario2){
    console.log(this.datos2);
    this.crearService(this.datos2);
    this.change2()
  }

  enviarForm3(formulario3){
    console.log(this.datos3);
    this.crearService(this.datos3);
    this.change3();
  }

  enviarForm4(formulario4){
    console.log(this.datos4);
    this.crearService(this.datos4);
    this.change4();
  }

  enviarForm5(formulario5){
    console.log(this.datos5);
    this.crearService(this.datos5 );
    this.change5();
  }

  crearService(param){
    this.acordeonServicio.createAcordeon(param).subscribe((data:any)=>{
      console.log(data);
      
    })
  }

                                          //I N C E N D I O    E N   A R E A   D E   D E S P A C H O
  planeacioSimulacroIncendio(){
    var dd = {
    header: function(){
       return {
             table:{
               widths: [315, 20, 200], heights: [30,10,10],
               body: [
                       [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
                       [{text:'XIII. PREPARACIÓN Y RESPUESTA A EMERGENCIAS', colSpan:3, alignment: 'center', bold:true},{},{}],
                       [{text:'PLANEACIÓN DE SIMULACROS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}],
                     ]
               }, margin: [22,20],
       };
     },
     footer: function(){
       
     },

 content: [
     {
         table:{
             widths:[552],heights:[10],
             body:[
                 [{text:'1. INFORMACIÓN GENERAL DEL SIMULACRO',bold:true, fillColor:'#ddd'}],
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,257,257], heights:[10,10,10,10],
             body:[
                 [{text:'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold:true,colSpan:3},{},{}],
                 [{text:'No.'},{text:'DESCRIPCIÓN'},{text:'RESPONSABLE DE LA ATENCIÓN'}],
                 [{text:'1'},{},{}],
                 [{text:'2'},{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[272,272], heights:[10,10,10,50],
             body:[
                 [{text:'ÁREA:',bold:true,fillColor:'#ddd'},{text:'FECHA Y HORA PROGRAMADA:',bold:true,fillColor:'#ddd'}],
                 [{text:'EQUIPO:',bold:true,fillColor:'#ddd'},{text:'CON AVISO PREVIO:',bold:true,fillColor:'#ddd'}],
                 [{text:'CLASE DE SIMULACRO:',bold:true,fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:',bold:true,fillColor:'#ddd'}],
                 [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA',bold:true,fillColor:'#ddd',colSpan:2},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[200,346], heights:[10,10,10,10,10,10],
             body:[
                 [{text:'2. EQUIPO DE PROTECCIÓN PERSONAL Y DISPOSITIVOS DE SEGURIDAD REQUERIDOS:',bold:true,fillColor:'#ddd',colSpan:2},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[19,160,29,60,83,80,70], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10],
             body:[
                 [{text:'3. SECUENCIA DE ACCIONES DE SIMULACRO',bold:true,fillColor:'#ddd',colSpan:7},{},{},{},{},{},{}],
                 [{text:'ACTIVIDAD',bold:true,fillColor:'#ddd',colSpan:4},{},{},{},{text:'RESPONSABLE',bold:true,fillColor:'#ddd',rowSpan:2},{text:'RECURSOS MATERIALES REQUERIDOS',bold:true,fillColor:'#ddd',rowSpan:2},{text:'TIEMPO DE RESPUESTA',bold:true,fillColor:'#ddd',rowSpan:2}],
                 [{text:'No.',bold:true,fillColor:'#ddd'},{text:'DESCRIPCIÓN',bold:true,fillColor:'#ddd'},{text:'REAL',bold:true,fillColor:'#ddd'},{text:'SIMULADA',bold:true,fillColor:'#ddd'},{},{},{}],
                 [{text:'1'},{},{},{},{},{},{}],
                 [{text:'2'},{},{},{},{},{},{}],
                 [{text:'3'},{},{},{},{},{},{}],
                 [{text:'4'},{},{},{},{},{},{}],
                 [{text:'5'},{},{},{},{},{},{}],
                 [{text:'6'},{},{},{},{},{},{}],
                 [{text:'7'},{},{},{},{},{},{}],
                 [{text:'8'},{},{},{},{},{},{}],
                 [{text:'9'},{},{},{},{},{},{}],
                 [{text:'10'},{},{},{},{},{},{}],
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,120,397], heights:[10,10,10,10,10],
             body:[
                 [{text:'4. UBICACIÓN DE LOS RECURSOS EN EL SITIO',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                 [{text:'1.'},{text:'Extintores'},{}],
                 [{text:'2.'},{text:'Paros de emergencia'},{}],
                 [{text:'3.'},{text:'Válvulas de cierre'},{}],
                 [{text:'4.'},{text:'Interruptores'},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,150,367], heights:[10,10,10,10],
             body:[
                 [{text:'5. OBSERVADORES',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                 [{text:'No.'},{text:'NOMBRE',bold:true},{text:'UBICACIÓN',bold:true}],
                 [{text:'1'},{},{}],
                 [{text:'2'},{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[275,275], heights:[10,50],
             body:[
                 [{text:'6. AUTORIZACIÓN',bold:true,fillColor:'#ddd',colSpan:2},{}],
                 [{text:'PROPONE:\n\nCinthya Karime Bedoy Díaz\nENCARGADO'},{text:'APROBADO POR:\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO'}]
                 ]
         }
     }
 ],
 
 styles: {
   header: {
     fontSize: 18,
     bold: true,
   },
 },  
 
   pageSize: 'LETTER',
     pageMargins: [22,120],
};
  this.pdfMaker.generate(dd,'Planeacion de simulacros');

  }

  evaluacionSimulacroIncendio(){
    var dd = {
      header: function(){
         return {
               table: {widths: [320, 20, 200],
               heights: [30,10,10],
           body: [
             [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
             [{text:'XV. Auditorías',colSpan:3, alignment: 'center', bold:true},{},{}],
             [{text:'PLAN DE ATENCIÓN DE HALLAZGOS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [
       {
           table:{
               widths:[559], heights:[10],
               body:[
                   [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
                   ]
           },
       },
       {text: '\n\n'},
       {
           table:{
               widths:[250,300], heights:[10,10,10,10,10,10,10],
               body:[
                   [{text:'ÁREA:', bold: true, fillColor: '#ddd'},{text:'FECHA Y HORA PROGRAMADA:', bold: true, fillColor:'#ddd'}],
                   [{text:'EQUIPO:', bold: true, fillColor:'#ddd'},{text:'CON AVISO PREVIO:', bold: true, fillColor:'#ddd'}],
                   [{text:'CLASE DE SIMULACRO:', bold: true, fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:', bold: true, fillColor:'#ddd'}],
                   [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:',bold: true, fillColor:'#ddd', colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   ],
                   
           },
       },
       {text:'\n\n'},
       {
           table:{
               widths:[70,200,270], heights:[10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'EVALUACIÓN', bold: true, fillColor:'#ddd', colSpan: 3},{text:''},{text:''}],
                   [{text:'OBJETIVO', bold: true, fillColor:'#ddd', aligment:'center'},{text:'CONCEPTOS EVALUADOS', bold:true, fillColor:'#ddd', aligment:'center'},{text:'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor:'#ddd', aligment:'center'}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'3. OBSERVACIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'4. CONCLUSIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}],
                   ],
           },
       },
       {text:'\n'},
       {
           table:{
               widths:[186,186,180], heights:[10,80],
               body:[
                   [{text:'5. AUTORIZACIÓN DEL SIMULACRO', bold:true, fillColor:'#ddd', colSpan:3}],
                   [{text:'PROPONE:',aligment:'center'},{text:'APROBADO POR:',aligment:'center'},{text:'AUTORIZA:',aligment:'center'}],
                   ],
           },
       },
       
   ],
   
   styles: {
     header: {
       fontSize: 18,
       bold: true
     },
   },  
     pageSize: 'LETTER',
       pageMargins: [22,120]
       
 };
    this.pdfMaker.generate(dd,'Evaluacion de simulacro')
  }

                              /////////////////// S I S M O////////////////////////////

  planeacioSimulacroSismo(){
    var dd = {
    header: function(){
       return {
             table:{
               widths: [315, 20, 200], heights: [30,10,10],
               body: [
                       [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
                       [{text:'XIII. PREPARACIÓN Y RESPUESTA A EMERGENCIAS', colSpan:3, alignment: 'center', bold:true},{},{}],
                       [{text:'PLANEACIÓN DE SIMULACROS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}],
                     ]
               }, margin: [22,20],
       };
     },
     footer: function(){
       
     },

 content: [
     {
         table:{
             widths:[552],heights:[10],
             body:[
                 [{text:'1. INFORMACIÓN GENERAL DEL SIMULACRO',bold:true, fillColor:'#ddd'}],
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,257,257], heights:[10,10,10,10],
             body:[
                 [{text:'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold:true,colSpan:3},{},{}],
                 [{text:'No.'},{text:'DESCRIPCIÓN'},{text:'RESPONSABLE DE LA ATENCIÓN'}],
                 [{text:'1'},{},{}],
                 [{text:'2'},{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[272,272], heights:[10,10,10,50],
             body:[
                 [{text:'ÁREA:',bold:true,fillColor:'#ddd'},{text:'FECHA Y HORA PROGRAMADA:',bold:true,fillColor:'#ddd'}],
                 [{text:'EQUIPO:',bold:true,fillColor:'#ddd'},{text:'CON AVISO PREVIO:',bold:true,fillColor:'#ddd'}],
                 [{text:'CLASE DE SIMULACRO:',bold:true,fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:',bold:true,fillColor:'#ddd'}],
                 [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA',bold:true,fillColor:'#ddd',colSpan:2},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[200,346], heights:[10,10,10,10,10,10],
             body:[
                 [{text:'2. EQUIPO DE PROTECCIÓN PERSONAL Y DISPOSITIVOS DE SEGURIDAD REQUERIDOS:',bold:true,fillColor:'#ddd',colSpan:2},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[19,160,29,60,83,80,70], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10],
             body:[
                 [{text:'3. SECUENCIA DE ACCIONES DE SIMULACRO',bold:true,fillColor:'#ddd',colSpan:7},{},{},{},{},{},{}],
                 [{text:'ACTIVIDAD',bold:true,fillColor:'#ddd',colSpan:4},{},{},{},{text:'RESPONSABLE',bold:true,fillColor:'#ddd',rowSpan:2},{text:'RECURSOS MATERIALES REQUERIDOS',bold:true,fillColor:'#ddd',rowSpan:2},{text:'TIEMPO DE RESPUESTA',bold:true,fillColor:'#ddd',rowSpan:2}],
                 [{text:'No.',bold:true,fillColor:'#ddd'},{text:'DESCRIPCIÓN',bold:true,fillColor:'#ddd'},{text:'REAL',bold:true,fillColor:'#ddd'},{text:'SIMULADA',bold:true,fillColor:'#ddd'},{},{},{}],
                 [{text:'1'},{},{},{},{},{},{}],
                 [{text:'2'},{},{},{},{},{},{}],
                 [{text:'3'},{},{},{},{},{},{}],
                 [{text:'4'},{},{},{},{},{},{}],
                 [{text:'5'},{},{},{},{},{},{}],
                 [{text:'6'},{},{},{},{},{},{}],
                 [{text:'7'},{},{},{},{},{},{}],
                 [{text:'8'},{},{},{},{},{},{}],
                 [{text:'9'},{},{},{},{},{},{}],
                 [{text:'10'},{},{},{},{},{},{}],
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,120,397], heights:[10,10,10,10,10],
             body:[
                 [{text:'4. UBICACIÓN DE LOS RECURSOS EN EL SITIO',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                 [{text:'1.'},{text:'Extintores'},{}],
                 [{text:'2.'},{text:'Paros de emergencia'},{}],
                 [{text:'3.'},{text:'Válvulas de cierre'},{}],
                 [{text:'4.'},{text:'Interruptores'},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,150,367], heights:[10,10,10,10],
             body:[
                 [{text:'5. OBSERVADORES',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                 [{text:'No.'},{text:'NOMBRE',bold:true},{text:'UBICACIÓN',bold:true}],
                 [{text:'1'},{},{}],
                 [{text:'2'},{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[275,275], heights:[10,50],
             body:[
                 [{text:'6. AUTORIZACIÓN',bold:true,fillColor:'#ddd',colSpan:2},{}],
                 [{text:'PROPONE:\n\nCinthya Karime Bedoy Díaz\nENCARGADO'},{text:'APROBADO POR:\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO'}]
                 ]
         }
     }
 ],
 
 styles: {
   header: {
     fontSize: 18,
     bold: true,
   },
 },  
 
   pageSize: 'LETTER',
     pageMargins: [22,120],
};
  this.pdfMaker.generate(dd,'Planeacion de simulacros');

  }

  evaluacionSimulacroSismo(){
    var dd = {
      header: function(){
         return {
               table: {widths: [320, 20, 200],
               heights: [30,10,10],
           body: [
             [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
             [{text:'XV. Auditorías',colSpan:3, alignment: 'center', bold:true},{},{}],
             [{text:'PLAN DE ATENCIÓN DE HALLAZGOS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [
       {
           table:{
               widths:[559], heights:[10],
               body:[
                   [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
                   ]
           },
       },
       {text: '\n\n'},
       {
           table:{
               widths:[250,300], heights:[10,10,10,10,10,10,10],
               body:[
                   [{text:'ÁREA:', bold: true, fillColor: '#ddd'},{text:'FECHA Y HORA PROGRAMADA:', bold: true, fillColor:'#ddd'}],
                   [{text:'EQUIPO:', bold: true, fillColor:'#ddd'},{text:'CON AVISO PREVIO:', bold: true, fillColor:'#ddd'}],
                   [{text:'CLASE DE SIMULACRO:', bold: true, fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:', bold: true, fillColor:'#ddd'}],
                   [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:',bold: true, fillColor:'#ddd', colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   ],
                   
           },
       },
       {text:'\n\n'},
       {
           table:{
               widths:[70,200,270], heights:[10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'EVALUACIÓN', bold: true, fillColor:'#ddd', colSpan: 3},{text:''},{text:''}],
                   [{text:'OBJETIVO', bold: true, fillColor:'#ddd', aligment:'center'},{text:'CONCEPTOS EVALUADOS', bold:true, fillColor:'#ddd', aligment:'center'},{text:'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor:'#ddd', aligment:'center'}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'3. OBSERVACIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'4. CONCLUSIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}],
                   ],
           },
       },
       {text:'\n'},
       {
           table:{
               widths:[186,186,180], heights:[10,80],
               body:[
                   [{text:'5. AUTORIZACIÓN DEL SIMULACRO', bold:true, fillColor:'#ddd', colSpan:3}],
                   [{text:'PROPONE:',aligment:'center'},{text:'APROBADO POR:',aligment:'center'},{text:'AUTORIZA:',aligment:'center'}],
                   ],
           },
       },
       
   ],
   
   styles: {
     header: {
       fontSize: 18,
       bold: true
     },
   },  
     pageSize: 'LETTER',
       pageMargins: [22,120]
       
 };
    this.pdfMaker.generate(dd,'Evaluacion de simulacro')
  }


                                        // D E R R A M E   D E   P R O D U C T O   E N   D E S P A C H O

  planeacioSimulacroDerrameProducto(){
    var dd = {
    header: function(){
       return {
             table:{
               widths: [315, 20, 200], heights: [30,10,10],
               body: [
                       [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
                       [{text:'XIII. PREPARACIÓN Y RESPUESTA A EMERGENCIAS', colSpan:3, alignment: 'center', bold:true},{},{}],
                       [{text:'PLANEACIÓN DE SIMULACROS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}],
                     ]
               }, margin: [22,20],
       };
     },
     footer: function(){
       
     },

 content: [
     {
         table:{
             widths:[552],heights:[10],
             body:[
                 [{text:'1. INFORMACIÓN GENERAL DEL SIMULACRO',bold:true, fillColor:'#ddd'}],
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,257,257], heights:[10,10,10,10],
             body:[
                 [{text:'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold:true,colSpan:3},{},{}],
                 [{text:'No.'},{text:'DESCRIPCIÓN'},{text:'RESPONSABLE DE LA ATENCIÓN'}],
                 [{text:'1'},{},{}],
                 [{text:'2'},{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[272,272], heights:[10,10,10,50],
             body:[
                 [{text:'ÁREA:',bold:true,fillColor:'#ddd'},{text:'FECHA Y HORA PROGRAMADA:',bold:true,fillColor:'#ddd'}],
                 [{text:'EQUIPO:',bold:true,fillColor:'#ddd'},{text:'CON AVISO PREVIO:',bold:true,fillColor:'#ddd'}],
                 [{text:'CLASE DE SIMULACRO:',bold:true,fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:',bold:true,fillColor:'#ddd'}],
                 [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA',bold:true,fillColor:'#ddd',colSpan:2},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[200,346], heights:[10,10,10,10,10,10],
             body:[
                 [{text:'2. EQUIPO DE PROTECCIÓN PERSONAL Y DISPOSITIVOS DE SEGURIDAD REQUERIDOS:',bold:true,fillColor:'#ddd',colSpan:2},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[19,160,29,60,83,80,70], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10],
             body:[
                 [{text:'3. SECUENCIA DE ACCIONES DE SIMULACRO',bold:true,fillColor:'#ddd',colSpan:7},{},{},{},{},{},{}],
                 [{text:'ACTIVIDAD',bold:true,fillColor:'#ddd',colSpan:4},{},{},{},{text:'RESPONSABLE',bold:true,fillColor:'#ddd',rowSpan:2},{text:'RECURSOS MATERIALES REQUERIDOS',bold:true,fillColor:'#ddd',rowSpan:2},{text:'TIEMPO DE RESPUESTA',bold:true,fillColor:'#ddd',rowSpan:2}],
                 [{text:'No.',bold:true,fillColor:'#ddd'},{text:'DESCRIPCIÓN',bold:true,fillColor:'#ddd'},{text:'REAL',bold:true,fillColor:'#ddd'},{text:'SIMULADA',bold:true,fillColor:'#ddd'},{},{},{}],
                 [{text:'1'},{},{},{},{},{},{}],
                 [{text:'2'},{},{},{},{},{},{}],
                 [{text:'3'},{},{},{},{},{},{}],
                 [{text:'4'},{},{},{},{},{},{}],
                 [{text:'5'},{},{},{},{},{},{}],
                 [{text:'6'},{},{},{},{},{},{}],
                 [{text:'7'},{},{},{},{},{},{}],
                 [{text:'8'},{},{},{},{},{},{}],
                 [{text:'9'},{},{},{},{},{},{}],
                 [{text:'10'},{},{},{},{},{},{}],
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,120,397], heights:[10,10,10,10,10],
             body:[
                 [{text:'4. UBICACIÓN DE LOS RECURSOS EN EL SITIO',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                 [{text:'1.'},{text:'Extintores'},{}],
                 [{text:'2.'},{text:'Paros de emergencia'},{}],
                 [{text:'3.'},{text:'Válvulas de cierre'},{}],
                 [{text:'4.'},{text:'Interruptores'},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,150,367], heights:[10,10,10,10],
             body:[
                 [{text:'5. OBSERVADORES',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                 [{text:'No.'},{text:'NOMBRE',bold:true},{text:'UBICACIÓN',bold:true}],
                 [{text:'1'},{},{}],
                 [{text:'2'},{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[275,275], heights:[10,50],
             body:[
                 [{text:'6. AUTORIZACIÓN',bold:true,fillColor:'#ddd',colSpan:2},{}],
                 [{text:'PROPONE:\n\nCinthya Karime Bedoy Díaz\nENCARGADO'},{text:'APROBADO POR:\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO'}]
                 ]
         }
     }
 ],
 
 styles: {
   header: {
     fontSize: 18,
     bold: true,
   },
 },  
 
   pageSize: 'LETTER',
     pageMargins: [22,120],
};
  this.pdfMaker.generate(dd,'Planeacion de simulacros');

  }

  evaluacionSimulacroDerrameProducto(){
    var dd = {
      header: function(){
         return {
               table: {widths: [320, 20, 200],
               heights: [30,10,10],
           body: [
             [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
             [{text:'XV. Auditorías',colSpan:3, alignment: 'center', bold:true},{},{}],
             [{text:'PLAN DE ATENCIÓN DE HALLAZGOS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [
       {
           table:{
               widths:[559], heights:[10],
               body:[
                   [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
                   ]
           },
       },
       {text: '\n\n'},
       {
           table:{
               widths:[250,300], heights:[10,10,10,10,10,10,10],
               body:[
                   [{text:'ÁREA:', bold: true, fillColor: '#ddd'},{text:'FECHA Y HORA PROGRAMADA:', bold: true, fillColor:'#ddd'}],
                   [{text:'EQUIPO:', bold: true, fillColor:'#ddd'},{text:'CON AVISO PREVIO:', bold: true, fillColor:'#ddd'}],
                   [{text:'CLASE DE SIMULACRO:', bold: true, fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:', bold: true, fillColor:'#ddd'}],
                   [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:',bold: true, fillColor:'#ddd', colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   ],
                   
           },
       },
       {text:'\n\n'},
       {
           table:{
               widths:[70,200,270], heights:[10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'EVALUACIÓN', bold: true, fillColor:'#ddd', colSpan: 3},{text:''},{text:''}],
                   [{text:'OBJETIVO', bold: true, fillColor:'#ddd', aligment:'center'},{text:'CONCEPTOS EVALUADOS', bold:true, fillColor:'#ddd', aligment:'center'},{text:'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor:'#ddd', aligment:'center'}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'3. OBSERVACIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'4. CONCLUSIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}],
                   ],
           },
       },
       {text:'\n'},
       {
           table:{
               widths:[186,186,180], heights:[10,80],
               body:[
                   [{text:'5. AUTORIZACIÓN DEL SIMULACRO', bold:true, fillColor:'#ddd', colSpan:3}],
                   [{text:'PROPONE:',aligment:'center'},{text:'APROBADO POR:',aligment:'center'},{text:'AUTORIZA:',aligment:'center'}],
                   ],
           },
       },
       
   ],
   
   styles: {
     header: {
       fontSize: 18,
       bold: true
     },
   },  
     pageSize: 'LETTER',
       pageMargins: [22,120]
       
 };
    this.pdfMaker.generate(dd,'Evaluacion de simulacro')
  }

                   ////////////////////////// I N C E N D I O S   E L E C T R I C O S
  planeacioSimulacroIncendioElectricos(){
    var dd = {
    header: function(){
       return {
             table:{
               widths: [315, 20, 200], heights: [30,10,10],
               body: [
                       [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
                       [{text:'XIII. PREPARACIÓN Y RESPUESTA A EMERGENCIAS', colSpan:3, alignment: 'center', bold:true},{},{}],
                       [{text:'PLANEACIÓN DE SIMULACROS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}],
                     ]
               }, margin: [22,20],
       };
     },
     footer: function(){
       
     },

 content: [
     {
         table:{
             widths:[552],heights:[10],
             body:[
                 [{text:'1. INFORMACIÓN GENERAL DEL SIMULACRO',bold:true, fillColor:'#ddd'}],
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,257,257], heights:[10,10,10,10],
             body:[
                 [{text:'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold:true,colSpan:3},{},{}],
                 [{text:'No.'},{text:'DESCRIPCIÓN'},{text:'RESPONSABLE DE LA ATENCIÓN'}],
                 [{text:'1'},{},{}],
                 [{text:'2'},{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[272,272], heights:[10,10,10,50],
             body:[
                 [{text:'ÁREA:',bold:true,fillColor:'#ddd'},{text:'FECHA Y HORA PROGRAMADA:',bold:true,fillColor:'#ddd'}],
                 [{text:'EQUIPO:',bold:true,fillColor:'#ddd'},{text:'CON AVISO PREVIO:',bold:true,fillColor:'#ddd'}],
                 [{text:'CLASE DE SIMULACRO:',bold:true,fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:',bold:true,fillColor:'#ddd'}],
                 [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA',bold:true,fillColor:'#ddd',colSpan:2},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[200,346], heights:[10,10,10,10,10,10],
             body:[
                 [{text:'2. EQUIPO DE PROTECCIÓN PERSONAL Y DISPOSITIVOS DE SEGURIDAD REQUERIDOS:',bold:true,fillColor:'#ddd',colSpan:2},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[19,160,29,60,83,80,70], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10],
             body:[
                 [{text:'3. SECUENCIA DE ACCIONES DE SIMULACRO',bold:true,fillColor:'#ddd',colSpan:7},{},{},{},{},{},{}],
                 [{text:'ACTIVIDAD',bold:true,fillColor:'#ddd',colSpan:4},{},{},{},{text:'RESPONSABLE',bold:true,fillColor:'#ddd',rowSpan:2},{text:'RECURSOS MATERIALES REQUERIDOS',bold:true,fillColor:'#ddd',rowSpan:2},{text:'TIEMPO DE RESPUESTA',bold:true,fillColor:'#ddd',rowSpan:2}],
                 [{text:'No.',bold:true,fillColor:'#ddd'},{text:'DESCRIPCIÓN',bold:true,fillColor:'#ddd'},{text:'REAL',bold:true,fillColor:'#ddd'},{text:'SIMULADA',bold:true,fillColor:'#ddd'},{},{},{}],
                 [{text:'1'},{},{},{},{},{},{}],
                 [{text:'2'},{},{},{},{},{},{}],
                 [{text:'3'},{},{},{},{},{},{}],
                 [{text:'4'},{},{},{},{},{},{}],
                 [{text:'5'},{},{},{},{},{},{}],
                 [{text:'6'},{},{},{},{},{},{}],
                 [{text:'7'},{},{},{},{},{},{}],
                 [{text:'8'},{},{},{},{},{},{}],
                 [{text:'9'},{},{},{},{},{},{}],
                 [{text:'10'},{},{},{},{},{},{}],
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,120,397], heights:[10,10,10,10,10],
             body:[
                 [{text:'4. UBICACIÓN DE LOS RECURSOS EN EL SITIO',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                 [{text:'1.'},{text:'Extintores'},{}],
                 [{text:'2.'},{text:'Paros de emergencia'},{}],
                 [{text:'3.'},{text:'Válvulas de cierre'},{}],
                 [{text:'4.'},{text:'Interruptores'},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,150,367], heights:[10,10,10,10],
             body:[
                 [{text:'5. OBSERVADORES',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                 [{text:'No.'},{text:'NOMBRE',bold:true},{text:'UBICACIÓN',bold:true}],
                 [{text:'1'},{},{}],
                 [{text:'2'},{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[275,275], heights:[10,50],
             body:[
                 [{text:'6. AUTORIZACIÓN',bold:true,fillColor:'#ddd',colSpan:2},{}],
                 [{text:'PROPONE:\n\nCinthya Karime Bedoy Díaz\nENCARGADO'},{text:'APROBADO POR:\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO'}]
                 ]
         }
     }
 ],
 
 styles: {
   header: {
     fontSize: 18,
     bold: true,
   },
 },  
 
   pageSize: 'LETTER',
     pageMargins: [22,120],
};
  this.pdfMaker.generate(dd,'Planeacion de simulacros');

  }

  evaluacionSimulacroIncendioElectricos(){
    var dd = {
      header: function(){
         return {
               table: {widths: [320, 20, 200],
               heights: [30,10,10],
           body: [
             [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
             [{text:'XV. Auditorías',colSpan:3, alignment: 'center', bold:true},{},{}],
             [{text:'PLAN DE ATENCIÓN DE HALLAZGOS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [
       {
           table:{
               widths:[559], heights:[10],
               body:[
                   [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
                   ]
           },
       },
       {text: '\n\n'},
       {
           table:{
               widths:[250,300], heights:[10,10,10,10,10,10,10],
               body:[
                   [{text:'ÁREA:', bold: true, fillColor: '#ddd'},{text:'FECHA Y HORA PROGRAMADA:', bold: true, fillColor:'#ddd'}],
                   [{text:'EQUIPO:', bold: true, fillColor:'#ddd'},{text:'CON AVISO PREVIO:', bold: true, fillColor:'#ddd'}],
                   [{text:'CLASE DE SIMULACRO:', bold: true, fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:', bold: true, fillColor:'#ddd'}],
                   [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:',bold: true, fillColor:'#ddd', colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   ],
                   
           },
       },
       {text:'\n\n'},
       {
           table:{
               widths:[70,200,270], heights:[10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'EVALUACIÓN', bold: true, fillColor:'#ddd', colSpan: 3},{text:''},{text:''}],
                   [{text:'OBJETIVO', bold: true, fillColor:'#ddd', aligment:'center'},{text:'CONCEPTOS EVALUADOS', bold:true, fillColor:'#ddd', aligment:'center'},{text:'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor:'#ddd', aligment:'center'}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'3. OBSERVACIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'4. CONCLUSIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}],
                   ],
           },
       },
       {text:'\n'},
       {
           table:{
               widths:[186,186,180], heights:[10,80],
               body:[
                   [{text:'5. AUTORIZACIÓN DEL SIMULACRO', bold:true, fillColor:'#ddd', colSpan:3}],
                   [{text:'PROPONE:',aligment:'center'},{text:'APROBADO POR:',aligment:'center'},{text:'AUTORIZA:',aligment:'center'}],
                   ],
           },
       },
       
   ],
   
   styles: {
     header: {
       fontSize: 18,
       bold: true
     },
   },  
     pageSize: 'LETTER',
       pageMargins: [22,120]
       
 };
    this.pdfMaker.generate(dd,'Evaluacion de simulacro')
  }
                            ////////////////////////// D E R R A M E    O    F U G A

  planeacioSimulacroDerrame(){
    var dd = {
    header: function(){
       return {
             table:{
               widths: [315, 20, 200], heights: [30,10,10],
               body: [
                       [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
                       [{text:'XIII. PREPARACIÓN Y RESPUESTA A EMERGENCIAS', colSpan:3, alignment: 'center', bold:true},{},{}],
                       [{text:'PLANEACIÓN DE SIMULACROS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}],
                     ]
               }, margin: [22,20],
       };
     },
     footer: function(){
       
     },

 content: [
     {
         table:{
             widths:[552],heights:[10],
             body:[
                 [{text:'1. INFORMACIÓN GENERAL DEL SIMULACRO',bold:true, fillColor:'#ddd'}],
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,257,257], heights:[10,10,10,10],
             body:[
                 [{text:'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold:true,colSpan:3},{},{}],
                 [{text:'No.'},{text:'DESCRIPCIÓN'},{text:'RESPONSABLE DE LA ATENCIÓN'}],
                 [{text:'1'},{},{}],
                 [{text:'2'},{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[272,272], heights:[10,10,10,50],
             body:[
                 [{text:'ÁREA:',bold:true,fillColor:'#ddd'},{text:'FECHA Y HORA PROGRAMADA:',bold:true,fillColor:'#ddd'}],
                 [{text:'EQUIPO:',bold:true,fillColor:'#ddd'},{text:'CON AVISO PREVIO:',bold:true,fillColor:'#ddd'}],
                 [{text:'CLASE DE SIMULACRO:',bold:true,fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:',bold:true,fillColor:'#ddd'}],
                 [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA',bold:true,fillColor:'#ddd',colSpan:2},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[200,346], heights:[10,10,10,10,10,10],
             body:[
                 [{text:'2. EQUIPO DE PROTECCIÓN PERSONAL Y DISPOSITIVOS DE SEGURIDAD REQUERIDOS:',bold:true,fillColor:'#ddd',colSpan:2},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}],
                 [{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[19,160,29,60,83,80,70], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10],
             body:[
                 [{text:'3. SECUENCIA DE ACCIONES DE SIMULACRO',bold:true,fillColor:'#ddd',colSpan:7},{},{},{},{},{},{}],
                 [{text:'ACTIVIDAD',bold:true,fillColor:'#ddd',colSpan:4},{},{},{},{text:'RESPONSABLE',bold:true,fillColor:'#ddd',rowSpan:2},{text:'RECURSOS MATERIALES REQUERIDOS',bold:true,fillColor:'#ddd',rowSpan:2},{text:'TIEMPO DE RESPUESTA',bold:true,fillColor:'#ddd',rowSpan:2}],
                 [{text:'No.',bold:true,fillColor:'#ddd'},{text:'DESCRIPCIÓN',bold:true,fillColor:'#ddd'},{text:'REAL',bold:true,fillColor:'#ddd'},{text:'SIMULADA',bold:true,fillColor:'#ddd'},{},{},{}],
                 [{text:'1'},{},{},{},{},{},{}],
                 [{text:'2'},{},{},{},{},{},{}],
                 [{text:'3'},{},{},{},{},{},{}],
                 [{text:'4'},{},{},{},{},{},{}],
                 [{text:'5'},{},{},{},{},{},{}],
                 [{text:'6'},{},{},{},{},{},{}],
                 [{text:'7'},{},{},{},{},{},{}],
                 [{text:'8'},{},{},{},{},{},{}],
                 [{text:'9'},{},{},{},{},{},{}],
                 [{text:'10'},{},{},{},{},{},{}],
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,120,397], heights:[10,10,10,10,10],
             body:[
                 [{text:'4. UBICACIÓN DE LOS RECURSOS EN EL SITIO',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                 [{text:'1.'},{text:'Extintores'},{}],
                 [{text:'2.'},{text:'Paros de emergencia'},{}],
                 [{text:'3.'},{text:'Válvulas de cierre'},{}],
                 [{text:'4.'},{text:'Interruptores'},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[20,150,367], heights:[10,10,10,10],
             body:[
                 [{text:'5. OBSERVADORES',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                 [{text:'No.'},{text:'NOMBRE',bold:true},{text:'UBICACIÓN',bold:true}],
                 [{text:'1'},{},{}],
                 [{text:'2'},{},{}]
                 ]
         }
     },
     {text:'\n'},
     {
         table:{
             widths:[275,275], heights:[10,50],
             body:[
                 [{text:'6. AUTORIZACIÓN',bold:true,fillColor:'#ddd',colSpan:2},{}],
                 [{text:'PROPONE:\n\nCinthya Karime Bedoy Díaz\nENCARGADO'},{text:'APROBADO POR:\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO'}]
                 ]
         }
     }
 ],
 
 styles: {
   header: {
     fontSize: 18,
     bold: true,
   },
 },  
 
   pageSize: 'LETTER',
     pageMargins: [22,120],
};
  this.pdfMaker.generate(dd,'Planeacion de simulacros');

  }

  evaluacionSimulacroDerrame(){
    var dd = {
      header: function(){
         return {
               table: {widths: [320, 20, 200],
               heights: [30,10,10],
           body: [
             [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
             [{text:'XV. Auditorías',colSpan:3, alignment: 'center', bold:true},{},{}],
             [{text:'PLAN DE ATENCIÓN DE HALLAZGOS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [
       {
           table:{
               widths:[559], heights:[10],
               body:[
                   [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
                   ]
           },
       },
       {text: '\n\n'},
       {
           table:{
               widths:[250,300], heights:[10,10,10,10,10,10,10],
               body:[
                   [{text:'ÁREA:', bold: true, fillColor: '#ddd'},{text:'FECHA Y HORA PROGRAMADA:', bold: true, fillColor:'#ddd'}],
                   [{text:'EQUIPO:', bold: true, fillColor:'#ddd'},{text:'CON AVISO PREVIO:', bold: true, fillColor:'#ddd'}],
                   [{text:'CLASE DE SIMULACRO:', bold: true, fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:', bold: true, fillColor:'#ddd'}],
                   [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:',bold: true, fillColor:'#ddd', colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   ],
                   
           },
       },
       {text:'\n\n'},
       {
           table:{
               widths:[70,200,270], heights:[10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'EVALUACIÓN', bold: true, fillColor:'#ddd', colSpan: 3},{text:''},{text:''}],
                   [{text:'OBJETIVO', bold: true, fillColor:'#ddd', aligment:'center'},{text:'CONCEPTOS EVALUADOS', bold:true, fillColor:'#ddd', aligment:'center'},{text:'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor:'#ddd', aligment:'center'}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'3. OBSERVACIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'4. CONCLUSIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}],
                   ],
           },
       },
       {text:'\n'},
       {
           table:{
               widths:[186,186,180], heights:[10,80],
               body:[
                   [{text:'5. AUTORIZACIÓN DEL SIMULACRO', bold:true, fillColor:'#ddd', colSpan:3}],
                   [{text:'PROPONE:',aligment:'center'},{text:'APROBADO POR:',aligment:'center'},{text:'AUTORIZA:',aligment:'center'}],
                   ],
           },
       },
       
   ],
   
   styles: {
     header: {
       fontSize: 18,
       bold: true
     },
   },  
     pageSize: 'LETTER',
       pageMargins: [22,120]
       
 };
    this.pdfMaker.generate(dd,'Evaluacion de simulacro')
  }



}
