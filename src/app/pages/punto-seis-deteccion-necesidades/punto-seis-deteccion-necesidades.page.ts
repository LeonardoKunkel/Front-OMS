import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';


@Component({
  selector: 'app-punto-seis-deteccion-necesidades',
  templateUrl: './punto-seis-deteccion-necesidades.page.html',
  styleUrls: ['./punto-seis-deteccion-necesidades.page.scss'],
})
export class PuntoSeisDeteccionNecesidadesPage implements OnInit {
datos:any={
  nuevoIngreso:false,
  promocion:false,
  ascenso:false,
  reentrenamiento:false,
  actualizacionTrianual:false,
  cambioTecnologia:false,
  cambioPersonal:false,
  actualizacionProcedimientos:false,
  cambioNormativa:false,
  refuerzoPolitica:false,
  quejaClientes:false,
  noComformidad:false,
  bajoDesempeño:false,
  recomendacionIcr:false,
  noCumplen:false,
  situacionActual:'',
  situacionDeseada:'',
  temasCapacitacion:'',
  objetivosNecesidad:''

}
  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  
datos2:any={
  nuevoIngreso2:'',
  promocion2:'',
  ascenso2:'',
  reentrenamiento2:'',
  actualizacionTrianual2:'',
  cambioTecnologia2:'',
  cambioPersonal2:'',
  actualizacionProcedimientos2:'',
  cambioNormativa2:'',
  refuerzoPolitica2:'',
  quejaClientes2:'',
  noComformidad2:'',
  bajoDesempeño2:'',
  recomendacionIcr2:'',
  noCumplen2:'',
  situacionActual2:'',
  situacionDeseada2:'',
  temasCapacitacion2:'',
  objetivosNecesida2d:''

}

  enviarForm(formulario){
    console.log(this.datos);

    if(this.datos.nuevoIngreso === false){
     this.datos2.nuevoIngreso2=''
    }else{
      this.datos2.nuevoIngreso2='x'
    }

    if(this.datos.promocion === false){
      this.datos2.promocion2=''
    }else{
      this.datos2.promocion2='X'
    }

    if(this.datos.ascenso === false){
      let ascenso2= ''
    }else{
      let ascenso2 ='X'
    }

    if(this.datos.reentrenamoento === false){
      let reentrenamoento2= ''
    }else{
      let reentrenamoento2 ='X'
    }

    if(this.datos.actualizacionTrianual === false){
      let actualizacionTrianual2= ''
    }else{
      let actualizacionTrianual2 ='X'
    }

    if(this.datos.cambioTecnologia === false){
      let cambioTecnologia2= ''
    }else{
      let cambioTecnologia2 ='X'
    }

    if(this.datos.cambioPersonal === false){
      let cambioPersonal2= ''
    }else{
      let cambioPersonal2 ='X'
    }

    if(this.datos.actualizacionProcedimientos=== false){
      let actualizacionProcedimientos2= ''
    }else{
      let actualizacionProcedimientos2 ='X'
    }

    if(this.datos.cambioNormativa=== false){
      let cambioNormativa2= ''
    }else{
      let cambioNormativa2 ='X'
    }

    if(this.datos.refuerzoPolitica === false){
      let refuerzoPolitica2= ''
    }else{
      let refuerzoPolitica2 ='X'
    }

    if(this.datos.quejaClientes === false){
      let quejaClientes2= ''
    }else{
      let quejaClientes2 ='X'
    }

    if(this.datos.noComformidad === false){
      let noComformidad2= ''
    }else{
      let noComformidad2 ='X'
    }

    if(this.datos.bajoDesempeño === false){
      let bajoDesempeño2= ''
    }else{
      let bajoDesempeño2 ='X'
    }

    if(this.datos.recomendacionIcr === false){
      let recomendacionIcr2= ''
    }else{
      let recomendacionIcr2 ='X'
    }

    if(this.datos.noCumplen === false){
      let noCumplen2= ''
    }else{
      let noCumplen2 ='X'
    }
    
    console.log(this.datos2.promocion2);
    
    
  }

