import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from '../../services/firma-estacion-service.service';
import { IconoEstacionService } from '../../services/iconosEstacion.service';
import { MarcaAguaServiceService } from '../../services/marca-agua-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';

@Component({
  selector: 'app-punto-tres-lista',
  templateUrl: './punto-tres-lista.page.html',
  styleUrls: ['./punto-tres-lista.page.scss'],
})
export class PuntoTresListaPage implements OnInit { 
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
    private datosEstacionService:EstacionServicioDatosService
    
    ) { }

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
    let ddd = this.datosEstacion;
    console.log('Descarga');// playground requires you to assign document definition to a variable called dd

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
                        text:'MATRIZ DE REQUERIMIENTOS Y ASPECTOS LEGALES FM-6.4-01',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                    },{
                        
                    }
                    ],[
                        {
                          text:'III. Identificación de Requisitos Legales',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
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
                 {text:`FS-23 Rev. 0, ${day}/${month}/${year}`,width: 180}
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
            widths: [200,120,120,150,90],
               body:[
                   [
                      {text:`INFORMACIÓN DEL REQUISITO`,colSpan:3,alignment:'center'},
                      {text:``},
                      {text:``},
                      {text:`APLICACIÓN Y EVALUACIÓN DEL REQUISITO`,alignment:'center'},
                      {text:`REFERENCIAS`,alignment:'center'},
                   ],[
                      {text:`NOMBRE DE LA LEGISLACIÓN`,bold:true,alignment:'center',fillColor:'#a5c3dd'},
                      {text:`NOMBRE DEL REQUISITO`,bold:true,alignment:'center',fillColor:'#a5c3dd'},
                      {text:`DEPENDENCIA (FEDERAL, ESTATAL O MUNICIPAL)`,bold:true,alignment:'center',fillColor:'#a5c3dd'},
                      {text:`CLAUSULA Y ARTICULOS QUE APLICAN`,bold:true,alignment:'center',fillColor:'#a5c3dd'},
                      {text:``,bold:true,alignment:'center',fillColor:'#a5c3dd'},
                   ],[
                      {text:`LEY GENERAL DEL EQUILIBRIO ECOLOGICO Y PROTECCIÓN AL AMBIENTE`,fontSize:8,alignment:'justify'},
                      {text:`LICENCIA AMBIENTAL UNICA`,fontSize:8,alignment:'center',rowSpan:2},
                      {text:`Federal`,fontSize:8,alignment:'center',rowSpan:2},
                      {text:`109 BIS1 Y 111 BIS`,fontSize:8,alignment:'center'},
                      {text: 'Consultar', link: 'DOFsr/148.pdf',fontSize:8,alignment:'center',color: 'blue'},
                   ],[
                      {text:`REGLAMENTO DE LA LEY GENERAL DEL EQUILIBRIO ECOLOGICO Y LA PROTECCIÓN AL AMBIENTE EN MATERIA DE PREVENCIÓN Y CONTROL DE LA ATMOSFERA`,fontSize:8,alignment:'justify'},
                      {text:``,fontSize:8,alignment:'center'},
                      {text:``,fontSize:8,alignment:'center'},
                      {text:`17 BIS`,fontSize:8,alignment:'center'},
                      {text: 'Consultar', link: 'http://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LGEEPA_MPCCA_311014.pdf',fontSize:8,alignment:'center',color:'blue'},
                   ],[
                      {text:`LEY GENERAL DEL EQUILIBRIO ECOLOGICO Y PROTECCIÓN AL AMBIENTE`,fontSize:8,alignment:'justify'},
                      {text:`Impacto Ambiental `,fontSize:8,alignment:'center'},
                      {text:`Federal`,fontSize:8,alignment:'center'},
                      {text:``,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`DISPOCIÓN LEGISLATIVA "CARÁCTER GENERAL QUE ESTABLECE LOS LINEAMIENTOS PARA LA GESTIÓN INTEGRAL DE LOS RESIDUOS DE MANEJO ESPCIAL DEL SECTOR DE HIDROCARBUROS"`,fontSize:8,alignment:'justify'},
                      {text:`REGISTRO COMO GENERADOR DE RESIDUOS DE MANEJO ESPECIAL`,fontSize:8,alignment:'center'},
                      {text:`Federal `,fontSize:8,alignment:'center'},
                      {text:`DISPOSICIONES GENERALES `,fontSize:8,alignment:'center'},
                      {text: 'Consultar', link: 'https://dof.gob.mx/nota_detalle.php?codigo=5459927&fecha=07/11/2016',color:'blue',fontSize:8,alignment:'center'},
                   ],[
                      {text:`NOM-005-ASEA-2016`,fontSize:8,alignment:'justify',rowSpan:2},
                      {text:`CERTIFICADO DE LIMPIEZAS ECOLOGICAS`,fontSize:8,alignment:'center'},
                      {text:`Federal `,fontSize:8,alignment:'center'},
                      {text:``,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:``,fontSize:8,alignment:'justify'},
                      {text:`MANIFIESTO DE DISPOSICIÓN DE RESIDUOS`,fontSize:8,alignment:'center'},
                      {text:`Federal`,fontSize:8,alignment:'center'},
                      {text:``,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`LEY DE HIDROCARBUROS`,fontSize:8,alignment:'justify',rowSpan:2},
                      {text:`PERMISO DEL EXPENDIO AL PUBLICO`,fontSize:8,alignment:'center'},
                      {text:`Federal `,fontSize:8,alignment:'center'},
                      {text:`TITULO III, CAPITULO I, ART.50 Y 51`,fontSize:8,alignment:'center'},
                      {text: 'Consultar',color:'blue', link: 'http://www.diputados.gob.mx/LeyesBiblio/pdf/LHidro_151116.pdf',fontSize:8,alignment:'center'},
                   ],[
                      {text:``,fontSize:8,alignment:'justify'},
                      {text:`POLIZA DE SEGURO `,fontSize:8,alignment:'center'},
                      {text:`Federal `,fontSize:8,alignment:'center'},
                      {text:`TITULO III, CAPITULO I, ART,50, INCISO IV`,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`NOM `,fontSize:8,alignment:'justify'},
                      {text:`Planos actualizados sellados con su respectivo oficio de Pemex`,fontSize:8,alignment:'center'},
                      {text:`Federal `,fontSize:8,alignment:'center'},
                      {text:`APARTADO V Y APARTADO VI`,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Reglamento Federal de Seguridad, Higiene y Medio Ambiente del Trabajo y NOM020`,fontSize:8,alignment:'justify',rowSpan:2},
                      {text:`Registro de Compresor y por Unidad Verificadora`,fontSize:8,alignment:'center'},
                      {text:`Federal`,fontSize:8,alignment:'center'},
                      {text:`Art. 29,30 y 31 del Reglamento Federal de Seguridad, Higiene y Carpetas de las 13 Normas Medio Ambiente del Trabajo y NOM-020-STPS-2011`,fontSize:8,alignment:'center',colSpan:2},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:``,fontSize:8,alignment:'justify'},
                      {text:`Carpetas de las 13 Normas`,fontSize:8,alignment:'center'},
                      {text:`Federal`,fontSize:8,alignment:'center'},
                      {text:``,fontSize:8,alignment:'center'},
                      {text: 'Consultar',color:'blue', link: 'http://www.stps.gob.mx/bp/secciones/dgsst/normatividad/n152.pdf',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Ley del Seguro Social y Reglamento de la Ley del Seguro Social en Materia de Filiación`,fontSize:8,alignment:'justify'},
                      {text:`Registro Patrona`,fontSize:8,alignment:'center'},
                      {text:`Federa`,fontSize:8,alignment:'center'},
                      {text:`Art. 15, 72, 73, 75 de la Ley y Art 12-30 del Reglamento`,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`NOM-022`,fontSize:8,alignment:'justify'},
                      {text:`Dictamen de Tierras Físicas`,fontSize:8,alignment:'center'},
                      {text:`Federa`,fontSize:8,alignment:'center'},
                      {text:`Cap 2, Secc 1 , Articulo 40 NOM, L.F.M.`,fontSize:8,alignment:'center'},
                      {text: 'Consultar',color:'blue', link: 'http://www.imss.gob.mx/sites/all/statics/pdf/reglamentos/4046.pdf',fontSize:8,alignment:'center'},
                   ],[
                      {text:`NOM-025 `,fontSize:8,alignment:'justify'},
                      {text:`Dictamen de Iluminación`,fontSize:8,alignment:'center'},
                      {text:`Federal `,fontSize:8,alignment:'center'},
                      {text:`Cap 2, Secc 1 , Articulo 40 NOM, L.F.M`,fontSize:8,alignment:'center'},
                      {text: 'Consultar',color:'blue', link: 'http://dof.gob.mx/nota_detalle.php?codigo=5268977&fecha=18/09/2012',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Código Administrativo del Estado de México y su Reglamento`,fontSize:8,alignment:'justify'},
                      {text:`Programa de Protección Civil Aprobado`,fontSize:8,alignment:'center'},
                      {text:`Estatal`,fontSize:8,alignment:'center'},
                      {text:`Libro Sexto en materia de Protección Civil Art. 6.17,6.18, 6.23 6.26 asi como Norma Técnica NTE-001-CGPC-2016`,fontSize:8,alignment:'center'},
                      {text: 'Consultar',color:'blue', link: 'http://www.dof.gob.mx/normasOficiales/5805/salud3a11_C/salud3a11_C.html',fontSize:8,alignment:'center'},
                   ],[
                      {text:`MNX-EC-17025-IMNC-2006 `,fontSize:8,alignment:'justify'},
                      {text:`Pruebas de Hermeticidad`,fontSize:8,alignment:'center'},
                      {text:`Estatal `,fontSize:8,alignment:'center'},
                      {text:`Cap 2, Secc 2 , Articulo 51,54 y 66, L.F.M`,fontSize:8,alignment:'center'},
                      {text: 'Consultar',color:'blue', link: 'http://integra.cimav.edu.mx/intranet/data/files/calidad/documentos/externos/NMX-EC-17025-IMNC-2006.pdf',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Ley Federal de Metrología y NormalizacionNOM-154-SCFI2005`,fontSize:8,alignment:'justify'},
                      {text:`Cartas Responsivas de Extintores y factura`,fontSize:8,alignment:'center'},
                      {text:`Estatal`,fontSize:8,alignment:'center'},
                      {text:`Art. 39, 40,46 y 47 de la LFMyN, asi como la NOM`,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Reglamento de construcción de inmuebles en construcción en condominio del estado de México`,fontSize:8,alignment:'justify'},
                      {text:`Dictamen de Seguridad Estructural`,fontSize:8,alignment:'center'},
                      {text:`Estatal`,fontSize:8,alignment:'center'},
                      {text:`Cap 2, art. 9, parrafo IX `,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`NOM-001-SEDE-2012 `,fontSize:8,alignment:'justify'},
                      {text:`Dictamen Electrico`,fontSize:8,alignment:'center'},
                      {text:`Estatal `,fontSize:8,alignment:'center'},
                      {text:`Aplicable a todo la Normatividad`,fontSize:8,alignment:'center'},
                      {text: 'Consultar',Color:'blue', link: 'https://dof.gob.mx/nota_detalle_popup.php?codigo=5280607',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Código Administrativo del Estado de México y Reglamento Orgánico Adm. De Naucalpan`,fontSize:8,alignment:'justify'},
                      {text:`Vo. Bo. De Protección Civil`,fontSize:8,alignment:'center'},
                      {text:`Municipa`,fontSize:8,alignment:'center'},
                      {text:`Art. 6.4 y 6.7 del CAEM y 13 y 48 del Reglamento de la Adm. De Naucalpan`,fontSize:8,alignment:'center'},
                      {text: 'Consultar',color:'blue', link: 'https://naucalpan.gob.mx/wp-content/uploads/2019/01/codvig008.pdf',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Reglamento de construcción de inmuebles en construcción en condominio del estado de México`,fontSize:8,alignment:'justify'},
                      {text:`Responsiva de Instalaciones Eléctricas`,fontSize:8,alignment:'center'},
                      {text:`Municipal`,fontSize:8,alignment:'center'},
                      {text:`Cap 2, art. 9, párrafo IX`,fontSize:8,alignment:'center'},
                      {text: 'Consultar',color:'blue', link: 'https://dof.gob.mx/nota_detalle_popup.php?codigo=5280607',fontSize:8,alignment:'center'},
                   ],[
                      {text:`NOM-001-SEDE-2012 `,fontSize:8,alignment:'justify'},
                      {text:`Constancia de Seguridad Estructural`,fontSize:8,alignment:'center'},
                      {text:`Municipa`,fontSize:8,alignment:'center'},
                      {text:`Aplicable a todo la Normatividad`,fontSize:8,alignment:'center'},
                      {text: 'Consultar',color:'blue', link: 'https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/rgl/vig/rglvig107.pdf',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Ley Orgánica de la Admin Publica EM, Código Administrativo del EM. Y Reglamento del Libro Quinto del EM`,fontSize:8,alignment:'justify'},
                      {text:`Impacto Urbano`,fontSize:8,alignment:'center'},
                      {text:`Estatal `,fontSize:8,alignment:'center'},
                      {text:`Art. 51, 52 53 de la Ley Orgánica, 5.5, 5.9, 5.35 y 5.35 del Código Administrativo y 2-6, 128, 129 del Reglamento del Libro Qunto`,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Código Administrativo del Estado de México y Reglamento de Salud del Estado de México`,fontSize:8,alignment:'justify'},
                      {text:`Licencia Sanitaria `,fontSize:8,alignment:'center'},
                      {text:`Estatal `,fontSize:8,alignment:'center'},
                      {text:`Art. 2.44, 2.46 y 2.47 del Código Adm del Estado de México y Titulo Cuarto del Reglamento de Salud E.M`,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Ley General de Equilibrio Ecológico y Protección al Ambiente, Código de Biodiversidad del E.M. Y Leo Orgánica Municipal`,fontSize:8,alignment:'justify'},
                      {text:`Licencia Ambiental `,fontSize:8,alignment:'center'},
                      {text:`Municipal `,fontSize:8,alignment:'center'},
                      {text:`Art. 4,8 y 10 de la LGEEyPA 1.1. 1.5, 1.6, 2.9 del Código de Biodiversidad y 49, 86 y 89 de la LOMEM`,fontSize:8,alignment:'center'},
                      {text: 'Consultar',color:'blue', link: 'http://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/cod/vig/codvig008.pdf',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Reglamento del Servicio de Agua Potable, Drenaje, Alcantarillado y Aguas Residuales de Naucalpan `,fontSize:8,alignment:'justify'},
                      {text:`Registro de aguas Residuales`,fontSize:8,alignment:'center'},
                      {text:`Municipal`,fontSize:8,alignment:'center'},
                      {text:`Art. 125 y 126 de la Ley Orgánica Municipal y Art. 128 y 128 del Reglamento del Servicio de Agua de Naucalpan`,fontSize:8,alignment:'center'},
                      {text: 'Consultar', link: 'http://www.conafor.gob.mx:8080/documentos/docs/4/321Ley%20de%20Desarrollo%20Forestal%20Sustentable%20del%20Estado%20de%20M%C3%A9xico.pdf',fontSize:8,alignment:'center',color:'blue'},
                   ],[
                      {text:`Reglamento de Unidades Económicas de Naucalpan y Ley de Competitividad y Ordenamiento Comercial del E.M`,fontSize:8,alignment:'justify'},
                      {text:`Licencia de Funcionamiento`,fontSize:8,alignment:'center'},
                      {text:`Municipal `,fontSize:8,alignment:'center'},
                      {text:`Art. 16-23 del Reglamento de Unidades Económicas y Art. 13 de la LCOCEM`,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Ley Orgánica Municipal del E.M., y Reglamento de Anuncios del Municipio de Naucalpan`,fontSize:8,alignment:'justify'},
                      {text:`Licencia de Anuncios`,fontSize:8,alignment:'center'},
                      {text:`Municipal `,fontSize:8,alignment:'center'},
                      {text:`Art. 31 de la Ley y Arts. 12-14, 48-57 del Reglamento de Anuncios`,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ],[
                      {text:`Código Administrativo del Estado de México y Reglamento Del Ordenamiento Territorial de los Asentamientos Humanos y Desarrollo Urbano.`,fontSize:8,alignment:'justify'},
                      {text:`Licencia de Construcción`,fontSize:8,alignment:'center'},
                      {text:`Municipal `,fontSize:8,alignment:'center'},
                      {text:`Art. 18.3, 18.6 y 18.20 del Código Administrativo y Artículo 88, 89, 90, 91, 92, 93, 94, Y 95 del Reglamento Del Ordenamiento Territorial de los Asentamientos Humanos y Desarrollo Urbano De Naucalpan`,fontSize:8,alignment:'center'},
                      {text: '', link: 'http://google.com',fontSize:8,alignment:'center'},
                   ]
                   ]
           } 
          },{text:'\n'},
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
    this.pdfMakerService.generate(dd,'Lista de requisitos legales')
  }

}
