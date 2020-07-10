import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { AspectosServiceService } from 'src/app/services/Elemento 2/aspectos-service.service';
import { RiesgosServiceService } from 'src/app/services/Elemento 2/riesgos-service.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from '../../services/firma-estacion-service.service';
import { IconoEstacionService } from '../../services/iconosEstacion.service';
import { MarcaAguaServiceService } from '../../services/marca-agua-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';

@Component({
  selector: 'app-punto-dos-resultado',
  templateUrl: './punto-dos-resultado.page.html',
  styleUrls: ['./punto-dos-resultado.page.scss'],
})
export class PuntoDosResultadoPage implements OnInit {
    datosAspectos: any = {
      F1: '',F2: '',F3: '',F4: '',F5: '',F6: '',F7: '',F8: '',F9: '',F10: '',F11: '',F12: '',
      F13: '',F14: '',F15: '',F16: '',F17: '',F18: '',F19: '',F20: '',F21: '',F22: '',F23: '',
      F24: '',F25: '',F26: '',F27: '',F28: '',F29: '',F30: '',F31: '',F32: '',F33: '',F34: '',
      F35: '',F36: '',F37: '',F38: '',F39: '',
      N1: '',N2: '',N3: '',N4: '',N5: '',N6: '',N7: '',N8: '',N9: '',N10: '',N11: '',N12: '',
      N13: '',N14: '',N15: '',N16: '',N17: '',N18: '',N19: '',N20: '',N21: '',N22: '',N23: '',N24: '',N25: '',
      N26: '',N27: '',N28: '',N29: '',N30: '',N31: '',N32: '',N33: '',N34: '',N35: '',N36: '',N37: '',N38: '',N39: '',
      M1: '',M2: '',M3: '',M4: '',M5: '',M6: '',M7: '',M8: '',M9: '',M10: '',M11: '',M12: '',M13: '',M14: '',
      M15: '',M16: '',M17: '',M18: '',M19: '',M20: '',M21: '',M22: '',M23: '',M24: '',M25: '',
      M26: '',M27: '',M28: '',M29: '',M30: '',M31: '',M32: '',M33: '',M34: '',M35: '',M36: '',M37: '',M38: '',M39: '',
      VT1: '',VT2: '',VT3: '',VT4: '',VT5: '',VT6: '',VT7: '',VT8: '',VT9: '',VT10: '',VT11: '',VT12: '',
      VT13: '',VT14: '',VT15: '',VT16: '',VT17: '',VT18: '',VT19: '',VT20: '',VT21: '',VT22: '',VT23: '',
      VT24: '',VT25: '',VT26: '',VT27: '',VT28: '',VT29: '',VT30: '',VT31: '',VT32: '',
      VT33: '',VT34: '',VT35: '',VT36: '',VT37: '',VT38: '',VT39: '',
    };

    datosRiesgos: any = {
      F1: '',
      F2: '',
      F3: '',
      F4: '',
      F5: '',
      F6: '',
      F7: '',
      F8: '',
      F9: '',
      F10: '',
      F11: '',
      F12: '',
      F13: '',
      F14: '',
      F15: '',
      F16: '',
      F17: '',
      F18: '',
      C1: '',
      C2: '',
      C3: '',
      C4: '',
      C5: '',
      C6: '',
      C7: '',
      C8: '',
      C9: '',
      C10: '',
      C11: '',
      C12: '',
      C13: '',
      C14: '',
      C15: '',
      C16: '',
      C17: '',
      C18: '',
      M1: '',
      M2: '',
      M3: '',
      M4: '',
      M5: '',
      M6: '',
      M7: '',
      M8: '',
      M9: '',
      M10: '',
      M11: '',
      M12: '',
      M13: '',
      M14: '',
      M15: '',
      M16: '',
      M17: '',
      M18: '',
    };
    estacione:any[]=[];
    myImage = null;
    firmaEstacion = null;
    iconoEstacion = null;
    marcaAguaEstacion = null;
    datosEstacion:any={
      calleNumero:'',
      ciudad:'',
      colonia:'',
      correoElectronico:'',
      cp:'',
      estado:'',
      gerenteEstacion:'',
      maximaAutoridad:'',
      nombreEstacionServicio:'',
      representanteTecnico:'',
      telefono:''
    };
  

  constructor( 
      private pdfMaker: PdfMakerService,
      private aspectosService : AspectosServiceService,
      private riesgosService : RiesgosServiceService,
      private firma :FirmaEstacionServiceService,
      private marca : MarcaAguaServiceService,
      private icono : IconoEstacionService,
      private datosEstacionService:EstacionServicioDatosService
       ) {
           this.getAspectos();
           this.getRiesgos();
        }

  ngOnInit() {
    this.getDatosEstacion();
    this.imagen64();
    this.getMarcaAgua();
    this.getFirma();
    this.getIcono();
  }

  getAspectos(){
      this.aspectosService.getAspectos().subscribe((data:any)=>{
          //console.log(data.findAspectos[data.findAspectos.length -1]);
        this.datosAspectos = data.findAspectos[data.findAspectos.length -1];
      })
  }