  pdf(){
    // playground requires you to assign document definition to a variable called dd

var dd = {
  header: function(){
    return {
        table: { widths: [565],heights:[50,15,15],
body: [

  [{text:''}],
  [{text:'VI. COMPETENCIA, CAPACITACIÓN Y ENTRENAMIENTO',alignment:'center',bold:true}],
  [{text:'DETECCIÓN DE NECESIDADES DE CAPACITACIÓN',alignment:'center',bold:true}],
]

}, margin: [22,15]
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
              widths: [565],
              body:[
                  [{text:'1. DETECCIÓN DE NECESIDADES DE CAPACITACIÓN',bold:true,alignment:'center',fontSize:10,fillColor:'#ddd'}]
                  ]
          }
      },{
      text:'\n'
      },{
          
          table:{
               widths: [157,15,157,15,157,15],
              body:[
                  [{text:'DESARROLLO LABORAL',fillColor:'#ddd',RowSpan:2,fontSize:10},{text:'',RowSpan:2},{text:'DESARROLLO ORGANIZACIONAL',fillColor:'#ddd',RowSpan:2,fontSize:10},{text:'',RowSpan:2},{text:'SOLUCIÓN DE PROBLEMA',fillColor:'#ddd',RowSpan:2,fontSize:10},{text:''}],
                  [{text:'Nuevo Ingreso',fontSize:10},{text:`${this.datos.R1}`},{text:'Cambio de Tecnología/proceso',fontSize:10},{text:`${this.datos.R5}`},{text:'Queja de clientes',fontSize:10},{text:''}],
                  [{text:'Promoción',fontSize:10},{text:`${this.datos.R2}`},{text:'Cambio de personal',fontSize:10},{text:''},{text:'No conformidad de Auditoría',fontSize:10},{text:''}],
                  [{text:'Ascenso',fontSize:10},{},{text:'Actualización de procedimientos',fontSize:10},{text:''},{text:'Bajo desempeño',fontSize:10},{text:''}],
                  [{text:'Reentrenamiento',fontSize:10},{text:`${this.datos.R3}`},{text:'Cambio de Normatividad',fontSize:10},{text:''},{text:'Recomendación de ICR',fontSize:10},{text:''}],
                  [{text:'Actualización trianual',fontSize:10},{text:`${this.datos.R4}`},{text:'Refuerzo de la política',fontSize:10},{text:''},{text:'No se cumplen los objetivos',fontSize:10},{text:''}],
                  ]
          }
      },{
          text:'\n'
      },{
          table:{
              widths: [565],
              heights:[10,15,15,15],
              body:[
                  [{text:'SITUACIÓN ACTUAL',fontSize:10,fillColor:'#ddd'}],
                  [{}],
                  [{}],
                  [{}]
                  ]
          }
      },{text:''},{
          table:{
              widths: [565],
              heights:[10,15,15,15],
              body:[
                  [{text:'SITUACIÓN DESEADA',fontSize:10,fillColor:'#ddd'}],
                  [{}],
                  [{}],
                  [{}]
                  ]
          }
      },{text:'\n'},{
          table:{
               widths: [10,545],
              // heights:[10,15,15,15],
              body:[
               [{text:'OBJETIVOS DE LA NECESIDAD',fontSize:10,fillColor:'#ddd',colSpan:2},{}],
                  [{text:'1'},{}],
                  [{text:'2'},{}],
                  [{text:'3'},{}],
                  [{text:'4'},{}]
                  ]
          }
      
      },{text:''},{
          table:{
               widths: [10,545],
              // heights:[10,15,15,15],
              body:[
               [{text:'TEMAS PARA CAPACITACIÓN',fontSize:10,fillColor:'#ddd',colSpan:2},{}],
                  [{text:'1',fontSize:10},{}],
                  [{text:'2',fontSize:10},{}],
                  [{text:'3',fontSize:10},{}],
                  [{text:'4',fontSize:10},{}]
                  ]
          }
      
      },{text:'\n'},{
          
          table:{
              widths: [350,205],heights:[90],
              body:[
                  [{text:'Cinthya Karime Bedoy DÍaz \nENCARGADO DE LA ESTACIÓN DE SERVICIO',fontSize:10,alignment:'center'},{text:'FECHA\n10/10/2018',fontSize:10,alignment:'center'}]
                  ]
          }
      }
           
      
      
       ]
 ,
  pageSize: 'LETTER',
  pageMargins: [22,120]
};

this.pdfMaker.generate(dd,'Punto 7');
  }

}
