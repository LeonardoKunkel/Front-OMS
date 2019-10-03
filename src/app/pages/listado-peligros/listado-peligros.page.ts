import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-listado-peligros',
  templateUrl: './listado-peligros.page.html',
  styleUrls: ['./listado-peligros.page.scss'],
})
export class ListadoPeligrosPage implements OnInit {

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
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
