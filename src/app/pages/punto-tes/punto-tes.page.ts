import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-tes',
  templateUrl: './punto-tes.page.html',
  styleUrls: ['./punto-tes.page.scss'],
})
export class PuntoTesPage implements OnInit {
  imagen:[
    {
      img:'./minion.jpg'
    }
  ]

  @ViewChild('slider') slider: IonSlides

  constructor(private pdfMaker: PdfMakerService,private navCtrl: NavController) { }

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

  goProcedimiento(){
    this.navCtrl.navigateForward('/punto-tres-procedimiento');
  }

  goFormulario(){
    this.navCtrl.navigateForward('/punto-tres-lista');
  }
  goEvidencia(){
    this.navCtrl.navigateForward('/punto-tres-evidencia');
  }

  // goLicemciaAmbiental() {
  //   window.open('https://www.gob.mx/tramites/ficha/licencia-ambiental-unica-del-sector-hidrocarburos/ASEA6207')
  // }

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


  prueba(){
    var dd = {
      background: function(currentPage, pageSize) {
      return {image: `image`, width: 750, absolutePosition: {x: 10, y: 80} ,opacity:0.3}
    },
      header: function(){
        return {
            table: { widths: [740],heights:[50,15,15],
            
  body: [
  
      [{}],
      [{text:'II. IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES',alignment:'center',bold:true}],
      [{text:'EVALUACIÓN DE RIESGOS',alignment:'center',bold:true,fillColor:'#ddd'}],
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
          table:{widths: [20,70,80,100,120,120,10,10,10,120],
              body:[
                  [{text:'NO',bold:true,fillColor:'#ddd'},{text:'Actividades',bold:true,fillColor:'#ddd'},{text:'Peligro',bold:true,fillColor:'#ddd'},{text:'Riesgo asociado',bold:true,fillColor:'#ddd'},{text:'Causas',bold:true,fillColor:'#ddd'},{text:'Salvaguardas',bold:true,fillColor:'#ddd'},{text:'F',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'R',bold:true,fillColor:'#ddd'},{text:'Recomendación',bold:true,fillColor:'#ddd'}],
                  [{text:'PROCESO: RECEPCIÓN DE PRODUCTO Y ALMACENAMIENTO',bold:true,fillColor:'#ddd',colSpan:10},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],
                  [{text:'1'},{text:'Arribo de autotanque a la Estación de servicio.',fontSize:8},{text:'a. Maniobra dentro de la estación \n b. Falta de conocimiento o de conciencia del personal.',fontSize:8},{text:'Golpe a instalaciones u otros vehículos o atropellamiento a personas.',fontSize:8},{text:'a. Falta o mal estado de señalamiento de circulación dentro de la estación de servicio.\n b. Personal no sigue los procedimientos.',fontSize:8},{text:'a. Abanderar al Autotanque al ingresar a la Estación de Servicio.\n b. Respetar el señalamiento de circulación, dentro de la estación.\n c. Procedimiento de descarga en estaciones de servicio.\n d. Protecciones en las islas de llenado.\n e. Válvulas Shut Off.\n f. Procedimiento preparación de respuesta a emergencias.',fontSize:8},{text:''},{text:''},{text:''},{text:'a. Cumplir programa de mantenimiento de señalamientos, y procedimiento P-IM-04 \n b. Cumplir procedimiento P-OP-01.',fontSize:8},],
                  [{text:'2',fontSize:8},{text:'Conexión e inicio de la descarga de producto.',fontSize:8},{text:'a. Equipos en mal estado \n b. Falta de conocimiento o de conciencia del personal.',fontSize:8},{text:'Derrame o fuga durante la conexión y/o operación de llenado de tanque de almacenamiento.',fontSize:8},{text:'a. Conexión deficiente o equipo en mal estado.\n b. Conexiones o manguera en mal estado, o falta de juntas. \n c. No se conecta la manguera de recuperación de vapores y la válvula de presión vacío no opera. \n d. Falta de válvula de sobrellenado. \n e. Falta de hermeticidad en las conexiones de las boquillas del tanque. \n f. No se cumple el procedimiento.',fontSize:8},{text:'a. Mangueras, conexiones, accesorios,válvulas de sobrellenado, accesorios de tanques en buen estado. \n b. Alarma de alto nivel. \n c. Pisos impermeables con pendiente del 1% a registros de drenaje. \n d. Procedimiento de descarga en estaciones de servicio \n e. Procedimiento preparación de respuesta a emergencias.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Cumplir programa de mantenimiento de mangueras, conexiones, accesorios, válvulas de sobrellenado, así como de accesorios de tanques y contenedores.P-IM-01 \n b. Cumplir procedimiento de P-0P-01.',fontSize:8},],
                  [{text:'3',fontSize:8},{text:'Descarga de producto por autotanque.',fontSize:8},{text:'a. Deslizamiento de autotanque, con desprendimiento de la manguera de descarga en ambos extremos.',fontSize:8},{text:'Derrame de producto.',fontSize:8},{text:'a. No se colocan las calzas al autotanque antes de iniciar la descarga de producto. \n b. Distracción del personal.',fontSize:8},{text:'a. Accesorios de descarga para el autotanque.\n  b. Válvula de 3 vías del autotanque.\n c. Personal capacitado.\n d. Plan de Respuesta a emergencias',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Capacitar al personal en el procedimiento P-OP-01.\n b. Cumplir procedimiento p-OP-01.\n c. Verificar estado de accesorios de descarga (calzas).\n d. Verificar la operación de la válvula de 3 vías del autotanque.',fontSize:8,pageBreak:'after'},],
                  [{text:'4',fontSize:8},{text:'Descarga de producto.',fontSize:8},{text:'a. Equipos en mal estado \nb. Falta de conocimiento o de conciencia del personal.',fontSize:8},{text:'Incendio durante el llenado del tanque de almacenamiento.',fontSize:8},{text:'Previamente ocurre fuga o derrame y la presencia de una fuente de ignición entre otras:a. Uso de celular.\n b. Portar ropa sintética.\n c. Fumar, encender fuego.\nd. Corto circuito en instalación eléctrica.\n e. Tormenta eléctrica.\n f. Corto circuito en instalación eléctrica del autotanque.\n g. Personal no sigue los procedimientos.',fontSize:8},{text:'a. Mangueras, conexiones, accesorios,válvulas de sobrellenado, accesorios de tanques en buen estado.\nb. Alarma de alto nivel.\n c. Pisos impermeables con pendiente del 1% a registros de drenaje. \n d. Procedimiento de descarga en estaciones de servicio.\n e. Procedimiento preparación de respuesta a emergencias.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Cumplir procedimiento de P-OP-01.\n b. Cumplir programa de mantenimiento de instalaciones eléctricas.P-IM-03.',fontSize:8},],
                  [{text:'5',fontSize:8},{text:'Descarga de producto.',fontSize:8},{text:'a. Equipos en mal estado. \n b. Falta de conocimiento o de conciencia del personal.',fontSize:8},{text:'Incendio en tubos de venteo durante el llenado del tanque de almacenamiento.',fontSize:8},{text:'a. Presencia de tormenta eléctrica.\nb. Líneas eléctricas cerca hacen emisión de fuego o chispas.\n c. Ausencia de mantenimiento aválvulas de presión vacío.\n d. Personal no sigue los procedimientos',fontSize:8},{text:'a. Válvulas de presión y vacío, arrestador de flama e instalaciones eléctricas en buen estado.\n b. Procedimiento preparación de respuesta a emergencias.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Cumplir programa de mantenimiento, P-IM-01 y P-IM-03.\n b. Cumplir procedimiento P-OP-01.',fontSize:8},],
                  [{text:'6',fontSize:8},{text:'Descarga de producto',fontSize:8},{text:'a. Nivel de producto en tanque es erróneo.\n b. Conexión a tanque diferente.',fontSize:8},{text:'a. Sobrellenado de tanque de almacenamiento.\n b. Derrame de producto al realizar la desconexión.',fontSize:8},{text:'a. No se verifica la capacidad de recibo del autotanque previo al llenado.\n b. Distracción de la persona al conectar la manguera de descarga.',fontSize:8},{text:'a. Válvula de sobrellenado.\n b. Personal capacitado.\n c. Procedimiento de recepción de autotanque y llenado de tanques de almacenamiento,\n d. Planes de respuesta a emergencia.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Cumplir procedimiento P-OP-01.\n b. Realizar pruebas de operación de paros de emergencia. \n c. Cumplir programa de mantenimiento de válvula de sobrellenado.',fontSize:8},],
                  [{text:'7',fontSize:8},{text:'Termino de la descarga de producto y desconexión.',fontSize:8},{text:'a. Equipos en mal estado.\n b. Falta de conocimiento o de conciencia del personal.',fontSize:8},{text:'Derrame o fuga durante la desconexión al término de la descarga.',fontSize:8},{text:'Desconexión deficiente o equipo en mal estado.\na. Conexiones o manguera en mal estado, o falta de juntas.\nb. Falta de válvula de sobrellenado.\nc. Falta de hermeticidad en la conexión de la boquilla de llenado de tanque.',fontSize:8},{text:'a. Mangueras, conexiones, accesorios,válvulas de sobrellenado, accesorios de tanques en buen estado.\n b. Alarma de alto nivel.\nc. Pisos impermeables con pendiente del1% a registros de drenaje.\n d. Procedimiento preparación de respuesta a emergencias.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Cumplir procedimiento de descarga P-0P-01.\n b. Cumplir programa de mantenimiento de tanques y accesorios de descarga.P-IM-01.',fontSize:8},],
                  [{text:'8',fontSize:8},{text:'Salida de autotanque a la Estación de servicio.',fontSize:8},{text:'Maniobra dentro de la estación.',fontSize:8},{text:'Golpe a instalaciones u otros vehículos o atropellamiento a personas.',fontSize:8},{text:'a. Falta o mal estado de señalamiento de circulación dentro de la estación de servicio. \nb. Personal no sigue los procedimientos.',fontSize:8},{text:'a. Abanderamiento al Autotanque al ingresar a la Estación de Servicio.\nb. Respetar el señalamiento de circulación, dentro de la Estación de Servicio.\nc. Procedimiento de descarga en estaciones de servicio.\nd. Protecciones en las islas de llenado.\ne. Válvulas Shut Off.\nf. Procedimiento preparación de respuesta a emergencias.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Cumplir procedimiento de Recepción de autotanque y descarga de producto a tanques de almacenamiento. P-OP-01,\n b. Cumplir programa de mantenimiento de señalamientos P-IM-04.',fontSize:8},],
                  [{text:'PROCESO: DESPACHO DE PRODUCTOS INFLAMABLES Y COMBUSTIBLES',fontSize:8,colSpan:10,fillColor:'#ddd',bold:true},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},],
                  [{text:'9',fontSize:8},{text:'Despacho de producto.',fontSize:8},{text:'a. Equipos en mal estado.\n b. Falta de conocimiento o de conciencia del personal.',fontSize:8},{text:'Derrame de producto o fuga durante el despacho de producto a vehículos.',fontSize:8},{text:'a. La pistola no para en automático y no detiene el despacho cuando el tanque ya se llenó. \n b. La pistola no contiene el producto al 100% cuando no hay despacho.\n c. El tanque del vehículo se “ahoga” durante la carga y se derrama el producto.\n d. Se retira la pistola sin que termine aún la carga de producto.\n e. Personal no sigue los procedimientos.',fontSize:8},{text:'a. Pistolas de dispensarios en buen estado. \n b. Paro de emergencia.\n c. Procedimiento de despacho a automóviles.\n d. Procedimiento preparación de respuesta a emergencias.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Cumplir programa de mantenimiento a dispensarios. -IM-02 \n b. Cumplir procedimiento de despacho a automóviles. P-OP-02',fontSize:8},],
                  [{text:'10',fontSize:8},{text:'Despacho de producto.',fontSize:8},{text:'Distracción o mala intención del conductor del vehículo.',fontSize:8},{text:'Derrame por desprendimiento de manguera de despacho de combustible por desplazamiento del vehículo.',fontSize:8},{text:'a. No se retira inmediatamente la pistola al término del llenado.\n b. El despachador no acomoda bien la manguera después de retirar la pistola y el vehículo avanza y desprende la manguera porque se atoró con alguna parte del vehículo. \n c. El conductor avanza con su vehículo en forma intencionada para no pagar o por distracción.\n d. Personal no cumple los',fontSize:8},{text:'a. Pistolas de dispensarios en buen estado. \n b. Paro de emergencia.\n c. Procedimiento de despacho a automóviles.\n d. Procedimiento preparación de respuesta a emergencias.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Cumplir programa de mantenimiento a dispensarios. P-IM-02.\n b. Cumplir procedimiento de despacho a automóviles, P-OP-02.',fontSize:8},],
                  [{text:'11',fontSize:8},{text:'Despacho de producto.',fontSize:8},{text:'Distracción o mala intención del conductor del vehículo.',fontSize:8},{text:'Derrame por derribo del dispensario por automóvil o camión y no opera la válvula shut-off.',fontSize:8},{text:'No depende relativamente de la estación de servicio, sin embargo, se puede considerar: \na. Falta de carril de desaceleración. \nb. Falta de señalamientos. \nc. Falta de vibradores o topes.',fontSize:8},{text:'a. Válvula Shut-off \n b. Protecciones de isla \n c. Señalamientos de velocidad máxima y sentido de circulación \n d. Procedimiento preparación de respuesta a emergencias. \n e. Capacitación al personal de los procedimientos que le aplican.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Capacitar al personal de mantenimiento y despachadores.\n b. Cumplir programa de mantenimiento a dispensarios.\n c. Aplicar Plan de respuesta a emergencias.',fontSize:8},],
                  [{text:'12',fontSize:8},{text:'Despacho de producto.',fontSize:8},{text:'a. Equipos en mal estado.\nb. Falta de conocimiento o de conciencia del personal.',fontSize:8},{text:'Incendio en el área de despacho, por derribo de dispensario o desprendimiento de manguera.',fontSize:8},{text:'Previamente, debe ocurrir una fuga o derrame y posterior el contacto con una fuente de ignición.\n a. Uso de teléfono celular. \n b. Pasar corriente a otro vehículo en el área de despacho.\n c. Fumar, encender fósforos. \nd. Contacto de los vapores con una parte caliente del vehículo. \ne. Falta de integridad eléctrica en instalaciones. \nf. Personal no sigue los procedimientos.',fontSize:8},{text:'? Válvula Shut-off \na  Protecciones de isla b \n Señalamientos de velocidad máxima, sentido de circulación, de no fumar y de no uso de celular. c\n Procedimiento de despacho a automóviles. d\nProcedimiento preparación de respuesta a emergencias',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Capacitar al personal de mantenimiento. \nb. Cumplir programa de mantenimiento a Instalaciones. \nc. Aplicar Plan de Respuesta a emergencias.',fontSize:8},],
                  [{text:'PROCESO: ACTIVIDADES DE APOYO',fontSize:8,colSpan:10,fillColor:'#ddd',bold:true},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},],
                  [{text:'13',fontSize:8},{text:'Ejecución de trabajos de mantenimiento.',fontSize:8},{text:'a. Equipos en mal estado.\nb. Falta de conocimiento o de conciencia del personal.',fontSize:8},{text:'Derrame o fuga durante la ejecución de trabajos de mantenimiento.',fontSize:8},{text:'a. No se realiza permiso de trabajo peligroso. \nb. No se identifican los riesgos de hacer un trabajo peligroso.\nc. No se vacía o de presiona la tubería. \nd. No se colocan bloqueos en válvulas y tablero de control',fontSize:8},{text:'a. Procedimiento de permiso de trabajo peligroso.\nb. Procedimiento de etiqueta bloqueo y candadeo de líneas.\nc. Procedimiento preparación de respuesta a emergencias.\nd. Permiso de trabajos peligrosos\ne. Procedimiento de Integridad Mecánica.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Capacitar al personal de mantenimiento. \nb. Cumplir programa de mantenimiento a Instalaciones.',fontSize:8},],
                  [{text:'14',fontSize:8},{text:'Operación normal',fontSize:8},{text:'Trampa de combustibles con hidrocarburos.',fontSize:8},{text:'Incendio en Trampa de Combustibles.',fontSize:8},{text:'a. No se limpia el drenaje y trampa después de un derrame. \nb. Cultura deficiente en materia Ambiental y de seguridad.',fontSize:8},{text:'a. Verificación diaria de trampa de combustibles. \n b. Procedimiento preparación de respuesta a emergencias.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'aa. Mantener trampa de combustibles libre de hidrocarburos. peligrosos.',fontSize:8},],
                  [{text:'15',fontSize:8},{text:'Vandalismo',fontSize:8},{text:'Incendio en área de despacho.',fontSize:8},{text:'No depende de la estación de servicio, si se trata de una manifestación social.',fontSize:8},{text:'a. Procedimiento de atención a casos de vandalismo. \nb. Planes de Respuesta a emergencias. \nc. Paro de emergencia. \nd. Válvula shut-off.',fontSize:8},{text:'a. Verificación diaria de trampa de combustibles. \n b. Procedimiento preparación de respuesta a emergencias.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'aa. Mantener trampa de combustibles libre de hidrocarburos. peligrosos.',fontSize:8},],
                  [{text:'16',fontSize:8},{text:'Instalaciones eléctricas en operación.',fontSize:8},{text:'a. Equipos en mal estado. \nb. Falta de conocimiento o de conciencia del personal.',fontSize:8},{text:'Incendio en Instalaciones eléctricas.',fontSize:8},{text:'Mantenimiento deficiente.',fontSize:8},{text:'a. Instalaciones eléctricas en buen estado de la estación de servicio.\nb. Procedimiento de mantenimiento de instalaciones eléctricas. \nc. Paro de emergencia. \nd. Procedimiento preparación de respuesta a emergencias.\ne. Especificaciones de diseño de la E.S.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Capacitar al personal de mantenimiento.\nb. Cumplir programa de mantenimiento a Instalaciones.',fontSize:8},],
                  [{text:'17',fontSize:8},{text:'Operación normal',fontSize:8},{text:'Sismo de magnitud considerable.',fontSize:8},{text:'Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.',fontSize:8},{text:'a. Ruptura de tuberías interconectadas a los tanques de almacenamiento. \nb. Fenómeno geológico que no depende de la estación de servicio.',fontSize:8},{text:'a. Monitoreo de subsuelo por medio de pozos de observación y pozos de monitoreo. \nb. Detector de fugas en contenedores. \nc. Pruebas de hermeticidad en tanques y tuberías. \nd. Procedimiento preparación de respuesta a emergencias.\ne. Diseño de la E.S.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Cumplir monitoreo periódico de subsuelo y mantos freáticos.\nb. Cumplir programa de mantenimiento a detectores de sensores.',fontSize:8},],
                  [{text:'18',fontSize:8},{text:'Inundación',fontSize:8},{text:'Sismo de magnitud considerable.',fontSize:8},{text:'Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.',fontSize:8},{text:'a. Ruptura de tuberías interconectadas a los tanques de almacenamiento. \nb. Fenómeno geológico que no depende de la estación de servicio.',fontSize:8},{text:'a. Monitoreo de subsuelo por medio de pozos de observación y pozos de monitoreo. \nb. Detector de fugas en contenedores. \nc. Pruebas de hermeticidad en tanques y tuberías. \nd. Procedimiento preparación de respuesta a emergencias.\ne. Diseño de la E.S.',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'',fontSize:8},{text:'a. Cumplir monitoreo periódico de subsuelo y mantos freáticos.\nb. Cumplir programa de mantenimiento a detectores de sensores.',fontSize:8},],
                  [{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''}]
                  
                   ]
          }
      },{
              text:'\n\n'
          },{
              table:{
                   widths:[220,220,220],
                   heights:[50],
                   
                  body:[
                      ['REVISADO POR:\n\n\n\n Roberto Muñoz Torres REPRESENTANTE TÉCNICO', 'APROBADO POR:\n\n\n\nFernando Bedoy Ruiz', 'FECHA DE APROBACIÓN:\n\n\n\nAgregar fecha "10/10/2018"']
                      ]
              }
              
              
          }
              
          
           ]
     ,
     pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22,120]
  };
  this.pdfMaker.generate(dd, 'V. Funciones de funcionalidad y responsabilidad.pdf');
  }
}
