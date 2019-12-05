import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { and } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-punto-siete',
  templateUrl: './punto-siete.page.html',
  styleUrls: ['./punto-siete.page.scss'],
})
export class PuntoSietePage implements OnInit {
  datos:any={
    curso:false,
    difusion:false,
    interno:false,
    externo:false,
    nombreCurso:'',
    lugar:'',
    facilitador:'',
    empresa:''
  }

  @ViewChild('slider') slider: IonSlides

  constructor(private alertCtrl: AlertController,private pdfMaker: PdfMakerService) { }

  ngOnInit() {
    // this.slider.lockSwipes(true);
  }
  enviarForm(formulario){
      console.log(this.datos);
      
  }
  pdf(){
      if(this.datos.curso===true){
        var curso1="X"
        console.log(curso1);
      }else{
          var curso1=" "
          console.log(curso1);
      }
      
      if(this.datos.difusion===true){
        var curso2="X"
        console.log(curso2);
        
      }else{
          var curso2=" "
          console.log(curso2);
          
      }

      if(this.datos.interno===true){
        var curso3="X"
        console.log(curso3);
        
      }else{
          var curso3=" "
          console.log(curso3);
          
      }
      if(this.datos.Externo===true){
        var curso4="X"
        console.log(curso4);
        
      }else{
          var curso4=" "
          console.log(curso4);
          
      }
var dd = {
  //   background: function(currentPage, pageSize) {
  //   return {image: 'sampleImage.jpg', width: 400,height: 500, absolutePosition: {x: 60, y: 100},opacity: 0.5}
  // },
    header: function(){
      return {
          table: { widths: [560],heights:[40,0,0],
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
				        text:'Curso'
				    },{
				        table:{ widths: [10],heights:[10],
				            body:[
				                [
				                    {
				                      text:`${curso1}`  
				                    }]
				                ]
				        }
				    }],[
				        //Segunda columna  
				        {
				        text:'Difusión'
				    },{
				        table:{ widths: [10],heights:[10],
				            body:[
				                [
				                    {
				                      text:`${this.datos. curso2}`  
				                    }]
				                ]
				        }
				    }
				        ],//Tercera columna
				        [
				            {
				        text:'Interno'
				    },{
				        table:{ widths: [10],heights:[10],
				            body:[
				                [
				                    {
				                       text:`${this.datos.curso3}` 
				                    }]
				                ]
				        }
				    }],//Cuarta columna
				        [
				            {
				        text:'Externo'
				    },{
				        table:{ widths: [10],heights:[10],
				            body:[
				                [
				                    {
				                      text:`${this.datos.curso4}`  
				                    }]
				                ]
				        }
				    }],//Quinta columna
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
                
            },{text:'\n\n'},{
                table:{
                         widths: [560,560,560,560,560],heights:[10,10,10,10,10,10],
                    body:[
                        [{text:'Nombre del Curso o documento:',bold:true}],
                        [{text:`${this.datos.nombreCurso}`}],
                        [{text:`Lugar: ${this.datos.lugar}`,bold:true}],
                        [{text:`Facilitador: ${this.datos.facilitador}`,bold:true}],
                        [{text:`Empresa: ${this.datos.empresa}`,bold:true}],
                        
                        ]
                }
            },{text:'\n'},{
                table:{
                        widths: [20,250,160,100],
                        heights:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
                    body:[
                       [{text:'No.'},{text:'Nombre'},{text:'Cargo'},{text:'Firma'}],
                       [{text:'1'},{text:''},{text:''},{text:''}],
                       [{text:'2'},{text:''},{text:''},{text:''}],
                       [{text:'3'},{text:''},{text:''},{text:''}],
                       [{text:'4'},{text:''},{text:''},{text:''}],
                       [{text:'5'},{text:''},{text:''},{text:''}],
                       [{text:'6'},{text:''},{text:''},{text:''}],
                       [{text:'7'},{text:''},{text:''},{text:''}],
                       [{text:'8'},{text:''},{text:''},{text:''}],
                       [{text:'9'},{text:''},{text:''},{text:''}],
                       [{text:'10'},{text:''},{text:''},{text:''}],
                       [{text:'11'},{text:''},{text:''},{text:''}],
                       [{text:'12'},{text:''},{text:''},{text:''}],
                       [{text:'13'},{text:''},{text:''},{text:''}],
                       [{text:'14'},{text:''},{text:''},{text:''}],
                       [{text:'15'},{text:''},{text:''},{text:''}],
                       [{text:'16'},{text:''},{text:''},{text:''}],
                       [{text:'17'},{text:''},{text:''},{text:''}],
                       [{text:'18'},{text:''},{text:''},{text:''}],
                       [{text:'19'},{text:''},{text:''},{text:''}],
                       [{text:'20'},{text:''},{text:''},{text:''}],
        
                       
                        ]
                }
            }
        
         ]
   ,
   
    pageSize: 'LETTER',
    pageMargins: [22,110]
};

this.pdfMaker.generate(dd,'Punto 7');
  }
}
