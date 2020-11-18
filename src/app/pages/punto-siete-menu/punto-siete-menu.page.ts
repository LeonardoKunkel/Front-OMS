import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';

@Component({
  selector: 'app-punto-siete-menu',
  templateUrl: './punto-siete-menu.page.html',
  styleUrls: ['./punto-siete-menu.page.scss'],
})
export class PuntoSieteMenuPage implements OnInit {
  datosEstacion:any={
    calleNumero:'',
    ciudad:'',
    colonia:'',
    correoElectronico:'',
    cp:'',
    estado:'',
    gerenteEstacion:'',
    maximaAutoridad:'',
    nombreEstacionServicio:'',
    representanteTecnico:'',
    telefono:''
  };
  myImage = null;
  firmaEstacion = null;
  firmaRepresentante = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;


  constructor(
    private navCtrl: NavController,
    private pdfMaker: PdfMakerService,
    private estacionService: EstacionServicioDatosService,
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService,
    private datosEstacionService:EstacionServicioDatosService,
    private firmaRepresente : FirmaRepresentanteService,
    ) { 
      this.getDatosEstacion();
    }



    ngOnInit() {
      this.imagen64();
      this.getMarcaAgua();
      this.getFirma();
      this.getIcono();
      this.getFirmaRepresentante();
    }
    getDatosEstacion(){
      this.datosEstacionService.getEstacion().subscribe((data:any) =>{
        //console.log(data.findEstacion[data.findEstacion.length -1]);
        this.datosEstacion = data.findEstacion[data.findEstacion.length -1];
      })
    }
    getFirmaRepresentante(){
      this.firmaRepresente.getFirmaRepresentante().subscribe((data:any) =>{
        //console.log(data);
         this.firmaRepresentante = data.findFirmaRepresentante[data.findFirmaRepresentante.length -1].firma;
         //console.log(this.firmaRepresentante);
        
      })
    }
    getIcono(){
      this.icono.getPolitica().subscribe((data:any)=>{
       // console.log(data);
        this.iconoEstacion =  data.findPolitica[data.findPolitica.length -1].imagen;
      })
    }
    getMarcaAgua(){
      this.marca.getMarcaAgua().subscribe((data:any)=>{
        //console.log(data);
        this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua;
      })
    }
    getFirma(){
      this.firma.getFirmaEstacion().subscribe((data:any) =>{
        //console.log(data);
        this.firmaEstacion =this.firma = data.findFirma[data.findFirma.length -1].firma;
      })
    }
    imagen64(){
   
        this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
          base64 =>{
            this.myImage = base64;
            //console.log(this.myImage);
          }
          
        )
    }
    convertFileDataURLviaFileReader(url: string){
      return Observable.create(observer =>{
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.onload = function(){
          let reader: FileReader = new FileReader();
          reader.onloadend = function(){
            observer.next(reader.result);
            observer.complete();
          };
          reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
      })
    }
  
  goListaComunicacion() {
    this.navCtrl.navigateForward('/punto-siete');
  }
  goPuntoQuejasSugerencias() {
    this.navCtrl.navigateForward('/punto-siete-quejas');
  }
  goPuntoRegistrosControl() {
    this.navCtrl.navigateForward('/punto-siete-registro');
  }
  goPuntoProcedimiento() {
    this.navCtrl.navigateForward('/punto-siete-procedimiento');
  }
  goPuntoEvidencia() {
    this.navCtrl.navigateForward('/punto-siete-evidencia');
  }
  pdf(){
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;  
    let footer = this.myImage;
    let ddd = this.datosEstacion;
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    let firmaRepresentanteTecnico = this.firmaRepresentante;
    var dd = {
      background: function(currentPage, pageSize) {
      return {
        image: `${marcaAgua}`, width: 300,height: 350, 
        absolutePosition: {x: 150, y: 160},opacity: 0.5}
    },
    header: function(){
      return {
        table:{
            widths: [150,400],
            heights: [30,10,10],
            body:[
                [
                    {
                      image:`${iconoEstacion}`,
                      width: 45,
                      height: 60,
                      alignment:'center',
                      border:[true,true,false,true],
                    },{
                        text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:17,alignment: 'center', margin:[0,15],
                    border:[false,true,true,true],
                    }
                ],[
                    {
                        text:'QUEJAS, SUGERENCIAS O SOLICITUD DE INFORMACIÓN',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                    },{
                        
                    }
                    ],[
                        {
                          text:'VII. COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                        },{
                            
                        }
                        ]
              ]
        },margin: [22,15],
        
          layout:{
            defaultBorder: false
          }
      };
    },	
    footer: function(currentPage, pageCount){
      return {
          table:{
        headerRows:1, 
        widths: [510],
             body : [
             [{columns:[
                 'Página ' + currentPage.toString() + ' de ' + pageCount,
                 {text:`FS-14 Rev., ${day}/${month}/${year}`,width: 180}
                 ]}],
             [{
              image: `${footer}`,
              pageBreak: 'after',
              width: 510,
              height: 60,
               },],
             [''],
                 ]
           }, layout : 'headerLineOnly',
          margin: [72,20],
      };
    },
    content: [
          {
            columns:[
                {
            width: 40,fontSize:10,
                  text:'Queja'   
                },{
            width: 40,
                    table:{
                             widths: [7],
                             heights: [7],
                        body:[
                            [{text:''}]
                            ]
                    }
                },{
            width: 70,
                  text:'Sugerencia' ,fontSize:10,
                },{
            width: 40,
                    table:{
                             widths: [7],
                             heights: [7],
                        body:[
                            [{text:``}]
                            ]
                    }
                },{
            width: 150,fontSize:10,
                  text:'Solicitud de Información'  
                },{
            width: 60,
                    table:{
                             widths: [7],
                             heights: [7],
                        body:[
                            [{}]
                            ]
                    }
                },{
            width: 40,fontSize:10,
                    text:'Fecha:'
                },{
            table:{
          headerRows:1, 
          widths: [120],
               body : [
               [''],
               [''],
                   ]
             }, layout : 'headerLineOnly',
            margin: [2,5]}
                ]  
          },{
            columns:[
                {
            width: 120,
                   text:'Condición de Riesgo' ,fontSize:10,
                },{
            width: 40,
                    table:{
                             widths: [7],
                             heights: [7],
                        body:[
                            [{text:''}]
                            ]
                    }
                },{
            width: 150,
                  text:'Impacto al Medio Ambiente' ,fontSize:10,
                },{
            width: 40,
                    table:{
                             widths: [7],
                             heights: [7],
                        body:[
                            [{text:''}]
                            ]
                    }
                }
                ]  
          },{
            text:'\n'  
          },{
            table:{
                     widths: [560],
                     heights: [6,6,6,6,6,6],
                body:[
                    [{text:'Descripción o Motivo:',fontSize:10,}],
                    [{text:''}],
                    [{text:''}],
                    [{text:''}],
                    [{text:''}],
                    [{text:''}]
                    ]
            }  
          },{text:'\n'},{
            table:{
                     widths: [180,180,180], 
                     heights: [6,6],
                body:[
                    [{text:''},{text:''},{text:''}],
                    [{text:'Nombre ',fontSize:9,},{text:''},{text:'Contacto: correo/celular',fontSize:9,}],
                    ]
            }    
          },{text:'\n'},{
              table:{
                     widths: [90,210,70,30,10,30,10,30,10],
                  body:[
                      [{text:'Control Interno',fillColor:'#a5c3dd',bold:true,fontSize:9,},{text:'Consecutivo No: ',fillColor:'#a5c3dd',bold:true,fontSize:10,},{text:'Prioridad:',fillColor:'#a5c3dd',bold:true,fontSize:10,},{text:'Alta',fillColor:'#a5c3dd',bold:true,fontSize:10,},{text:''},{text:'',fillColor:'#a5c3dd',bold:true},{text:''},{text:'',fillColor:'#a5c3dd',bold:true},{text:''},]
                      ]
              }
          },{
              
        table:{
            widths: [150,400],
            heights: [30,10,10],
            body:[
                [
                    {
                        image:`${iconoEstacion}`,
                    width: 45,
                    height: 60,
                    alignment:'center',
                    border:[true,true,false,true],
                    },{
                        text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:17,alignment: 'center', margin:[0,15],
                    border:[false,true,true,true],
                    }
                ],[
                    {
                        text:'QUEJAS, SUGERENCIAS O SOLICITUD DE INFORMACIÓN',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                    },{
                        
                    }
                    ],[
                        {
                          text:'VII. COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                        },{
                            
                        }
                        ]
              ]
        },margin: [2,15],
        
          layout:{
            defaultBorder: false
          }
          },
          {
            columns:[
                {
            width: 40,fontSize:10,
                  text:'Queja'   
                },{
            width: 40,
                    table:{
                             widths: [7],
                             heights: [7],
                        body:[
                            [{text:''}]
                            ]
                    }
                },{
            width: 70,
                  text:'Sugerencia' ,fontSize:10,
                },{
            width: 40,
                    table:{
                             widths: [7],
                             heights: [7],
                        body:[
                            [{text:``}]
                            ]
                    }
                },{
            width: 150,fontSize:10,
                  text:'Solicitud de Información'  
                },{
            width: 60,
                    table:{
                             widths: [7],
                             heights: [7],
                        body:[
                            [{}]
                            ]
                    }
                },{
            width: 40,fontSize:10,
                    text:'Fecha:'
                },{
            table:{
          headerRows:1, 
          widths: [120],
               body : [
               [''],
               [''],
                   ]
             }, layout : 'headerLineOnly',
            margin: [2,5]}
                ]  
          },{
            columns:[
                {
            width: 120,
                   text:'Condición de Riesgo' ,fontSize:10,
                },{
            width: 40,
                    table:{
                             widths: [7],
                             heights: [7],
                        body:[
                            [{text:''}]
                            ]
                    }
                },{
            width: 150,
                  text:'Impacto al Medio Ambiente' ,fontSize:10,
                },{
            width: 40,
                    table:{
                             widths: [7],
                             heights: [7],
                        body:[
                            [{text:''}]
                            ]
                    }
                }
                ]  
          },{
            text:'\n'  
          },{
            table:{
                     widths: [560],
                     heights: [6,6,6,6,6,6],
                body:[
                    [{text:'Descripción o Motivo:',fontSize:10,}],
                    [{text:''}],
                    [{text:''}],
                    [{text:''}],
                    [{text:''}],
                    [{text:''}]
                    ]
            }  
          },{text:'\n'},{
            table:{
                     widths: [180,180,180], 
                     heights: [6,6],
                body:[
                    [{text:''},{text:''},{text:''}],
                    [{text:'Nombre ',fontSize:10,},{text:''},{text:'Contacto: correo/celular',fontSize:10,}],
                    ]
            }    
          },{text:'\n'},{
              table:{
                     widths: [90,210,70,30,10,30,10,30,10],
                  body:[
                      [{text:'Control Interno',fillColor:'#a5c3dd',bold:true,fontSize:10,},{text:'Consecutivo No: ',fillColor:'#a5c3dd',bold:true,fontSize:10,},{text:'Prioridad:',fillColor:'#a5c3dd',bold:true,fontSize:10,},{text:'Alta',fillColor:'#a5c3dd',bold:true,fontSize:10,},{text:''},{text:'',fillColor:'#a5c3dd',bold:true},{text:''},{text:'',fillColor:'#a5c3dd',bold:true},{text:''},]
                      ]
              }
          }
          ]
     ,
      pageSize: 'LETTER',
      pageMargins: [22, 130]
      
    }
    this.pdfMaker.generate(dd,'Quejas y sugerencias')
  
  }
  pdf2(){
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;  
    let footer = this.myImage;
    let ddd = this.datosEstacion;
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    let firmaRepresentanteTecnico = this.firmaRepresentante;

var dd = {
  background: function(currentPage, pageSize) {
  return {
    image: `${marcaAgua}`,
    width: 300,
    height: 370, 
    absolutePosition: {x: 250, y: 140},opacity: 0.5}
},
header: function(){
  return {
    table:{
        widths: [150,570],
        heights: [30,10,10],
        body:[
            [
                {
                  image:`${iconoEstacion}`,
                  width: 45,
                  height: 60,
              alignment:'center',
              border:[true,true,false,true],
                },{
                    text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:17,alignment: 'center', margin:[0,15],
                border:[false,true,true,true],
                }
            ],[
                {
                    text:'REGISTRO Y CONTROL DE QUEJAS Y SUGERENCIAS',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                },{
                    
                }
                ],[
                    {
                      text:'VII. COMUNICACIÓN PARTICIPACIÓN Y CONSULTA',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                    },{
                        
                    }
                    ]
          ]
    },margin: [22,15],
    
			layout:{
				defaultBorder: false
			}
  };
},
footer: function(currentPage, pageCount){
  return {
      table:{
    headerRows:1, 
    widths: [650],
         body : [
         [{columns:[
             'Página' + currentPage.toString() + ' de ' + pageCount,
             {text:`FS-07 Rev.0 ,  ${day}/${month}/${year}`,width: 180}
             ]}],
         [{
          image: `${footer}`,
          pageBreak: 'after',
          width: 650,
          height: 60,
           },],
         [''],
             ]
       }, layout : 'headerLineOnly',
      margin: [72,20],
  };
},
	content: [
	    {
	      table:{
            widths:[20,15,15,15,200,100,15,15,15,35,35,150 ] ,
	          body:[
	              [
	                  {text:`No.`,bold:true,fontSize:9,rowSpan:2,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`ASUNTO `,bold:true,fontSize:9,colSpan:3,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:``,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:``,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`DESCRIPCIÓN `,bold:true,rowSpan:2,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`CONTACTO (tel/c.e.)`,rowSpan:2,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`PRIORIDAD`,bold:true,colSpan:3,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:``,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:``,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`FECHA`,bold:true,colSpan:2,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:``,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`EVIDENCIA`,bold:true,rowSpan:2,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	              ],
	              [
	                  {text:``,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`Q`,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`S`,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`O`,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:``,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:``,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`A`,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`M`,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`B`,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`INICIO`,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:`CIERRE`,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	                  {text:``,bold:true,fontSize:9,fillColor:'#a5c3dd',alignment:'center'},
	              ],[
	                {text:`1`,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	              ],[
	                {text:`2`,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	              ],[
	                {text:`3`,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	              ],[
	                {text:`4`,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	              ],[
	                {text:`5`,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	              ],[
	                {text:`6`,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	              ],[
	                {text:`7`,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	              ],[
	                {text:`8`,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	              ],[
	                {text:`9`,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	              ],[
	                {text:`10`,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	                {text:``,fontSize:9},
	              ]
	              ]
	      }  
	    },{
	      text:'*Q= QUEJA, S= SUGERENCIA, O= OTRO, A= ALTA, M=MEDIA, B=BAJA',fontSize:7 
	    },{
	      text:`\n`  
	    },
      {
          table: {
               widths: [360,200],
               heights: [30,30],
               body: [
                   [
                       {
                         image:`${firmaRepresentanteTecnico}`,
                         fit:[100,50],
                         alignment:'center',
                         border:[true,true,true,false]
                       },{
                         text:' ',
                         fit:[100,50],
                         alignment:'center',
                         border:[true,true,true,false]
                       }],
                  [
                      {text:`REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,alignment:'center',border:[true,false,true,true]},
                      {text:`FECHA \n ${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true]}]
               ]
          },
			layout:{
				defaultBorder: false
			},
			margin:[85,0]
      }
	    ]
 ,
  pageSize: 'LETTER',
  pageOrientation: 'landscape',
  pageMargins: [22, 130]
	
};
this.pdfMaker.generate(dd,'Registro y control de quejas');
  }
  
}
