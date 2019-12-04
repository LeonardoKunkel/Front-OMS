import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
@Component({
  selector: 'app-punto-tres-lista',
  templateUrl: './punto-tres-lista.page.html',
  styleUrls: ['./punto-tres-lista.page.scss'],
})
export class PuntoTresListaPage implements OnInit {

  constructor(private pdfMakerService: PdfMakerService) { }

  ngOnInit() {
  }

  downloadListReqLeg(){
    var dd = {
      header: function(){
        return {
            table: { widths: [720],heights:[40,0,0],
  body: [
  
      [{text:''}],
      [{text:'III. REQUISITOS LEGALES',alignment:'center',bold:true}],
      [{text:'Identificación de los requisitos legales, aplicables al transporte y actividades',alignment:'center',bold:true,fillColor:'#ddd'}],
     
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
            ol:[
                [{text:'Considerará todas las actividades, procesos, equipos e instalaciones y la siguiente relación, para identificar los requisitos legales'}],
                [{text:'Constitución Política de los Estados Unidos Mexicanos.'}],
                [{text:'Leyes Generales, Leyes Federales y sus Reglamentos'}],
                [{text:'Normas Oficiales Mexicanas y disposiciones administrativas aplicables al proyecto'}],
                [{text:'Leyes y Reglamentos Federales y Estatales'}],
                [{text:'Acuerdos del DOF'}],
                [{text:'Autorizaciones, permisos, licencias, otros emitidos por los 3 ordenes de gobierno'}],
                [{text:'Órdenes específicas emitidas por autoridades reguladoras'}],
                ]  
          },{
            text:'\n'  
          },
          {
              table:{
                  widths:[30,650],
                  body:[
                          [{text:'N°',alignment:'center'},{text:'Lugar',alignment:'center'}],
                          [{text:'Tramsporte',alignment:'center',colSpan:2,fillColor:'#ddd'},{}],
                          [{text:'1'},{text:'LEY DE CAMINOS, PUENTES Y AUTOTRANSPORTE FEDERAL'}],
                          [{text:'2'},{text:'REGLAMENTO de Autotransporte Federal y Servicios Auxiliares'}],
                          [{text:'3'},{text:'REGLAMENTO para el Transporte Terrestre de Materiales y Residuos Peligrosos'}],
                          [{text:'4'},{text:'REGLAMENTO de peos y dimenciones'}],
                          [{text:'5'},{text:'REGLAMENTO de medicina preventiva en el transporte'}],
                          [{text:'6'},{text:'REGLAMENTO federalde seguridad y salud en el trabajo'}],
                          [{text:'7'},{text:'REGLAMENTO de transito en carreteras federales'}],
                          [{text:'8'},{text:'REGLAMENTO de gas lp'}],
                          [{text:'9'},{text:'LEY FEDERAL DE TRABAJO'}],
                          [{text:'10'},{text:'LEY FEDERAL DE PROTECCION de datos personales en posicion de particulares'}],
                          [{text:'CENTRO DE CAPACITACIÓN SCT',alignment:'center',fillColor:'#ddd',colSpan:2},{text:''}],
                          [{text:'1'},{text:'Programas mínimos de Capacitación para conductores'}],
                          [{text:'2'},{text:'LEY de Caminos y puentes de autotransporte federal'}],
                          [{text:'3'},{text:'REGLAMENTO para el Transporte Terrestre de Materiales y Residuos Peligrosos'}],
                          [{text:'4'},{text:'REGLAMENTO de Autotransporte Federal y Servicios Auxiliares'}],
                          [{text:'5'},{text:'REGLAMENTO de transito en carreteras federales'}],
                          [{text:'6'},{text:'NORMAS OFICIALES MEXICANAS'}],
                          [{text:'6.1'},{text:'NOM-002-SCT/2011, Listado de las substancias y materiales peligrosos más usualmente transportados.'}],
                          [{text:'6.2'},{text:'NOM-003-SCT/2008, Características  etiquetas, envases, embalajes, en transporte  mat. Pel.'}],
                          [{text:'6.3'},{text:'NOM-004-SCT/2008, Sistemas de identificación de unidades destinadas al transporte de smat. Pel.'}],
                          [{text:'6.4'},{text:'NOM-003-SCT/2008, Características de las etiquetas de envases y embalajes del transporte de mat. Pel'}],
                          [{text:'6.5'},{text:'NOM-006-SCT2/2011, Aspectos básicos para la revisión ocular diaria, mat pel.'}],
                          [{text:'6.6'},{text:'NOM-019-SCT2/2015, Especificaciones, limpieza y control de remanentes, mat. pel.'}],
                          [{text:'6.7'},{text:'NOM-043-SCT/2003, Documento de embarque de substancias, materiales y residuos peligrosos'}],
                          [{text:'SEGURIDAD DEL PERSONAL',alignment:'center',fillColor:'#ddd',colSpan:2},{text:''}],
                          [{text:'1'},{text:'NOM-001-STPS-2008, Edificios, locales, instalaciones y áreas en los centros de trabajo.'}],
                          [{text:'2'},{text:'NOM-002-STPS-2010, Condiciones de seguridad-Prevención y protección contra incendios.'}],
                          [{text:'3'},{text:'NOM-004-STPS-1999, Sistemas de protección y dispositivos de seguridad en la maquinaria y equipo'}],
                          [{text:'4'},{text:'NOM-005-STPS-1998, condiciones de seguridad e higiene para el manejode mat pel'}],
                          [{text:'5'},{text:'NOM-006-STPS-2014, Manejo y almacenamiento de materiales'}],
                          [{text:'6'},{text:'NOM-009-STPS-2011, Condiciones de seguridad para realizar trabajos en altura.'}],
                          [{text:'7'},{text:'NOM-017-STPS-2008, Equipo de protección personal-Selección, uso y manejo'}],
                          [{text:'8'},{text:'NOM-018-STPS-2015, Sistema armonizado para la comunicación de riesgos. '}],
                          [{text:'9'},{text:'NOM-019-STPS-2011, Constitución, integración, organización y funcionamiento de las comisione'}],
                          [{text:'10'},{text:'NOM-020-STPS-2011, Recipientes sujetoss a presión'}],
                          [{text:'11'},{text:'NOM-022-STPS-2015, Electricidad estática en los centros de trabajo-Condiciones de seguridad'}],
                          [{text:'12'},{text:'NOM-026-STPS-2008, Colores y señales de seguridad y riesgos por fluidos conducidos en tuberías'}],
                          [{text:'13'},{text:'NOM-027-STPS-2008, Actividades de soldadura y corte-Condiciones de seguridad e higiene.'}],
                          [{text:'14'},{text:'NOM-033-STPS-2015, Condiciones de seguridad para realizar trabajos en espacios confinados'}],
                          [{text:'SEGURIDAD EN EQUIPO, INSTALACIONES Y ACTIVIDADES',alignment:'center',fillColor:'#ddd',colSpan:2},{text:''}],
                          [{text:'1'},{text:'NOM-013-SEDG-2002, Evaluación de espesores mediante medición ultrasónica '}],
                          [{text:'2'},{text:'NOM-007-SESH-2010, Vehículos para el transporte y distribución de Gas L.P.- Condiciones de seguridad'}],
                          [{text:'3'},{text:'NOM-057-SCT2/2003, Reequerimientos para el diseño y contrucción de Autotanques'}],
                          [{text:'4'},{text:'NOM-068-SCT-2-2014, Condiciones físico-mecánica y de seguridad para la operación'}],
                          [{text:'5'},{text:'NOM-087-SCT-2-2017, Que establece los tiempos de conducción y pausas'}],
                          [{text:'HIGIENE',alignment:'center',fillColor:'#ddd',colSpan:2},{text:''}],
                          [{text:'1'},{text:'NOM-011-STPS-2001, Condiciones de seguridad e higiene en los centros de trabajo que genere ruido'}],
                          [{text:'2'},{text:'NOM-013-STPS-1993. Condiciones seguridad e higiene en centros de trabajo con Radiaciones no ionizantes'}],
                          [{text:'3'},{text:'NOM-015-STPS-2001, Condiciones térmicas elevadas o abatidas'}],
                          [{text:'4'},{text:'NOM-024-STPS-2001, Vibraciones-Condiciones de seguridad e higiene'}],
                          [{text:'5'},{text:'NOM-025-STPS-2008, Condiciones de iluminación en los centros de trabajo'}],
                          [{text:'6'},{text:'NOM-030-STPS-2009, Servicios preventivos de seguridad y salud en el trabajo-'}],
                          [{text:'7'},{text:'NOM-035-STPS-2018, Factores de riesgo psicosociales en los centros de trbajo'}],
                          [{text:'8'},{text:'NOM-036-1-STPS-2018, Factores de riesgo ergonómico en los centros de trabajo'}],
                          [{text:'MEDIO AMBIENTE',alignmente:'center',fillColor:'#ddd',colSpan:2},{text:''}],
                          [{text:'1'},{text:'LEY GENERAL DEL EQUILIBRIO ECOLÓGICO Y LA PROTECCIÓN AL AMBIENTE'}],
                          [{text:'2'},{text:'LEY PARA LA PREVENCION  Y GESTION DE RESIDUOS'}],
                          [{text:'3'},{text:'NOM-043-SEMRNAT-1993, Limites máximos permisibles de emisiones a la atmosfera por fuentes fijas'}],
                          [{text:'4'},{text:'NOM-052-SEMARNAT-2005, que Establece las Características de los Residuos Peligrosos, '}],
                          [{text:'5'},{text:'NOM-003-SEMARNAT-1997 Limites máximos permisibles de contaminantes en descargas de aguas res.'}],
                          [{text:'6'},{text:'REGLAMENTO de la Ley General del Equilibrio Ecológico y la Protección al Ambiente en Materia de ResPel'}],
                          [{text:'7'},{text:'PRIMER listado de actividades altamente Riesgosas'}],
                          [{text:'8'},{text:'Segundo Listado de Actividades Altamente Riesgosas'}],
                          [{text:'9'},{text:'NOM-054-1994, Incompatibilidad de residuos considerados como peligrosos'}],
                      ]
              }
          }
           ]
     ,pageOrientation: 'landscape',
      pageSize: 'letter',
      pageMargins: [22,120]
  }
  this.pdfMakerService.generate(dd, 'Lista'); 

  }

  pdf2(){
    var dd = {
      header: function(){
        return {
            table: { widths: [720],heights:[40,0,0],
  body: [
  
      [{text:''}],
      [{text:'III. REQUISITOS LEGALES',alignment:'center',bold:true}],
      [{text:'Identificacion de requisitos legales',alignment:'center',bold:true,fillColor:'#ddd'}],
     
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
          widths:[100,100,250,250],
                  body:[
                      [{text:'Organismo'},{text:'Area'},{text:'Norma'},{text:'Normatividad Vigente'}],
                      [{text:'STPS'},{text:'Seguridad'},{text:'CONDICIONES DE SEGURIDAD DE EDIFICIOS'},{text:'NOM-001-STPS-2008'}],
                      [{text:'STPS/portección civil'},{text:'Seguridad'},{text:'PROTECCIÓN CIVIL'},{text:'NOM-002-STPS-2010'}],
                      [{text:'STPS'},{text:'Seguridad'},{text:'MANEJO DE SUSTANCIAS QUIMICAS PELIGROSAS'},{text:'NOM-005-STPS-1998'}],
                      [{text:'STPS'},{text:'Seguridad'},{text:'MANEJO Y ALMACENAMIENTO DE MATERIALES'},{text:'NOM-006-STPS-2014'}],
                      [{text:'STPS'},{text:'Seguridad'},{text:'TRABAJOS EN ALTURA'},{text:'NOM-009-STPS-2011'}],
                      [{text:'STPS'},{text:'Organización'},{text:'Sistema armonizado para la identificación y comunicación de peligros y riesgos por sustancias químicas peligrosas en los centros'},{text:'NOM-017-STPS-2008'}],
                      [{text:'STPS'},{text:'Organización'},{text:'Constitución, integración, organización y funcionamiento de las comisiones de seguridad e higiene'},{text:'NOM-019-STPS-2011'}],
                      [{text:'STPS'},{text:'Seguridad'},{text:'recipientes sujetos a presión'},{text:'NOM-020-STPS-2011'}],
                      [{text:'STPS'},{text:'Seguridad'},{text:'electricidad estática'},{text:'NOM-022-STPS-2008'}],
                      [{text:'STPS'},{text:'Seguridad'},{text:'iluminación'},{text:'NOM-025-STPS-2008'}],
                      [{text:'STPS'},{text:'Organización'},{text:'colores y señales de seguridad'},{text:'NOM-026-STPS-2008'}],
                      [{text:'STPS'},{text:'Seguridad'},{text:'mantenimiento de instalaciones electricas'},{text:'NOM-029-STPS-2011'}],
                      [{text:'STPS'},{text:'Organización'},{text:'servicios preventivos de seguridad y salud'},{text:'NOM-030-STPS-2009'}],
                      [{text:'STPS'},{text:'Seguridad'},{text:'Condiciones de Seguridad para Trabajos Confinados'},{text:''}],
                      [{text:'STPS'},{text:'Seguridad'},{text:'Condiciones de Seguridad para el acceso y desarrollo de actividades de trabajadores con discapacidad en los centros de trabajo'},{text:''}],
                      [{text:'PROFECO'},{text:'Sistemas'},{text:'Instrumentos de medición-Sistema para medición y despacho de gasolina y otros combustibles líquidos con un gasto máximo de 250 L/min, Especificaciones, métodos de prueba y de verificación'},{text:'NOM-005-SCFI-2011'}],
                      [{text:'PROFECO'},{text:'Sistemas'},{text:'Programas informáticos y sistemas electrónicos que controlan el funcionamiento de los sistemas para medición y despacho de gasolina y otros combustibles líquidos-Especificaciones, métodos de prueba y de verificación'},{text:'NOM-185-SCFI-2012'}],
                      [{text:'ASEA'},{text:'Seguridad'},{text:'Sistema de Administración de Seguridad Industrial, Seguridad Operativa y Protección al Ambiente'},{text:'SASISOPA'}],
                      [{text:'ASEA'},{text:'Operación y Mantenimiento'},{text:'Diseño, construcción, operación y mantenimiento de Estaciones de Servicio para Almacenamiento y expendio de diésel y gasolinas'},{text:'NOM-005-ASEA-2016'}],
                      [{text:'CRE'},{text:'Medición'},{text:'Medición aplicables a la actividad de almacenamiento de petróleo, petrolíferos y petroquímicos'},{text:'RES/811/2015'}],
                      [{text:'CRE'},{text:'Combustibles'},{text:'Especificaciones de calidad de los petrolíferos'},{text:'NOM-016-CRE-2016'}],
                      [{text:''},{text:'Señales y aviso para proteccion civil'},{text:'Señales y avisos para protección civil- Colores, formas y sombolos a utilizar'},{text:'NOM-003-SEGOB-2002'}],
  
                      ]
              }
          }
          
              
           ]
     ,pageOrientation: 'landscape',
      pageSize: 'letter',
      pageMargins: [22,120]
  };
  this.pdfMakerService.generate(dd, 'Lista'); 
  }

}
