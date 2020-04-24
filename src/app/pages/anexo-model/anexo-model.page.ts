import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AnexoSeguridadService } from '../../services/Elemento 12/anexo-seguridad.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-anexo-model',
  templateUrl: './anexo-model.page.html',
  styleUrls: ['./anexo-model.page.scss'],
})
export class AnexoModelPage implements OnInit {
  //public anArray:any=[];
  public anArray:any=[];
  data: boolean;
  public datoss1:{
    regla1:''
  };
  public datoss2:{
    regla1:'',
    regla2:''
  };
  public datoss3:{
    regla1:'',
    regla2:'',
    regla3:''
  };
  public datoss4:{
    regla1:'',
    regla2:'',
    regla3:'',
    regla4:''
  };
  public datoss5:{
    regla1:'',
    regla2:'',
    regla3:'',
    regla4:'',
    regla5:''
  };
  public datoss6:{
    regla1:'',
    regla2:'',
    regla3:'',
    regla4:'',
    regla5:'',
    regla6:''
  };
  public datoss7:{
    regla1:'',
    regla2:'',
    regla3:'',
    regla4:'',
    regla5:'',
    regla6:'',
    regla7:''
  };
  public datoss8:{
    regla1:'',
    regla2:'',
    regla3:'',
    regla4:'',
    regla5:'',
    regla6:'',
    regla7:'',
    regla8:''
  };
  public datoss9:{
    regla1:'',
    regla2:'',
    regla3:'',
    regla4:'',
    regla5:'',
    regla6:'',
    regla7:'',
    regla8:'',
    regla9:''
  };
  constructor(
    private modalCtrl:ModalController,
    private anexoService:AnexoSeguridadService,
    private pdfMake:PdfMakerService
    ) {
    this.Add();
    this.goTo();
   }

  ngOnInit() {
  }
  async closeModal(){
    await this.modalCtrl.dismiss();
  }
  goTo(){
   console.log('this.anArray',this.anArray);
   this.data=true;
   }
  
    Add(){
    this.anArray.push([]);
    console.log(this.data);
    }

    creaAnexo(oo){
      this.anexoService.createAnexo(oo).subscribe((data:any)=>{
        console.log(data);
        
      })
    }
     
    // verificar(){
    //   console.log(this.datoss);
    //   this.creaAnexo(this.datoss)                 falta pasar los parametrods en  la funcion
    // }

    pdf(){
      
      if( this.anArray.length === 1){
      this.datoss1={
          regla1: this.anArray[0].value,
      }
        console.log(this.anArray.length);
        console.log(this.datoss1);
        this.pdf1();
        
      }else if( this.anArray.length === 2){

      this.datoss2={
          regla1: this.anArray[0].value,
          regla2: this.anArray[1].value,
      }
        this.pdf2();
        console.log(this.anArray.length);
        console.log(this.datoss2);
      }else if( this.anArray.length === 3){

      this.datoss3={
          regla1: this.anArray[0].value,
          regla2: this.anArray[1].value,
          regla3: this.anArray[2].value,
      }
        this.pdf3();
        console.log(this.anArray.length);
        console.log(this.datoss3);

      }else if( this.anArray.length === 4){

      this.datoss4={
          regla1: this.anArray[0].value,
          regla2: this.anArray[1].value,
          regla3: this.anArray[2].value,
          regla4: this.anArray[3].value,
      }
        this.pdf4();
        console.log(this.anArray.length);
        console.log(this.datoss4);

      }else if( this.anArray.length === 5){

      this.datoss5={
          regla1: this.anArray[0].value,
          regla2: this.anArray[1].value,
          regla3: this.anArray[2].value,
          regla4: this.anArray[3].value,
          regla5: this.anArray[4].value,
      }
        this.pdf5();
        console.log(this.anArray.length);
        console.log(this.datoss5);

      }else if( this.anArray.length === 6){

      this.datoss6={
          regla1: this.anArray[0].value,
          regla2: this.anArray[1].value,
          regla3: this.anArray[2].value,
          regla4: this.anArray[3].value,
          regla5: this.anArray[4].value,
          regla6: this.anArray[5].value,
      }
        this.pdf6();
        console.log(this.anArray.length);
        console.log(this.datoss6);

      }else if( this.anArray.length === 7){

      this.datoss7={
          regla1: this.anArray[0].value,
          regla2: this.anArray[1].value,
          regla3: this.anArray[2].value,
          regla4: this.anArray[3].value,
          regla5: this.anArray[4].value,
          regla6: this.anArray[5].value,
          regla7: this.anArray[6].value,
      }
        this.pdf7();
        console.log(this.anArray.length);
        console.log(this.datoss7);

      }else if( this.anArray.length === 8){

      this.datoss8={
          regla1: this.anArray[0].value,
          regla2: this.anArray[1].value,
          regla3: this.anArray[2].value,
          regla4: this.anArray[3].value,
          regla5: this.anArray[4].value,
          regla6: this.anArray[5].value,
          regla7: this.anArray[6].value,
          regla8: this.anArray[7].value,
      }
        this.pdf8();
        console.log(this.anArray.length);
        console.log(this.datoss8);

      }else if( this.anArray.length === 9){

      this.datoss9={
          regla1: this.anArray[0].value,
          regla2: this.anArray[1].value,
          regla3: this.anArray[2].value,
          regla4: this.anArray[3].value,
          regla5: this.anArray[4].value,
          regla6: this.anArray[5].value,
          regla7: this.anArray[6].value,
          regla8: this.anArray[7].value,
          regla9: this.anArray[8].value,
      }
        this.pdf9();
        console.log(this.anArray.length);
        console.log(this.datoss9);

      }else{
        alert('Excedio el numero de reglas')
      }
    }

