import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-tes',
  templateUrl: './punto-tes.page.html',
  styleUrls: ['./punto-tes.page.scss'],
})
export class PuntoTesPage implements OnInit {

  @ViewChild('slider') slider: IonSlides

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
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

  goLicemciaAmbiental() {
    window.open('https://www.gob.mx/tramites/ficha/licencia-ambiental-unica-del-sector-hidrocarburos/ASEA6207')
  }

  downloadListReqLeg() {
    var dd = {
      header: function(){
        return {
            table: { widths: [560],heights:[40,0,0],
  body: [
  
      [{text:''}],
      [{text:'III. REQUISITOS LEGALES',alignment:'center',bold:true}],
      [{text:'LISTADO DE REQUISITOS LEGALES',alignment:'center',bold:true,fillColor:'#ddd'}],
     
  ]
  
  }, margin: [22,15]
        };
      },
      footer: function(){
        return {
            table:{
     headerRows:1, 
     widths: [560],
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
                  widths: [20,60,280,60,100],
                  heights:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
                  body:[
                      [{text:'NO',bold:true,fillColor:'#ddd'},{text:'MATERIA',bold:true,fillColor:'#ddd'},{text:'NORMA',bold:true,fillColor:'#ddd'},{text:'NUMERAL',bold:true,fillColor:'#ddd'},{text:'REQUISITO LEGAL',bold:true,fillColor:'#ddd'}],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:''},{text:''},{text:''},{text:''},{text:''},]
                      ]
              }
          }
          ,{text:'\n'},{
                  table:{widths: [400,150],heights:[90],
                      body:[
                          [{text:'Revisado por:\n\nRoberto Muñoz Torres \nREPRESENTANTE TÉCNICO'},{text:'FECHA DE APROBACIÓN:'}]
                          ]
                  }
              }
              
           ]
     ,
      pageSize: 'LETTER',
      pageMargins: [22,120]
  };
    this.pdfMaker.generate(dd, 'V. Funciones de funcionalidad y responsabilidad.pdf');
  }

}
