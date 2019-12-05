import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-punto-trece-planeacion',
  templateUrl: './punto-trece-planeacion.page.html',
  styleUrls: ['./punto-trece-planeacion.page.scss'],
})
export class PuntoTrecePlaneacionPage implements OnInit {

  datos:any = {
    texto1:'',
    texto2:'',
    texto3:'',
    texto4:'',
    texto5:'',
    texto6:'',
    texto7:'',
    texto8:'',
    texto9:'',
    texto10:'',
    texto11:'',
    texto12:'',
    texto13:'',
    texto14:'',
    texto15:'',
    texto16:'',
    texto17:'',
    texto18:'',
    texto19:'',
    texto20:'',
    fecha1:'',
  }

  framework = '';

  
  constructor(private pdfMaker: PdfMakerService, private pickerCtrl: PickerController) {  }

  async mostrarPicker() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'framework',
          options: [
            { text: 'Real', value: 'A'},
            { text: 'Simulada', value: 'B'},
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then( async data => {
      let col = await picker.getColumn('framework');
      this.framework = col.options[col.selectedIndex].text;
    });
  }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

  pdf() {
    console.log('documento descargado');
    var dd = {
      header: function(){
         return {
               table:{
                 widths: [315, 20, 200], heights: [30,10,10],
                 body: [
                         [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
                         [{text:'XIII. PREPARACIÓN Y RESPUESTA A EMERGENCIAS', colSpan:3, alignment: 'center', bold:true},{},{}],
                         [{text:'PLANEACIÓN DE SIMULACROS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}],
                       ]
                 }, margin: [22,20],
         };
       },
       footer: function(){
         
       },
 
   content: [
       {
           table:{
               widths:[552],heights:[10],
               body:[
                   [{text:'1. INFORMACIÓN GENERAL DEL SIMULACRO',bold:true, fillColor:'#ddd'}],
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[20,257,257], heights:[10,10,10,10],
               body:[
                   [{text:'OBJETIVOS DEL SIMULACRO DE EMERGENCIA', bold:true,colSpan:3},{},{}],
                   [{text:'No.'},{text:'DESCRIPCIÓN'},{text:'RESPONSABLE DE LA ATENCIÓN'}],
                   [{text:'1'},{},{}],
                   [{text:'2'},{},{}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[75,180,88,182], heights:[10,10,10,10,50],
               body:[
                   [{text:'ÁREA:',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto4}`,fontSize:7},{text:'FECHA Y HORA PROGRAMADA:',bold:true,fillColor:'#ddd'},{text:`${this.datos.fecha1}`,fontSize:7}],
                   [{text:'EQUIPO:',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto5}`,fontSize:7},{text:'CON AVISO PREVIO:',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto7}`,fontSize:7}],
                   [{text:'CLASE DE SIMULACRO:',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto6}`,fontSize:7},{text:'AGENTE PERTURBADOR:',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto8}`,fontSize:7}],
                   [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA',bold:true,fillColor:'#ddd',colSpan:4},{},{},{}],
                   [{text:"",colSpan:4},{},{},{}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[200,346], heights:[10,10,10,10,10,10],
               body:[
                   [{text:'2. EQUIPO DE PROTECCIÓN PERSONAL Y DISPOSITIVOS DE SEGURIDAD REQUERIDOS:',bold:true,fillColor:'#ddd',colSpan:2},{}],
                   [{},{}],
                   [{},{}],
                   [{},{}],
                   [{},{}],
                   [{},{}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[19,160,29,60,83,80,70], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'3. SECUENCIA DE ACCIONES DE SIMULACRO',bold:true,fillColor:'#ddd',colSpan:7},{},{},{},{},{},{}],
                   [{text:'ACTIVIDAD',bold:true,fillColor:'#ddd',colSpan:4},{},{},{},{text:'RESPONSABLE',bold:true,fillColor:'#ddd',rowSpan:2},{text:'RECURSOS MATERIALES REQUERIDOS',bold:true,fillColor:'#ddd',rowSpan:2},{text:'TIEMPO DE RESPUESTA',bold:true,fillColor:'#ddd',rowSpan:2}],
                   [{text:'No.',bold:true,fillColor:'#ddd'},{text:'DESCRIPCIÓN',bold:true,fillColor:'#ddd'},{text:'REAL',bold:true,fillColor:'#ddd'},{text:'SIMULADA',bold:true,fillColor:'#ddd'},{},{},{}],
                   [{text:'1'},{},{},{},{},{},{}],
                   [{text:'2'},{},{},{},{},{},{}],
                   [{text:'3'},{},{},{},{},{},{}],
                   [{text:'4'},{},{},{},{},{},{}],
                   [{text:'5'},{},{},{},{},{},{}],
                   [{text:'6'},{},{},{},{},{},{}],
                   [{text:'7'},{},{},{},{},{},{}],
                   [{text:'8'},{},{},{},{},{},{}],
                   [{text:'9'},{},{},{},{},{},{}],
                   [{text:'10'},{},{},{},{},{},{}],
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[20,120,397], heights:[10,10,10,10,10],
               body:[
                   [{text:'4. UBICACIÓN DE LOS RECURSOS EN EL SITIO',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                   [{text:'1.'},{text:'Extintores'},{}],
                   [{text:'2.'},{text:'Paros de emergencia'},{}],
                   [{text:'3.'},{text:'Válvulas de cierre'},{}],
                   [{text:'4.'},{text:'Interruptores'},{}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[20,150,367], heights:[10,10,10,10],
               body:[
                   [{text:'5. OBSERVADORES',bold:true,fillColor:'#ddd',colSpan:3},{},{}],
                   [{text:'No.'},{text:'NOMBRE',bold:true},{text:'UBICACIÓN',bold:true}],
                   [{text:'1'},{},{}],
                   [{text:'2'},{},{}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[275,275], heights:[10,50],
               body:[
                   [{text:'6. AUTORIZACIÓN',bold:true,fillColor:'#ddd',colSpan:2},{}],
                   [{text:'PROPONE:\n\nCinthya Karime Bedoy Díaz\nENCARGADO'},{text:'APROBADO POR:\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO'}]
                   ]
           }
       }
   ],
   
   styles: {
     header: {
       fontSize: 18,
       bold: true,
     },
   },  
   
     pageSize: 'LETTER',
       pageMargins: [22,120],
 }
  }

}