  getRiesgos(){
    this.riesgosService.getRiesgos().subscribe((data:any)=>{
        this.datosRiesgos = data.findRiesgos[data.findRiesgos.length -1];
    })
  }
  getDatosEstacion(){
    this.datosEstacionService.getEstacion().subscribe((data:any) =>{
      //console.log(data.findEstacion[data.findEstacion.length -1]);
      this.datosEstacion = data.findEstacion[data.findEstacion.length -1];
    })
  }
  getIcono(){
    this.icono.getPolitica().subscribe((data:any)=>{
     // console.log(data);
      this.iconoEstacion =  data.findPolitica[data.findPolitica.length -1].imagen;
    })
  }
  getMarcaAgua(){
    this.marca.getMarcaAgua().subscribe((data:any)=>{
      //console.log(data);
      this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua;
    })
  }
  getFirma(){
    this.firma.getFirmaEstacion().subscribe((data:any) =>{
      //console.log(data);
      this.firmaEstacion =this.firma = data.findFirma[data.findFirma.length -1].firma;
    })
  }
  imagen64(){
 
      this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
        base64 =>{
          this.myImage = base64;
          //console.log(this.myImage);
        }
        
      )
  }
  convertFileDataURLviaFileReader(url: string){
    return Observable.create(observer =>{
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onload = function(){
        let reader: FileReader = new FileReader();
        reader.onloadend = function(){
          observer.next(reader.result);
          observer.complete();
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    })
  }
  pdf() {
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;  
    let footer = this.myImage;
    let ddd = this.datosEstacion;
    const dd = {
        userPassword: '123',
        ownerPassword: '123456',
        permissions: {
          printing: 'highResolution', //'lowResolution'
          modifying: false,
          copying: false,
          annotating: true,
          fillingForms: true,
          contentAccessibility: true,
          documentAssembly: true
        },
          
        background: function(currentPage, pageSize) {
        return {
            image: `${marcaAgua}`,
            width: 350,
            height: 350, 
            absolutePosition: {x: 250, y: 150},opacity: 0.5}
      },///////////////////////////////////////////////////////
      header: function(){
        return {
          table:{
              widths: [150,570],
              heights: [30,10,10],
              body:[
                  [
                      {
                          image:`${iconoEstacion}`,
                      width: 70,
                      height: 70,
                      alignment:'center',
                      border:[true,true,false,true],
                      },{
                          text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:25,alignment: 'rigth', margin:[15,20],
                      border:[false,true,true,true],
                      }
                  ],[
                      {
                          text:'EVALUACIÓN DE ASPECTOS AMBIENTALES',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                      },{
                          
                      }
                      ],[
                          {
                            text:'II. IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                          },{
                              
                          }
                          ]
                ]
          },margin: [22,7],
          
            layout:{
              defaultBorder: false
            }
        };
      },
      footer: function(){
        return {
            table:{
          headerRows:1, 
          widths: [650],
               body : [
               [''],
               [''],
               [{
                image: `${footer}`,
                pageBreak: 'after',
                width: 650,
                height: 80,
                 }]
                   ]
             }, layout : 'headerLineOnly',
            margin: [72,20]
        };
      },    
          content: [
              {
                  table: {
                      widths: [20, 150, 133, 172, 172, 10, 10, 10],
                      body: [
                          [
                              {text: 'No.', fillColor: '#ddd', bold: true, alignment: 'center'},
                              {text: 'Falla en', fillColor: '#ddd', bold: true, alignment: 'center'},
                              {text: 'Causas de Falla', fillColor: '#ddd', bold: true, alignment: 'center'},
                              {text: 'Consecuencias', fillColor: '#ddd', bold: true, alignment: 'center'},
                              {text: 'Medidas de Control', fillColor: '#ddd', bold: true, alignment: 'center'},
                              {text: 'F', fillColor: '#ddd', bold: true, alignment: 'center'},
                              {text: 'C', fillColor: '#ddd', bold: true, alignment: 'center'},
                              {text: 'R', fillColor: '#ddd', bold: true, alignment: 'center'},
                          ],
                          [
                              {text: '1', bold: true, alignment: 'center'},
                              {text: 'Arribo de autotanque a la Estación de servicio.'},
                              {text: `a. Falta o mal estado de señalamiento de circulación dentro de la estación de servicio.\n
                                      b. Personal no sigue los procedimientos.`, fontSize: '10'},
                              {text: 'Golpe a instalaciones u otros vehículos o atropellamiento a personas.', fontSize: '10'},
                              {text: `a. Abanderar al Autotanque al ingresar a la Estación de servicio.\n
                                      b. Respetar el señalamiento de circulación, dentro de la estación.\n
                                      c. Procedimiento de descarga en estaciones de servicio.\n
                                      d. Protecciones en las islas de llenado.\n
                                      e. Válvulas Shut Off.\n
                                      f. Procedimiento preparación de respuesta a emergencias.`, fontSize: 10},
                              {text: `${this.datosRiesgos.F1}`, fontSize: 10},
                              {text: `${this.datosRiesgos.C1}`, fontSize: 10},
                              {text: `${this.datosRiesgos.M1}`, fontSize: 10}, ///////////////////
                          ],
                          [
                              {text: '2', bold: true, alignment: 'center'},
                              {text: 'Conexión e inicio de la descarga de producto.'},
                              {text: `a. Conexión deficiente o equipo en mal estado.\n
                                      b. Conexiones o manguera en mal estado, o falta de juntas.\n
                                      c. No se conecta la manguera de recuperación de vapores y la válvula de presión vacío no opera.\n
                                      d. Falta de válvula de sobrellenado.
                                      e. Falta de hermeticidad en las conexiones de las boquillas del tanque.\n
                                      f. No se cumple el procedimiento.`, fontSize: '10'},
                              {text: `Derrame o fuga durante la conexión y/o operación de llenado de tanque de
                                      almacenamiento.`, fontSize: '10'},
                              {text: `a. Mangueras, conexiones, accesorios, válvulas de sobrellenado, accesorios de
                                         tanques en buen estado.\n
                                      b. Alarma de alto nivel.\n
                                      c. Pisos impermeables con pendiente del 1% a registros de drenaje.\n
                                      d. Procedimiento de descarga en estaciones de servicio.\n
                                      e. Procedimiento preparación de respuesta a emergencias.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F2}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C2}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M2}`, fontSize: 10}
                          ],
                          [
                              {text: '3', bold: true, alignment: 'center'},
                              {text: 'Descarga de producto por autotanque.'},
                              {text: `a. No se colocan las calzas al autotanque antes de iniciar la descarga de producto.\n
                                      b. Distracción del personal`, fontSize: '10'},
                              {text: 'Derrame de producto.', fontSize: '10'},
                              {text: `a. Accesorios de descarga para el autotanque.\n
                                      b. Válvula de 3 vías del autotanque.\n
                                      c. Personalcapacitado.\n
                                      d. Plan de Respuesta a emergencias.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F3}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C3}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M3}`, fontSize: 10}
                          ],
                          [
                              {text: '4', bold: true, alignment: 'center'},
                              {text: 'Descarga de producto.'},
                              {text: `Previamente ocurre fuga o derrame y la presencia de una fuente de ignición entre otras:\n
                                      a. Uso de celular.\n
                                      b. Portar ropa sintética.\n
                                      c. Fumar, encender fuego.\n
                                      d. Corto circuito en instalación eléctrica.\n
                                      e. Tormenta eléctrica.\n
                                      f. Corto circuito en instalación eléctrica del autotanque.\n
                                      g. Personal no sigue los procedimientos.`, fontSize: '10'},
                              {text: 'Incendio durante el llenado del tanque', fontSize: '10'},
                              {text: `a. Mangueras, conexiones, accesorios, válvulasde sobrellenado, accesorios de tanques en buen estado.\n
                                      b. Alarma de alto nivel.\n
                                      c. Pisos impermeables con pendiente del 1% a registros de drenaje.\n
                                      d. Procedimiento preparación de respuesta a emergencias.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F4}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C4}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M4}`, fontSize: 10}
                          ],
                          [
                              {text: '5', bold: true, alignment: 'center'},
                              {text: 'Descarga de producto.'},
                              {text: `a. Presencia de tormenta eléctrica.\n
                                      b. Líneas eléctricas cerca hacen emisión de fuego o chispas.\n
                                      c. Ausencia de mantenimiento a válvulas de presión vacío.\n
                                      d. Personal no sigue los procedimientos.`, fontSize: '10'},
                              {text: 'Incendio en tubos de venteo durante el llenado del tanque de almacenamiento.', fontSize: '10'},
                              {text: `a. Válvulas de presión y vacío, arrestador de flama e instalaciones eléctricasen buen estado.\n
                                      b. Procedimiento preparación de respuesta a emergencias.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F5}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C5}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M5}`, fontSize: 10}
                          ],
                          [
                              {text: '6', bold: true, alignment: 'center'},
                              {text: 'Descarga de producto.'},
                              {text: `a. No se verifica la capacidad de recibo del autotanque previo al llenado.\n
                                      b. Distracción de la persona al conectar la manguera de descarga.`, fontSize: '10'},
                              {text: `a. Sobrellenado de tanque de almacenamiento.\n
                                      b. Derrame de producto al realizar la desconexión.`, fontSize: '10'},
                              {text: `a. Válvula de sobrellenado.\n
                                      b. Personal capacitado.\n
                                      c. Procedimiento de recepción de autotanque y llenado de tanques de almacenamiento.\n
                                      d. Planes de respuesta emergencia.\n\n\n`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F6}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C6}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M6}`, fontSize: 10}
                          ],
                          [
                              {text: '7', bold: true, alignment: 'center'},
                              {text: 'Termino de la descarga de producto y desconexión.'},
                              {text: `Desconexión deficiente o equipo en mal estado.\n
                                      a. Conexiones o manguera en mal estado o falta de juntas.\n
                                      b. Falta de válvula de sobrellenado.\n
                                      c. Falta de hermeticidad en la conexión de la boquilla de llenado de tanque.\n
                                      d. Personal no sigue los procedimientos.`, fontSize: '10'},
                              {text: 'Derrame o fuga durante la desconexión al término de la descarga.', fontSize: '10'},
                              {text: `a. Mangueras, conexiones accesorios, válvulas de sobrellenado, accesorios de tanques en buen estado.\n
                                      b. Alarma de alto nivel.\n
                                      c. Pisos impermeables con pendiente del 1% a registros de drenaje.\n
                                      d. Procedimiento preparación de respuesta a emergencias.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F7}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C7}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M7}`, fontSize: 10}
                          ],
                          [
                              {text: '8', bold: true, alignment: 'center'},
                              {text: 'Salida de autotanque a la Estación de servicio.'},
                              {text: `a. Falta o mal estado de señalamiento de circulación dentro de la estación de servicio.\n
                                      b. Personal no sigue los procedimientos.`, fontSize: '10'},
                              {text: 'Golpe a instalaciones u otros vehículos o atropellamiento a personas.', fontSize: '10'},
                              {text: `a. Abanderamiento al Autotanque al ingresar a la Estación de servicio.\n
                                      b. Respetar el señalamiento de circulación, dentro de la Estación de servicio.\n
                                      c. Procedimiento de descarga en estaciones de servicio.\n
                                      d. Protecciones en las islas de llenado.\n
                                      e. Válvulas Shut Off.\n
                                      f. Procedimiento preparación de respuestasa emergencias.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F8}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C8}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M8}`, fontSize: 10}
                          ],
                          [
                              {text: '9', bold: true, alignment: 'center'},
                              {text: 'Despacho de producto.'},
                              {text: `a. La pistola no para en automático y no detiene el despacho cuando el tanque ya se llenó.\n
                                      b. La pistola no contiene el producto al 100% cuando no hay despacho.\n
                                      c. El tanque del vehículo se "ahoga" durante la carga y se derrama el producto.\n
                                      d. Se retira la pistola sin que termine aún la carga de producto.\n
                                      e. Personal no sigue los procedimientos.\n\n\n`, fontSize: '10'},
                              {text: 'Derrame de producto o fuga dirante el despacho de producto a vehículos', fontSize: '10'},
                              {text: `a. Pistolas de dispensarios en buen estado.\n
                                      b. Paro de emergencia.\n
                                      c. Procedimiento preparación de respuesta a emergencias.`, fontSize: 10},
                              {text: `${this.datosRiesgos.F9}`, fontSize: 10},
                              {text: `${this.datosRiesgos.C9}`, fontSize: 10},
                              {text: `${this.datosRiesgos.M9}`, fontSize: 10}
                          ],
                          [
                              {text: '10', bold: true, alignment: 'center'},
                              {text: 'Despacho de prodcuto'},
                              {text: `a. No se retira inmediatamente la pistola al término del llenado.\n
                                      b. El despachador no acomoda bien la manguera después de retirar la pistola
                                         y el vehículo avanza y desprende la manguera porque se atoró con alguna parte del vehículo.\n
                                      c. El conductor avanza con su vehículo en forma intencionada para no pagar o por distracción\n
                                      d. Personal no cumple los procedimientos.`, fontSize: '10'},
                              {text: `Derrame por desprendimiento de manguera de despacho de combustible por desplazamiento
                                      del vehículo.`, fontSize: '10'},
                              {text: `a. Válvulas Break-Away.\n
                                      b. Procedimiento de despacho a automóviles.\n
                                      c. Procedimiento preparación de respuesta a emergencias.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F10}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C10}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M10}`, fontSize: 10}
                          ],
                          [
                              {text: '11', bold: true, alignment: 'center'},
                              {text: 'Despacho de producto.'},
                              {text: `No depende relativamente de la estación de servicio, sin embargo, se puede considerar:\n
                                      a. Falta de carril de desaceleración.\n
                                      b. Falta de señalamientos.\n
                                      c. Falta de vibradores o topes.`, fontSize: '10'},
                              {text: `Derrame por derribo del deispensario por automóvil o camión y no opera la válvula
                                      shut-off`, fontSize: '10'},
                              {text: `a. Válvula Shut-off.\n
                                      b. Protecciones de isla.\n
                                      c. Señalamientos de velocidad máxima y sentido de circulación.\n
                                      d. Procedimiento preparación de respuesta a emergencias.\n
                                      e. Capacitación al personal de los procedimientos que le aplican.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F11}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C11}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M11}`, fontSize: 10}
                          ],
                          [
                              {text: '12', bold: true, alignment: 'center'},
                              {text: 'Despacho de producto.'},
                              {text: `Previamente, debe ocurrir una fuga o derrame y posterior el contacto con una fuente de ignición.\n
                                      a. Uso de teléfono celular.\n
                                      b. Pasar corriente a otro vehículo en el área de despacho.\n
                                      c. Fumar, encender fósforos.\n
                                      d. Contacto de los vapores con una parte caliente del vehículo.\n
                                      e. Falta de integridad eléctrica en instalaciones.\n
                                      f. Personal no sigue los procedimientos.`, fontSize: 10},
                              {text: `Incendio en el área de despacho por derribo de dispensario o desprendimiento de
                                      manguera.`, fontSize: '10'},
                              {text: `a. Válvula Shut-off.\n
                                      b. Protecciones de isla.\n
                                      c. Señalamientos de velocidad máxima y sentido de circulación, de no fumar y de no uso de celular.\n
                                      d. Procedimiento de despacho a automóviles.\n
                                      e. Procedimiento preparación de respuesta a emergencias.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F12}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C12}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M12}`, fontSize: 10}
                          ],
                          [
                              {text: '13', bold: true, alignment: 'center'},
                              {text: 'Ejecución de trabajos de mantenimiento.'},
                              {text: `a. No se realiza permiso de trabajo peligroso.\n
                                      b. No se identifican los riesgos de hacer un trabajo peligroso.\n
                                      c. No se vacía o de prsesiona la tubería.\n
                                      d. No se colocan bloqueos en válvulas y tablero de control.`, fontSize: '10'},
                              {text: 'Derrame o fuga durante la ejecución de trabajos de mantenimiento.'},
                              {text: `a. Procedimiento de permiso de trabajo peligroso.\n
                                      b. Procedimiento de etiqueta bloqueo y candadeo de líneas.\n
                                      c. Procedimiento preparación de respuesta a emergencias.\n
                                      d. Permiso de trabajos peligrosos.\n
                                      e. Procedimiento de Interidad Mecánica.\n\n`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F13}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C13}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M13}`, fontSize: 10}
                          ],
                          [
                              {text: '14', bold: true, alignment: 'center'},
                              {text: 'Operación normal.'},
                              {text: `a. No se limpia el drenaje y trampa después de  un derrame.\n
                                      b. Cultura deficiente en materia Ambiental y de seguridad.\n
                                      c. Desconocimiento de las instalaciones.`, fontSize: '10'},
                              {text: 'Incendio en Trampa de Combustibles.', fontSize: '10'},
                              {text: `a. Verificación diaria de trampa de combustibles.\n
                                      b. Procedimiento preparación de respuestas a emergencias.\n
                                      c. Programa de Mantenimiento.\n
                                      d. Procedimiento de Integridad Mecánica y Aseguramiento de la Calidad.\n
                                      e. Procedimiento de Mantenimiento a Drenajes.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F14}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C14}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M14}`, fontSize: 10}
                          ],
                          [
                              {text: '15', bold: true, alignment: 'center'},
                              {text: 'Operación normal.'},
                              {text: 'No depende de la estación de servicio, si se trata de una manifestación social.', fontSize: '10'},
                              {text: `Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.`, fontSize: '10'},
                              {text: `a. Procedimiento de atención a casos de vandalismo.\n
                                      b. Planes de respuesta a emergencias.\n
                                      c. Paro de emergencia.\n
                                      d. Válvula shut-off.`},
                                      {text: `${this.datosRiesgos.F15}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C15}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M15}`, fontSize: 10}
                          ],
                          [
                              {text: '16', bold: true, alignment: 'center'},
                              {text: 'Instalaciones eléctricas en operación.'},
                              {text: 'Mantenimiento deficiente.'},
                              {text: 'Incendio en Instalaciones eléctricas.'},
                              {text: `a. Instalaciones eléctricas en buen estado de la estación de servicio.\n
                                      b. Procedimiento de mantenimiento de instalaciones eléctricas.\n
                                      c. Paro de emergencia.\n
                                      d. Procedimiento preparación de respuesta a emergencias.\n
                                      e. Especificaciones de diseño de la E.S.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F16}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C16}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M16}`, fontSize: 10}
                          ],
                          [
                              {text: '17', bold: true, alignment: 'center'},
                              {text: 'Operación normal.'},
                              {text: `a. Ruptura de tuberías interconectadas a los tanques de almacenamiento.\n
                                      b. Fenómeno geológico que no depende de la estación de servicio.\n\n\n`, fontSize: '10'},
                              {text: `Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.`, fontSize: '10'},
                              {text: `a. Monitoreo de subsuelo por medio de pozos de observación y pozos de monitoreo.\n
                                      b. Detector de fugas en contenedores.\n
                                      c. Pruebas de hermeticidad en tanques y tuberías.\n
                                      d. Procedimiento preparación de respuesta a emergencias.\n
                                      e. Diseño de la E.S.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F17}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C17}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M17}`, fontSize: 10}
                          ],
                          [
                              {text: '18', bold: true, alignment: 'center'},
                              {text: 'Operación normal.'},
                              {text: 'Fenómeno geológico que no depende de la estación de servicio.', fontSize: '10'},
                              {text: 'Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.', fontSize: '10'},
                              {text: `a. Monitoreode subsuelo por medio de pozos de observación y pozos de monitoreo.\n
                                      b. Detector de fugas en contenedores.
                                      c. Procedimiento preparación de respuesta a emergencias.`, fontSize: 10},
                                      {text: `${this.datosRiesgos.F18}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.C18}`, fontSize: 10},
                                      {text: `${this.datosRiesgos.M18}`, fontSize: 10}
                          ],
                      ]
                  },
              },
              {
                  text: '\n\n'
              },
              {
                table: {
                    widths: [20, 140, 133, 164, 165, 10, 10, 10, 16],
                    body: [
                        [
                            {text: 'No.', fillColor: '#ddd', bold: true, alignment: 'center'},
                            {text: 'Actividad', fillColor: '#ddd', bold: true, alignment: 'center'},
                            {text: 'Equipo/Lugar', fillColor: '#ddd', bold: true, alignment: 'center'},
                            {text: 'Impacto ambiental', fillColor: '#ddd', bold: true, alignment: 'center'},
                            {text: 'Objetivo o Meta', fillColor: '#ddd', bold: true, alignment: 'center'},
                            {text: 'F', fillColor: '#ddd', bold: true, alignment: 'center'},
                            {text: 'N', fillColor: '#ddd', bold: true, alignment: 'center'},
                            {text: 'M', fillColor: '#ddd', bold: true, alignment: 'center'},
                            {text: 'VT', fillColor: '#ddd', bold: true, alignment: 'center'}
                        ],
                        [
                            {text: 'ÁREA: ALMACENAMINETO DE COMBUSTIBLES', bold: true, colSpan: 9, fillColor: '#ddd'}
                        ],
                        [
                            {text: '1', bold: true, alignment: 'center'},
                            {text: 'Entrada maniobra de autotanque (Recepción AT).'},
                            {text: 'Autotanque'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F1}`},
                            {text: `${this.datosAspectos.N1}`},
                            {text: `${this.datosAspectos.M1}`},
                            {text: `${this.datosAspectos.VT1}`}
                        ],
                        [
                            {text: '2', bold: true, alignment: 'center'},
                            {text: 'TOma muestra de producto (Recepción AT).'},
                            {text: 'Autotanque'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F2}`},
                            {text: `${this.datosAspectos.N2}`},
                            {text: `${this.datosAspectos.M2}`},
                            {text: `${this.datosAspectos.VT2}`}
                        ],
                        [
                            {text: '3', bold: true, alignment: 'center'},
                            {text: 'Conexión de mangueras (Recepción AT).'},
                            {text: 'Autotanque y tanque de almacenamiento'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F3}`},
                            {text: `${this.datosAspectos.N3}`},
                            {text: `${this.datosAspectos.M3}`},
                            {text: `${this.datosAspectos.VT3}`}
                        ],
                        [
                            {text: '4', bold: true, alignment: 'center'},
                            {text: 'Descarga de hidrocarburo (Recepción AT).'},
                            {text: 'Autotanque y tanque de almacenamiento'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F4}`},
                            {text: `${this.datosAspectos.N4}`},
                            {text: `${this.datosAspectos.M4}`},
                            {text: `${this.datosAspectos.VT4}`}
                        ],
                        [
                            {text: '5', bold: true, alignment: 'center'},
                            {text: 'Derrame durante llenado (Recepción AT).'},
                            {text: 'Autotanque y tanque de almacenamiento'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F5}`},
                            {text: `${this.datosAspectos.N5}`},
                            {text: `${this.datosAspectos.M5}`},
                            {text: `${this.datosAspectos.VT5}`}
                        ],
                        [
                            {text: '6', bold: true, alignment: 'center'},
                            {text: 'Desconexión de mangueras (Recepción AT).', rowSpan: 3},
                            {text: 'Autotanque y tanque de almacenamiento', rowSpan: 3},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F6}`},
                            {text: `${this.datosAspectos.N6}`},
                            {text: `${this.datosAspectos.M6}`},
                            {text: `${this.datosAspectos.VT6}`}
                        ],
                        [
                            {text: '7', bold: true, alignment: 'center'},
                            {text: ''},
                            {text: ''},
                            {text: 'Suelo'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F7}`},
                            {text: `${this.datosAspectos.N7}`},
                            {text: `${this.datosAspectos.M7}`},
                            {text: `${this.datosAspectos.VT7}`}
                        ],
                        [
                            {text: '8', bold: true, alignment: 'center'},
                            {text: ''},
                            {text: ''},
                            {text: 'Agua'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F8}`},
                            {text: `${this.datosAspectos.N8}`},
                            {text: `${this.datosAspectos.M8}`},
                            {text: `${this.datosAspectos.VT8}`}
                        ],
                        [
                            {text: '9', bold: true, alignment: 'center'},
                            {text: 'Escurrimiento de autotanque (Recepción AT).'},
                            {text: 'Autotanque y tanque de almacenamiento'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F9}`},
                            {text: `${this.datosAspectos.N9}`},
                            {text: `${this.datosAspectos.M9}`},
                            {text: `${this.datosAspectos.VT9}`}
                        ],
                        [
                            {text: '10', bold: true, alignment: 'center'},
                            {text: 'Salida maniobra de autotanque (Recepción AT)'},
                            {text: 'Autotanque'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F10}`},
                            {text: `${this.datosAspectos.N10}`},
                            {text: `${this.datosAspectos.M10}`},
                            {text: `${this.datosAspectos.VT10}`}
                        ],
                        [
                            {text: '11', bold: true, alignment: 'center'},
                            {text: 'Almacenamiento derrame.', rowSpan: 2},
                            {text: 'Tanque de almacenamiento', rowSpan: 2},
                            {text: 'Suelo'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F11}`},
                            {text: `${this.datosAspectos.N11}`},
                            {text: `${this.datosAspectos.M11}`},
                            {text: `${this.datosAspectos.VT11}`}
                        ],
                        [
                            {text: '12', bold: true, alignment: 'center'},
                            {text: ''},
                            {text: ''},
                            {text: 'Aire'},
                            {text: 'Evitar emisiones'},
                            {text: `${this.datosAspectos.F12}`},
                            {text: `${this.datosAspectos.N12}`},
                            {text: `${this.datosAspectos.M12}`},
                            {text: `${this.datosAspectos.VT12}`}
                        ],
                        [
                            {text: '13', bold: true, alignment: 'center'},
                            {text: 'Venteo.'},
                            {text: 'Tuberías de venteo'},
                            {text: 'Aire'},
                            {text: 'Evitar emisiones'},
                            {text: `${this.datosAspectos.F13}`},
                            {text: `${this.datosAspectos.N13}`},
                            {text: `${this.datosAspectos.M13}`},
                            {text: `${this.datosAspectos.VT13}`}
                        ],
                        [
                            {text: '14', bold: true, alignment: 'center'},
                            {text: 'Venteo incendio.'},
                            {text: 'Tuberías de venteo'},
                            {text: 'Aire'},
                            {text: 'Evitar emisiones'},
                            {text: `${this.datosAspectos.F14}`},
                            {text: `${this.datosAspectos.N14}`},
                            {text: `${this.datosAspectos.M14}`},
                            {text: `${this.datosAspectos.VT14}`}
                        ],
                        [
                            {text: '15', bold: true, alignment: 'center'},
                            {text: 'Retiro de aguas aceitosas (purgado de agua).'},
                            {text: 'Tanque de almacenamiento'},
                            {text: 'Agua'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F15}`},
                            {text: `${this.datosAspectos.N15}`},
                            {text: `${this.datosAspectos.M15}`},
                            {text: `${this.datosAspectos.VT15}`}
                        ],
                        [
                            {text: '16', bold: true, alignment: 'center'},
                            {text: 'Retiro de lodos (limpieza interior de tanque).'},
                            {text: 'Tanque de almacenamiento'},
                            {text: 'Residuos Peligrosos'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F16}`},
                            {text: `${this.datosAspectos.N16}`},
                            {text: `${this.datosAspectos.M16}`},
                            {text: `${this.datosAspectos.VT16}`}
                        ],
                        [
                            {text: '17', bold: true, alignment: 'center'},
                            {text: 'Retiro de aguas aceitosas y materiales impregnados (limpieza de bocatomas).'},
                            {text: 'Tanque de almacenamiento'},
                            {text: 'Residuos Peligrosos'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F17}`},
                            {text: `${this.datosAspectos.N17}`},
                            {text: `${this.datosAspectos.M17}`},
                            {text: `${this.datosAspectos.VT17}`}
                        ],
                        [
                            {text: '18', bold: true, alignment: 'center'},
                            {text: 'Generación de aguas aceitosas y materiales impregnados (limpieza del área).'},
                            {text: 'Área de tanque de almacenamiento'},
                            {text: 'Agua'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F18}`},
                            {text: `${this.datosAspectos.N18}`},
                            {text: `${this.datosAspectos.M18}`},
                            {text: `${this.datosAspectos.VT18}`}
                        ],
                        [
                            {text: 'ÁREA: MÓDULO DE DESPACHO DE ABASTECIMIENTO DE COMBUSTIBLE A VEHÍCULOS', bold: true, colSpan: 9, fillColor: '#ddd'}
                        ],
                        [
                            {text: '19', bold: true, alignment: 'center'},
                            {text: 'Colocación de la pistola en el vehículo.'},
                            {text: 'Vehículo'},
                            {text: 'Agua'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F19}`},
                            {text: `${this.datosAspectos.N19}`},
                            {text: `${this.datosAspectos.M19}`},
                            {text: `${this.datosAspectos.VT19}`}
                        ],
                        [
                            {text: '20', bold: true, alignment: 'center'},
                            {text: 'Carga de hidrocarburo.'},
                            {text: 'Vehículo'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F20}`},
                            {text: `${this.datosAspectos.N20}`},
                            {text: `${this.datosAspectos.M20}`},
                            {text: `${this.datosAspectos.VT20}`}
                        ],
                        [
                            {text: '21', bold: true, alignment: 'center'},
                            {text: 'Término del despacho y retiro de pistola del vehículo.'},
                            {text: 'Vehículo'},
                            {text: 'Agua'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F21}`},
                            {text: `${this.datosAspectos.N21}`},
                            {text: `${this.datosAspectos.M21}`},
                            {text: `${this.datosAspectos.VT21}`}
                        ],
                        [
                            {text: '22', bold: true, alignment: 'center'},
                            {text: 'Suministro de lubricantes, aditivos.'},
                            {text: 'Vehículo'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F22}`},
                            {text: `${this.datosAspectos.N22}`},
                            {text: `${this.datosAspectos.M22}`},
                            {text: `${this.datosAspectos.VT22}`}
                        ],
                        [
                            {text: '23', bold: true, alignment: 'center'},
                            {text: 'Limpieza de dispensarios e islas.'},
                            {text: 'Dispensario'},
                            {text: 'Agua'},
                            {text: 'Reducir consumo de agua'},
                            {text: `${this.datosAspectos.F23}`},
                            {text: `${this.datosAspectos.N23}`},
                            {text: `${this.datosAspectos.M23}`},
                            {text: `${this.datosAspectos.VT23}`}
                        ],
                        [
                            {text: '24', bold: true, alignment: 'center'},
                            {text: 'Limpieza de contenedores.'},
                            {text: 'Dispensario'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F24}`},
                            {text: `${this.datosAspectos.N24}`},
                            {text: `${this.datosAspectos.M24}`},
                            {text: `${this.datosAspectos.VT24}`}
                        ],
                        [
                            {text: '25', bold: true, alignment: 'center'},
                            {text: 'Cambio de filtros.'},
                            {text: 'Dispensario'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F25}`},
                            {text: `${this.datosAspectos.N25}`},
                            {text: `${this.datosAspectos.M25}`},
                            {text: `${this.datosAspectos.VT25}`}
                        ],
                        [
                            {text: '26', bold: true, alignment: 'center'},
                            {text: 'Cambio de mangueras, conexiones o pistolas.'},
                            {text: 'Dispensario'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F26}`},
                            {text: `${this.datosAspectos.N26}`},
                            {text: `${this.datosAspectos.M26}`},
                            {text: `${this.datosAspectos.VT26}`}
                        ],
                        [
                            {text: 'ÁREA: DRENAJES Y TRAMPA DE COMBUSTIBLES', bold: true, colSpan: 9, fillColor: '#ddd'}
                        ],
                        [
                            {text: '27', bold: true, alignment: 'center'},
                            {text: 'Limpieza.'},
                            {text: 'Registros, tubería y trampa'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F27}`},
                            {text: `${this.datosAspectos.N27}`},
                            {text: `${this.datosAspectos.M27}`},
                            {text: `${this.datosAspectos.VT27}`}
                        ],
                        [
                            {text: '28', bold: true, alignment: 'center'},
                            {text: 'Limpieza.'},
                            {text: 'Rejillas'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F28}`},
                            {text: `${this.datosAspectos.N28}`},
                            {text: `${this.datosAspectos.M28}`},
                            {text: `${this.datosAspectos.VT28}`}
                        ],
                        [
                            {text: '29', bold: true, alignment: 'center'},
                            {text: 'Separación de hidrocarburo.'},
                            {text: 'Trampa de gasolina y Diesel'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F29}`},
                            {text: `${this.datosAspectos.N29}`},
                            {text: `${this.datosAspectos.M29}`},
                            {text: `${this.datosAspectos.VT29}`}
                        ],
                        [
                            {text: 'ÁREA: OFICINAS Y BAÑOS', bold: true, colSpan: 9, fillColor: '#ddd'}
                        ],
                        [
                            {text: '30', bold: true, alignment: 'center'},
                            {text: 'Actividades cotidianas sin riesgo.'},
                            {text: 'Contenedores'},
                            {text: 'Residuos sólidos no peligrosos (basura)'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F30}`},
                            {text: `${this.datosAspectos.N30}`},
                            {text: `${this.datosAspectos.M30}`},
                            {text: `${this.datosAspectos.VT30}`}
                        ],
                        [
                            {text: '31', bold: true, alignment: 'center'},
                            {text: 'Actividades cotidianas sin riesgo.'},
                            {text: 'Instalaciones eléctricas'},
                            {text: 'Recursos naturales'},
                            {text: 'Reducir consumo'},
                            {text: `${this.datosAspectos.F31}`},
                            {text: `${this.datosAspectos.N31}`},
                            {text: `${this.datosAspectos.M31}`},
                            {text: `${this.datosAspectos.VT31}`}
                        ],
                        [
                            {text: '32', bold: true, alignment: 'center'},
                            {text: 'Actividades cotidianas sin riesgo.'},
                            {text: 'Sanitarios'},
                            {text: 'Recursos naturales'},
                            {text: 'Reducir consumo'},
                            {text: `${this.datosAspectos.F32}`},
                            {text: `${this.datosAspectos.N32}`},
                            {text: `${this.datosAspectos.M32}`},
                            {text: `${this.datosAspectos.VT32}`}
                        ],
                        [
                            {text: '33', bold: true, alignment: 'center'},
                            {text: 'Actividades cotidianas sin riesgo.'},
                            {text: 'Consumo de papel'},
                            {text: 'Recursos naturales'},
                            {text: 'Reducir consumo'},
                            {text: `${this.datosAspectos.F33}`},
                            {text: `${this.datosAspectos.N33}`},
                            {text: `${this.datosAspectos.M33}`},
                            {text: `${this.datosAspectos.VT33}`}
                        ],
                        [
                            {text: 'ÁREA: CUARTO DE CONTROL ELÉCTRICO', bold: true, colSpan: 9, fillColor: '#ddd'}
                        ],
                        [
                            {text: '34', bold: true, alignment: 'center'},
                            {text: 'Operación normal.'},
                            {text: 'Tableros eléctricos'},
                            {text: 'Recursos naturales'},
                            {text: ''},
                            {text: `${this.datosAspectos.F34}`},
                            {text: `${this.datosAspectos.N34}`},
                            {text: `${this.datosAspectos.M34}`},
                            {text: `${this.datosAspectos.VT34}`}
                        ],
                        [
                            {text: '35', bold: true, alignment: 'center'},
                            {text: 'Mantenimiento.'},
                            {text: 'Tableros eléctricos'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F35}`},
                            {text: `${this.datosAspectos.N35}`},
                            {text: `${this.datosAspectos.M35}`},
                            {text: `${this.datosAspectos.VT35}`}
                        ],
                        [
                            {text: '36', bold: true, alignment: 'center'},
                            {text: 'Operación normal.'},
                            {text: 'Planta de emergencia'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {text: `${this.datosAspectos.F36}`},
                            {text: `${this.datosAspectos.N36}`},
                            {text: `${this.datosAspectos.M36}`},
                            {text: `${this.datosAspectos.VT36}`}
                        ],
                        [
                            {text: '37', bold: true, alignment: 'center'},
                            {text: 'Mantenimiento.'},
                            {text: 'Planta de emergencia'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F37}`},
                            {text: `${this.datosAspectos.N37}`},
                            {text: `${this.datosAspectos.M37}`},
                            {text: `${this.datosAspectos.VT37}`}
                        ],
                        [
                            {text: 'ÁREA: CUARTO DE MÁQUINAS', bold: true, colSpan: 9, fillColor: '#ddd'}
                        ],
                        [
                            {text: '38', bold: true, alignment: 'center'},
                            {text: 'Operación normal.'},
                            {text: 'Compresor e hidroneumático'},
                            {text: 'Recursos naturales'},
                            {text: 'Reducir consumo'},
                            {text: `${this.datosAspectos.F38}`},
                            {text: `${this.datosAspectos.N38}`},
                            {text: `${this.datosAspectos.M38}`},
                            {text: `${this.datosAspectos.VT38}`}
                        ],
                        [
                            {text: '39', bold: true, alignment: 'center'},
                            {text: 'Mantenimiento.'},
                            {text: 'Compresor e hidroneumático'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {text: `${this.datosAspectos.F39}`},
                            {text: `${this.datosAspectos.N39}`},
                            {text: `${this.datosAspectos.M39}`},
                            {text: `${this.datosAspectos.VT39}`}
                        ],
                    ]
                },
              },
              {
                text: '\n\n'
              },
              {
                  table: {
                      widths: [740],
                      heights: [15, 80],
                      body: [
                          [
                              {text: 'CONCLUSIONES Y RECOMENDACIONES', bold: true, fillColor: '#ddd'}
                          ],
                          [
                              {}
                          ]
                      ],
                  }
              },
              {
                  text: '\n\n'
              },
              {
                  table: {
                    widths: [200,200,140],
                    heights: [50,30],
                       body: [
                           [
                               {
                                 text:'',
                                 fit:[100,50],
                                 alignment:'center',
                                 border:[true,true,true,false]
                               },{
                                 image:`${firmaEstacion}`,
                                 fit:[100,50],
                                 alignment:'center',
                                 border:[true,true,true,false]
                               },{
                                 text:'',
                                 fit:[100,50],
                                 alignment:'center',
                                 border:[true,true,true,false]
                               }],
                          [
                              {text:`REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,alignment:'center',border:[true,false,true,true]},
                              {text:`APROBADO POR:\n${ddd.maximaAutoridad}\nMAXIMA AUTORIDAD`,alignment:'center',border:[true,false,true,true]},
                              {text:`FECHA DE APROBACIÓN:\n${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true]}]
                       ]
                  },
              layout:{
                defaultBorder: false
              },
              margin:[85,0]
              }
              
          ],
          pageOrientation: 'landscape',
          pageSize: 'LETTER',
          pageMargins: [22, 120]
      };
    this.pdfMaker.generate(dd, 'Resultado del Análisis');
  }
}
