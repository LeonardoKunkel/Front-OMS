import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController, PopoverController } from '@ionic/angular';
import { OnbjetivoModalPage } from '../onbjetivo-modal/onbjetivo-modal.page';
import { Compiler_compileModuleAsync__POST_R3__ } from '@angular/core/src/linker/compiler';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';


@Component({
  selector: 'app-punto-cuatro',
  templateUrl: './punto-cuatro.page.html',
  styleUrls: ['./punto-cuatro.page.scss'],
})
export class PuntoCuatroPage implements OnInit {

  @ViewChild('slider') slider: IonSlides;

  constructor(
    private popoverCtrl: PopoverController,
    private pdfMaker: PdfMakerService
  ) { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }

  segmentChanged(event) {
    const value = event.detail.value;
    
    if(value === "form") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(1);
      this.slider.lockSwipes(true);
    } else if(value === "proced"){
      this.slider.lockSwipes(false);
      this.slider.slideTo(0);
      this.slider.lockSwipes(true);
    }
  }

  async openModal(event) {
    const popover = await this.popoverCtrl.create({
      component: OnbjetivoModalPage,
      translucent: true,
      componentProps: {},
      event
    });

    popover.present();
  }

  pdf() {
    var dd = {
      header: function(){
        return {
            table: { widths: [565],heights:[50,15,15],
  body: [
  
      [{text:''}],
      [{text:'IV. OBJETIVOS, METAS E INDICADORES',alignment:'center',bold:true}],
      [{text:'OBJETIVOS, METAS E INDICADORES',alignment:'center',bold:true}],
  ]
  
  }, margin: [22,20]
        };
      },
      footer: function(){
        return {
            table:{
     headerRows:1, 
     widths: [510],
               body : [
               [''],
               [''],
               ['']
                   ]
          }, layout : 'headerLineOnly',
            margin: [70,90]
        };
      },
      
      content:[
          {
              table:{
                  widths: [90,350,50,50],
                  body:[
                      [{text:'OBJETIVO 1',fontSize:9,	fillColor: '#dddddd'},{text:'',colSpan:3},{},{}],
                      [{text:'PROCESO',fontSize:9,	fillColor: '#dddddd'},{text:'',colSpan:3},{text:''},{}],
                      [{text:'RESPONSABLE',fontSize:9,	fillColor: '#dddddd'},{text:'REPRESENTANTE TÉCNICO:',fontSize:9},{text:'PERIODO',fontSize:9,	fillColor: '#dddddd'},{}]
                      ]
              }
          },
          {text:'\n'},
          {
              table:{
                  widths: [14,120,120,55,55,74,74],
                  heights:[10,25,25,25],
                  body:[
                        
                      [{text:'No.',fontSize:9,fillColor: '#dddddd',alignment:'center',bold:true},{text:'METAS',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'ACTIVIDAD',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'INDICADOR',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'SOPORTE',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'FRECUENCIA DE EVALUACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'CRITERIO DE ACEPTACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true}],
                      [{text:'1'},{},{},{},{},{},{}],
                      [{text:'2'},{},{},{},{},{},{}],
                      [{text:'3'},{},{},{},{},{},{}] 
                      ]
              }
              
              
          },
          {text:'\n'},
          {
              table:{
                  widths: [90,350,50,50],
                  body:[
                      [{text:'OBJETIVO 1',fontSize:9,	fillColor: '#dddddd'},{text:'',colSpan:3},{},{}],
                      [{text:'PROCESO',fontSize:9,	fillColor: '#dddddd'},{text:'',colSpan:3},{text:''},{}],
                      [{text:'RESPONSABLE',fontSize:9,	fillColor: '#dddddd'},{text:'REPRESENTANTE TÉCNICO:',fontSize:9},{text:'PERIODO',fontSize:9,	fillColor: '#dddddd'},{}]
                      ]
              }
          },
          {text:'\n'},
          {
              table:{
                  widths: [14,120,120,55,55,74,74],
                  heights:[10,25,25,25],
                  body:[
                        
                      [{text:'No.',fontSize:9,fillColor: '#dddddd',alignment:'center',bold:true},{text:'METAS',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'ACTIVIDAD',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'INDICADOR',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'SOPORTE',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'FRECUENCIA DE EVALUACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'CRITERIO DE ACEPTACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true}],
                      [{text:'1'},{},{},{},{},{},{}],
                      [{text:'2'},{},{},{},{},{},{}],
                      [{text:'3'},{},{},{},{},{},{}] 
                      ]
              }
              
              
          },{text:'\n'},
          {
              table:{
                   widths: [182,182,182],
                   heights:[10,80],
                  body:[
                      [{text:'REVISADO POR:',fontSize:9,	fillColor: '#dddddd',alignment:'center'},{text:'APROBADO POR:',fontSize:9,	fillColor: '#dddddd',alignment:'center'},{text:'FECHA DE APROBACIÓN:',fontSize:9,	fillColor: '#dddddd',alignment:'center'}],
                      [{text:'\n\n\n\nRoberto Muñoz Torres \nREPRESENTANTE TÉCNICO'},{text:'\n\n\n\nFernando Bedoy Ruiz \nMAXIMA AUTORIDAD'},{text:'\n\n\n\n\nFECHA DE APROBACIÓN:'}]
                      ]
              }
          }
      ]
     ,
      pageSize: 'LETTER',
      pageMargins: [22,130]
  };
  this.pdfMaker.generate(dd, 'V. Funciones de funcionalidad y responsabilidad.pdf');
  }
}
