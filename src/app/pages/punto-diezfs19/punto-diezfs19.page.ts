import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-diezfs19',
  templateUrl: './punto-diezfs19.page.html',
  styleUrls: ['./punto-diezfs19.page.scss'],
})
export class PuntoDiezfs19Page implements OnInit {

  datos:any = {
    texto1:'',
    texto2:'',
    texto3:'',
    texto4:'',
    texto5:'',
    texto6:'',
    texto7:'',
    fecha1:'',
    fecha2:'',
    fecha3:'',
    fecha4:'',
    fecha5:'',
    fecha6:'',
    fecha7:'',
    fecha8:'',
    fecha9:'',
    check1:'',
    check2:'',
    check3:'',
    check4:'',
    check5:'',
    check6:'',
    check7:'',
    check8:'',
    check9:'',
    check10:'',
    check11:'',
    check12:'',
    check13:'',
    check14:'',
    check15:'',
    check16:'',
    check17:'',
    check18:'',
    check19:'',
    check20:'',
    check21:'',
    check22:'',
    check23:'',
    check24:'',
    check25:'',
    check26:'',
    check27:'',
    check28:'',
    check29:'',
    check30:'',
    check31:'',
    check32:'',
    check33:'',
    check34:'',
  }

  constructor(private pdfMaker:PdfMakerService ) { }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

