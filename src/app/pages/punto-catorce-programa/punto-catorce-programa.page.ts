import { Component, OnInit } from '@angular/core';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-punto-catorce-programa',
  templateUrl: './punto-catorce-programa.page.html',
  styleUrls: ['./punto-catorce-programa.page.scss'],
})
export class PuntoCatorceProgramaPage implements OnInit {
  firmaEstacion: null;
  iconoEstacion: null;
  marcaAguaEstacion: null;
  datos:{
    calleNumero: " ",
    ciudad: " ",
    colonia: " ",
    correoElectronico: " ",
    cp: " ",
    estado: " ",
    gerenteEstacion: " ",
    maximaAutoridad: " ",
    nombreEstacionServicio: " ",
    representanteTecnico: " ",
    telefono: " ",
  }
  myImage = null;
  
  constructor(
    private firma : FirmaEstacionServiceService,
    private icono: IconoEstacionService,
    private marcaAgua: MarcaAguaServiceService,
    private pdfMake: PdfMakerService,
    private datosEstacion: EstacionServicioDatosService
  ) { }

  ngOnInit() {
    this.getFirma();
    this.getIcono();
    this.getMarca();
    this.getDatosEstacion();
    this.imagen64();
  }

  getDatosEstacion(){
    this.datosEstacion.getEstacion().subscribe((data:any)=>{
      //console.log(data.findEstacion[data.findEstacion.length-1],'datos estacion');
      this.datos = data.findEstacion[data.findEstacion.length-1];
    })
  }

  getFirma(){
    this.firma.getFirmaEstacion().subscribe((data:any) =>{
      //console.log('Firma',data.findFirma[data.findFirma.length -1].firma);
      this.firmaEstacion = data.findFirma[data.findFirma.length -1].firma;
    })
  }

  getIcono(){
    this.icono.getPolitica().subscribe((data:any) =>{
      //console.log('Icono',data.findPolitica[data.findPolitica.length-1].imagen);
      this.iconoEstacion = data.findPolitica[data.findPolitica.length-1].imagen;
    })
  }

