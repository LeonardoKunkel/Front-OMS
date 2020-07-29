import { Component, OnInit } from '@angular/core';
import { ObjetivosMetasService } from '../../services/Elemento 4/objetivos-metas.service';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-catorce-resultado',
  templateUrl: './punto-catorce-resultado.page.html',
  styleUrls: ['./punto-catorce-resultado.page.scss'],
})
export class PuntoCatorceResultadoPage implements OnInit {
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

  datosObjetivos:any={
    cumplimientoProgramaMantenimiento: false,
    incrementarCapacitaciones: false,
    incrementarVentaAnualmente: false,
    reduccionConsumoAgua: false,
    reduccionConsumoEnergia: false,
    reduccionGeneracionResiduos: false,
  }
  printDatos:any={
    dato1: '',
    pAA1: '',
    dato2: '',
    pAA2: '',
    dato3: '',
    pAA3: '',
  }
  constructor( 
    private objetivosService: ObjetivosMetasService,
    private firma : FirmaEstacionServiceService,
    private icono : IconoEstacionService,
    private marcaAgua : MarcaAguaServiceService,
    private datosService : EstacionServicioDatosService,
    private pdfMAke : PdfMakerService
    ) {
    this.getObjetivos();
    this.getDatos();
   }

  ngOnInit() {
    this.getFirma();
    this.getIcono();
    this.getMarca();
    this.imagen64();
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

  getDatos(){
    this.datosService.getEstacion().subscribe((data:any) =>{
      //console.log(data);
      this.datos = data.findEstacion[data.findEstacion.length-1];
    })
  }
  getObjetivos(){
    this.objetivosService.getObjetivo().subscribe((data:any)=>{
      this.datosObjetivos = data.findMetas[data.findMetas.length -1];
      //console.log(this.datosObjetivos);
      this.checkOject();
    })
  }

  checkOject(){
    let cuatro = this.datosObjetivos.cumplimientoProgramaMantenimiento;
    let cinco = this.datosObjetivos.incrementarCapacitaciones;
    let seis = this.datosObjetivos.incrementarVentaAnualmente;
    let dos = this.datosObjetivos.reduccionConsumoAgua;
    let tres = this.datosObjetivos.reduccionConsumoEnergia;
    let uno = this.datosObjetivos.reduccionGeneracionResiduos;
  
    if (uno === true && dos === true && tres === true) {
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Reducción en el consumo de agua';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato3 = 'Reducción en el consumo de energia';
      this.printDatos.pAA3 = 'Protección Ambiental';
     // alert('123')
    }else if(uno === true && dos === true && cuatro === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Reducción en el consumo de agua';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato3 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.pAA1 = 'Seguridad,operación y mantenimiento';
     // alert('124')
    }else if(uno === true && dos === true && cinco === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Reducción en el consumo de agua';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.pAA3 = 'Operación';
     // alert('125')
     }else if(uno === true && dos === true && seis === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Reducción en el consumo de agua';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      this.printDatos.pAA2 = 'Operacion';
       //alert('126')
     }else if(uno === true && tres === true && cuatro === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato3 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.pAA3 = 'Operación';
       //alert('134')
     }else if(uno === true && tres === true && cinco === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.pAA3 = 'Operación';
       //alert('135')
     }else if(uno === true && tres === true && seis === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      this.printDatos.pAA3 = 'Operación';
       //alert('136')
     }else if(uno === true && cuatro === true && cinco=== true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.pAA2 = 'Operación';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.pAA3 = 'Operacion';
       //alert('145')
     }else if(uno === true && cuatro=== true && seis === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.pAA2 = 'Operación';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      this.printDatos.pAA3 = 'Operación';
      // alert('146')
     }else if(dos === true && tres === true && cuatro === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato3 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.pAA3 = 'Operación';
      // alert('234')
     }else if(dos === true && tres === true && cinco === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.pAA3 = 'Operación';
      // alert('235')
     }else if(dos === true && tres === true && seis === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.pAA2 = 'Protección Ambiental';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      this.printDatos.pAA3 = 'Operación';
      // alert('236')
     }else if(dos === true && cuatro === true && cinco === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.pAA2 = 'Operación';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.pAA3 = 'Operación';
      //alert('245')
     }else if(dos === true && cuatro === true && seis === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.pAA2 = 'Operación';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      this.printDatos.pAA3 = 'Operación';
      //alert('246')
     }else if(dos === true && cinco === true && seis === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.pAA2 = 'Operación';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      this.printDatos.pAA3 = 'Operación';
      //alert('256')
     }else if(tres === true && cuatro === true && cinco === true){
      this.printDatos.dato1 = 'Reducción en el consumo de energia';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.pAA2 = 'Operación';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.pAA3 = 'Operación';
      //alert('345')
     }else if(tres=== true && cuatro === true && seis === true){
      this.printDatos.dato1 = 'Reducción en el consumo de energia';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.pAA2 = 'Operación';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      this.printDatos.pAA3 = 'Operación';
      // alert('346')
     }else if(tres === true && cinco === true && seis === true){
      this.printDatos.dato1 = 'Reducción en el consumo de energia';
      this.printDatos.pAA1 = 'Protección Ambiental';
      this.printDatos.dato2 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.pAA2 = 'Operación';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      this.printDatos.pAA3 = 'Operación';
      // alert('356')
     }else if(cuatro === true && cinco === true && seis === true){
      this.printDatos.dato1 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.pAA1 = 'Operación';
      this.printDatos.dato2 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.pAA2 = 'Operación';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      this.printDatos.pAA3 = 'Operación';
      // alert('456')
     }
  }

  read(){
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    const marcaAguaEstacion = this.marcaAguaEstacion; 
    const firmaEstacion = this.firmaEstacion;
    const iconoEstacion = this.iconoEstacion;  
    const ddd = this.datos;
    let footer = this.myImage;
    let printDatos = this.printDatos; 
    //console.log(this.printDatos);// playground requires you to assign document definition to a variable called dd

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
                heigths:[215,90,50],
                widths:[70,120,75,60,75,50,40,40,40,40,40],
                body:[
                    [{text:'CODIFICACIÓN',fontSize:9,alignment:'center',bold:true,fillColor:'#B0C4DE'},
                    {text:'INDICADOR',fontSize:9,alignment:'center',bold:true,fillColor:'#B0C4DE'},
                    {text:'PROCESO, ÁREA O ACTIVIDAD',fontSize:9,alignment:'center',bold:true,fillColor:'#B0C4DE'},
                    {text:'CRITERIO DE ACEPTACIÓN ',fontSize:9,alignment:'center',bold:true,fillColor:'#B0C4DE'},
                    {text:'RESPONSABLE',fontSize:9,alignment:'center',bold:true,fillColor:'#B0C4DE'},
                    {text:'Resultado',fontSize:9,alignment:'center',bold:true,fillColor:'#B0C4DE'},
                    {text:'RESULTADOS PERIODOS ANTERIORES',fontSize:9,alignment:'center',bold:true,colSpan:5,fillColor:'#B0C4DE'},
                    {text:'INDICADOR',fonSize:9},
                    {text:'INDICADOR',fonSize:9},
                    {text:'INDICADOR',fonSize:9},
                    {text:'INDICADOR',fonSize:9}
                    ],[
                     {},{},{},{},{},{},{},{},{},{},{}     
                    ],
                    [
                    {text:'I-SASIPOA-01',fontSize:6,alignment:'center',bold:true},
                    {text:'Cumplimiento al programa de mantenimiento preventivo y predictivo',fontSize:6},
                    {text:'Mantenimiento',fontSize:6,alignment:'center'},
                    {text:'100%',fontSize:6,alignment:'center'},
                    {text:'Personal de mantenimiento',fontSize:6,alignment:'center'},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6}
                    ],
                    [
                    {text:'I-SASIPOA-02 ',fontSize:6,alignment:'center',bold:true},
                    {text:'Inspecciones y pruebas de tanques y de circuitos de tubería ',fontSize:6},
                    {text:'Mantenimiento',fontSize:6,alignment:'center'},
                    {text:'100%',fontSize:6,alignment:'center'},
                    {text:'Personal de mantenimiento',fontSize:6,alignment:'center'},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6}
                    ],
                    [
                    {text:'I-SASIPOA-03',fontSize:6,alignment:'center',bold:true},
                    {text:'Atención a las observaciones de verificaciones de la NOM-005-ASEA2016, análisis de riesgos y otras',fontSize:6},
                    {text:'Seguridad, operación y mantenimiento',fontSize:6,alignment:'center'},
                    {text:'100%',fontSize:6,alignment:'center'},
                    {text:'Representante Técnico',fontSize:6,alignment:'center'},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6}
                    ],
                    [
                    {text:'I-SASIPOA-04',fontSize:6,alignment:'center',bold:true},
                    {text:'Índice de frecuencia ',fontSize:6},
                    {text:'Seguridad ',fontSize:6,alignment:'center'},
                    {text:'0',fontSize:6,alignment:'center'},
                    {text:'Representante Técnico',fontSize:6,alignment:'center'},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6}
                    ],
                    [
                    {text:'I-SASIPOA-05',fontSize:6,alignment:'center',bold:true},
                    {text:'Índice de gravedad ',fontSize:6},
                    {text:'Seguridad ',fontSize:6,alignment:'center'},
                    {text:'0',fontSize:6,alignment:'center'},
                    {text:'Representante Técnico',fontSize:6,alignment:'center'},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6}
                    ],
                    [
                    {text:'I-SASIPOA-06',fontSize:6,alignment:'center',bold:true},
                    {text:'Implementación del SASISOPA',fontSize:6},
                    {text:'Seguridad,operación y mantenimiento',fontSize:6,alignment:'center'},
                    {text:'50%',fontSize:6,alignment:'center'},
                    {text:'Representante Técnico',fontSize:6,alignment:'center'},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6}
                    ],
                    [
                    {text:'I-SASIPOA-07',fontSize:6,alignment:'center',bold:true},
                    {text:'Cumplimiento a requisitos legales',fontSize:6},
                    {text:'Seguridad,operación y mantenimiento',fontSize:6,alignment:'center'},
                    {text:'100%',fontSize:6,alignment:'center'},
                    {text:'Representante Técnico',fontSize:6,alignment:'center'},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6}
                    ],////////////////////////////////////////////////////
                    [
                    {text:'I-SASIPOA-08',fontSize:6,alignment:'center',bold:true},
                    {text:`${printDatos.dato1}`,fontSize:6},
                    {text:`${printDatos.pAA1}`,fontSize:6,alignment:'center'},
                    {text:'5%',fontSize:6,alignment:'center'},
                    {text:'Representante Técnico',fontSize:6,alignment:'center'},
                    {text:``,fontSize:9},
                    {text:``,fontSize:9},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6}
                    ],
                    [
                    {text:'I-SASIPOA-09',fontSize:6,alignment:'center',bold:true},
                    {text:`${printDatos.dato2}`,fontSize:6},
                    {text:`${printDatos.pAA2}`,fontSize:6,alignment:'center'},
                    {text:'5%',fontSize:6,alignment:'center'},
                    {text:'Representante Técnico',fontSize:6,alignment:'center'},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6}
                    ],
                    [
                    {text:'I-SASIPOA-10',fontSize:6,alignment:'center',bold:true},
                    {text:`${printDatos.dato3}`,fontSize:6},
                    {text:`${printDatos.pAA3}`,fontSize:6,alignment:'center'},
                    {text:'5%',fontSize:6,alignment:'center'},
                    {text:'Representante Técnico',fontSize:6,alignment:'center'},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6},
                    {text:``,fontSize:6}
                    ],
                    ]
            }  
          },{
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
                          {text:`APROBADO POR:\n ${ddd.maximaAutoridad}\nMAXIMA AUTORIDAD`,alignment:'center',border:[true,false,true,true]},
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
    this.pdfMAke.generate(dd,'Resultado del monitoreo')
    
  }; 
}
