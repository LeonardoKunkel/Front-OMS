import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-dos-riesgos',
  templateUrl: './punto-dos-riesgos.page.html',
  styleUrls: ['./punto-dos-riesgos.page.scss'],
})
export class PuntoDosRiesgosPage implements OnInit {

  @ViewChild('slider') slider: IonSlides

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }

  goBack() {
    this.slider.lockSwipes(false);
    this.slider.slidePrev();
    this.slider.lockSwipes(true);
  }

  goNext(){
    this.slider.lockSwipes(false);
    this.slider.slideNext();
    this.slider.lockSwipes(true);
  }
  
  pdf(){
    console.log('hola mundo');
    var dd = {
      background: function(currentPage, pageSize) {
      //return {image: 'sampleImage.jpg', width: 700,height: 500, absolutePosition: {x: 60, y: 100},opacity: 0.5}
    },
      header: function(){
        return {
            table: { widths: [740],heights:[50,15,15],
  body: [
  
      [{text:''}],
      [{text:'II. IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES',alignment:'center',bold:true}],
      [{text:'EVALUACIÓN DE ASPECTOS AMBIENTALES',alignment:'center',bold:true,fillColor:'#ddd'}],
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
                  table:{ widths: [15,55,55,55,40,40,40,15,15,15,15,20,50,5,5,5,5,5,5,40,60],
                      body:[
                          [{text:'ASPECTO AMBIENTAL',colSpan:7,fontSize:9,fillColor:'#ddd'},{},{},{},{},{},{},{text:'VALOR TOTAL VT= F + N + M',colSpan:4,fontSize:9,fillColor:'#ddd'},{},{},{},{text:'AAS\n SI/No',rowSpan:2,fontSize:9,fillColor:'#ddd'},{text:'REQUISITO LEGAL U OTRO REQUISITO',rowSpan:2,fontSize:9,fillColor:'#ddd'},{text:'CONTROL APLICADO',colSpan:6,fontSize:9,fillColor:'#ddd'},{},{},{},{},{},{text:'OBJETIVO O META',fontSize:9,fillColor:'#ddd',rowSpan:2},{text:'PROCEDIMIENTO DE CONTROL OPERACIONAL AMBIENTAL',fontSize:9,fillColor:'#ddd',rowSpan:2}],
                          [{text:'NO°',fontSize:7,fillColor:'#ddd'},{text:'ACTIVIDAD,PRODUCTO O SERVICIO',fontSize:7,fillColor:'#ddd'},{text:'EQUIPO/LUGAR',fontSize:7,fillColor:'#ddd'},{text:'ELEMENTO',fontSize:7,fillColor:'#ddd'},{text:'IA IMPACTO AMBIENTAL',fontSize:7,fillColor:'#ddd'},{text:'REAL O POTENCIAL',fontSize:7,fillColor:'#ddd'},{text:'CONDICIÓN DE OPERACIÓN',fontSize:7,fillColor:'#ddd'},{text:'F',fontSize:7,fillColor:'#ddd'},{text:'N',fontSize:7,fillColor:'#ddd'},{text:'M',fontSize:7,fillColor:'#ddd'},{text:'VT',fontSize:7,fillColor:'#ddd'},{},{},{text:'ELIMINACIÓN',fontSize:9,fillColor:'#ddd'},{text:'SUSTITUCIÓN',fontSize:9,fillColor:'#ddd'},{text:'CONTROLDE ING.',fontSize:9,fillColor:'#ddd'},{text:'SEÑALIZACIÓN',fontSize:9,fillColor:'#ddd'},{text:'CONTRLAMVO.EP',fontSize:9,fillColor:'#ddd'},{text:'EPP',fontSize:9,fillColor:'#ddd'},{},{}],
                          [{text:'ÁREA: ALMACENAMIENTO DE COMBUSTIBLES',colSpan:21,fillColor:'#ddd'},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                          [{text:'1'},{text:'Entrada maniobra de autotanque (Recepción AT)',fontSize:9},{text:'Autotanque',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:7},{text:'',fontSize:7},{text:'',fontSize:7},{text:'',fontSize:7},{text:'',fontSize:7},{text:'Licencia Ambiental Única(LAU)',fontSize:9},{text:'',fontSize:7},{text:'',fontSize:9},{text:'',fontSize:7},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-01\nP-IM-02',fontSize:9}],
                          [{text:'2'},{text:'Toma muestra de producto (Recepción AT)',fontSize:9},{text:'Autotanque',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Ambiental Única(LAU)',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-01',fontSize:9}],
                          [{text:'3'},{text:'Conexión de mangueras(Recepción AT)',fontSize:9},{text:'Autotanque y tanque de almacenamiento',fontSize:9 },{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Licencia Ambiental Única(LAU)',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-01\nP-IM-02',fontSize:9}]
                          ,//Rompe primera pagina
                          [{text:'4',pageBreak:'before'},{text:'Descarga de hidrocarburo(Recepción AT)',fontSize:9},{text:'Autotanque y tanque de almacenamiento',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Ambiental Única(LAU)',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-01',fontSize:9}],
                          [{text:'5'},{text:'Derrame durante en llenado(Recepción AT)',fontSize:9},{text:'Autotanque y tanque de almacenamiento',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Potencial',fontSize:9},{text:'Emergencia',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Ambiental Única(LAU)',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derramess',fontSize:9},{text:'P-OP-01',fontSize:9}],
                          [{text:'6'},{text:'Desconexión de Mangueras(Recepción AT)',rowSpan:2,fontSize:9},{text:'Autotanque y tanque de almacenamiento',fontSize:9,rowSpan:2},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Ambiental Única(LAU)',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-01',fontSize:9}],
                          [{text:'7'},{text:'Desconexión de Mangueras(Recepción AT)',fontSize:9},{text:'Autotanque y tanque de almacenamiento',fontSize:9},{text:'Hidrocarburo goteo al piso',fontSize:9},{text:'Suelo',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-002-SEMARNAT-1996',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-01',fontSize:9}],
                          [{text:'8'},{text:'',fontSize:9,colSpan:2},{text:'',fontSize:9},{text:'Hidrocarburo goteo que se lava y se va al drenaje',fontSize:9},{text:'Agua',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-002-SEMARNAT-1996',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-01',fontSize:9}],
                          [{text:'9'},{text:'Escurrimiento de autotanque(Recepción AT)',fontSize:9},{text:'Autotanque y tanque de almacenamiento',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Licencia Ambiental Única(LAU)',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-01',fontSize:9}],
                          [{text:'10'},{text:'Salida maniobra de autotanque(Recepción AT)',fontSize:9},{text:'Autotanque',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Licencia Ambiental Única(LAU)',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar incidentes',fontSize:9},{text:'P-OP-01\nP-IM-02',fontSize:9}],
                          [{text:'11'},{text:'Almacenamiento derrame',fontSize:9,rowSpan:2},{text:'Tanque de almacenamiento',fontSize:9,rowSpan:2},{text:'Hidrocarburo',fontSize:9},{text:'Suelo',fontSize:9},{text:'Potencial',fontSize:9},{text:'Emergencia',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-138-SEMARNAT/SSA1-2012,',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar incidentes',fontSize:9},{text:'P-OP-01\nP-IM-02\nP-SA-06',fontSize:9}],
                          [{text:'12',pageBreak:'before'},{text:'Salida maniobra de autotanque(Recepción AT)',fontSize:9},{text:'Autotanque',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Emergencia',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'(LAU) Licencia Ambiental Única',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar emisiones',fontSize:9},{text:'P-OP-01\nP-IM-02',fontSize:9}],
                          [{text:'13'},{text:'Venteo',fontSize:9},{text:'Tuberías de venteo',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Potencial',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'(LAU) Licencia Ambiental Única',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar emiciones',fontSize:9},{text:'P-IM-02',fontSize:9}],
                          [{text:'14'},{text:'Venteo incendio',fontSize:9},{text:'Tuberías de venteo',fontSize:9},{text:'Emisiones',fontSize:9},{text:'Aire',fontSize:9},{text:'Potencial',fontSize:9},{text:'Emergencia',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar emiciones',fontSize:9},{text:'P-OP-01\nP-IM-02\nP-PRE-01',fontSize:9}],
                          [{text:'15'},{text:'Retiro de aguas aceitosas(purgado de agua)',fontSize:9},{text:'Tanque de almacenamiento',fontSize:9},{text:'Agua contaminada',fontSize:9},{text:'Agua',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-002SEMARNAT-1996',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Control de residuos',fontSize:9},{text:'P-IM-021',fontSize:9}],
                          [{text:'16'},{text:'Retiro de lodos(limpieza interior de tanque)',fontSize:9},{text:'Tanque de almacenamiento',fontSize:9},{text:'Lodos aceitosos',fontSize:9},{text:'Residuos Peligrosos',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Control de residuos',fontSize:9},{text:'P-IM-02P-TS-05',fontSize:9}],
                          [{text:'17'},{text:'Retiro de aguas aceitosas y materiales impregnados(limpieza de bocatomas',fontSize:9},{text:'Tanque de almacenamiento',fontSize:9},{text:'Residuos impregnados',fontSize:9},{text:'Residuos Peligrosos',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Control de residuos',fontSize:9},{text:'P-IM-02P-TS-05\N P-IM-02P-TS-02',fontSize:9}],
                          [{text:'18'},{text:'Generación de aguas aceitosas y materiales impregnados(limpieza del área)',fontSize:9},{text:'Área de tanque de almacenamiento',fontSize:9},{text:'Agua contaminada',fontSize:9},{text:'Agua',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-002-SEMARNAT-1996',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Control de residuos',fontSize:9},{text:'P-IM-02P-TS-05\N P-IM-04',fontSize:9}],
                          [{text:'19'},{text:'Colocación de la pistola en el vehículo',fontSize:9},{text:'Vehículo',fontSize:9},{text:'Hidrocarburo goteo y se lava y se va al drenaje',fontSize:9},{text:'Agua',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-002-SEMARNAT-1996',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-02',fontSize:9}],
                          [{text:'20'},{text:'Carga de hidrocarburo',fontSize:9},{text:'Vehículo',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'(LAU) Licencia Ambiental Única',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-02',fontSize:9}],
                          [{text:'21'},{text:'Termino del despacho y retiro de pistola del vehículo',fontSize:9},{text:'Vehículo',fontSize:9},{text:'Hidrocarburo  goteo y se lava y se va al drenaje',fontSize:9},{text:'Agua',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-002-SEMARNAT-1996',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-02',fontSize:9}],
                          [{text:'22'},{text:'Suministro de lubricantes, aditivos.',fontSize:9},{text:'Vehículo',fontSize:9},{text:'Envases y estopa o franela impregnados de aceite o aditivos',fontSize:9},{text:'Residuos Peligrosos',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Control de residuos',fontSize:9},{text:'P-IM-02P-TS-05',fontSize:9}],
                          [{text:'23'},{text:'Limpieza de dispensarios e islas',fontSize:9},{text:'Dispensario',fontSize:9},{text:'Consumo de agua',fontSize:9},{text:'agua',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Ley de aguas Nacionales (LAN) 2012',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Reducir consumo de agua',fontSize:9},{text:'P-OP-02',fontSize:9}],
                          [{text:'24'},{text:'Limpieza de contenedores',fontSize:9},{text:'Dispensario',fontSize:9},{text:'Aguas contaminadas y material impregnados con hidrocarburos',fontSize:9},{text:'Agua',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Control de residuos',fontSize:9},{text:'P-OP-01',fontSize:9}],
                          [{text:'25'},{text:'Cambio de filtros',fontSize:9},{text:'Dispensario',fontSize:9},{text:'Filtros impregnados de hidrocarburo',fontSize:9},{text:'Residuos peligrosos',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-01',fontSize:9}],
                          [{text:'26'},{text:'Cambio de mangueras, conexiones o pistolas.',fontSize:9},{text:'Dispensario',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'(LAU) Licencia Ambiental Única',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-01',fontSize:9}],
                          [{text:'ÁREA: DRENAJES Y TRAMPA DE COMBUSTIBLES',colSpan:21,fillColor:'#ddd'},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],                       
                          [{text:'27'},{text:'Limpieza',fontSize:9},{text:'Registros, tubería y trampa',fontSize:9},{text:'Lodos impregnados de hidrocarburos y aceites',fontSize:9},{text:'Residuos peligrosos',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Control de residuos',fontSize:9},{text:'P-OP-05',fontSize:9}],
                          [{text:'28'},{text:'Limpieza',fontSize:9},{text:'',fontSize:9},{text:'Recolección de residuos sólidos no peligrosos',fontSize:9},{text:'Residuos solidos',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Control de residuos',fontSize:9},{text:'P-OP-05',fontSize:9}],
                          [{text:'29'},{text:'Separación de hidrocarburo',fontSize:9},{text:'',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'(LAU) Licencia Ambiental Única',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-OP-05',fontSize:9}],
                          [{text:'ÁREA: DRENAJES Y TRAMPA DE COMBUSTIBLES',colSpan:21,fillColor:'#ddd'},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],                                               
                          [{text:'30'},{text:'Actividades cotidianas sin riesgo',fontSize:9},{text:'Contenedores',fontSize:9},{text:'Generación de residuos',fontSize:9},{text:'Residuos sólidos no peligrosos(basura)',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Control de residuos',fontSize:9},{text:'P-OP-05, P-IM-04',fontSize:9}],
                          [{text:'31'},{text:'Actividades cotidianas sin riesgo',fontSize:9},{text:'Instalaciones eléctricas',fontSize:9},{text:'Consumo de energía eléctrica',fontSize:9},{text:'Recursos naturales',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Ley del servicio público de Energía Eléctrica',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Reducir consumo',fontSize:9},{text:'P-OP-03',fontSize:9}],
                          [{text:'32'},{text:'Actividades cotidianas sin riesgo',fontSize:9},{text:'Sanitarios',fontSize:9},{text:'consumo de agua',fontSize:9},{text:'Recursos naturales',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Ley de aguas Nacionales (LAN) 2012',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Reducir consumo',fontSize:9},{text:'',fontSize:9}],
                          [{text:'33'},{text:'Actividades cotidianas sin riesgo',fontSize:9},{text:'Consumo de papel',fontSize:9},{text:'Consumo de papel',fontSize:9},{text:'Recursos naturales',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Reducir consumo',fontSize:9},{text:'',fontSize:9}],
                          [{text:'ÁREA: CUARTO DE CONTROL ELÉCTRICO',colSpan:21,fillColor:'#ddd'},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],                                                                                             
                          [{text:'33'},{text:'Operación normal',fontSize:9},{text:'Tableros eléctricos',fontSize:9},{text:'Consumo de energía eléctrica',fontSize:9},{text:'Recursos naturale',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Ley del servicio público de energía eléctrica',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'P-IM-03',fontSize:9}],
                          [{text:'34'},{text:'Mantenimiento',fontSize:9},{text:'Tableros eléctricos',fontSize:9},{text:'Generación de residuos peligrosos (trapos impregnados aceite usado) y residuos solidos',fontSize:9},{text:'Recursos peligrosos',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Controlde residuos',fontSize:9},{text:'P-OP-03',fontSize:9}],
                          [{text:'35'},{text:'Operación normal',fontSize:9},{text:'Planta emergencia',fontSize:9},{text:'HTC, BETX y Hexano',fontSize:9},{text:'Aire',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'(LAU) Licencia Ambiental Única ',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Evitar derrames',fontSize:9},{text:'P-IM-03',fontSize:9}],                        
                          [{text:'36'},{text:'Mantenimiento',fontSize:9},{text:'Plan de emergencia',fontSize:9},{text:'Generación de residuos peligrosos (trapos impregnados aceite usado) y residuos solidos',fontSize:9},{text:'Residuos peligrosos',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Control de residuos',fontSize:9},{text:'P-IM-03',fontSize:9}],
                          [{text:'ÁREA: CUARTO DE CONTROL ELÉCTRICO',colSpan:21,fillColor:'#ddd'},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],                                                                                             
                          [{text:'33'},{text:'Operación normal',fontSize:9},{text:'Compresor e hidroneumático',fontSize:9},{text:'Consumo de energía eléctrica',fontSize:9},{text:'Recursos naturale',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Ley del servicio público de energía eléctrica',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Reducir consumo',fontSize:9},{text:'P-IM-06',fontSize:9}],
                          [{text:'34'},{text:'Mantenimiento',fontSize:9},{text:'Compresor e hidroneumático',fontSize:9},{text:'Generación de residuos peligrosos (trapos impregnados aceite usado) y residuos solidos',fontSize:9},{text:'Residuos peligrosos',fontSize:9},{text:'Real',fontSize:9},{text:'Rutinaria',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'NOM-052-SEMARNAT-2005',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'',fontSize:9},{text:'Controlde residuos',fontSize:9},{text:'P-OP-06',fontSize:9}],
                          ],
                  },
                  
                                      
              },
              {text: '\n GLOSARIO', style: 'header',bold: true},
              
              {
                                table: {
          body: [
            ['EPP: EQUIPO DE PROTECCIÓN PERSONAL', 'AAS: ASPECTO AMBIENTAL SIGNIFICATIVO', 'N= NATURALEZA (representa el grado de toxicidad o peligrosidad del aspecto en sí, en función de sus características o componentes).'],
            ['IA: IMPACTO AMBIENTAL', 'F: FRECUENCIA (número de veces por unidad de tiempo)', 'M = MAGNITUD (expresión de la cantidad o extensión en que se genera el aspecto ambiental).']
          ]
        } },
        
        {     table:{
              widths:[300,300],
              heights:[80],
              body:[['REVISANDO POR:\n\n\n\n\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO',[{text:'FECHA DE APROBACION\n\n\n\n\n\n'},{text:'00/00/2000',fontSize: 16, color:'red'}]]]
          }
      }
         
                
           ]
     ,
    
      
     pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22,120]
  };

    this.pdfMaker.generate(dd, 'Evaluacion de aspectos ambientales.pdf');
    
    
  }

}
