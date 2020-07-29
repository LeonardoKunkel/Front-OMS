import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';

@Component({
  selector: 'app-punto-seis-deteccion-necesidades',
  templateUrl: './punto-seis-deteccion-necesidades.page.html',
  styleUrls: ['./punto-seis-deteccion-necesidades.page.scss'],
})
export class PuntoSeisDeteccionNecesidadesPage implements OnInit {
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
  iconoEstacion = null;
  marcaAguaEstacion = null;
  constructor(
    private pdfMaker: PdfMakerService,
    private estacionService: EstacionServicioDatosService,
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService
    ) { }

  ngOnInit() {
    this.imagen64();
    this.getMarcaAgua();
    this.getFirma();
    this.getIcono();
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
                    }],[
                      {
                          text:'DETECCIÓN DE NECESIDADES DE CAPACITACIÓN',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                      },{
                          
                      }
                      ],[
                          {
                            text:'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
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
                   {text:`FS-15 Rev., ${day}/${month}/${year}`,width: 180}
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
            table:{
                widths:[560],
                body:[
                    [{text:`1. DETECCIÓN DE NECESIDADES DE CAPACITACIÓN`,bold:true,fillColor:'#a5c3dd',fontSize:8}]
                    ]
            }  
          },{text:'\n'},
          {
            table:{
                widths:[130,10,190,10,170,10],
                body:[
                    [
                        {text:`DESARROLLO LABORAL `,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'},
                        {text:`DESARROLLO ORGANIZACIONAL`,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'},
                        {text:`SOLUCIÓN DE PROBLEMA`,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'}
                    ],[
                        {text:`Nuevo Ingreso`,fontSize:6},
                        {text:`X`,fontSize:6},
                        {text:` Cambio de Tecnología/proceso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Queja de clientes`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Promoción`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Cambio de personal `,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`No conformidad de Auditoría`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Ascenso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Actualización de procedimientos`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Bajo desempeño`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Reentrenamiento`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Cambio de Normatividad `,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Recomendación de ICR`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Actualización trianual`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Refuerzo de la política`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`No se cumplen los objetivos`,fontSize:6},
                        {text:``,fontSize:6}
                    ]
                ]
            }  
          },
        {
          text:'\n'
        },{
            table:{
                widths:[560],
                  heights: [6,6,6,6],
                body:[
                    [{text:`SITUACIÓN ACTUAL`,bold:true,fillColor:'#a5c3dd',fontSize:8}],
                    [{text:`El personal necesita reforzar el aprendizaje de la metodología a seguir en caso de necesitarse primeros auxilios de primer contacto.`,fontSize:6,alignment:'justify'},],
                    [{text:``,fontSize:6},],
                    [{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[560],
                  heights: [6,6,6,6],
                body:[
                    [{text:`SITUACIÓN DESEADA`,bold:true,fillColor:'#a5c3dd',fontSize:8}],
                    [{text:`Conocer cómo comportarse ante una persona lesionada que requiera primer auxilio.`,fontSize:6,alignment:'justify'},],
                    [{text:`Entender que solamente realizarán maniobras estabilizadoras de primer contacto`,fontSize:6},],
                    [{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[15,545],
                  heights: [6,6,6,6],
                body:[
                    [{text:`OBJETIVOS DE LA NECESIDAD`,bold:true,fillColor:'#a5c3dd',colSpan:2,fontSize:8},{text:``,fontSize:6},],
                    [{text:`1`,fontSize:6,bold:true},{text:`Salvar la vida de las personas en peligro`,fontSize:6,alignment:'justify'}],
                    [{text:`2`,fontSize:6,bold:true},{text:`Mayor conciencia de seguridad`,fontSize:6},],
                    [{text:`3`,fontSize:6,bold:true},{text:`Evitar complicaciones graves del lesionado`,fontSize:6},],
                    [{text:`4`,fontSize:6,bold:true},{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[15,545],
                  heights: [6,6,6,6],
                body:[
                    [{text:`TEMAS PARA CAPACITACIÓN`,bold:true,fillColor:'#a5c3dd',colSpan:2,fontSize:8},{text:``,fontSize:6},],
                    [{text:`1`,fontSize:6,bold:true},{text:`Primeros auxilios de primer contacto`,fontSize:6,alignment:'justify'}],
                    [{text:`2`,fontSize:6,bold:true},{text:`Técnicas y manejo inmediato al lesionado`,fontSize:6},],
                    [{text:`3`,fontSize:6,bold:true},{text:`Traslado a un puesto de socorro`,fontSize:6},],
                    [{text:`4`,fontSize:6,bold:true},{text:``,fontSize:6},]
                    
                    ]
            }
        },{
          text:`\n`  
        },
          {
              table: {
                   widths: [360,200],
                   heights: [50,30],
                   body: [
                       [
                           {
                             image:`${firmaEstacion}`,
                             fit:[100,50],
                             alignment:'center',
                             border:[true,true,true,false]
                           },{
                             text:'',
                             fit:[100,50],
                             alignment:'center',
                             border:[true,true,true,false]
                           }
                           ],
                      [
                          {text:`${ddd.maximaAutoridad} \n Jefe de la Estación de Servicio`,alignment:'center',border:[true,false,true,true]},
                          {text:`Fecha\n${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true]},
                     ]
                   ]
              },
          layout:{
            defaultBorder: false
          }
          }
          ]
     ,
      pageSize: 'LETTER',
      pageMargins: [22, 130]
      
    };
    this.pdfMaker.generate(dd,'Nuevo ingreso')
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
                    }],[
                      {
                          text:'DETECCIÓN DE NECESIDADES DE CAPACITACIÓN',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                      },{
                          
                      }
                      ],[
                          {
                            text:'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
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
                   {text:`FS-15 Rev., ${day}/${month}/${year}`,width: 180}
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
            table:{
                widths:[560],
                body:[
                    [{text:`1. DETECCIÓN DE NECESIDADES DE CAPACITACIÓN`,bold:true,fillColor:'#a5c3dd',fontSize:8}]
                    ]
            }  
          },{text:'\n'},
          {
            table:{
                widths:[130,10,190,10,170,10],
                body:[
                    [
                        {text:`DESARROLLO LABORAL `,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'},
                        {text:`DESARROLLO ORGANIZACIONAL`,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'},
                        {text:`SOLUCIÓN DE PROBLEMA`,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'}
                    ],[
                        {text:`Nuevo Ingreso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:` Cambio de Tecnología/proceso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Queja de clientes`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Promoción`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Cambio de personal `,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`No conformidad de Auditoría`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Ascenso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Actualización de procedimientos`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Bajo desempeño`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Reentrenamiento`,fontSize:6},
                        {text:`X`,fontSize:6},
                        {text:`Cambio de Normatividad `,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Recomendación de ICR`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Actualización trianual`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Refuerzo de la política`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`No se cumplen los objetivos`,fontSize:6},
                        {text:``,fontSize:6}
                    ]
                ]
            }  
          },
        {
          text:'\n'
        },{
            table:{
                widths:[560],
                  heights: [6,6,6,6],
                body:[
                    [{text:`SITUACIÓN ACTUAL`,bold:true,fillColor:'#a5c3dd',fontSize:8}],
                    [{text:`El personal desconoce los procedimientos a seguir en caso de presentarse un incendio menor dentro de las instalaciones.`,fontSize:6,alignment:'justify'},],
                    [{text:``,fontSize:6},],
                    [{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[560],
                  heights: [6,6,6,6],
                body:[
                    [{text:`SITUACIÓN DESEADA`,bold:true,fillColor:'#a5c3dd',fontSize:8}],
                    [{text:`Es necesario que la plantilla laboral se actualice en el conocimiento del uso adecuado de extintores portátiles y las diversas conductas adecuadas para enfrentar una situación de conato de incendio.`,fontSize:6,alignment:'justify'},],
                    [{text:``,fontSize:6},],
                    [{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[15,545],
                  heights: [6,6,6,6],
                body:[
                    [{text:`OBJETIVOS DE LA NECESIDAD`,bold:true,fillColor:'#a5c3dd',colSpan:2,fontSize:8},{text:``,fontSize:6},],
                    [{text:`1`,fontSize:6,bold:true},{text:`Salvar la vida de las personas en peligro`,fontSize:6,alignment:'justify'}],
                    [{text:`2`,fontSize:6,bold:true},{text:`Mayor conciencia de seguridad`,fontSize:6},],
                    [{text:`3`,fontSize:6,bold:true},{text:`Resguardar la integridad de las instalaciones`,fontSize:6},],
                    [{text:`4`,fontSize:6,bold:true},{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[15,545],
                  heights: [6,6,6,6],
                body:[
                    [{text:`TEMAS PARA CAPACITACIÓN`,bold:true,fillColor:'#a5c3dd',colSpan:2,fontSize:8},{text:``,fontSize:6},],
                    [{text:`1`,fontSize:6,bold:true},{text:`Química y comportamiento del fuego`,fontSize:6,alignment:'justify'}],
                    [{text:`2`,fontSize:6,bold:true},{text:`Prevención contra incendios`,fontSize:6},],
                    [{text:`3`,fontSize:6,bold:true},{text:`Plan de acción para caso de incendios`,fontSize:6},],
                    [{text:`4`,fontSize:6,bold:true},{text:`Extintores portátiles`,fontSize:6},]
                    
                    ]
            }
        },{
          text:`\n`  
        },
          {
              table: {
                   widths: [360,200],
                   heights: [50,30],
                   body: [
                       [
                           {
                             image:`${firmaEstacion}`,
                             fit:[100,50],
                             alignment:'center',
                             border:[true,true,true,false]
                           },{
                             text:'',
                             fit:[100,50],
                             alignment:'center',
                             border:[true,true,true,false]
                           }
                           ],
                      [
                          {text:`${ddd.maximaAutoridad} \n Jefe de la Estación de Servicio`,alignment:'center',border:[true,false,true,true]},
                          {text:`Fecha\n${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true]},
                     ]
                   ]
              },
          layout:{
            defaultBorder: false
          }
          }
          ]
     ,
      pageSize: 'LETTER',
      pageMargins: [22, 130]
      
    };
    this.pdfMaker.generate(dd,'Reentrenamiento')
  }
  pdf3(){
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;  
    let footer = this.myImage;
    let ddd = this.datosEstacion;
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
                  }],[
                    {
                        text:'DETECCIÓN DE NECESIDADES DE CAPACITACIÓN',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                    },{
                        
                    }
                    ],[
                        {
                          text:'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
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
                 {text:`FS-15 Rev., ${day}/${month}/${year}`,width: 180}
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
            table:{
                widths:[560],
                body:[
                    [{text:`1. DETECCIÓN DE NECESIDADES DE CAPACITACIÓN`,bold:true,fillColor:'#a5c3dd',fontSize:8}]
                    ]
            }  
          },{text:'\n'},
          {
            table:{
                widths:[130,10,190,10,170,10],
                body:[
                    [
                        {text:`DESARROLLO LABORAL `,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'},
                        {text:`DESARROLLO ORGANIZACIONAL`,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'},
                        {text:`SOLUCIÓN DE PROBLEMA`,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2,fontSize:8},
                        {text:``,bold:true,fillColor:'#a5c3dd'}
                    ],[
                        {text:`Nuevo Ingreso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:` Cambio de Tecnología/proceso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Queja de clientes`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Promoción`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Cambio de personal `,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`No conformidad de Auditoría`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Ascenso`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Actualización de procedimientos`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Bajo desempeño`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Reentrenamiento`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Cambio de Normatividad `,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Recomendación de ICR`,fontSize:6},
                        {text:``,fontSize:6}
                    ],[
                        {text:`Actualización trianual`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`Refuerzo de la política`,fontSize:6},
                        {text:``,fontSize:6},
                        {text:`No se cumplen los objetivos`,fontSize:6},
                        {text:``,fontSize:6}
                    ]
                ]
            }  
          },
        {
          text:'\n'
        },{
            table:{
                widths:[560],
                  heights: [6,6,6,6],
                body:[
                    [{text:`SITUACIÓN ACTUAL`,bold:true,fillColor:'#a5c3dd',fontSize:8}],
                    [{text:``,fontSize:6,alignment:'justify'},],
                    [{text:``,fontSize:6},],
                    [{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[560],
                  heights: [6,6,6,6],
                body:[
                    [{text:`SITUACIÓN DESEADA`,bold:true,fillColor:'#a5c3dd',fontSize:8}],
                    [{text:``,fontSize:6,alignment:'justify'},],
                    [{text:``,fontSize:6},],
                    [{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[15,545],
                  heights: [6,6,6,6],
                body:[
                    [{text:`OBJETIVOS DE LA NECESIDAD`,bold:true,fillColor:'#a5c3dd',colSpan:2,fontSize:8},{text:``,fontSize:6},],
                    [{text:`1`,fontSize:6,bold:true},{text:``,fontSize:6,alignment:'justify'}],
                    [{text:`2`,fontSize:6,bold:true},{text:``,fontSize:6},],
                    [{text:`3`,fontSize:6,bold:true},{text:``,fontSize:6},],
                    [{text:`4`,fontSize:6,bold:true},{text:``,fontSize:6},]
                    
                    ]
            }
        },
        {
          text:'\n'
        },{
            table:{
                widths:[15,545],
                  heights: [6,6,6,6],
                body:[
                    [{text:`TEMAS PARA CAPACITACIÓN`,bold:true,fillColor:'#a5c3dd',colSpan:2,fontSize:8},{text:``,fontSize:6},],
                    [{text:`1`,fontSize:6,bold:true},{text:``,fontSize:6,alignment:'justify'}],
                    [{text:`2`,fontSize:6,bold:true},{text:``,fontSize:6},],
                    [{text:`3`,fontSize:6,bold:true},{text:``,fontSize:6},],
                    [{text:`4`,fontSize:6,bold:true},{text:``,fontSize:6},]
                    
                    ]
            }
        },{
          text:`\n`  
        },
          {
              table: {
                   widths: [360,200],
                   heights: [50,30],
                   body: [
                       [
                           { 
                             image:`${firmaEstacion}`,
                             fit:[100,50],
                             alignment:'center',
                             border:[true,true,true,false]
                           },{
                             text:'',
                             fit:[100,50],
                             alignment:'center',
                             border:[true,true,true,false]
                           }
                           ],
                      [
                          {text:`${ddd.maximaAutoridad} \n Jefe de la Estación de Servicio`,alignment:'center',border:[true,false,true,true]},
                          {text:`Fecha\n${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true]},
                     ]
                   ]
              },
          layout:{
            defaultBorder: false
          }
          }
          ]
     ,
      pageSize: 'LETTER',
      pageMargins: [22, 130]
      
    };
    this.pdfMaker.generate(dd,'Curso extra')
  }

}
