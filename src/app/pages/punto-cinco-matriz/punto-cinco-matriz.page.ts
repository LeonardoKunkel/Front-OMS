import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { EstacionServicioDatosService } from '../../services/estacion-servicio-datos.service'
import { ActivatedRoute } from '@angular/router';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-punto-cinco-matriz',
  templateUrl: './punto-cinco-matriz.page.html',
  styleUrls: ['./punto-cinco-matriz.page.scss'],
})
export class PuntoCincoMatrizPage implements OnInit {
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
  iconoEstacion = null;
  marcaAguaEstacion = null;
  firmaEstacion = null;
  firmaRepresentante = null;
  lista : any[]=[];
  myImage=null;
  nombreEstacion:string


  constructor(
    private pdfMaker: PdfMakerService,
    private datosEstacionService:EstacionServicioDatosService,
    private firmaRepresente : FirmaRepresentanteService,
    private route: ActivatedRoute,
    private firma: FirmaEstacionServiceService,
    private icono: IconoEstacionService,
    private marcaAgua: MarcaAguaServiceService
    ) {
      this.getDatosEstacion();
      this.getIcono();
      this.getFirma();
      this.getMarcaAgua();
      this.imagen64();
      this.getFirmaRepresentante();
     }

  ngOnInit() { 
  }
  getDatosEstacion(){
    this.datosEstacionService.getEstacion().subscribe((data:any) =>{
      //console.log(data.findEstacion[data.findEstacion.length -1]);
      this.datosEstacion = data.findEstacion[data.findEstacion.length -1];
    })
  }
  getIcono(){
    this.icono.getPolitica().subscribe((data:any)=>{
     // console.log(data.findPolitica[data.findPolitica.length -1].imagen);
    this.iconoEstacion = data.findPolitica[data.findPolitica.length -1].imagen;
    })
  }
  getFirma(){
    this.firma.getFirmaEstacion().subscribe((data:any)=>{
      // console.log(data.findFirma[data.findFirma.length -1].firma);
      this.firmaEstacion = data.findFirma[data.findFirma.length -1].firma;
    })
  }
  getMarcaAgua(){
    this.marcaAgua.getMarcaAgua().subscribe((data:any)=>{
      // console.log(data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua);
      this.marcaAgua = data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua;
    })
  }
  getFirmaRepresentante(){
    this.firmaRepresente.getFirmaRepresentante().subscribe((data:any) =>{
      //console.log(data);
       this.firmaRepresentante = data.findFirmaRepresentante[data.findFirmaRepresentante.length -1].firma;
       //console.log(this.firmaRepresentante);
      
    })
  }
  imagen64(){
      this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
        base64 =>{
          this.myImage = base64;
         // console.log(this.myImage);
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
  // define your function for generating rotated text
writeRotatedText(text) {
  var ctx, canvas = document.createElement('canvas');
  // I am using predefined dimensions so either make this part of the arguments or change at will 
  canvas.width = 36;
  canvas.height = 270;
  ctx = canvas.getContext('2d');
  ctx.font = '36pt Arial';
  ctx.save();
  ctx.translate(36,270);
  ctx.rotate(-0.5*Math.PI);
  ctx.fillStyle = '#000';
  ctx.fillText(text , 0, 0);
  ctx.restore();
  return canvas.toDataURL();
};
writeRotatedText2(text) {
  var ctx, canvas = document.createElement('canvas');
  // I am using predefined dimensions so either make this part of the arguments or change at will 
  canvas.width = 36;
  canvas.height = 270;
  ctx = canvas.getContext('2d');
  ctx.font = '36pt Arial';
  ctx.save();
  ctx.translate(36,270);
  ctx.rotate(-0.5*Math.PI);
  ctx.fillStyle = '#000';
  ctx.fillText(text , 0, 0);
  ctx.restore();
  return canvas.toDataURL();
};

pdf2(){
  let marca = this.marcaAgua;
  let footer = this.myImage;
  let iconoEstacion = this.iconoEstacion;
  let ddd = this.datosEstacion;
  let firmaEstacion = this.firmaEstacion;
  let firmaRepresentanteTecnico = this.firmaRepresentante;
  var fecha = new Date();
  let day = fecha.getDate();
  let month = fecha.getUTCMonth() + 1;
  let year = fecha.getFullYear();
  var dd = {
      background: function(currentPage, pageSize) {
      return {
          image: `${marca}`, width: 300,height: 350, 
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
                    width: 65,
                    height: 80,
                    alignment:'center',
                    border:[true,true,false,true],
                    },{
                        text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:25,margin:[55,20],
                    border:[false,true,true,true],
                    }
                ],[
                    {
                        text:'Matriz de Responsabilidades',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                    },{
                        
                    }
                    ],[
                        {
                          text:'V. FUNCIONES RESPONSABILIDADES Y AUTORIDAD ',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
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
                   'Página' + currentPage.toString() + ' de ' + pageCount,
                   {text:`FS-13 Rev.0, ${day}/${month}/${year}`,width: 180}
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
                    widths:[25,350,15,15,15,15,15,15,15],
                    heights:[10,130,10],
                    body:[
                        [
                            {image: this.writeRotatedText('ELEMENTO'), fit:[10,100], alignment: 'center',fillColor:'#a5c3dd',rowSpan:3},
                            {text:'RESPONSABILIDAD',alignment:'left',bold:true,fillColor:'#a5c3dd',fontSize:15,border:[true,true,true,false]},
                            {image: this.writeRotatedText('Dirección'), fit:[10,100], alignment: 'center',fillColor:'#a5c3dd',rowSpan:3},
                            {image: this.writeRotatedText('Representante Técnico'), fit:[10,100], alignment: 'center',fillColor:'#a5c3dd',rowSpan:3},
                            {image: this.writeRotatedText('Encargado'), fit:[10,100], alignment: 'center',fillColor:'#a5c3dd',rowSpan:3},
                            {image: this.writeRotatedText('Jefe de piso'), fit:[10,100], alignment: 'center',fillColor:'#a5c3dd',rowSpan:3},
                            {image: this.writeRotatedText('Despachadores'), fit:[10,100], alignment: 'center',fillColor:'#a5c3dd',rowSpan:3},
                            {image: this.writeRotatedText('Personal de mantenimiento'), fit:[10,100], alignment: 'center',fillColor:'#a5c3dd',rowSpan:3},
                            {image: this.writeRotatedText('Contratistas, Proveedores'), fit:[10,100], alignment: 'center',fillColor:'#a5c3dd',rowSpan:3},
                        ],
                        [
                            {text:''},
                            {
                               canvas: [{ type: 'line', x1: -4, y1: 0, x2: 355, y2: 150, lineWidth: 3 }],bold:true,fillColor:'#a5c3dd',fonSize:10,border:[false,false,false,false]
                            },
                            {text:''},
                            {text:''},
                            {text:''},
                            {text:''},
                            {text:''},
                            {text:''},
                            {text:''},
                        ],
                        [
                            {text:''},
                            {text:'DESCRIPCION',alignment:'right',bold:true,fillColor:'#a5c3dd',fontSize:15,border:[true,false,true,true]},
                            {text:''},
                            {text:''},
                            {text:''},
                            {text:''},
                            {text:''},
                            {text:''},
                            {text:''},
                        ],[//////////////////////////////////////// aqui empieza
	                        {text:'I.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:4},
	                        {text:'Política',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Establecer la Política',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Comunicar la Política',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Evaluar la Política anualmente',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'II.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:6},
	                        {text:'Identificación de Peligros y de aspectos ambientales para la Evaluación de los Riesgos e Impactos Ambientales.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Identificar los aspectos ambientales.',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Identificar los Riesgos',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Evaluar los aspectos ambientales',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'d. Realizar el Análisis de Riesgo de la estación de Servicio',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'e. Comunicas los aspectos ambientales y los riesgos y medidas de control',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                   ],[
	                        {text:'III.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:3},
	                        {text:'Requisitos Legales',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Identificar los requisitos legales',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Comunicar los requisitos legales',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'IV.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:5},
	                        {text:'Objetivos Metas e indicadores.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Establecer los Objetivos y metas',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Diseñar los indicadores',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Elaborar programa de gestión de objetivos y metas',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'d. Comunicar los objetivos',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9}
	                   ],[
	                        {text:'V.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:5},
	                        {text:'Funciones, Responsabilidad y Autoridad.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9,pageBreak: "before"},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Establecer la estructura para implantar el SA',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Establecer funciones y responsabilidades',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Designar al Representante técnico',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'d. Establecer los recursos para implantar el SA',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'VI.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:6},
	                        {text:'Competencia, Capacitación y Entrenamiento',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Elaborar perfiles del puesto',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Detectar las Necesidades de Capacitación',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'A',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Elaborar programa de capacitación y entrenamiento',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'d. Aplicar programa de capacitación',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'e. Evaluar la eficacia de la capacitación',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'VII.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:5},
	                        {text:'Comunicación, Participación y Consulta.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Comunicar la información relacionada con el SA',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'AE',fontSize:9},
	                        {text:'RV',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Recibir las quejas y sugerencias, o solicitud de información del SA',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Participar en el SA mediante sugerencias o quejas.',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'d. Atender y dar seguimiento a las quejas y sugerencias.',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'VIII.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:3},
	                        {text:'Control de Documentos y Registros.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Establecer los criterios para el control de documentos',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Mantener y resguardar documentos y registros',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'IX.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:3},
	                        {text:'Mejores Prácticas y estándares.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Identificar las mejores prácticas y estándares',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Mantener actualizado el inventario de códigos y estándares',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'X.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:5},
	                        {text:'Control de Actividades y Procesos.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Identificar los criterios para control de riesgos y aspectos ambientales',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Documentar los procedimientos para control de actividades y procesos',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Comunicar los controles de actividades y procesos a contratistas',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'d. Aplicar Controles de aspectos ambientales y riesgos',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                   ],[

	                        {text:'XI.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:5},
	                        {text:'Integridad Mecánica y Aseguramiento de la Calidad.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Elaborar programa de mantenimiento preventivo',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Elaborar Listado de equipos críticos',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Desarrollar procedimientos de mantenimiento',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'d. Cumplir programa de mantenimiento',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'XII.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:4},
	                        {text:'Seguridad de Contratistas.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Determinar la responsabilidad de contratistas',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Seleccionar contratistas',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Evaluar contratistas',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'XIII.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:5},
	                        {text:'Preparación y Respuesta a Emergencias.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Identificar situaciones potenciales de emergencia',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Elaborar Planes de Respuesta de cada emergencia identificada',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Integrar Brigadas de emergencia',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'d. Planear, ejecutar y evaluar los simulacros de emergencias',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                   ],[
	                        {text:'XIV.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:4},
	                        {text:'Monitoreo, verificación y evaluación.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Identificar operaciones a monitorear y medir.',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Evaluar cumplimiento de requisitos legales.',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Administrar hallazgos derivados del monitoreo del SA',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'A',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'XV.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:4},
	                        {text:'Auditorías',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Planificar, implementar y mantener un programa de auditorias',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Establecer criterios de competencia para selección de auditores',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Atender hallazgos de auditoría',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'XVI.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:4},
	                        {text:'Identificación de Peligros y de aspectos ambientales para la Evaluación de los Riesgos e Impactos Ambientales.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Registrar, reportar e investigar accidentes e incidentes',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                        {text:'I',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Atender recomendaciones originadas de la investigación de incidentes',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Elaborar Estadística de incidentes y accidentes',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'XVII.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:4},
	                        {text:'Revisión de Resultados.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Preparar información para el informe de resultados',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Realizar Revisión de Resultados',fontSize:9},
	                        {text:'AR',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'c. Atender acciones resultantes por desviaciones del SA',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'XVIII.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:3},
	                        {text:'Informes de Desempeño.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Comunicar los Resultados del desempeño a todos los niveles',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Informar a la ASEA el desempeño del SA',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'XVIII.',fontSize:9,bold:true,fillColor:'#a5c3dd',rowSpan:3},
	                        {text:'Informes de Desempeño.',fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:8},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'a. Comunicar los Resultados del desempeño a todos los niveles',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ],[
	                        {text:'',fontSize:9},
	                        {text:'b. Informar a la ASEA el desempeño del SA',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'R',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                        {text:'',fontSize:9},
	                   ]
                        ]
                }
            },
            {text:'\nA: AUTORIDAD, R: RESPONSABILIDAD, I: INVOLUCRADO'},{ text:'\n' },{
             table: {
                 widths: [200,200,110],
                 heights: [10,30],
                 body: [ [
                         {
                           image:`${firmaRepresentanteTecnico}`,
                           fit:[100,30],
                           alignment:'center',
                           border:[true,true,true,false]
                         },
                         {
                           image:`${firmaEstacion}`,
                           fit:[100,30],
                           alignment:'center',
                           border:[true,true,true,false]
                         },
                         {
                           text:'',
                           fit:[100,30],
                           alignment:'center',
                           border:[true,true,true,false]
                         }],
                    [
                        {text:`Reviso\n${ddd.representanteTecnico}\nREPRESENTANTE TÉCNICO`,alignment:'center',border:[true,false,true,true],fontSize:7},
                        {text:`${ddd.maximaAutoridad}\nMÁXIMA AUTORIDAD`,alignment:'center',border:[true,false,true,true],fontSize:7},
                        {text:`FECHA DE APROBACIÓN: \n ${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true],fontSize:7},
                 ]]
            },      
        layout:{
          defaultBorder: false 
        },
        margin:[22,0]
        }
        ]
     ,
      pageSize: 'LETTER',
      pageMargins: [22,150]
    
  }
   this.pdfMaker.generate(dd,'hsbhbhs')
}


}
