import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-punto-diezfs19',
  templateUrl: './punto-diezfs19.page.html',
  styleUrls: ['./punto-diezfs19.page.scss'],
})
export class PuntoDiezfs19Page implements OnInit {

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
    texto21:'',
    texto22:'',
    texto23:'',
    texto24:'',
    fecha1:'',
    fecha2:'',
    fecha3:'',
    fecha4:'',
    fecha5:'',
    fecha6:'',
    fecha7:'',
    fecha8:'',
   }

   framework = '';

  constructor(private pdfMaker: PdfMakerService, private pickerCtrl: PickerController) { }

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
            { text: 'Acepatada', value: 'A'},
            { text: 'Rechazada', value: 'B'},
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
      background: function(currentPage, pageSize) {
      return {image: 'sampleImage.jpg', width: 750, absolutePosition: {x: 10, y: 80} ,opacity:0.3}
    },
      header: function(){
        return {
            table: { widths: [560],heights:[50,15,15],
            
  body: [
  
      [{}],
      [{text:'X. CONTROL DE ACTIVIDADES Y PROCESOS',alignment:'center',bold:true}],
      [{text:'ADMINISTRACIÓN DE CAMBIOS DE TECNOLOGÍA',alignment:'center',bold:true,fillColor:'#23BAC4'}],
  ]
  
  }, margin: [22,15]
        };
      },
      footer: function(){
      
        return {
                  
                  table:{
     headerRows:1, 
     widths: [750],
               body : [
               [''],
               [''],
               ['']
                   ]
          }, layout : 'headerLineOnly',
            margin: [30,85]
        };
      },
      
      content:[
          {
              table:{
                  widths: [65,200,65,200],
                  body:[
                      [{text:'ÁREA',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto1}`,fontSize:7},{text:'FECHA',bold:true,fillColor:'#ddd'},{text:`${this.datos.fecha1}`,fontSize:7}],
                      [{text:'PROCESO',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto2}`,fontSize:7},{text:'NO.',bold:true,fillColor:'#ddd'},{text:`${this.datos.texto3}`,fontSize:7}],
                      ]
              }
          },{text:'\n'},{
              table:{
                  widths:[150,120,90,30,90,30],
                  body:[
                      [{text:'DESCRIPCIÓN DEL CAMBIO PROPUESTO',colSpan:6,bold:true,alignment:'center',fillColor:'#ddd'}],
                      [{text:`${this.datos.texto4}`,fontSize:7,colSpan:6}],
                      [{text:'ANÁLISIS DE LA PROPUESTA',colSpan:6,bold:true,alignment:'center',fillColor:'#ddd'}],
                      [{text:`${this.datos.texto23}`,fontSize:7,colSpan:6}],
                      [{text:'RESULTADO DE LA EVALUACIÓN',fontSize:9,fillColor:'#ddd'},{text:'',fontSize:9},{text:'ACEPTADA',fontSize:9,fillColor:'#ddd'},{text:'',fontSize:9},{text:'RECHAZADA',fontSize:9,fillColor:'#ddd'},{text:'',fontSize:9},],
                      [{text:'MOTIVO DE LA ACEPTACIÓN O RECHAZO',colSpan:6,bold:true,alignment:'center',fillColor:'#ddd'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:`${this.datos.texto5}`,fontSize:7,rowSpan:6,colSpan:6},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'DESCRIPCIÓN DEL CAMBIO',colSpan:6,bold:true,alignment:'center',fillColor:'#ddd'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:`${this.datos.texto6}`,fontSize:7,rowSpan:6,colSpan:6},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      ]
              }
          },{
              table:{
                  widths:[20,150,40,150,70,70],
                  body:[
                      [{text:'NO.',bol:true,fillColor:'#ddd',fontSize:10},{text:'ACTIVIDAD',bol:true,fillColor:'#ddd',fontSize:10},{text:'SI/NO',bol:true,fillColor:'#ddd',fontSize:10},{text:'RESPONSABLE DE LA ATENCIÓN',bol:true,fillColor:'#ddd',fontSize:10},{text:'FECHA DE CUMPLIMIENTO',bol:true,fillColor:'#ddd',fontSize:8},{text:'ATENDIDO',bol:true,fillColor:'#ddd',fontSize:10}],
                      [{text:'1',fontSize:9},{text:'ESPECIFICACIONES DEL PROYECTO',fontSize:9},{text:`${this.datos.texto7}`,fontSize:7},{text:`${this.datos.texto8}`,fontSize:7},{text:`${this.datos.fecha2}`,fontSize:7},{text:'',fontSize:7}],
                      [{text:'2',fontSize:9},{text:'ACTUALIZACIÓN DE ANÁLISIS DE RIESGO',fontSize:9},{text:`${this.datos.texto9}`,fontSize:7},{text:`${this.datos.texto10}`,fontSize:7},{text:`${this.datos.fecha3}`,fontSize:7},{text:'',fontSize:7}],
                      [{text:'3',fontSize:9},{text:'ACTUALIZACIÓN DE ESTRUCTURA',fontSize:9},{text:`${this.datos.texto11}`,fontSize:7},{text:`${this.datos.texto12}`,fontSize:7},{text:`${this.datos.fecha4}`,fontSize:7},{text:'',fontSize:7}],
                      [{text:'4',fontSize:9},{text:'ACTUALIZACIÓN DE LA TECNOLOGÍA DEL PROCESO',fontSize:9},{text:`${this.datos.texto13}`,fontSize:7},{text:`${this.datos.texto14}`,fontSize:7},{text:`${this.datos.fecha5}`,fontSize:7},{text:'',fontSize:7}],
                      [{text:'5',fontSize:9},{text:'ACTUALIZACIÓN DE PERMISOS O LICENCIAS',fontSize:9},{text:`${this.datos.texto15}`,fontSize:7},{text:`${this.datos.texto24}`,fontSize:7},{text:`${this.datos.fecha6}`,fontSize:7},{text:'',fontSize:7}],
                      [{text:'6',fontSize:9},{text:'ACTUALIZACIÓN DE NORMATIVIDAD',fontSize:9},{text:`${this.datos.texto16}`,fontSize:7},{text:`${this.datos.texto17}`,fontSize:7},{text:`${this.datos.fecha7}`,fontSize:7},{text:'',fontSize:7}],
                      [{text:'7',fontSize:9},{text:'CAPACITACIÓN Y ENTRENAMIENTO',fontSize:9},{text:`${this.datos.texto18}`,fontSize:7},{text:`${this.datos.texto19}`,fontSize:7},{text:`${this.datos.fecha8}`,fontSize:7},{text:'',fontSize:7}],
                      [{text:'8',fontSize:9},{text:'COMUNICACIÓN DEL CAMBIO',fontSize:9},{text:`${this.datos.texto20}`,fontSize:7},{text:`${this.datos.texto21}`,fontSize:7},{text:`${this.datos.fecha9}`,fontSize:7},{text:'',fontSize:9}],
                      [{text:'NOTAS',fontSize:9,colSpan:7,bold:true,alignment:'center',fillColor:'#ddd'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:`${this.datos.texto22}`,fontSize:7,rowSpan:6,colSpan:7},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'AUTORIZACIÓN',fontSize:9,colSpan:7,bold:true,alignment:'center',fillColor:'#ddd'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'PROPONE\n\n\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO',fontSize:9,colSpan:2},{text:'',fontSize:9},{text:'APRUEBA\n\n\nFernando Bedoy Ruiz\nMÁXIMA AUTORIDAD',fontSize:9,colSpan:2},{text:'',fontSize:9},{text:'Fecha',fontSize:9,colSpan:3},{text:'',fontSize:9},{text:'',fontSize:9},],
                     ]
              }
          }
          ],
      pageSize: 'LETTER',
      pageMargins: [22,120]
  };
  }

}
