import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-ocho-solicitud-cambios',
  templateUrl: './punto-ocho-solicitud-cambios.page.html',
  styleUrls: ['./punto-ocho-solicitud-cambios.page.scss'],
})
export class PuntoOchoSolicitudCambiosPage implements OnInit {

  datos:any={
    codificacion:'',
    nombreDocumento:'',
    elementoSistema:'',
    nombreSolicitante:'',
    fechaSolicitud:'',
    puesto:'',
    c1C1:false,
    c1C2:false,
    c1C3:false,
    c1C4:false,
    c2C1:false,
    c2C2:false,
    c2C3:false,
    c2C4:false,
    c2C5:false,
    estadoActual:'',
    cambioPropuesto:'',
    c3C1:false,
    c3C2:false,
    motivoAceptacion:''
  }
  constructor( private pdfMaker: PdfMakerService,) { }

  ngOnInit() {
  }

  enviarForm(formulario){
    console.log(this.datos);


   
}

pdf(){
  let Avd=''
  if(this.datos.c1 ===true){
     Avd='X'
  }else{
     Avd=''
  }
  var dd = {
    //   background: function(currentPage, pageSize) {
    //   return {image: 'sampleImage.jpg', width: 400,height: 500, absolutePosition: {x: 60, y: 100},opacity: 0.5}
    // },
      header: function(){
        return {
            table: { widths: [560],heights:[30,0,0],
  body: [
  
      [{text:''}],
      [{text:'VIII. CONTROL DE DOCUMENTOS Y REGISTROS',alignment:'center',bold:true}],
      [{text:'SOLICITUD DE CAMBIOS',alignment:'center',bold:true,fillColor:'#ddd'}],
  ]
  
  }, margin: [22,15]
        };
      },
      footer: function(){
        return {
            table:{
     headerRows:1, 
     widths: [560],
               body : [
               [''],
               [''],
               ['']
                   ]
          }, layout : 'headerLineOnly',
            margin: [30,100]
        };
      },
      
      content:[
              {
                  table:{
                          widths: [90,180,120,150],
                      body:[
                          [{text:'CODIFICACIÓN',alignment:'center',bold:true,fillColor:'#ddd',fontSize:8},{text:`${this.datos.codificacion}`},{text:'FECHA DE SOLICITUD',fontSize:8,alignment:'center',bold:true,fillColor:'#ddd'},{text:`${this.datos.fechaSolicitud}`},],
                          [{text:'NOMBRE DEL DOCUMENTO',alignment:'center',bold:true,fillColor:'#ddd',fontSize:8},{text:`${this.datos.nombreDocumento}`},{text:''},{text:''},],
                          [{text:'ELEMENTO DEL SISTEMA',alignment:'center',bold:true,fillColor:'#ddd',fontSize:8},{text:`${this.datos.elementoSistema}`},{text:''},{text:''},],
                          [{text:'NOMBRE DEL SOLICITANTE',alignment:'center',bold:true,fillColor:'#ddd',fontSize:8},{text:`${this.datos.nombreSolicitante}`},{text:'PUESTO',fontSize:8,bold:true,fillColor:'#ddd'},{text:`${this.datos.puesto}`},],
                          ]
                  }
              },{text:'\n'},{
                  table:{
                      widths: [560],
                      body:[
                          [{text:'TIPO DE DOCUMENTO',alignment:'center',bold:true,fillColor:'#ddd'}],
                          [{ 
                               columns: [
                              [{text:'PROCEDIMIENTO DE SISTEMA'},{
                                  table:{ widths: [10],heights:[10],
                                      body:[
                                          [{text:`${Avd}`}]
                                          ]
                                  },
                              },{text:'FORMATO DE SISTEMA'},{
                                  table:{widths: [10],heights:[10],
                                      body:[
                                          [{}]
                                          ]
                                  }
                              },],[
                                  {text:'PPROCEDIMIENTO ESPECIFICO'},{
                                  table:{widths: [10],heights:[10],
                                      body:[
                                          [{}]
                                          ]
                                  }
                              },{text:'FORMATO OPERATIVO'},{
                                  table:{widths: [10],heights:[10],
                                      body:[
                                          [{}]
                                          ]
                                  }
                              },
                                  ]		
                          ],
                          }],
                          [{text:'ORIGEN DEL CAMBIO',alignment:'center',bold:true,fillColor:'#ddd'}],
                         [{ 
                               columns: [
                              [{text:'SUGERENCIA'},{
                                  table:{widths: [10],heights:[10],
                                      body:[
                                          [{}]
                                          ]
                                  },
                              },{text:'RECOMENDACIÓN ICR'},{
                                  table:{widths: [10],heights:[10],
                                      body:[
                                          [{}]
                                          ]
                                  }
                              },{text:'CAMBIO DE TECNOLOGÍA'},{
                                  table:{widths: [10],heights:[10],
                                      body:[
                                          [{}]
                                          ]
                                  }
                              }],[
                                  {text:'HALLAZGO DE AUDITORIA'},{
                                  table:{widths: [10],heights:[10],
                                      body:[
                                          [{}]
                                          ]
                                  }
                              },{text:'ACCIÓN DE MEJORA'},{
                                  table:{widths: [10],heights:[10],
                                      body:[
                                          [{}]
                                          ]
                                  }
                              },{text:'CAMBIO EN EL PROCESO'},{
                                  table:{widths: [10],heights:[10],
                                      body:[
                                          [{}]
                                          ]
                                  }
                              }
                                  ]		
                          ],
                          }],
                          ]
                  }
              },{text:'\n'},{
                  table:{
                          widths: [120,110,100,100,100,100,100],heights:[10,20,10,20,10,10,10,50,70],
                      body:[
                          [{text:'ESTADO ACTUAL',colSpan:5,alignment:'center',bold:true,fillColor:'#ddd'},{text:''},{text:''},{text:''},{text:''},],
                          [{text:`${this.datos.estadoActual}`,colSpan:5},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'CAMBIO PROPUESTO',colSpan:5,alignment:'center',bold:true,fillColor:'#ddd'},{text:''},{text:''},{text:''},{text:''},],
                          [{text:`${this.datos.cambioPropuesto}`,colSpan:5},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'RESULTADO DE LA EVALUACIÓN',colSpan:5,alignment:'center',bold:true,fillColor:'#ddd'},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'ACEPTADA'},{text:''},{text:''},{text:'RECHAZADA'},{text:''},],
                          [{text:'MOTIVO DE LA ACEPTACIÓN O RECHAZO',colSpan:5,alignment:'center',bold:true,fillColor:'#ddd'},{text:''},{text:''},{text:''},{text:''},],
                          [{text:`${this.datos.cambioPropuesto}`,colSpan:5},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'EVALÚA\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO',colSpan:3},{text:''},{text:''},{text:'MES:',colSpan:2},{text:''},],
                          ]
                  }
              }
               ]
     ,
     
      pageSize: 'LETTER',
      pageMargins: [22,110]
  };
  this.pdfMaker.generate(dd, 'VIII Control de documentos y registros');
    
  }


}
