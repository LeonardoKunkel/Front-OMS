import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-listado-peligros',
  templateUrl: './listado-peligros.page.html',
  styleUrls: ['./listado-peligros.page.scss'],
})
export class ListadoPeligrosPage implements OnInit {
  respuesta:any={};
  datos:any={
    C1P1:'',
    C1P2:'',
    C1P3:'',
    C1P4:'',
    C2P1:'',
    C2P2:'',
    C2P3:'',
    C2P4:'',
    C3P1:'',
    C3P2:'',
    C3P3:'',
    C3P4:'',
    C4P1:'',
    C4P2:'',
    C4P3:'',
    C4P4:'',
    C5P1:'',
    C5P2:'',
    C5P3:'',
    C5P4:'',
    C6P1:'',
    C6P2:'',
    C6P3:'',
    C6P4:'',
    C7P1:'',
    C7P2:'',
    C7P3:'',
    C7P4:'',
    C8P1:'',
    C8P2:'',
    C8P3:'',
    C8P4:'',
    C9P1:'',
    C9P2:'',
    C9P3:'',
    C9P4:'',
    C10P1:'',
    C10P2:'',
    C10P3:'',
    C10P4:'',
    C11P1:'',
    C11P2:'',
    C11P3:'',
    C11P4:'',
    C12P1:'',
    C12P2:'',
    C12P3:'',
    C12P4:'',
    C13P1:'',
    C13P2:'',
    C13P3:'',
    C13P4:'',
    C14P1:'',
    C14P2:'',
    C14P3:'',
    C14P4:'',
    C15P1:'',
    C15P2:'',
    C15P3:'',
    C15P4:'',
    C16P1:'',
    C16P2:'',
    C16P3:'',
    C16P4:'',
    C17P1:'',
    C17P2:'',
    C17P3:'',
    C17P4:'',
    C18P1:'',
    C18P2:'',
    C18P3:'',
    C18P4:'',
    C19P1:'',
    C19P2:'',
    C19P3:'',
    C19P4:'',
    C20P1:'',
    C20P2:'',
    C20P3:'',
    C20P4:'',
    C21P1:'',
    C21P2:'',
    C21P3:'',
    C21P4:'',
    C22P1:'',
    C22P2:'',
    C22P3:'',
    C22P4:'',
    C23P1:'',
    C23P2:'',
    C23P3:'',
    C23P4:'',
    C24P1:'',
    C24P2:'',
    C24P3:'',
    C24P4:'',
    C25P1:'',
    C25P2:'',
    C25P3:'',
    C25P4:'',
    C26P1:'',
    C26P2:'',
    C26P3:'',
    C26P4:'',
    C27P1:'',
    C27P2:'',
    C27P3:'',
    C27P4:'',
    C28P1:'',
    C28P2:'',
    C28P3:'',
    C28P4:'',
    C29P1:'',
    C29P2:'',
    C29P3:'',
    C29P4:'',
  }
  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm(formulario){
    console.log('Enviado');

    console.log(this.datos);
  }
  pdf(){
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
                          [{text:'1',fontSize:9},{text:`${this.datos.C1P1}`,fontSize:8},{text:`${this.datos.C1P2}`,fontSize:8},{text:`${this.datos.C1P3}`,fontSize:8},{text:`${this.datos.C1P4}`,fontSize:8},],
                          [{text:'2',fontSize:9},{text:`${this.datos.C2P1}`,fontSize:8},{text:`${this.datos.C2P2}`,fontSize:8},{text:`${this.datos.C2P3}`,fontSize:8},{text:`${this.datos.C2P4}`,fontSize:8},],
                          [{text:'3',fontSize:9},{text:`${this.datos.C3P1}`,fontSize:8},{text:`${this.datos.C3P2}`,fontSize:8},{text:`${this.datos.C3P3}`,fontSize:8},{text:`${this.datos.C3P4}`,fontSize:8},],
                          [{text:'4',fontSize:9},{text:`${this.datos.C4P1}`,fontSize:8},{text:`${this.datos.C4P2}`,fontSize:8},{text:`${this.datos.C4P3}`,fontSize:8},{text:`${this.datos.C4P4}`,fontSize:8},],
                          [{text:'5',fontSize:9},{text:`${this.datos.C5P1}`,fontSize:8},{text:`${this.datos.C5P2}`,fontSize:8},{text:`${this.datos.C5P3}`,fontSize:8},{text:`${this.datos.C5P4}`,fontSize:8},],
                          [{text:'6',fontSize:9},{text:`${this.datos.C6P1}`,fontSize:8},{text:`${this.datos.C6P2}`,fontSize:8},{text:`${this.datos.C6P3}`,fontSize:8},{text:`${this.datos.C6P4}`,fontSize:8},],
                          [{text:'7',fontSize:9},{text:`${this.datos.C7P1}`,fontSize:8},{text:`${this.datos.C7P2}`,fontSize:8},{text:`${this.datos.C7P3}`,fontSize:8},{text:`${this.datos.C7P4}`,fontSize:8},],
                          [{text:'8',fontSize:9},{text:`${this.datos.C8P1}`,fontSize:8},{text:`${this.datos.C8P2}`,fontSize:8},{text:`${this.datos.C8P3}`,fontSize:8},{text:`${this.datos.C8P4}`,fontSize:8},],
                          [{text:'9',fontSize:9},{text:`${this.datos.C9P1}`,fontSize:8},{text:`${this.datos.C9P2}`,fontSize:8},{text:`${this.datos.C9P3}`,fontSize:8},{text:`${this.datos.C9P4}`,fontSize:8},],
                          [{text:'9',fontSize:9},{text:`${this.datos.C10P1}`,fontSize:8},{text:`${this.datos.C10P2}`,fontSize:8},{text:`${this.datos.C10P3}`,fontSize:8},{text:`${this.datos.C10P4}`,fontSize:8},],
                          [{text:'10',fontSize:9},{text:`${this.datos.C11P1}`,fontSize:8},{text:`${this.datos.C11P2}`,fontSize:8},{text:`${this.datos.C11P3}`,fontSize:8},{text:`${this.datos.C11P4}`,fontSize:8},],
                          [{text:'11',fontSize:9},{text:`${this.datos.C12P1}`,fontSize:8},{text:`${this.datos.C12P2}`,fontSize:8},{text:`${this.datos.C12P3}`,fontSize:8},{text:`${this.datos.C12P4}`,fontSize:8},],
                          [{text:'12',fontSize:9},{text:`${this.datos.C13P1}`,fontSize:8},{text:`${this.datos.C13P2}`,fontSize:8},{text:`${this.datos.C13P3}`,fontSize:8},{text:`${this.datos.C13P4}`,fontSize:8},],
                          [{text:'13',fontSize:9},{text:`${this.datos.C14P1}`,fontSize:8},{text:`${this.datos.C14P2}`,fontSize:8},{text:`${this.datos.C14P3}`,fontSize:8},{text:`${this.datos.C14P4}`,fontSize:8},],
                          [{text:'14',fontSize:9},{text:`${this.datos.C15P1}`,fontSize:8},{text:`${this.datos.C15P2}`,fontSize:8},{text:`${this.datos.C15P3}`,fontSize:8},{text:`${this.datos.C15P4}`,fontSize:8},],
                          [{text:'15',fontSize:9},{text:`${this.datos.C16P1}`,fontSize:8},{text:`${this.datos.C16P2}`,fontSize:8},{text:`${this.datos.C16P3}`,fontSize:8},{text:`${this.datos.C16P4}`,fontSize:8},],
                          [{text:'16',fontSize:9},{text:`${this.datos.C17P1}`,fontSize:8},{text:`${this.datos.C17P2}`,fontSize:8},{text:`${this.datos.C17P3}`,fontSize:8},{text:`${this.datos.C17P4}`,fontSize:8},],
                          [{text:'17',fontSize:9},{text:`${this.datos.C18P1}`,fontSize:8},{text:`${this.datos.C18P2}`,fontSize:8},{text:`${this.datos.C18P3}`,fontSize:8},{text:`${this.datos.C18P4}`,fontSize:8},],
                          [{text:'18',fontSize:9},{text:`${this.datos.C19P1}`,fontSize:8},{text:`${this.datos.C19P2}`,fontSize:8},{text:`${this.datos.C19P3}`,fontSize:8},{text:`${this.datos.C19P4}`,fontSize:8},],
                          [{text:'19',fontSize:9},{text:`${this.datos.C20P1}`,fontSize:8},{text:`${this.datos.C20P2}`,fontSize:8},{text:`${this.datos.C20P3}`,fontSize:8},{text:`${this.datos.C20P4}`,fontSize:8},],
                          [{text:'20',fontSize:9},{text:`${this.datos.C21P1}`,fontSize:8},{text:`${this.datos.C21P2}`,fontSize:8},{text:`${this.datos.C21P3}`,fontSize:8},{text:`${this.datos.C21P4}`,fontSize:8},],
                          [{text:'21',fontSize:9},{text:`${this.datos.C22P1}`,fontSize:8},{text:`${this.datos.C22P2}`,fontSize:8},{text:`${this.datos.C22P3}`,fontSize:8},{text:`${this.datos.C22P4}`,fontSize:8},],
                          [{text:'22',fontSize:9},{text:`${this.datos.C23P1}`,fontSize:8},{text:`${this.datos.C23P2}`,fontSize:8},{text:`${this.datos.C23P3}`,fontSize:8},{text:`${this.datos.C23P4}`,fontSize:8},],
                          [{text:'23',fontSize:9},{text:`${this.datos.C24P1}`,fontSize:8},{text:`${this.datos.C24P2}`,fontSize:8},{text:`${this.datos.C24P3}`,fontSize:8},{text:`${this.datos.C24P4}`,fontSize:8},],
                          [{text:'24',fontSize:9},{text:`${this.datos.C25P1}`,fontSize:8},{text:`${this.datos.C25P2}`,fontSize:8},{text:`${this.datos.C25P3}`,fontSize:8},{text:`${this.datos.C25P4}`,fontSize:8},],
                          [{text:'25',fontSize:9},{text:`${this.datos.C26P1}`,fontSize:8},{text:`${this.datos.C26P2}`,fontSize:8},{text:`${this.datos.C26P3}`,fontSize:8},{text:`${this.datos.C26P4}`,fontSize:8},],
                          [{text:'26',fontSize:9},{text:`${this.datos.C27P1}`,fontSize:8},{text:`${this.datos.C27P2}`,fontSize:8},{text:`${this.datos.C27P3}`,fontSize:8},{text:`${this.datos.C27P4}`,fontSize:8},],
                          
                          
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
