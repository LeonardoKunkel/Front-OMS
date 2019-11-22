import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-quejas-sugerencias',
  templateUrl: './quejas-sugerencias.page.html',
  styleUrls: ['./quejas-sugerencias.page.scss'],
})
export class QuejasSugerenciasPage implements OnInit {
datos:any={
  numeroQueja:'',
  queja:'',
  sugerencia:'',
  otro:'',
  descripcion:'',
  contacto:'',
  alta:'',
  mediana:'',
  baja:''
}
  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  pdf(){
    var dd = {
      background: function(currentPage, pageSize) {
      return {image: 'sampleImage.jpg', width: 400,height: 500, absolutePosition: {x: 60, y: 100},opacity: 0.5}
    },
      header: function(){
        return {
            table: { widths: [560],heights:[30,0,0],
  body: [
  
      [{text:''}],
      [{text:'VII. COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA',alignment:'center',bold:true}],
      [{text:'LISTA DE COMUNICACIÓN',alignment:'center',bold:true,fillColor:'#ddd'}],
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
                  columns: [
          [    //Primera columna
              {
                  text:'Queja'
              },{
                  table:{ widths: [5],heights:[5],
                      body:[
                          [
                              {
                                  
                              }]
                          ]
                  }
              }],[
                  //Segunda columna  
                  {
                  text:'Sugerencia'
              },{
                  table:{ widths: [5],heights:[5],
                      body:[
                          [
                              {
                                  
                              }]
                          ]
                  }
              }
                  ],//Tercera columna
                  [
                      {
                  text:'Solicitud de Información'
              },{
                  table:{ widths: [5],heights:[5],
                      body:[
                          [
                              {
                                  
                              }]
                          ]
                  }
              }],//Cuarta columna
                  //Quinta columna
              [
                  {
                  text:'Fecha'
              },{
                  table:{ widths: [100],heights:[10],
                      
                      body:[
                          [
                              {text:''}]
                          ]
                  }
              }],//Linea para la fecha
              
              
          
              ],
                  
              },{
                  columns:[
                      [
                        {text:'\nCondición de Riesgo'},  {
                  table:{ widths: [5],heights:[5],
                      body:[
                          [
                              {
                                  
                              }]
                          ]
                  }
              }
                          ],[
                        {text:'\nInpacto al Medio Ambiente'},  {
                  table:{ widths: [5],heights:[5],
                      body:[
                          [
                              {
                                  
                              }]
                          ]
                  }
              }
                          ]
                        
                      ]
              },{text:'\n\n'},{
                  table:{
                           widths: [560,560,560,560,560],heights:[5,5,5,5,5,5,5],
                      body:[
                          [{text:'Descripción o Motivo:',bold:true}],
                          [{}],
                          [{text:''}],
                          [{text:''}],
                          [{text:''}],
                          [{text:''}],
                         
                          
                          ]
                  }
              },{text:'\n'},{
                  table:{widths: [180,180,180],heights:[10,10],
                      body:[
                          [{text:''},{text:''},{text:''}],
                          [{text:'Nombre'},{text:''},{text:'Contacto: correo/celula'}]  
                          ]
                  }
                  
              },{
                  text:'\n'
              },{
              
                  table:{widths: [130,120,120,25,10,35,10,25,10,],
                      body:[
                          
                          [{text:'Control Interno',bold:true,fillColor:'#ddd'},{text:'Consecutivo No:',bold:true,fillColor:'#ddd'},{text:'Prioridad:',bold:true,fillColor:'#ddd'},{text:'Alta',bold:true,fillColor:'#ddd'},{text:'',bold:true},{text:'Media',bold:true,fillColor:'#ddd'},{text:'',bold:true},{text:'Baja',bold:true,fillColor:'#ddd'},{text:'',bold:true}],
                          
                          ]
                  
                  
              }
              },{
                  table: { widths: [565],heights:[30,0,0],
  body: [
  
      [{text:''}],
      [{text:'VII. COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA',alignment:'center',bold:true}],
      [{text:'LISTA DE COMUNICACIÓN',alignment:'center',bold:true,fillColor:'#ddd'}],
  ]
  
  }, margin: [3,15]
              },{
                  columns: [
          [    //Primera columna
              {
                  text:'Queja'
              },{
                  table:{ widths: [10],heights:[10],
                      body:[
                          [
                              {
                                  
                              }]
                          ]
                  }
              }],[
                  //Segunda columna  
                  {
                  text:'Sugerencia'
              },{
                  table:{ widths: [10],heights:[10],
                      body:[
                          [
                              {
                                  
                              }]
                          ]
                  }
              }
                  ],//Tercera columna
                  [
                      {
                  text:'Solicitud de Información'
              },{
                  table:{ widths: [10],heights:[10],
                      body:[
                          [
                              {
                                  
                              }]
                          ]
                  }
              }],//Cuarta columna
                  //Quinta columna
              [
                  {
                  text:'Fecha'
              },{
                  table:{ widths: [100],heights:[10],
                      
                      body:[
                          [
                              {text:''}]
                          ]
                  }
              }],//Linea para la fecha
              
              
          
              ],
                  
              },{
                  columns:[
                      [
                        {text:'\nCondición de Riesgo'},  {
                  table:{ widths: [10],heights:[10],
                      body:[
                          [
                              {
                                  
                              }]
                          ]
                  }
              }
                          ],[
                        {text:'\nInpacto al Medio Ambiente'},  {
                  table:{ widths: [10],heights:[10],
                      body:[
                          [
                              {
                                  
                              }]
                          ]
                  }
              }
                          ]
                        
                      ]
              },{text:'\n\n'},{
                  table:{
                           widths: [560,560,560,560,560],heights:[5,5,5,5,5,5,5],
                      body:[
                          [{text:'Descripción o Motivo:',bold:true}],
                          [{}],
                          [{text:''}],
                          [{text:''}],
                          [{text:''}],
                          [{text:''}],
                        
                          
                          ]
                  }
              },{text:'\n'},{
                  table:{widths: [180,180,180],heights:[10,10],
                      body:[
                          [{text:''},{text:''},{text:''}],
                          [{text:'Nombre'},{text:''},{text:'Contacto: correo/celular'}]  
                          ]
                  }
                  
              },{
                  text:'\n'
              },{
              
                  table:{widths: [130,120,120,25,10,35,10,25,10,],
                      body:[
                          
                          [{text:'Control Interno',bold:true,fillColor:'#ddd'},{text:'Consecutivo No:',bold:true,fillColor:'#ddd'},{text:'Prioridad:',bold:true,fillColor:'#ddd'},{text:'Alta',bold:true,fillColor:'#ddd'},{text:'',bold:true},{text:'Media',bold:true,fillColor:'#ddd'},{text:'',bold:true},{text:'Baja',bold:true,fillColor:'#ddd'},{text:'',bold:true}],
                          
                          ]
                  
                  
              }
              }
                  
          
           ]
     ,
     
      pageSize: 'LETTER',
      pageMargins: [22,110]
  };
  

this.pdfMaker.generate(dd,'Punto 7 quejas sugerencias');
  }
}