  pdf() {
    var dd = {
      header: function(){
        return {
            table: { widths: [560],heights:[50,15,15],
            
  body: [
  
      [{}],
      [{text:'X. CONTROL DE ACTIVIDADES Y PROCESOS',alignment:'center',bold:true}],
      [{text:'ADMINISTRACIÓN DE CAMBIOS DE TECNOLOGÍA',alignment:'center',bold:true,fillColor:'#23BAC4'}],
  ]
  
  }, margin: [22,15]
        };
      },
      footer: function(){
      
        return {
                  
                  table:{
     headerRows:1, 
     widths: [750],
               body : [
               [''],
               [''],
               ['']
                   ]
          }, layout : 'headerLineOnly',
            margin: [30,85]
        };
      },
      
      content:[
          {
              table:{
                  widths: [65,200,65,200],
                  body:[
                      [{text:'ÁREA',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto1}`,alignment:'center'},{text:'FECHA',bold:true,fillColor:'#ddd'},{text:`${this.datos.fecha1}`,alignment:'center'},],
                      [{text:'PROCESO',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto2}`,alignment:'center'},{text:'NO.',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto3}`,alignment:'center'},],
                      ]
              }
          },{text:'\n'},{
              table:{
                  widths:[150,120,90,30,90,30],
                  body:[
                      [{text:'DESCRIPCIÓN DEL CAMBIO PROPUESTO',colSpan:6,bold:true,alignment:'center',fillColor:'#ddd'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:`${this.datos.texto4}`,alignment:'center',fontSize:9,colSpan:6},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'ANÁLISIS DE LA PROPUESTA',colSpan:6,bold:true,alignment:'center',fillColor:'#ddd'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:`${this.datos.texto5}`,alignment:'center',fontSize:9,colSpan:6},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'RESULTADO DE LA EVALUACIÓN',fontSize:9,fillColor:'#ddd'},{text:'',fontSize:9},{text:'ACEPTADA',fontSize:9,fillColor:'#ddd'},{text:`${this.datos.check1}`,alignment:'center',fontSize:9},{text:'RECHAZADA',fontSize:9,fillColor:'#ddd'},{text:`${this.datos.check2}`,alignment:'center',fontSize:9},],
                      [{text:'MOTIVO DE LA ACEPTACIÓN O RECHAZO',colSpan:6,bold:true,alignment:'center',fillColor:'#ddd'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:`${this.datos.texto6}`,alignment:'center',fontSize:9,rowSpan:6,colSpan:6},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'DESCRIPCIÓN DEL CAMBIO',colSpan:6,bold:true,alignment:'center',fillColor:'#ddd'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:`${this.datos.texto7}`,alignment:'center',fontSize:9,rowSpan:6,colSpan:6},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      ]
              }
          },{
              table:{
                  widths:[20,150,40,150,70,35,35],
                  body:[
                      [{text:'NO.',bol:true,fillColor:'#ddd',fontSize:10},{text:'ACTIVIDAD',bol:true,fillColor:'#ddd',fontSize:10},{text:'SI/NO',bol:true,fillColor:'#ddd',fontSize:10},{text:'RESPONSABLE DE LA ATENCIÓN',bol:true,fillColor:'#ddd',fontSize:10},{text:'FECHA DE CUMPLIMIENTO',bol:true,fillColor:'#ddd',fontSize:8},{text:'ATENDIDO',bol:true,fillColor:'#ddd',colSpan:2,fontSize:10},{text:'',bol:true,fillColor:'#ddd'},],
                      [{text:'1',fontSize:9},{text:'ESPECIFICACIONES DEL PROYECTO',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.texto8}`,alignment:'center',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.check5}`,alignment:'center',fontSize:9},{text:`${this.datos.check6}`,alignment:'center',fontSize:9},],
                      [{text:'2',fontSize:9},{text:'ACTUALIZACIÓN DE ANÁLISIS DE RIESGO',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.texto9}`,alignment:'center',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.check9}`,alignment:'center',fontSize:9},{text:`${this.datos.check10}`,alignment:'center',fontSize:9},],
                      [{text:'3',fontSize:9},{text:'ACTUALIZACIÓN DE ESTRUCTURA',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.texto10}`,alignment:'center',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.check13}`,alignment:'center',fontSize:9},{text:`${this.datos.check14}`,alignment:'center',fontSize:9},],
                      [{text:'4',fontSize:9},{text:'ACTUALIZACIÓN DE LA TECNOLOGÍA DEL PROCESO',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.texto11}`,alignment:'center',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.check17}`,alignment:'center',fontSize:9},{text:`${this.datos.check18}`,alignment:'center',fontSize:9},],
                      [{text:'5',fontSize:9},{text:'ACTUALIZACIÓN DE PERMISOS O LICENCIAS',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.texto12}`,alignment:'center',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.check21}`,alignment:'center',fontSize:9},{text:`${this.datos.check22}`,alignment:'center',fontSize:9},],
                      [{text:'6',fontSize:9},{text:'ACTUALIZACIÓN DE NORMATIVIDAD',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.texto13}`,alignment:'center',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.check25}`,alignment:'center',fontSize:9},{text:`${this.datos.check26}`,alignment:'center',fontSize:9},],
                      [{text:'7',fontSize:9},{text:'CAPACITACIÓN Y ENTRENAMIENTO',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.texto14}`,alignment:'center',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.check29}`,alignment:'center',fontSize:9},{text:`${this.datos.check30}`,alignment:'center',fontSize:9},],
                      [{text:'8',fontSize:9},{text:'COMUNICACIÓN DEL CAMBIO',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.texto15}`,alignment:'center',fontSize:9},{text:'',fontSize:9},{text:`${this.datos.check33}`,alignment:'center',fontSize:9},{text:`${this.datos.check34}`,alignment:'center',fontSize:9},],
                      [{text:'NOTAS',fontSize:9,colSpan:7,bold:true,alignment:'center',fillColor:'#ddd'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:`${this.datos.texto16}`,alignment:'center',fontSize:9,rowSpan:6,colSpan:7},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'AUTORIZACIÓN',fontSize:9,colSpan:7,bold:true,alignment:'center',fillColor:'#ddd'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'PROPONE\n\n\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO',fontSize:9,colSpan:2},{text:'',fontSize:9},{text:'APRUEBA\n\n\nFernando Bedoy Ruiz\nMÁXIMA AUTORIDAD',fontSize:9,colSpan:2},{text:'',fontSize:9},{text:'Fecha',fontSize:9,colSpan:3},{text:'',fontSize:9},{text:'',fontSize:9},],
                     ]
              }
          }
          ],
      pageSize: 'LETTER',
      pageMargins: [22,120]
  };
  }

}
