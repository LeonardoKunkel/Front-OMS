import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-dos-riesgos',
  templateUrl: './punto-dos-riesgos.page.html',
  styleUrls: ['./punto-dos-riesgos.page.scss'],
})
export class PuntoDosRiesgosPage implements OnInit {
  respuesta : any={};
  @ViewChild('slider') slider: IonSlides

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
    //this.slider.lockSwipes(true);
  }

  

  enviarForm(formulario){
    console.log('Enviado');
    var n1c1= formulario.value.n1c1
    var n2c1= formulario.value.n2c1
    var n3c1= formulario.value.n3c1
    var n1c2= formulario.value.n1c2
    var n2c2= formulario.value.n2c2
    var n3c2= formulario.value.n3c2
    var n1c3= formulario.value.n1c3
    var n2c3= formulario.value.n2c3
    var n3c3= formulario.value.n3c3
    var n1c4= formulario.value.n1c4
    var n2c4= formulario.value.n2c4
    var n3c4= formulario.value.n3c4
    var n1c5= formulario.value.n1c5
    var n2c5= formulario.value.n2c5
    var n3c5= formulario.value.n3c5
    var n1c6= formulario.value.n1c6
    var n2c6= formulario.value.n2c6
    var n3c6= formulario.value.n3c6
    var n1c7= formulario.value.n1c7
    var n2c7= formulario.value.n2c7
    var n3c7= formulario.value.n3c7
    var n1c8= formulario.value.n1c8
    var n2c8= formulario.value.n2c8
    var n3c8= formulario.value.n3c8
    var n1c9= formulario.value.n1c9
    var n2c9= formulario.value.n2c9
    var n3c9= formulario.value.n3c9
    var n1c10= formulario.value.n1c10
    var n2c10= formulario.value.n2c10
    var n3c10= formulario.value.n3c10
    var n1c11= formulario.value.n1c11
    var n2c11= formulario.value.n2c11
    var n3c11= formulario.value.n3c11
    var n1c12= formulario.value.n1c12
    var n2c12= formulario.value.n2c12
    var n3c12= formulario.value.n3c12
    var n1c13= formulario.value.n1c13
    var n2c13= formulario.value.n2c13
    var n3c13= formulario.value.n3c13
    var n1c14= formulario.value.n1c14
    var n2c14= formulario.value.n2c14
    var n3c14= formulario.value.n3c14
    var n1c15= formulario.value.n1c15
    var n2c15= formulario.value.n2c15
    var n3c15= formulario.value.n3c15
    var n1c16= formulario.value.n1c16
    var n2c16= formulario.value.n2c16
    var n3c16= formulario.value.n3c16
    var n1c17= formulario.value.n1c17
    var n2c17= formulario.value.n2c17
    var n3c17= formulario.value.n3c17
    var n1c18= formulario.value.n1c18
    var n2c18= formulario.value.n2c18
    var n3c18= formulario.value.n3c18
    var n1c19= formulario.value.n1c19
    var n2c19= formulario.value.n2c19
    var n3c19= formulario.value.n3c19
    var n1c20= formulario.value.n1c20
    var n2c20= formulario.value.n2c20
    var n3c20= formulario.value.n3c20
    var n1c21= formulario.value.n1c21
    var n2c21= formulario.value.n2c21
    var n3c21= formulario.value.n3c21
    var n1c22= formulario.value.n1c22
    var n2c22= formulario.value.n2c22
    var n3c22= formulario.value.n3c22
    var n1c23= formulario.value.n1c23
    var n2c23= formulario.value.n2c23
    var n3c23= formulario.value.n3c23
    var n1c24= formulario.value.n1c24
    var n2c24= formulario.value.n2c24
    var n3c24= formulario.value.n3c24
    var n1c25= formulario.value.n1c25
    var n2c25= formulario.value.n2c25
    var n3c25= formulario.value.n3c25
    var n1c26= formulario.value.n1c26
    var n2c26= formulario.value.n2c26
    var n3c26= formulario.value.n3c26
    var n1c27= formulario.value.n1c27
    var n2c27= formulario.value.n2c27
    var n3c27= formulario.value.n3c27
    var n1c28= formulario.value.n1c28
    var n2c28= formulario.value.n2c28
    var n3c28= formulario.value.n3c28
    var n1c29= formulario.value.n1c29
    var n2c29= formulario.value.n2c29
    var n3c29= formulario.value.n3c29
    var n1c30= formulario.value.n1c30
    var n2c30= formulario.value.n2c30
    var n3c30= formulario.value.n3c30
    var n1c31= formulario.value.n1c31
    var n2c31= formulario.value.n2c31
    var n3c31= formulario.value.n3c31
    var n1c32= formulario.value.n1c32
    var n2c32= formulario.value.n2c32
    var n3c32= formulario.value.n3c32
    var n1c33= formulario.value.n1c33
    var n2c33= formulario.value.n2c33
    var n3c33= formulario.value.n3c33
    var n1c34= formulario.value.n1c34
    var n2c34= formulario.value.n2c34
    var n3c34= formulario.value.n3c34
    var n1c35= formulario.value.n1c35
    var n2c35= formulario.value.n2c35
    var n3c35= formulario.value.n3c35
    var n1c36= formulario.value.n1c36
    var n2c36= formulario.value.n2c36
    var n3c36= formulario.value.n3c36
    var n1c37= formulario.value.n1c37
    var n2c37= formulario.value.n2c37
    var n3c37= formulario.value.n3c37
    var n1c38= formulario.value.n1c38
    var n2c38= formulario.value.n2c38
    var n3c38= formulario.value.n3c38
    var n1c39= formulario.value.n1c39
    var n2c39= formulario.value.n2c39
    var n3c39= formulario.value.n3c39

    this.respuesta={
      n1c1,
n2c1,
n3c1,
n1c2,
n2c2,
n3c2,
n1c3,
n2c3,
n3c3,
n1c4,
n2c4,
n3c4,
n1c5,
n2c5,
n3c5,
n1c6,
n2c6,
n3c6,
n1c7,
n2c7,
n3c7,
n1c8,
n2c8,
n3c8,
n1c9,
n2c9,
n3c9,
n1c10,
n2c10,
n3c10,
n1c11,
n2c11,
n3c11,
n1c12,
n2c12,
n3c12,
n1c13,
n2c13,
n3c13,
n1c14,
n2c14,
n3c14,
n1c15,
n2c15,
n3c15,
n1c16,
n2c16,
n3c16,
n1c17,
n2c17,
n3c17,
n1c18,
n2c18,
n3c18,
n1c19,
n2c19,
n3c19,
n1c20,
n2c20,
n3c20,
n1c21,
n2c21,
n3c21,
n1c22,
n2c22,
n3c22,
n1c23,
n2c23,
n3c23,
n1c24,
n2c24,
n3c24,
n1c25,
n2c25,
n3c25,
n1c26,
n2c26,
n3c26,
n1c27,
n2c27,
n3c27,
n1c28,
n2c28,
n3c28,
n1c29,
n2c29,
n3c29,
n1c30,
n2c30,
n3c30,
n1c31,
n2c31,
n3c31,
n1c32,
n2c32,
n3c32,
n1c33,
n2c33,
n3c33,
n1c34,
n2c34,
n3c34,
n1c35,
n2c35,
n3c35,
n1c36,
n2c36,
n3c36,
n1c37,
n2c37,
n3c37,
n1c38,
n2c38,
n3c38,
n1c39,
n2c39,
n3c39,
    }

    console.log(this.respuesta);
    
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