  getMarca(){
    this.marcaAgua.getMarcaAgua().subscribe((data:any)=>{
      //console.log('Marca agua',data.findMarcaAgua[data.findMarcaAgua.length-1].marcaAgua);
      this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length-1].marcaAgua;
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

  pdf(){// playground requires you to assign document definition to a variable called dd
    const marcaAguaEstacion = this.marcaAguaEstacion; 
    const firmaEstacion = this.firmaEstacion;
    const iconoEstacion = this.iconoEstacion;  
    const ddd = this.datos;
    let footer = this.myImage;
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
var dd = {
  userPassword: '123',
  ownerPassword: '123456',
  permissions: {
    printing: 'highResolution', //'lowResolution'
    modifying: false,
    copying: false,
    annotating: true,
    fillingForms: true,
    contentAccessibility: true,
    documentAssembly: true
  },
  background: function(currentPage, pageSize) {
  return {
      image: `${marcaAguaEstacion}`,
      width: 710,
      height: 350, 
      absolutePosition: {x: 40, y: 150},opacity: 0.5}
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
                width: 70,
                height: 70,
                alignment:'center',
                border:[true,true,false,true],
                },{
                    text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:17,alignment: 'center', margin:[0,15],
                border:[false,true,true,true],
                }
            ],[
                {
                    text:'RESULTADO DEL MONITOREO Y MEDICIÓN DE PARAMETROS DE DESEMPEÑO',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                },{
                    
                }
                ],[
                    {
                      text:'XIV. MONITOREO, VERIFICACIÓN Y EVALUACIÓN',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
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
  footer: function(){
    return {
        table:{
      headerRows:1, 
      widths: [650],
           body : [
           [''],
           [''],
           [{
            image: `${footer}`,
            pageBreak: 'after',
            width: 650,
            height: 80,
             }]
               ]
         }, layout : 'headerLineOnly',
        margin: [72,20]
    };
  },
  
	content: [
	    {
	      table:{
        widths: [30,170,140,80,15,15,15,15,15,15,15,15,15,15,15,15],
	          body:[
	              [
	                  {text:`Sigla`,fillColor:'#a5c3dd',bold:true,fontSize:9,rowSpan:2,alignment:'center'},
	                  {text:`Indicador`,fillColor:'#a5c3dd',bold:true,fontSize:9,rowSpan:2,alignment:'center'},
	                  {text:`Proceso, área o actividad `,fillColor:'#a5c3dd',bold:true,fontSize:9,rowSpan:2,alignment:'center'},
	                  {text:`Criterio de aceptación `,fillColor:'#a5c3dd',bold:true,fontSize:9,rowSpan:2,alignment:'center'},
	                  {text:`${year}`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center',colSpan:12},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`SIGLA`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  ],
	              [
	                  {text:`Sigla`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`Indicador`,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`Proceso, área o actividad `,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`Criterio de aceptación `,fillColor:'#a5c3dd',bold:true,fontSize:9},
	                  {text:`E`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`F`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`M`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`A`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`M`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`J`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`J`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`A`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`S`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`O`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`N`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  {text:`D`,fillColor:'#a5c3dd',bold:true,fontSize:9,alignment:'center'},
	                  ],[
	                  {text:`I.F.`,alignment:'center',fontSize:7},
	                  {text:`ÍNDICE DE FRECUENCIA`,fontSize:7},
	                  {text:`SEGURIDAD`,fontSize:7},
	                  {text:`0`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.G.`,alignment:'center',fontSize:7},
	                  {text:`ÍNDICE DE GRAVEDAD `,fontSize:7},
	                  {text:`SEGURIDAD`,fontSize:7},
	                  {text:`0`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.ICR`,alignment:'center',fontSize:7},
	                  {text:`CUMPLIMIENTO DE ICR´s`,fontSize:7},
	                  {text:`SEGURIDAD`,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.CAP `,alignment:'center',fontSize:7},
	                  {text:`ÍNDICE DE CAPACITACIÓN PROCEDIMIENTOS `,fontSize:7},
	                  {text:`SEGURIDAD, OPERACIÓN `,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.SIM `,alignment:'center',fontSize:7},
	                  {text:`CUMPLIMIENTO PROGRAMA DE SIMULACROS  `,fontSize:7},
	                  {text:`SEGURIDAD`,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.RES `,alignment:'center',fontSize:7},
	                  {text:`DISPOSICIÓN DE RESIDUOS  `,fontSize:7},
	                  {text:`PROTECCION AMBIENTAL `,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.IM `,alignment:'center',fontSize:7},
	                  {text:`CUMPLIMIENTO PROG. MANTTO.`,fontSize:7},
	                  {text:`SEGURIDAD, PROTECC. AMBIENTAL`,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.HA`,alignment:'center',fontSize:7},
	                  {text:`ATENCIÓN HALLAZGOS AUDITORIA `,fontSize:7},
	                  {text:`SEGURIDAD, PROTECC. AMBIENTAL `,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.PE`,alignment:'center',fontSize:7},
	                  {text:`PRUEBAS DE EQUIPOS DE SEGURIDAD`,fontSize:7},
	                  {text:`SEGURIDAD OPERACIÓN`,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.REC`,alignment:'center',fontSize:7},
	                  {text:`ATENCIÓN RECOMENDACIONES`,fontSize:7},
	                  {text:`SEGURIDAD, PROTECC. AMBIENTAL `,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.RG`,alignment:'center',fontSize:7},
	                  {text:`CUMPLIMIENTO DE REQUISITOS LEGALES`,fontSize:7},
	                  {text:`SEGURIDAD, PROTECC. AMBIENTAL `,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.AAS `,alignment:'center',fontSize:7},
	                  {text:`CONTAMINACIONES (AIRE, AGUA, SUELO)`,fontSize:7},
	                  {text:`PROTECCION AMBIENTAL`,fontSize:7},
	                  {text:`0`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.LIM`,alignment:'center',fontSize:7},
	                  {text:`PROGRAMA DE LIMPIEZA`,fontSize:7},
	                  {text:`SEGURIDAD, PROTECC. AMBIENTAL`,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.PH `,alignment:'center',fontSize:7},
	                  {text:`PRUEBAS DE HERMETICIDAD`,fontSize:7},
	                  {text:`SEGURIDAD, OPERACIÓN`,fontSize:7},
	                  {text:`1`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ],[
	                  {text:`I.CO`,alignment:'center',fontSize:7},
	                  {text:`CUMPLIMIENTO DE COMUNICACIONES`,fontSize:7},
	                  {text:`SEGURIDAD`,fontSize:7},
	                  {text:`100`,alignment:'center',fontSize:7},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  {text:``},
	                  {text:``,fillColor:'#157FD6'},
	                  {text:``},
	                  ]
	              ],
	      }  
	    },
	    {
	      text:'\n',  
	    },
      { 
          table: {
               widths: [200,200,140],
               heights: [50,30],
               body: [
                   [
                       {
                         text:'',
                         fit:[100,50],
                         alignment:'center',
                         border:[true,true,true,false]
                       },{
                         image:`${firmaEstacion}`,
                         fit:[100,50],
                         alignment:'center',
                         border:[true,true,true,false]
                       },{
                         text:'',
                         fit:[100,50],
                         alignment:'center',
                         border:[true,true,true,false]
                       }],
                  [
                      {text:`REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,alignment:'center',border:[true,false,true,true]},
                      {text:`APROBADO POR:\n${ddd.maximaAutoridad}\nMAXIMA AUTORIDAD`,alignment:'center',border:[true,false,true,true]},
                      {text:`FECHA DE APROBACIÓN:\n${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true]}]
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
this.pdfMake.generate(dd,'pdf');
    
  }

}
