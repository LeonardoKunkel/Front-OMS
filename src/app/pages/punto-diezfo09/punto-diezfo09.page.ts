import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-punto-diezfo09',
  templateUrl: './punto-diezfo09.page.html',
  styleUrls: ['./punto-diezfo09.page.scss'],
})
export class PuntoDiezfo09Page implements OnInit {

  datos:any = {
    numero:'',
    fecha1:'',
    fecha2:'',
    escribeequipo:'',
    escribetrabajo:'',
    check1:'',
    check2:'',
    check3:'',
    check4:'',
    check5:'',
    check6:'',
    check7:'',
    check8:'',
    check9:'',
    check10:'',
    check12:'',
    check13:'',
    check14:'',
    check15:'',
    check16:'',
    check17:'',
    check18:'',
    check19:'',
    check20:'',
    check21:'',
    check22:'',
    check23:'',
    check24:'',
    check25:'',
    check26:'',
    check27:'',
    check28:'',
    check29:'',
    check30:'',
    check31:'',
    check32:'',
    check33:'',
    check34:'',
    check35:'',
    check36:'',
    check37:'',
    check38:'',
    check39:'',
    check40:'',
    check41:'',
    check42:'',
    check43:'',
    check44:'',
    check45:'',
    check46:'',
    check47:'',
    check48:'',
    check49:'',
    check50:'',
    check51:'',
    check52:'',
    check53:'',
    check54:'',
    check55:'',
    check56:'',
    check57:'',
    check58:'',
    check59:'',
    escribemedidas:'',
    check60:'',
    check61:'',
    check62:'',
    check63:'',
    check64:'',
    check65:'',
    check66:'',
    check67:'',
    check68:'',
    check69:'',
    check70:'',
    check71:'',
    check72:'',
    check73:'',
    check74:'',
    check75:'',
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
    //   background: function(currentPage, pageSize) {
    //   return {image: 'sampleImage.jpg', width: 750, absolutePosition: {x: 10, y: 80} ,opacity:0.3}
    // },
      header: function(){
        return {
            table: { widths: [560],heights:[50,15,15],
            
  body: [
  
      [{}],
      [{text:'X. CONTROL DE ACTIVIDADES Y PROCESOS',alignment:'center',bold:true}],
      [{text:'PERMISO DE TRABAJO',alignment:'center',bold:true,fillColor:'#23BAC4'}],
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
              widths:[100,20,45,20,75,20,75,25,75,25],
                  body:[
                      [{text:`Consecutivo: ${this.datos.numero}`,bold:true,colSpan:6},{text:''},{text:''},{text:''},{text:''},{text:''},{text:'Hora',bold:true,colSpan:2},{text:''},{text:'Fecha',bold:true,colSpan:2},{text:''},],
                      [{text:`Equipo o instalacion: ${this.datos.escribeequipo}`,colSpan:10},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:`Descripción del trabajo: ${this.datos.escribetrabajo}`,colSpan:10},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:'.',colSpan:10},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                      [{text:'Tipo de trabajo: Area Confinada',fontSize:8},{text:'',fontSize:8},{text:'Altura',fontSize:8},{text:'',fontSize:8},{text:'Inst.Electrica',fontSize:8},{text:'',fontSize:8},{text:'Soldadura',fontSize:8},{text:'',fontSize:8},{text:'Apertura de lineas',fontSize:8},{text:'',fontSize:8},],
                      ]
              }
          },{text:'\n'},{
              table:{
                  widths:[140,32,140,32,140,32],
                  body:[
                      [{text:'RIESGOS DETECTADOS',bold:true,colSpan:6,alignment:'center'},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'Caídas',fontSize:9},{text:`${this.datos.check6}`,fontSize:9},{text:'Intoxicación',fontSize:9},{text:`${this.datos.check9}`,fontSize:9},{text:'Fuga o Derrame',fontSize:9},{text:`${this.datos.check12}`,fontSize:9},],
                      [{text:'Machucones',fontSize:9},{text:`${this.datos.check7}`,fontSize:9},{text:'Electrocución',fontSize:9},{text:`${this.datos.check10}`,fontSize:9},{text:'Incendio',fontSize:9},{text:`${this.datos.check13}`,fontSize:9},],
                      [{text:'Salpicaduras',fontSize:9},{text:`${this.datos.check8}`,fontSize:9},{text:'Asfixia',fontSize:9},{text:`${this.datos.check11}`,fontSize:9},{text:'Afectación al ambiente',fontSize:9},{text:`${this.datos.check14}`,fontSize:9},],
                      
                      [{text:'REQUISITOS DEL EQUIPO A INTERVENIR',bold:true,alignment:'center',colSpan:6},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'Delimitación de Área',fontSize:9},{text:`${this.datos.check15}`,fontSize:9},{text:'Venteos abiertos',fontSize:9},{text:`${this.datos.check21}`,fontSize:9},{text:'Area limpia, segura y despejada',fontSize:9},{text:`${this.datos.check27}`,fontSize:9},],
                      [{text:'Suspender otros trabajos',fontSize:9},{text:`${this.datos.check16}`,fontSize:9},{text:'Electricamente aislado',fontSize:9},{text:`${this.datos.check22}`,fontSize:9},{text:'Bloqueo-candado en tablero de control',fontSize:9},{text:`${this.datos.check28}`,fontSize:9},],
                      [{text:'Equipo fuera de operación',fontSize:9},{text:`${this.datos.check17}`,fontSize:9},{text:'Protecciones inhabilitadas',fontSize:9},{text:`${this.datos.check23}`,fontSize:9},{text:'Bloqueo-candado en válvulas',fontSize:9},{text:`${this.datos.check29}`,fontSize:9},],
                      [{text:'Vaciado y depresionado',fontSize:9},{text:`${this.datos.check18}`,fontSize:9},{text:'Equipo a tierra',fontSize:9},{text:`${this.datos.check24}`,fontSize:9},{text:'Medición Explosividad (menor 5%)',fontSize:9},{text:`${this.datos.check30}`,fontSize:9},],
                      [{text:'Equipo Vaporizado',fontSize:9},{text:`${this.datos.check19}`,fontSize:9},{text:'Libranza eléctrica',fontSize:9},{text:`${this.datos.check25}`,fontSize:9},{text:'Medición de Oxígeno(19.5-23.5)',fontSize:9},{text:`${this.datos.check31}`,fontSize:9},],
                      [{text:'Equipo Aislado',fontSize:9},{text:`${this.datos.check20}`,fontSize:9},{text:'Candado en válvula de dispensario',fontSize:9},{text:`${this.datos.check26}`,fontSize:9},{text:'Candado en válvula contenedor Motobomba',fontSize:9},{text:`${this.datos.check32}`,fontSize:9},],
                      
                      [{text:'EQUIPO DE PROTECCION PERSONAL',bold:true,alignment:'center',colSpan:6},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'Guantes de soldador',fontSize:9},{text:`${this.datos.check33}`,fontSize:9},{text:'Guantes de carnaza',fontSize:9},{text:`${this.datos.check38}`,fontSize:9},{text:'Guantes dieléctricos',fontSize:9},{text:`${this.datos.check43}`,fontSize:9},],
                      [{text:'Anteojos seguridad',fontSize:9},{text:`${this.datos.check34}`,fontSize:9},{text:'Careta contra impacto',fontSize:9},{text:`${this.datos.check39}`,fontSize:9},{text:'Careta de soldador y peto',fontSize:9},{text:`${this.datos.check44}`,fontSize:9},],
                      [{text:'Calzado seguridad',fontSize:9},{text:`${this.datos.check35}`,fontSize:9},{text:'Calzado dieléctrico',fontSize:9},{text:`${this.datos.check40}`,fontSize:9},{text:'Equipo Protección Respiratoria linea aire',fontSize:9},{text:`${this.datos.check45}`,fontSize:9},],
                      [{text:'Protección Auditiva',fontSize:9},{text:`${this.datos.check36}`,fontSize:9},{text:'Eq. Prot. Respiratoria autónomo',fontSize:9},{text:`${this.datos.check41}`,fontSize:9},{text:'Equipo Protección Respiratoria contrapolvo',fontSize:9},{text:`${this.datos.check46}`,fontSize:9},],
                      [{text:'Casco contra impacto',fontSize:9},{text:`${this.datos.check37}`,fontSize:9},{text:'Arnés y cable devida',fontSize:9},{text:`${this.datos.check42}`,fontSize:9},{text:'Otro',fontSize:9},{text:`${this.datos.check47}`,fontSize:9},],
                      
                      [{text:'EQUIPOS Y HERRAMIENTAS',bold:true,alignment:'center',colSpan:6},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'Escalera en buen estado',fontSize:9},{text:`${this.datos.check48}`,fontSize:9},{text:'Uso de andamio',fontSize:9},{text:`${this.datos.check52}`,fontSize:9},{text:'Andamio completo y buen estado (frenos)',fontSize:9},{text:`${this.datos.check56}`,fontSize:9},],
                      [{text:'Plataforma hidráulica',fontSize:9},{text:`${this.datos.check49}`,fontSize:9},{text:'Herramienta aterrizada',fontSize:9},{text:`${this.datos.check53}`,fontSize:9},{text:'Prueba positiva operatividad de plataforma',fontSize:9},{text:`${this.datos.check57}`,fontSize:9},],
                      [{text:'Cable uso rudo (sin empates)',fontSize:9},{text:`${this.datos.check50}`,fontSize:9},{text:'Lámpara a prueba de explosión',fontSize:9},{text:`${this.datos.check54}`,fontSize:9},{text:'Herramienta con guarda',fontSize:9},{text:`${this.datos.check58}`,fontSize:9},],
                      [{text:'Protección contraincendio:',fontSize:9},{text:`${this.datos.check51}`,fontSize:9},{text:'Extintores',fontSize:9},{text:`${this.datos.check55}`,fontSize:9},{text:'Proteccion personal contraincendio',fontSize:9},{text:`${this.datos.check59}`,fontSize:9},],
                      [{text:'Medidas adicionales de seguridad:',fontSize:9,bold:true,colSpan:6},{text:`${this.datos.escribemedidas}`,fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'.',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'.',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'.',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'.',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      
                      [{text:'PRACTICAS DE TRABAJO SEGURO APLICABLES',bold:true,alignment:'center',colSpan:6},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'Trabajos de Soldadura P-TS-03',fontSize:9},{text:`${this.datos.check60}`,fontSize:9},{text:'Etiqueta, cadado y bloqueo lineas Electricas P-TS-01',fontSize:9,colSpan:3},{text:`${this.datos.check63}`,fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'Trabajos en Alturas mayores a 1.5 m. P-TS-04',fontSize:9},{text:`${this.datos.check61}`,fontSize:9},{text:'Etiqueta, cadado y bloqueo con Producto P-TS-02',fontSize:9,colSpan:3},{text:`${this.datos.check64}`,fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                      [{text:'Trabajos en áreas confinadas P-TS-05', fontSize:9,colSpan: 5},{text:''},{text:''},{text:''},{text:''},{text:`${this.datos.check62}`,fontSize:9}],
                      [{text:'Delimitación del área 3.0 m',fontSize:9},{text:`${this.datos.check65}`,fontSize:9},{text:'Delimitación del área 6.10 m',fontSize:9},{text:`${this.datos.check66}`,fontSize:9},{text:'Delimitación del área 8.0 m',fontSize:9},{text:`${this.datos.check67}`,fontSize:9}]
                     ]
              }
          },
          {
                  text:'\n'
              },{
                  table:{
                  widths:[230,35,230,35],
                      body:[
                          [{text:'TERMINACION Y ENTREGA DE TRABAJO',bold:true,alignment:'center',colSpan:4},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},],
                          [{text:'Equipo libre de daños fisicos',fontSize:9},{text:`${this.datos.check68}`,fontSize:9},{text:'Area limpia, libre de residuos',fontSize:9},{text:`${this.datos.check72}`,fontSize:9},],
                          [{text:'Tornillería completa y apretada',fontSize:9},{text:`${this.datos.check69}`,fontSize:9},{text:'Mantiene Integridad mecánica e integriad eléctrica',fontSize:9},{text:`${this.datos.check73}`,fontSize:9},],
                          [{text:'Bloqueos en válvulas y tablero e control retirados',fontSize:9},{text:`${this.datos.check70}`,fontSize:9},{text:'Equipo operando (ausencia de ruidos) libre de fugas',fontSize:9},{text:`${this.datos.check74}`,fontSize:9},],
                          [{text:'Conexión a tierra instalada',fontSize:9},{text:`${this.datos.check71}`,fontSize:9},{text:'Dispositivos de seguridad operando (paro de emergencia,sensores)',fontSize:9},{text:`${this.datos.check75}`,fontSize:9},]
                          ]
                  }
              },{text:'\n'},{
                  table:{
                       widths: [270,270],heights:[60],
                      body:[
                          [{text:'Roberto Muñoz Torres\nREPRESENTANTE TÉCNICO'},{text:''}],
                          ]
                  }
                  
              }
          ],
      pageSize: 'LETTER',
      pageMargins: [22,120]
  };

  this.pdfMaker.generate(dd, 'FO-09 Permiso de Trabajo.pdf');

  }

}
