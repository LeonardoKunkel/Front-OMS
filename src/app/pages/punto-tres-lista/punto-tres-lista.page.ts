import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
@Component({
  selector: 'app-punto-tres-lista',
  templateUrl: './punto-tres-lista.page.html',
  styleUrls: ['./punto-tres-lista.page.scss'],
})
export class PuntoTresListaPage implements OnInit {

  constructor(private pdfMakerService: PdfMakerService) { }

  ngOnInit() {
  }

  downloadListReqLeg(){
    console.log("Descargar");
    var dd = { 
      header: function(){
        return {
            table: { widths: [560],heights:[40,0,0],
  body: [
  
      [{text:''}],
      [{text:'III. REQUISITOS LEGALES',alignment:'center',bold:true}],
      [{text:'LISTADO DE REQUISITOS LEGALES',alignment:'center',bold:true,fillColor:'#ddd'}],
     
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
              table:{
                  widths: [20,60,280,60,100],
                  heights:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
                  body:[
                      [{text:'NO',bold:true,fillColor:'#ddd'},{text:'MATERIA',bold:true,fillColor:'#ddd'},{text:'NORMA',bold:true,fillColor:'#ddd'},{text:'NUMERAL',bold:true,fillColor:'#ddd'},{text:'REQUISITO LEGAL',bold:true,fillColor:'#ddd'}],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},]
                      ]
              }
          }
          ,{text:'\n'},{
                  table:{widths: [400,150],heights:[90],
                      body:[
                          [{text:'Revisado por:\n\nRoberto Muñoz Torres \nREPRESENTANTE TÉCNICO'},{text:'FECHA DE APROBACIÓN:'}]
                          ]
                  }
              }
              
           ]
     ,
      pageSize: 'LETTER',
      pageMargins: [22,120]
  };
  this.pdfMakerService.generate(dd, 'Lista'); 

  }

}