    pdf1(){
          var dd = {
            header: function(){
               return {
                     table: {widths: [315, 20, 200],
                     heights: [30,10,10],
                 body: [
                   [{text:'SOFTOIL S.A. de C.V.',fontSize:19,colSpan:3,bold:true,alignment:'center'},{},{}],
                   [{text:'ANEXO DE SEGURIDAD PARA CONTRATISTAS',colSpan:3, alignment: 'center', bold:true},{},{}],
                   [{text:'XII. SEGURIDAD DE CONTRATISTAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
                 ]
               }, margin: [22,20]
               };
             },
             footer: function(){
               
             },
       
         content: [
             {
                 table:{
                     body:[
                         [{text:'OBJETIVO',fillColor:'#ddd'}],
                         [{text:'Establecer las Reglas generales de seguridad industrial, seguridad operativa y protección del medio ambiente, que deben ser observadas por los contratistas, subcontratistas, proveedores y prestadores de servicio, que desarrollen trabajos o presten servicios, en las instalaciones de la con la Estación de Servicio, para prevenir la ocurrencia de incidentes que afecten la integridad de trabajadores, las instalaciones, al medio ambiente o terceros.',fontSize:12,alignment:'justify'}],
                         [{text:'ALCANCE',fillColor:'#ddd'}],
                         [{text:'Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, prestadores de servicio y proveedores, cuyas actividades dentro de la estación de servicio generan riesgos o aspectos ambientales significativos, entre otros:\n\na. Trabajos con escaleras y plataformas en alturas mayores a 1.5 m.\nb. Trabajos en áreas confinadas\nc. Trabajos con herramienta que genera fuente de ignición.\nd. Trabajos en instalaciones eléctricas.\ne. Trabajos en equipos y accesorios que contengan producto.\nf. Suministro de productos inflamables y combustibles',fontSize:12,alignment:'justify'}],
                         [{text:'MEDIDAS PREVENTIVAS GENERALES',fillColor:'#ddd'}],
                         [{text:`${this.datoss1.regla1}`}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                         [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                         [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                         [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                         [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                         [{text:'USO DE HERRAMIENTA',fillColor:'#ddd'}],
                         [{text:'La herramienta a utilizar debe estar en buen estado, no se debe utilizar si está completa o defectuosa.',fontSize:11}],
                         [{text:'La Herramienta eléctrica debe aterrizarse durante su uso.',fontSize:11}],
                         [{text:'La herramienta solo debe utilizarse para el fin que está destinada, está prohibido darle otro uso.',fontSize:11}],
                         [{text:'Las caladoras deben contar con su guarda correspondiente',fontSize:11,color:'red'}],
                         [{text:'Está prohibido el uso de herramienta hechiza.',fontSize:11}],
                         [{text:'Las extensiones eléctricas deben ser de uso rudo.',fontSize:11}],
                         [{text:'Están prohibidos los empates en las extensiones eléctricas.',fontSize:11}],
                         [{text:'PROCEDIMIENTOS',fillColor:'#ddd'}],
                         [{text:'Aplicar invariablemente los procedimientos de trabajos seguro aplicables a las actividades a desarrollar:',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                         [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                         [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                         [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                         [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         ]
                 } 
             },{text:'\n\n\n\n'},{
                 table:{
               widths: [270,270],
               heights:[15,80],
                     body:[
                         [{text:'REVISADO:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'},{text:'APROBADO POR:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'}],
                         [{text:'\n\n\nREPRESENTANTE TÉCNICO',alignment:'center'},{text:'\n\n\nMÁXIMA AUTORIDAD',alignment:'center'}]
                         ]
                 }
             }
             ],
           pageSize: 'LETTER',
             pageMargins: [22,120]
       };
       this.pdfMake.generate(dd,'Anexo de seguridad');
    }

    pdf2(){
          var dd = {
            header: function(){
               return {
                     table: {widths: [315, 20, 200],
                     heights: [30,10,10],
                 body: [
                   [{text:'SOFTOIL S.A. de C.V.',fontSize:19,colSpan:3,bold:true,alignment:'center'},{},{}],
                   [{text:'ANEXO DE SEGURIDAD PARA CONTRATISTAS',colSpan:3, alignment: 'center', bold:true},{},{}],
                   [{text:'XII. SEGURIDAD DE CONTRATISTAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
                 ]
               }, margin: [22,20]
               };
             },
             footer: function(){
               
             },
       
         content: [
             {
                 table:{
                     body:[
                         [{text:'OBJETIVO',fillColor:'#ddd'}],
                         [{text:'Establecer las Reglas generales de seguridad industrial, seguridad operativa y protección del medio ambiente, que deben ser observadas por los contratistas, subcontratistas, proveedores y prestadores de servicio, que desarrollen trabajos o presten servicios, en las instalaciones de la con la Estación de Servicio, para prevenir la ocurrencia de incidentes que afecten la integridad de trabajadores, las instalaciones, al medio ambiente o terceros.',fontSize:12,alignment:'justify'}],
                         [{text:'ALCANCE',fillColor:'#ddd'}],
                         [{text:'Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, prestadores de servicio y proveedores, cuyas actividades dentro de la estación de servicio generan riesgos o aspectos ambientales significativos, entre otros:\n\na. Trabajos con escaleras y plataformas en alturas mayores a 1.5 m.\nb. Trabajos en áreas confinadas\nc. Trabajos con herramienta que genera fuente de ignición.\nd. Trabajos en instalaciones eléctricas.\ne. Trabajos en equipos y accesorios que contengan producto.\nf. Suministro de productos inflamables y combustibles',fontSize:12,alignment:'justify'}],
                         [{text:'MEDIDAS PREVENTIVAS GENERALES',fillColor:'#ddd'}],
                         [{text:`${this.datoss2.regla1}`}],
                         [{text:`${this.datoss2.regla2}`}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                         [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                         [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                         [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                         [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                         [{text:'USO DE HERRAMIENTA',fillColor:'#ddd'}],
                         [{text:'La herramienta a utilizar debe estar en buen estado, no se debe utilizar si está completa o defectuosa.',fontSize:11}],
                         [{text:'La Herramienta eléctrica debe aterrizarse durante su uso.',fontSize:11}],
                         [{text:'La herramienta solo debe utilizarse para el fin que está destinada, está prohibido darle otro uso.',fontSize:11}],
                         [{text:'Las caladoras deben contar con su guarda correspondiente',fontSize:11,color:'red'}],
                         [{text:'Está prohibido el uso de herramienta hechiza.',fontSize:11}],
                         [{text:'Las extensiones eléctricas deben ser de uso rudo.',fontSize:11}],
                         [{text:'Están prohibidos los empates en las extensiones eléctricas.',fontSize:11}],
                         [{text:'PROCEDIMIENTOS',fillColor:'#ddd'}],
                         [{text:'Aplicar invariablemente los procedimientos de trabajos seguro aplicables a las actividades a desarrollar:',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                         [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                         [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                         [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                         [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         ]
                 } 
             },{text:'\n\n\n\n'},{
                 table:{
               widths: [270,270],
               heights:[15,80],
                     body:[
                         [{text:'REVISADO:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'},{text:'APROBADO POR:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'}],
                         [{text:'\n\n\nREPRESENTANTE TÉCNICO',alignment:'center'},{text:'\n\n\nMÁXIMA AUTORIDAD',alignment:'center'}]
                         ]
                 }
             }
             ],
           pageSize: 'LETTER',
             pageMargins: [22,120]
       };
       this.pdfMake.generate(dd,'Anexo de seguridad');
    }

    pdf3(){
          var dd = {
            header: function(){
               return {
                     table: {widths: [315, 20, 200],
                     heights: [30,10,10],
                 body: [
                   [{text:'SOFTOIL S.A. de C.V.',fontSize:19,colSpan:3,bold:true,alignment:'center'},{},{}],
                   [{text:'ANEXO DE SEGURIDAD PARA CONTRATISTAS',colSpan:3, alignment: 'center', bold:true},{},{}],
                   [{text:'XII. SEGURIDAD DE CONTRATISTAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
                 ]
               }, margin: [22,20]
               };
             },
             footer: function(){
               
             },
       
         content: [
             {
                 table:{
                     body:[
                         [{text:'OBJETIVO',fillColor:'#ddd'}],
                         [{text:'Establecer las Reglas generales de seguridad industrial, seguridad operativa y protección del medio ambiente, que deben ser observadas por los contratistas, subcontratistas, proveedores y prestadores de servicio, que desarrollen trabajos o presten servicios, en las instalaciones de la con la Estación de Servicio, para prevenir la ocurrencia de incidentes que afecten la integridad de trabajadores, las instalaciones, al medio ambiente o terceros.',fontSize:12,alignment:'justify'}],
                         [{text:'ALCANCE',fillColor:'#ddd'}],
                         [{text:'Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, prestadores de servicio y proveedores, cuyas actividades dentro de la estación de servicio generan riesgos o aspectos ambientales significativos, entre otros:\n\na. Trabajos con escaleras y plataformas en alturas mayores a 1.5 m.\nb. Trabajos en áreas confinadas\nc. Trabajos con herramienta que genera fuente de ignición.\nd. Trabajos en instalaciones eléctricas.\ne. Trabajos en equipos y accesorios que contengan producto.\nf. Suministro de productos inflamables y combustibles',fontSize:12,alignment:'justify'}],
                         [{text:'MEDIDAS PREVENTIVAS GENERALES',fillColor:'#ddd'}],
                         [{text:`${this.datoss3.regla1}`}],
                         [{text:`${this.datoss3.regla2}`}],
                         [{text:`${this.datoss3.regla3}`}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                         [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                         [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                         [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                         [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                         [{text:'USO DE HERRAMIENTA',fillColor:'#ddd'}],
                         [{text:'La herramienta a utilizar debe estar en buen estado, no se debe utilizar si está completa o defectuosa.',fontSize:11}],
                         [{text:'La Herramienta eléctrica debe aterrizarse durante su uso.',fontSize:11}],
                         [{text:'La herramienta solo debe utilizarse para el fin que está destinada, está prohibido darle otro uso.',fontSize:11}],
                         [{text:'Las caladoras deben contar con su guarda correspondiente',fontSize:11,color:'red'}],
                         [{text:'Está prohibido el uso de herramienta hechiza.',fontSize:11}],
                         [{text:'Las extensiones eléctricas deben ser de uso rudo.',fontSize:11}],
                         [{text:'Están prohibidos los empates en las extensiones eléctricas.',fontSize:11}],
                         [{text:'PROCEDIMIENTOS',fillColor:'#ddd'}],
                         [{text:'Aplicar invariablemente los procedimientos de trabajos seguro aplicables a las actividades a desarrollar:',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                         [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                         [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                         [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                         [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         ]
                 } 
             },{text:'\n\n\n\n'},{
                 table:{
               widths: [270,270],
               heights:[15,80],
                     body:[
                         [{text:'REVISADO:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'},{text:'APROBADO POR:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'}],
                         [{text:'\n\n\nREPRESENTANTE TÉCNICO',alignment:'center'},{text:'\n\n\nMÁXIMA AUTORIDAD',alignment:'center'}]
                         ]
                 }
             }
             ],
           pageSize: 'LETTER',
             pageMargins: [22,120]
       };
       this.pdfMake.generate(dd,'Anexo de seguridad');
    }

    pdf4(){
          var dd = {
            header: function(){
               return {
                     table: {widths: [315, 20, 200],
                     heights: [30,10,10],
                 body: [
                   [{text:'SOFTOIL S.A. de C.V.',fontSize:19,colSpan:3,bold:true,alignment:'center'},{},{}],
                   [{text:'ANEXO DE SEGURIDAD PARA CONTRATISTAS',colSpan:3, alignment: 'center', bold:true},{},{}],
                   [{text:'XII. SEGURIDAD DE CONTRATISTAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
                 ]
               }, margin: [22,20]
               };
             },
             footer: function(){
               
             },
       
         content: [
             {
                 table:{
                     body:[
                         [{text:'OBJETIVO',fillColor:'#ddd'}],
                         [{text:'Establecer las Reglas generales de seguridad industrial, seguridad operativa y protección del medio ambiente, que deben ser observadas por los contratistas, subcontratistas, proveedores y prestadores de servicio, que desarrollen trabajos o presten servicios, en las instalaciones de la con la Estación de Servicio, para prevenir la ocurrencia de incidentes que afecten la integridad de trabajadores, las instalaciones, al medio ambiente o terceros.',fontSize:12,alignment:'justify'}],
                         [{text:'ALCANCE',fillColor:'#ddd'}],
                         [{text:'Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, prestadores de servicio y proveedores, cuyas actividades dentro de la estación de servicio generan riesgos o aspectos ambientales significativos, entre otros:\n\na. Trabajos con escaleras y plataformas en alturas mayores a 1.5 m.\nb. Trabajos en áreas confinadas\nc. Trabajos con herramienta que genera fuente de ignición.\nd. Trabajos en instalaciones eléctricas.\ne. Trabajos en equipos y accesorios que contengan producto.\nf. Suministro de productos inflamables y combustibles',fontSize:12,alignment:'justify'}],
                         [{text:'MEDIDAS PREVENTIVAS GENERALES',fillColor:'#ddd'}],
                         [{text:`${this.datoss4.regla1}`}],
                         [{text:`${this.datoss4.regla2}`}],
                         [{text:`${this.datoss4.regla3}`}],
                         [{text:`${this.datoss4.regla4}`}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:``}],
                         [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                         [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                         [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                         [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                         [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                         [{text:'USO DE HERRAMIENTA',fillColor:'#ddd'}],
                         [{text:'La herramienta a utilizar debe estar en buen estado, no se debe utilizar si está completa o defectuosa.',fontSize:11}],
                         [{text:'La Herramienta eléctrica debe aterrizarse durante su uso.',fontSize:11}],
                         [{text:'La herramienta solo debe utilizarse para el fin que está destinada, está prohibido darle otro uso.',fontSize:11}],
                         [{text:'Las caladoras deben contar con su guarda correspondiente',fontSize:11,color:'red'}],
                         [{text:'Está prohibido el uso de herramienta hechiza.',fontSize:11}],
                         [{text:'Las extensiones eléctricas deben ser de uso rudo.',fontSize:11}],
                         [{text:'Están prohibidos los empates en las extensiones eléctricas.',fontSize:11}],
                         [{text:'PROCEDIMIENTOS',fillColor:'#ddd'}],
                         [{text:'Aplicar invariablemente los procedimientos de trabajos seguro aplicables a las actividades a desarrollar:',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                         [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                         [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                         [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                         [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         [{text:'',fontSize:11}],
                         ]
                 } 
             },{text:'\n\n\n\n'},{
                 table:{
               widths: [270,270],
               heights:[15,80],
                     body:[
                         [{text:'REVISADO:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'},{text:'APROBADO POR:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'}],
                         [{text:'\n\n\nREPRESENTANTE TÉCNICO',alignment:'center'},{text:'\n\n\nMÁXIMA AUTORIDAD',alignment:'center'}]
                         ]
                 }
             }
             ],
           pageSize: 'LETTER',
             pageMargins: [22,120]
       };
       this.pdfMake.generate(dd,'Anexo de seguridad');
    }

    pdf5(){
      var dd = {
        header: function(){
           return {
                 table: {widths: [315, 20, 200],
                 heights: [30,10,10],
             body: [
               [{text:'SOFTOIL S.A. de C.V.',fontSize:19,colSpan:3,bold:true,alignment:'center'},{},{}],
               [{text:'ANEXO DE SEGURIDAD PARA CONTRATISTAS',colSpan:3, alignment: 'center', bold:true},{},{}],
               [{text:'XII. SEGURIDAD DE CONTRATISTAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
             ]
           }, margin: [22,20]
           };
         },
         footer: function(){
           
         },
   
     content: [
         {
             table:{
                 body:[
                     [{text:'OBJETIVO',fillColor:'#ddd'}],
                     [{text:'Establecer las Reglas generales de seguridad industrial, seguridad operativa y protección del medio ambiente, que deben ser observadas por los contratistas, subcontratistas, proveedores y prestadores de servicio, que desarrollen trabajos o presten servicios, en las instalaciones de la con la Estación de Servicio, para prevenir la ocurrencia de incidentes que afecten la integridad de trabajadores, las instalaciones, al medio ambiente o terceros.',fontSize:12,alignment:'justify'}],
                     [{text:'ALCANCE',fillColor:'#ddd'}],
                     [{text:'Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, prestadores de servicio y proveedores, cuyas actividades dentro de la estación de servicio generan riesgos o aspectos ambientales significativos, entre otros:\n\na. Trabajos con escaleras y plataformas en alturas mayores a 1.5 m.\nb. Trabajos en áreas confinadas\nc. Trabajos con herramienta que genera fuente de ignición.\nd. Trabajos en instalaciones eléctricas.\ne. Trabajos en equipos y accesorios que contengan producto.\nf. Suministro de productos inflamables y combustibles',fontSize:12,alignment:'justify'}],
                     [{text:'MEDIDAS PREVENTIVAS GENERALES',fillColor:'#ddd'}],
                     [{text:`${this.datoss5.regla1}`}],
                     [{text:`${this.datoss5.regla2}`}],
                     [{text:`${this.datoss5.regla3}`}],
                     [{text:`${this.datoss5.regla4}`}],
                     [{text:`${this.datoss5.regla5}`}],
                     [{text:``}],
                     [{text:``}],
                     [{text:``}],
                     [{text:``}],
                     [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                     [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                     [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                     [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                     [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                     [{text:'USO DE HERRAMIENTA',fillColor:'#ddd'}],
                     [{text:'La herramienta a utilizar debe estar en buen estado, no se debe utilizar si está completa o defectuosa.',fontSize:11}],
                     [{text:'La Herramienta eléctrica debe aterrizarse durante su uso.',fontSize:11}],
                     [{text:'La herramienta solo debe utilizarse para el fin que está destinada, está prohibido darle otro uso.',fontSize:11}],
                     [{text:'Las caladoras deben contar con su guarda correspondiente',fontSize:11,color:'red'}],
                     [{text:'Está prohibido el uso de herramienta hechiza.',fontSize:11}],
                     [{text:'Las extensiones eléctricas deben ser de uso rudo.',fontSize:11}],
                     [{text:'Están prohibidos los empates en las extensiones eléctricas.',fontSize:11}],
                     [{text:'PROCEDIMIENTOS',fillColor:'#ddd'}],
                     [{text:'Aplicar invariablemente los procedimientos de trabajos seguro aplicables a las actividades a desarrollar:',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                     [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                     [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                     [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                     [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     ]
             } 
         },{text:'\n\n\n\n'},{
             table:{
           widths: [270,270],
           heights:[15,80],
                 body:[
                     [{text:'REVISADO:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'},{text:'APROBADO POR:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'}],
                     [{text:'\n\n\nREPRESENTANTE TÉCNICO',alignment:'center'},{text:'\n\n\nMÁXIMA AUTORIDAD',alignment:'center'}]
                     ]
             }
         }
         ],
       pageSize: 'LETTER',
         pageMargins: [22,120]
   };
   this.pdfMake.generate(dd,'Anexo de seguridad');
    }

    pdf6(){
      var dd = {
        header: function(){
           return {
                 table: {widths: [315, 20, 200],
                 heights: [30,10,10],
             body: [
               [{text:'SOFTOIL S.A. de C.V.',fontSize:19,colSpan:3,bold:true,alignment:'center'},{},{}],
               [{text:'ANEXO DE SEGURIDAD PARA CONTRATISTAS',colSpan:3, alignment: 'center', bold:true},{},{}],
               [{text:'XII. SEGURIDAD DE CONTRATISTAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
             ]
           }, margin: [22,20]
           };
         },
         footer: function(){
           
         },
   
     content: [
         {
             table:{
                 body:[
                     [{text:'OBJETIVO',fillColor:'#ddd'}],
                     [{text:'Establecer las Reglas generales de seguridad industrial, seguridad operativa y protección del medio ambiente, que deben ser observadas por los contratistas, subcontratistas, proveedores y prestadores de servicio, que desarrollen trabajos o presten servicios, en las instalaciones de la con la Estación de Servicio, para prevenir la ocurrencia de incidentes que afecten la integridad de trabajadores, las instalaciones, al medio ambiente o terceros.',fontSize:12,alignment:'justify'}],
                     [{text:'ALCANCE',fillColor:'#ddd'}],
                     [{text:'Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, prestadores de servicio y proveedores, cuyas actividades dentro de la estación de servicio generan riesgos o aspectos ambientales significativos, entre otros:\n\na. Trabajos con escaleras y plataformas en alturas mayores a 1.5 m.\nb. Trabajos en áreas confinadas\nc. Trabajos con herramienta que genera fuente de ignición.\nd. Trabajos en instalaciones eléctricas.\ne. Trabajos en equipos y accesorios que contengan producto.\nf. Suministro de productos inflamables y combustibles',fontSize:12,alignment:'justify'}],
                     [{text:'MEDIDAS PREVENTIVAS GENERALES',fillColor:'#ddd'}],
                     [{text:`${this.datoss6.regla1}`}],
                     [{text:`${this.datoss6.regla2}`}],
                     [{text:`${this.datoss6.regla3}`}],
                     [{text:`${this.datoss6.regla4}`}],
                     [{text:`${this.datoss6.regla5}`}],
                     [{text:`${this.datoss6.regla6}`}],
                     [{text:``}],
                     [{text:``}],
                     [{text:``}],
                     [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                     [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                     [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                     [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                     [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                     [{text:'USO DE HERRAMIENTA',fillColor:'#ddd'}],
                     [{text:'La herramienta a utilizar debe estar en buen estado, no se debe utilizar si está completa o defectuosa.',fontSize:11}],
                     [{text:'La Herramienta eléctrica debe aterrizarse durante su uso.',fontSize:11}],
                     [{text:'La herramienta solo debe utilizarse para el fin que está destinada, está prohibido darle otro uso.',fontSize:11}],
                     [{text:'Las caladoras deben contar con su guarda correspondiente',fontSize:11,color:'red'}],
                     [{text:'Está prohibido el uso de herramienta hechiza.',fontSize:11}],
                     [{text:'Las extensiones eléctricas deben ser de uso rudo.',fontSize:11}],
                     [{text:'Están prohibidos los empates en las extensiones eléctricas.',fontSize:11}],
                     [{text:'PROCEDIMIENTOS',fillColor:'#ddd'}],
                     [{text:'Aplicar invariablemente los procedimientos de trabajos seguro aplicables a las actividades a desarrollar:',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                     [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                     [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                     [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                     [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     ]
             } 
         },{text:'\n\n\n\n'},{
             table:{
           widths: [270,270],
           heights:[15,80],
                 body:[
                     [{text:'REVISADO:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'},{text:'APROBADO POR:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'}],
                     [{text:'\n\n\nREPRESENTANTE TÉCNICO',alignment:'center'},{text:'\n\n\nMÁXIMA AUTORIDAD',alignment:'center'}]
                     ]
             }
         }
         ],
       pageSize: 'LETTER',
         pageMargins: [22,120]
   };
   this.pdfMake.generate(dd,'Anexo de seguridad');
    }

    pdf7(){
      var dd = {
        header: function(){
           return {
                 table: {widths: [315, 20, 200],
                 heights: [30,10,10],
             body: [
               [{text:'SOFTOIL S.A. de C.V.',fontSize:19,colSpan:3,bold:true,alignment:'center'},{},{}],
               [{text:'ANEXO DE SEGURIDAD PARA CONTRATISTAS',colSpan:3, alignment: 'center', bold:true},{},{}],
               [{text:'XII. SEGURIDAD DE CONTRATISTAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
             ]
           }, margin: [22,20]
           };
         },
         footer: function(){
           
         },
   
     content: [
         {
             table:{
                 body:[
                     [{text:'OBJETIVO',fillColor:'#ddd'}],
                     [{text:'Establecer las Reglas generales de seguridad industrial, seguridad operativa y protección del medio ambiente, que deben ser observadas por los contratistas, subcontratistas, proveedores y prestadores de servicio, que desarrollen trabajos o presten servicios, en las instalaciones de la con la Estación de Servicio, para prevenir la ocurrencia de incidentes que afecten la integridad de trabajadores, las instalaciones, al medio ambiente o terceros.',fontSize:12,alignment:'justify'}],
                     [{text:'ALCANCE',fillColor:'#ddd'}],
                     [{text:'Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, prestadores de servicio y proveedores, cuyas actividades dentro de la estación de servicio generan riesgos o aspectos ambientales significativos, entre otros:\n\na. Trabajos con escaleras y plataformas en alturas mayores a 1.5 m.\nb. Trabajos en áreas confinadas\nc. Trabajos con herramienta que genera fuente de ignición.\nd. Trabajos en instalaciones eléctricas.\ne. Trabajos en equipos y accesorios que contengan producto.\nf. Suministro de productos inflamables y combustibles',fontSize:12,alignment:'justify'}],
                     [{text:'MEDIDAS PREVENTIVAS GENERALES',fillColor:'#ddd'}],
                     [{text:`${this.datoss7.regla1}`}],
                     [{text:`${this.datoss7.regla2}`}],
                     [{text:`${this.datoss7.regla3}`}],
                     [{text:`${this.datoss7.regla4}`}],
                     [{text:`${this.datoss7.regla5}`}],
                     [{text:`${this.datoss7.regla6}`}],
                     [{text:`${this.datoss7.regla7}`}],
                     [{text:``}],
                     [{text:``}],
                     [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                     [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                     [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                     [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                     [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                     [{text:'USO DE HERRAMIENTA',fillColor:'#ddd'}],
                     [{text:'La herramienta a utilizar debe estar en buen estado, no se debe utilizar si está completa o defectuosa.',fontSize:11}],
                     [{text:'La Herramienta eléctrica debe aterrizarse durante su uso.',fontSize:11}],
                     [{text:'La herramienta solo debe utilizarse para el fin que está destinada, está prohibido darle otro uso.',fontSize:11}],
                     [{text:'Las caladoras deben contar con su guarda correspondiente',fontSize:11,color:'red'}],
                     [{text:'Está prohibido el uso de herramienta hechiza.',fontSize:11}],
                     [{text:'Las extensiones eléctricas deben ser de uso rudo.',fontSize:11}],
                     [{text:'Están prohibidos los empates en las extensiones eléctricas.',fontSize:11}],
                     [{text:'PROCEDIMIENTOS',fillColor:'#ddd'}],
                     [{text:'Aplicar invariablemente los procedimientos de trabajos seguro aplicables a las actividades a desarrollar:',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                     [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                     [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                     [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                     [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     ]
             } 
         },{text:'\n\n\n\n'},{
             table:{
           widths: [270,270],
           heights:[15,80],
                 body:[
                     [{text:'REVISADO:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'},{text:'APROBADO POR:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'}],
                     [{text:'\n\n\nREPRESENTANTE TÉCNICO',alignment:'center'},{text:'\n\n\nMÁXIMA AUTORIDAD',alignment:'center'}]
                     ]
             }
         }
         ],
       pageSize: 'LETTER',
         pageMargins: [22,120]
   };
   this.pdfMake.generate(dd,'Anexo de seguridad');
    }

    pdf8(){
      var dd = {
        header: function(){
           return {
                 table: {widths: [315, 20, 200],
                 heights: [30,10,10],
             body: [
               [{text:'SOFTOIL S.A. de C.V.',fontSize:19,colSpan:3,bold:true,alignment:'center'},{},{}],
               [{text:'ANEXO DE SEGURIDAD PARA CONTRATISTAS',colSpan:3, alignment: 'center', bold:true},{},{}],
               [{text:'XII. SEGURIDAD DE CONTRATISTAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
             ]
           }, margin: [22,20]
           };
         },
         footer: function(){
           
         },
   
     content: [
         {
             table:{
                 body:[
                     [{text:'OBJETIVO',fillColor:'#ddd'}],
                     [{text:'Establecer las Reglas generales de seguridad industrial, seguridad operativa y protección del medio ambiente, que deben ser observadas por los contratistas, subcontratistas, proveedores y prestadores de servicio, que desarrollen trabajos o presten servicios, en las instalaciones de la con la Estación de Servicio, para prevenir la ocurrencia de incidentes que afecten la integridad de trabajadores, las instalaciones, al medio ambiente o terceros.',fontSize:12,alignment:'justify'}],
                     [{text:'ALCANCE',fillColor:'#ddd'}],
                     [{text:'Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, prestadores de servicio y proveedores, cuyas actividades dentro de la estación de servicio generan riesgos o aspectos ambientales significativos, entre otros:\n\na. Trabajos con escaleras y plataformas en alturas mayores a 1.5 m.\nb. Trabajos en áreas confinadas\nc. Trabajos con herramienta que genera fuente de ignición.\nd. Trabajos en instalaciones eléctricas.\ne. Trabajos en equipos y accesorios que contengan producto.\nf. Suministro de productos inflamables y combustibles',fontSize:12,alignment:'justify'}],
                     [{text:'MEDIDAS PREVENTIVAS GENERALES',fillColor:'#ddd'}],
                     [{text:`${this.datoss8.regla1}`}],
                     [{text:`${this.datoss8.regla2}`}],
                     [{text:`${this.datoss8.regla3}`}],
                     [{text:`${this.datoss8.regla4}`}],
                     [{text:`${this.datoss8.regla5}`}],
                     [{text:`${this.datoss8.regla6}`}],
                     [{text:`${this.datoss8.regla7}`}],
                     [{text:`${this.datoss8.regla8}`}],
                     [{text:``}],
                     [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                     [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                     [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                     [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                     [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                     [{text:'USO DE HERRAMIENTA',fillColor:'#ddd'}],
                     [{text:'La herramienta a utilizar debe estar en buen estado, no se debe utilizar si está completa o defectuosa.',fontSize:11}],
                     [{text:'La Herramienta eléctrica debe aterrizarse durante su uso.',fontSize:11}],
                     [{text:'La herramienta solo debe utilizarse para el fin que está destinada, está prohibido darle otro uso.',fontSize:11}],
                     [{text:'Las caladoras deben contar con su guarda correspondiente',fontSize:11,color:'red'}],
                     [{text:'Está prohibido el uso de herramienta hechiza.',fontSize:11}],
                     [{text:'Las extensiones eléctricas deben ser de uso rudo.',fontSize:11}],
                     [{text:'Están prohibidos los empates en las extensiones eléctricas.',fontSize:11}],
                     [{text:'PROCEDIMIENTOS',fillColor:'#ddd'}],
                     [{text:'Aplicar invariablemente los procedimientos de trabajos seguro aplicables a las actividades a desarrollar:',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                     [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                     [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                     [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                     [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     ]
             } 
         },{text:'\n\n\n\n'},{
             table:{
           widths: [270,270],
           heights:[15,80],
                 body:[
                     [{text:'REVISADO:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'},{text:'APROBADO POR:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'}],
                     [{text:'\n\n\nREPRESENTANTE TÉCNICO',alignment:'center'},{text:'\n\n\nMÁXIMA AUTORIDAD',alignment:'center'}]
                     ]
             }
         }
         ],
       pageSize: 'LETTER',
         pageMargins: [22,120]
   };
   this.pdfMake.generate(dd,'Anexo de seguridad');

    }

    pdf9(){
      var dd = {
        header: function(){
           return {
                 table: {widths: [315, 20, 200],
                 heights: [30,10,10],
             body: [
               [{text:'SOFTOIL S.A. de C.V.',fontSize:19,colSpan:3,bold:true,alignment:'center'},{},{}],
               [{text:'ANEXO DE SEGURIDAD PARA CONTRATISTAS',colSpan:3, alignment: 'center', bold:true},{},{}],
               [{text:'XII. SEGURIDAD DE CONTRATISTAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
             ]
           }, margin: [22,20]
           };
         },
         footer: function(){
           
         },
   
     content: [
         {
             table:{
                 body:[
                     [{text:'OBJETIVO',fillColor:'#ddd'}],
                     [{text:'Establecer las Reglas generales de seguridad industrial, seguridad operativa y protección del medio ambiente, que deben ser observadas por los contratistas, subcontratistas, proveedores y prestadores de servicio, que desarrollen trabajos o presten servicios, en las instalaciones de la con la Estación de Servicio, para prevenir la ocurrencia de incidentes que afecten la integridad de trabajadores, las instalaciones, al medio ambiente o terceros.',fontSize:12,alignment:'justify'}],
                     [{text:'ALCANCE',fillColor:'#ddd'}],
                     [{text:'Las Reglas generales de seguridad son aplicables para todos los contratistas, subcontratistas, prestadores de servicio y proveedores, cuyas actividades dentro de la estación de servicio generan riesgos o aspectos ambientales significativos, entre otros:\n\na. Trabajos con escaleras y plataformas en alturas mayores a 1.5 m.\nb. Trabajos en áreas confinadas\nc. Trabajos con herramienta que genera fuente de ignición.\nd. Trabajos en instalaciones eléctricas.\ne. Trabajos en equipos y accesorios que contengan producto.\nf. Suministro de productos inflamables y combustibles',fontSize:12,alignment:'justify'}],
                     [{text:'MEDIDAS PREVENTIVAS GENERALES',fillColor:'#ddd'}],
                     [{text:`${this.datoss9.regla1}`}],
                     [{text:`${this.datoss9.regla2}`}],
                     [{text:`${this.datoss9.regla3}`}],
                     [{text:`${this.datoss9.regla4}`}],
                     [{text:`${this.datoss9.regla5}`}],
                     [{text:`${this.datoss9.regla6}`}],
                     [{text:`${this.datoss9.regla7}`}],
                     [{text:`${this.datoss9.regla8}`}],
                     [{text:`${this.datoss9.regla9}`}],
                     [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                     [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                     [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                     [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                     [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                     [{text:'USO DE HERRAMIENTA',fillColor:'#ddd'}],
                     [{text:'La herramienta a utilizar debe estar en buen estado, no se debe utilizar si está completa o defectuosa.',fontSize:11}],
                     [{text:'La Herramienta eléctrica debe aterrizarse durante su uso.',fontSize:11}],
                     [{text:'La herramienta solo debe utilizarse para el fin que está destinada, está prohibido darle otro uso.',fontSize:11}],
                     [{text:'Las caladoras deben contar con su guarda correspondiente',fontSize:11,color:'red'}],
                     [{text:'Está prohibido el uso de herramienta hechiza.',fontSize:11}],
                     [{text:'Las extensiones eléctricas deben ser de uso rudo.',fontSize:11}],
                     [{text:'Están prohibidos los empates en las extensiones eléctricas.',fontSize:11}],
                     [{text:'PROCEDIMIENTOS',fillColor:'#ddd'}],
                     [{text:'Aplicar invariablemente los procedimientos de trabajos seguro aplicables a las actividades a desarrollar:',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'EQUIPO DE PROTECCIÓN PERSONAL',fillColor:'#ddd'}],
                     [{text:'El equipo de protección básico es: casco, ropa de algodón, guantes, lentes de seguridad, calzado de seguridad.',fontSize:11}],
                     [{text:'Se debe utilizar el equipo de protección personal específico debe ser el adecuado para el tipo de trabajo a desrrollar.',fontSize:11}],
                     [{text:'El equipo de protección personal debe estar en buen estado y de la talla adecuada.',fontSize:11}],
                     [{text:'Los cables de vida y arnés deben contar con registros de revisión.',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     [{text:'',fontSize:11}],
                     ]
             } 
         },{text:'\n\n\n\n'},{
             table:{
           widths: [270,270],
           heights:[15,80],
                 body:[
                     [{text:'REVISADO:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'},{text:'APROBADO POR:',bold:true,alignment:'center',fontSize:15,fillColor:'#ddd'}],
                     [{text:'\n\n\nREPRESENTANTE TÉCNICO',alignment:'center'},{text:'\n\n\nMÁXIMA AUTORIDAD',alignment:'center'}]
                     ]
             }
         }
         ],
       pageSize: 'LETTER',
         pageMargins: [22,120]
   };
   this.pdfMake.generate(dd,'Anexo de seguridad');
    }
}
