import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from '../../services/firma-estacion-service.service';
import { IconoEstacionService } from '../../services/iconosEstacion.service';
import { MarcaAguaServiceService } from '../../services/marca-agua-service.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';

@Component({
  selector: 'app-punto-seis-programa-capacitacion',
  templateUrl: './punto-seis-programa-capacitacion.page.html',
  styleUrls: ['./punto-seis-programa-capacitacion.page.scss'],
})
export class PuntoSeisProgramaCapacitacionPage implements OnInit {
  myImage = null;
  firmaEstacion = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;
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

  constructor(
    private pdfMakerService: PdfMakerService,
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService,
    private datosEstacionService:EstacionServicioDatosService) { }

  ngOnInit() {
    this.getDatosEstacion();
    this.imagen64();
    this.getMarcaAgua();
    this.getFirma();
    this.getIcono();
  }
  getDatosEstacion(){
    this.datosEstacionService.getEstacion().subscribe((data:any) =>{
      //console.log(data.findEstacion[data.findEstacion.length -1]);
      this.datosEstacion = data.findEstacion[data.findEstacion.length -1];
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


  pdf(){
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;  
    let footer = this.myImage;
    let ddd = this.datosEstacion;// playground requires you to assign document definition to a variable called dd

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
                        text:`PROGRAMA DE CAPACITACIÓN ${year}`,fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
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
        widths: [650],
             body : [
             [{columns:[
                 'Página' + currentPage.toString() + ' de ' + pageCount,
                 {text:`FS-16 Rev. 0,,  ${day}/${month}/${year}`,width: 180}
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
                widths:[20,150,100,120,60,90,90,40],
                heights:[25,25,25,25,25,25,25,25,25,25],
                body:[
                      [
                          {text:`NO.`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                          {text:`NOMBRE DEL CURSO`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                          {text:`OBJETIVO`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                          {text:`CONTENIDO`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                          {text:`DURACIÓN (horas)`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                          {text:`MODALIDAD (Interna/Externa)`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                          {text:`METODOLOGÍA (Curso, taller, etc.)`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                          {text:`COSTO (pesos)`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                      ],[
                          {text:`|`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                      ],[
                          {text:`2`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                      ],[
                          {text:`4`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                      ],[
                          {text:`5`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                      ],[
                          {text:`6`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                      ],[
                          {text:`7`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                      ],[
                          {text:`8`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                      ],[
                          {text:`9`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                      ],[
                          {text:`10`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                      ]
                    ]
            }  
          },{text:'\n\n\nCRONOGRAMA'},{
            table:{
                widths:[15,200,150,20,20,20,20,20,20,20,20,20,20,20,20],
                heights:[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,],
                body:[
                    [
                        {text:`NO.`,bold:true,fillColor:'#a5c3dd',fontSize:8},
                        {text:`NOMBRE DEL CURSO`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`INSTRUCTOR `,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`ENE`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`FEB`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`MAR`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`ABR`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`MAY`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`JUN`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`JUL`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`AGO`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`SEP`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`OCT`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`NOV`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        {text:`DIC`,bold:true,fillColor:'#a5c3dd',fontSize:8,alignment:'center'},
                        ],[
                          {text:`1`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                        ],[
                          {text:`2`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                        ],[
                          {text:`3`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                        ],[
                          {text:`4`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                        ],[
                          {text:`5`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                        ],[
                          {text:`6`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                        ],[
                          {text:`7`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                        ],[
                          {text:`8`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                        ],[
                          {text:`9`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                        ],[
                          {text:`10`,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                          {text:``,fontSize:8},
                        ]
                    ]
            }  
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
                          {text:`FECHA DE APROBACIÓN:\nAgregar fecha ${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true]}]
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
    this.pdfMakerService.generate(dd,'Programa de capacitación')
  }
}
