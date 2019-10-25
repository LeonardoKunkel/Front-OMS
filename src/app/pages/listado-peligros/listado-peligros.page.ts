import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-listado-peligros',
  templateUrl: './listado-peligros.page.html',
  styleUrls: ['./listado-peligros.page.scss'],
})
export class ListadoPeligrosPage implements OnInit {
  respuesta:any={};
  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm(formulario){
    console.log('Enviado');
    var p1c1 = formulario.value.p1c1;
    var p2c1 = formulario.value.p2c1;
    var p3c1 = formulario.value.p3c1;
    var p4c1 = formulario.value.p4c1;
    var p1c2 = formulario.value.p1c2;
    var p2c2 = formulario.value.p2c2;
    var p3c2 = formulario.value.p3c2;
    var p4c2 = formulario.value.p4c2;
    var p1c3 = formulario.value.p1c3;
    var p2c3 = formulario.value.p2c3;
    var p3c3 = formulario.value.p3c3;
    var p4c3 = formulario.value.p4c3;
    var p1c4 = formulario.value.p1c4;
    var p2c4 = formulario.value.p2c4;
    var p3c4 = formulario.value.p3c4;
    var p4c4 = formulario.value.p4c4;
    var p1c5 = formulario.value.p1c5;
    var p2c5 = formulario.value.p2c5;
    var p3c5 = formulario.value.p3c5;
    var p4c5 = formulario.value.p4c5;
    var p1c6 = formulario.value.p1c6;
    var p2c6 = formulario.value.p2c6;
    var p3c6 = formulario.value.p3c6;
    var p4c6 = formulario.value.p4c6;
    var p1c7 = formulario.value.p1c7;
    var p2c7 = formulario.value.p2c7;
    var p3c7 = formulario.value.p3c7;
    var p4c7 = formulario.value.p4c7;
    var p1c8 = formulario.value.p1c8;
    var p2c8 = formulario.value.p2c8;
    var p3c8 = formulario.value.p3c8;
    var p4c8 = formulario.value.p4c8;
    var p1c9 = formulario.value.p1c9;
    var p2c9 = formulario.value.p2c9;
    var p3c9 = formulario.value.p3c9;
    var p4c9 = formulario.value.p4c9;
    var p1c10 = formulario.value.p1c10;
    var p2c10 = formulario.value.p2c10;
    var p3c10 = formulario.value.p3c10;
    var p4c10 = formulario.value.p4c10;
    var p1c11 = formulario.value.p1c11;
    var p2c11 = formulario.value.p2c11;
    var p3c11 = formulario.value.p3c11;
    var p4c11 = formulario.value.p4c11;
    var p1c12 = formulario.value.p1c12;
    var p2c12 = formulario.value.p2c12;
    var p3c12 = formulario.value.p3c12;
    var p4c12 = formulario.value.p4c12;
    var p1c13 = formulario.value.p1c13;
    var p2c13 = formulario.value.p2c13;
    var p3c13 = formulario.value.p3c13;
    var p4c13 = formulario.value.p4c13;
    var p1c14 = formulario.value.p1c14;
    var p2c14 = formulario.value.p2c14;
    var p3c14 = formulario.value.p3c14;
    var p4c14 = formulario.value.p4c14;
    var p1c15 = formulario.value.p1c15;
    var p2c15 = formulario.value.p2c15;
    var p3c15 = formulario.value.p3c15;
    var p4c15 = formulario.value.p4c15;
    var p1c16 = formulario.value.p1c16;
    var p2c16 = formulario.value.p2c16;
    var p3c16 = formulario.value.p3c16;
    var p4c16 = formulario.value.p4c16;
    var p1c17 = formulario.value.p1c17;
    var p2c17 = formulario.value.p2c17;
    var p3c17 = formulario.value.p3c17;
    var p4c17 = formulario.value.p4c17;
    var p1c18 = formulario.value.p1c18;
    var p2c18 = formulario.value.p2c18;
    var p3c18 = formulario.value.p3c18;
    var p4c18 = formulario.value.p4c18;
    var p1c19 = formulario.value.p1c19;
    var p2c19 = formulario.value.p2c19;
    var p3c19 = formulario.value.p3c19;
    var p4c19 = formulario.value.p4c19;
    var p1c20 = formulario.value.p1c20;
    var p2c20 = formulario.value.p2c20;
    var p3c20 = formulario.value.p3c20;
    var p4c20 = formulario.value.p4c20;
    var p1c21 = formulario.value.p1c21;
    var p2c21 = formulario.value.p2c21;
    var p3c21 = formulario.value.p3c21;
    var p4c21 = formulario.value.p4c21;
    var p1c22 = formulario.value.p1c22;
    var p2c22 = formulario.value.p2c22;
    var p3c22 = formulario.value.p3c22;
    var p4c22 = formulario.value.p4c22;
    var p1c23 = formulario.value.p1c23;
    var p2c23 = formulario.value.p2c23;
    var p3c23 = formulario.value.p3c23;
    var p4c23 = formulario.value.p4c23;
    var p1c24 = formulario.value.p1c24;
    var p2c24 = formulario.value.p2c24;
    var p3c24 = formulario.value.p3c24;
    var p4c24 = formulario.value.p4c24;
    var p1c25 = formulario.value.p1c25;
    var p2c25 = formulario.value.p2c25;
    var p3c25 = formulario.value.p3c25;
    var p4c25 = formulario.value.p4c25;
    var p1c26 = formulario.value.p1c26;
    var p2c26 = formulario.value.p2c26;
    var p3c26 = formulario.value.p3c26;
    var p4c26 = formulario.value.p4c26;
    var p1c27 = formulario.value.p1c27;
    var p2c27 = formulario.value.p2c27;
    var p3c27 = formulario.value.p3c27;
    var p4c27 = formulario.value.p4c27;
    var p1c28 = formulario.value.p1c28;
    var p2c28 = formulario.value.p2c28;
    var p3c28 = formulario.value.p3c28;
    var p4c28 = formulario.value.p4c28;
    this.respuesta={
      p1c1,p2c1,p3c1,p4c1,
      p1c2,p2c2,p3c2,p4c2,
      p1c3,p2c3,p3c3,p4c3,
      p1c4,p2c4,p3c4,p4c4,
      p1c5,p2c5,p3c5,p4c5,
      p1c6,p2c6,p3c6,p4c6,
      p1c7,p2c7,p3c7,p4c7,
      p1c8,p2c8,p3c8,p4c8,
      p1c9,p2c9,p3c9,p4c9,
      p1c10,p2c10,p3c10,p4c10,
      p1c11,p2c11,p3c11,p4c11,
      p1c12,p2c12,p3c12,p4c12,
      p1c13,p2c13,p3c13,p4c13,
      p1c14,p2c14,p3c14,p4c14,
      p1c15,p2c15,p3c15,p4c15,
      p1c16,p2c16,p3c16,p4c16,
      p1c17,p2c17,p3c17,p4c17,
      p1c18,p2c18,p3c18,p4c18,
      p1c19,p2c19,p3c19,p4c19,
      p1c20,p2c20,p3c20,p4c20,
      p1c21,p2c21,p3c21,p4c21,
      p1c22,p2c22,p3c22,p4c22,
      p1c23,p2c23,p3c23,p4c23,
      p1c24,p2c24,p3c24,p4c24,
      p1c25,p2c25,p3c25,p4c25,
      p1c26,p2c26,p3c26,p4c26,
      p1c27,p2c27,p3c27,p4c27,
      p1c28,p2c28,p3c28,p4c28,
      
    }
    console.log(this.respuesta);
    

    
  }
  pdf(){
    console.log('hola mundo');
    var dd = {
      header: function(){
        return {
            table: { widths: [560],heights:[45,0,0],
  body: [
  
      [{text:''}],
      [{text:'II. IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES',alignment:'center',bold:true}],
      [{text:'EVALUACIÓN DE ASPECTOS AMBIENTALES',alignment:'center',bold:true,fillColor:'#ddd'}],
     
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
            margin: [30,85]
        };
      },
      
      content:[
          {
            text:'\n'  
          },
              {
                  table:{
                      widths: [20,70,85,150,200],
                      body:[
                          [{text:'ÁREA, EQUIPO O PROCESO:',fillColor:'#ddd',bold:true,colSpan:5,fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'No°',fillColor:'#ddd',bold:true,fontSize:9},{text:'ACTIVIDAD ASOCIADA',fillColor:'#ddd',bold:true,fontSize:9},{text:'CONDICIÓN DE OPERACIÓN',fillColor:'#ddd',bold:true,fontSize:9},{text:'PELIGRO',fillColor:'#ddd',bold:true,fontSize:9},{text:'ASPECTO AMBIENTAL',fillColor:'#ddd',bold:true,fontSize:9}],
                          [{text:'1',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'2',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'3',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'4',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'5',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'6',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'7',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'8',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'9',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'9',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'10',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'11',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'12',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'13',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'14',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'15',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'16',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'17',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'18',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'19',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'20',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'21',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'22',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'23',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'24',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'25',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                          [{text:'26',fontSize:9},{text:''},{text:''},{text:''},{text:''},],
                       
                          
                          
                          ]
                  }
              },{text:'\n'},{
                  table:{
                       widths: [270,270],heights:[60],
                      body:[
                          [{text:'Roberto Muñoz Torres\nREPRESENTANTE TÉCNICO'},{text:''}],
                          ]
                  }
              }
          
          
           ]
     ,
      pageSize: 'LETTER',
      pageMargins: [22,120]
  };
   
    this.pdfMaker.generate(dd, 'II.Listado-Peligros.pdf');
    
    
  }

}
