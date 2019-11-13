import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto15-programa-auditorias',
  templateUrl: './punto15-programa-auditorias.page.html',
  styleUrls: ['./punto15-programa-auditorias.page.scss'],
})
export class Punto15ProgramaAuditoriasPage implements OnInit {
  datos:any={
    tipoAuditoria:'',
    interna:false,
    externa:false,
    area:'',
    elemento1:'',
    objetivo1:'',
    alcance1:'',
    enero20191:false,
    julio20191:false,
    enero20201:false,
    julio20201:false,
    enero20211:false,
    julio20211:false,
    elemento2:'',
    objetivo2:'',
    alcance2:'',
    enero20192:false,
    julio20192:false,
    enero20202:false,
    julio20202:false,
    enero20212:false,
    julio20212:false,
    elemento3:'',
    objetivo3:'',
    alcance3:'',
    enero20193:false,
    julio20193:false,
    enero20203:false,
    julio20203:false,
    enero20213:false,
    julio20213:false,
    elemento4:'',
    objetivo4:'',
    alcance4:'',
    enero20194:false,
    julio20194:false,
    enero20204:false,
    julio20204:false,
    enero20214:false,
    julio20214:false,
    elemento5:'',
    objetivo5:'',
    alcance5:'',
    enero20195:false,
    julio20195:false,
    enero20205:false,
    julio20205:false,
    enero20215:false,
    julio20215:false,
    elemento6:'',
    objetivo6:'',
    alcance6:'',
    enero20196:false,
    julio20196:false,
    enero20206:false,
    julio20206:false,
    enero20216:false,
    julio20216:false,
    elemento7:'',
    objetivo7:'',
    alcance7:'',
    enero20197:false,
    julio20197:false,
    enero20207:false,
    julio20207:false,
    enero20217:false,
    julio20217:false,
    elemento8:'',
    objetivo8:'',
    alcance8:'',
    enero20198:false,
    julio20198:false,
    enero20208:false,
    julio20208:false,
    enero20218:false,
    julio20218:false,
    elemento9:'',
    objetivo9:'',
    alcance9:'',
    enero20199:false,
    julio20199:false,
    enero20209:false,
    julio20209:false,
    enero20219:false,
    julio20219:false,
    elemento10:'',
    objetivo10:'',
    alcance10:'',
    enero201910:false,
    julio201910:false,
    enero202010:false,
    julio202010:false,
    enero202110:false,
    julio202110:false,
  }
  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
enviarForm(formulario){
  console.log(this.datos);
  
} 
pdf(){
  var dd = {
    header: function(){
       return {
             table: {widths: [500, 20, 200],
             heights: [30,10,10],
         body: [
           [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
           [{text:'XV. Auditorías',colSpan:3, alignment: 'center', bold:true},{},{}],
           [{text:'PROGRAMA DE AUDITORÍAS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
         ]
       }, margin: [22,20]
       };
     },
     footer: function(){
       
     },

 content: [
          {
              table: {
                  widths: [114,278,15,278,15,], heights: [10,10,10,10,10,],
                  body:[
                       [{text: 'TIPO DE AUDITORÍA:', alignment: 'right', bold:true, fillColor: '#ddd'},{text: 'INTERNA:', alignment: 'right', bold:true, fillColor: '#ddd'},{text:`${this.datos.interna}`},{text: 'EXTERNA:', alignment: 'right', bold:true, fillColor: '#ddd'},{text:`${this.datos.externa}`}],
                       [{text: 'ÁREA:', alignment: 'right', bold:true, fillColor:'#ddd'},{text:`${this.datos.area}`, colSpan: 4},{},{},{}]
                       ]
              }, margin: [1,1]
          }, 
          {text:'\n'},
          {
              table: {
                  widths: [305,140,140,14,14,14,14,14,14,], heights: [30,10,10,10,10,10,10,10,10,10,10,10],
                  body:[
                       [{text: '\nELEMENTO DEL SISTEMA', alignment: 'center', bold:true, fillColor: '#ddd', rowSpan:2},{text: '\nOBJETIVO', alignment: 'center', bold:true, fillColor: '#ddd', rowSpan:2},{text: '\nALCANCE', alignment: 'center', bold:true, fillColor: '#ddd', rowSpan:2},{text: '2019', alignment: 'center', bold:true, fillColor: '#ddd', colSpan:2},{},{text: '2020', alignment: 'center', bold:true, fillColor: '#ddd', colSpan:2},{},{text: '2021', alignment: 'center', bold:true, fillColor: '#ddd', colSpan:2},{}],
                       [{},{},{},{text: '01', bold:true, fillColor: '#ddd'},{text: '07', bold:true, fillColor: '#ddd'},{text: '01', bold:true, fillColor: '#ddd'},{text: '07', bold:true, fillColor: '#ddd'},{text: '01', bold:true, fillColor: '#ddd'},{text: '07', bold:true, fillColor: '#ddd'},], 
                       [{text:`${this.datos.elemento1}`},{text:`${this.datos.objetivo1}`},{text:`${this.datos.alcance1}`},{},{},{},{},{},{},],
                       [{text:`${this.datos.elemento2}`},{text:`${this.datos.objetivo2}`},{text:`${this.datos.alcance2}`},{},{},{},{},{},{},],
                       [{text:`${this.datos.elemento3}`},{text:`${this.datos.objetivo3}`},{text:`${this.datos.alcance3}`},{},{},{},{},{},{},],
                       [{text:`${this.datos.elemento4}`},{text:`${this.datos.objetivo4}`},{text:`${this.datos.alcance4}`},{},{},{},{},{},{},],
                       [{text:`${this.datos.elemento5}`},{text:`${this.datos.objetivo5}`},{text:`${this.datos.alcance5}`},{},{},{},{},{},{},],
                       [{text:`${this.datos.elemento6}`},{text:`${this.datos.objetivo6}`},{text:`${this.datos.alcance6}`},{},{},{},{},{},{},],
                       [{text:`${this.datos.elemento7}`},{text:`${this.datos.objetivo7}`},{text:`${this.datos.alcance7}`},{},{},{},{},{},{},],
                       [{text:`${this.datos.elemento8}`},{text:`${this.datos.objetivo8}`},{text:`${this.datos.alcance8}`},{},{},{},{},{},{},],
                       [{text:`${this.datos.elemento9}`},{text:`${this.datos.objetivo9}`},{text:`${this.datos.alcance9}`},{},{},{},{},{},{},],
                       [{text:`${this.datos.elemento10}`},{text:`${this.datos.objetivo10}`},{text:`${this.datos.alcance10}`},{},{},{},{},{},{},]
                      ]
              }
          },
          {text:'\n\n\n'},
          {
             table: {
                 widths: [241,241,241], heights: [50,],
                 body: [
                     [{text: 'PROPONE\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO', bold:true, }, {text: 'APRUEBA\n\nFernando Bedoy\nMÁXIMA AUTORIDAD', bold:true,},{text: 'FECHA', bold:true,}]
                     ]
             }
          }
 ],
   pageOrientation: 'landscape',
   pageSize: 'LETTER',
     pageMargins: [22,120]
     
}

this.pdfMaker.generate(dd,'Programa de auditorias');
}
}
