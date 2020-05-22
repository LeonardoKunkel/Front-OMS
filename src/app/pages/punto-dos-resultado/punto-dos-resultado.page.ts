import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-dos-resultado',
  templateUrl: './punto-dos-resultado.page.html',
  styleUrls: ['./punto-dos-resultado.page.scss'],
})
export class PuntoDosResultadoPage implements OnInit {

  constructor( private pdfMaker: PdfMakerService ) { }

  ngOnInit() {
  }

  pdf() {
    const dd = {
      header: () => {
          return {
              table: {
                  widths: [20, 150, 133, 172, 172, 10, 10, 10],
                  heights: [50, 15, 15, 15],
                  body: [
                      [
                          {text: '', colSpan: 8}
                      ],
                      [
                          {text: `II. IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES`, alignment: 'center', bold: true, colSpan: 8}
                      ],
                      [
                          {text: 'RESULTADO DEL ANÁLISIS DE RIESGOS Y ASPECTOS AMBIENTALES', alignment: 'center', bold: true, fillColor: '#ddd', colSpan: 8}
                      ],
                  ]
              },
              margin: [22, 15]
          };
      },
      footer: () => {
          return {
              table: {
                  headerRows: 1,
                  widths: [740],
                  body: [
                      [''],
                      [''],
                      ['']
                  ]
              },
              layout : 'headerLineOnly',
              margin: [30, 85]
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                          ],
                          [
                              {text: '18', bold: true, alignment: 'center'},
                              {text: 'Operación normal.'},
                              {text: 'Fenómeno geológico que no depende de la estación de servicio.', fontSize: '10'},
                              {text: 'Contaminación de subsuelo y mantos freáticos por fuga o derrame de combustible.', fontSize: '10'},
                              {text: `a. Monitoreode subsuelo por medio de pozos de observación y pozos de monitoreo.\n
                                      b. Detector de fugas en contenedores.
                                      c. Procedimiento preparación de respuesta a emergencias.`, fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
                              {text: '', fontSize: 10},
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
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '2', bold: true, alignment: 'center'},
                            {text: 'TOma muestra de producto (Recepción AT).'},
                            {text: 'Autotanque'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '3', bold: true, alignment: 'center'},
                            {text: 'Conexión de mangueras (Recepción AT).'},
                            {text: 'Autotanque y tanque de almacenamiento'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '4', bold: true, alignment: 'center'},
                            {text: 'Descarga de hidrocarburo (Recepción AT).'},
                            {text: 'Autotanque y tanque de almacenamiento'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '5', bold: true, alignment: 'center'},
                            {text: 'Derrame durante llenado (Recepción AT).'},
                            {text: 'Autotanque y tanque de almacenamiento'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '6', bold: true, alignment: 'center'},
                            {text: 'Desconexión de mangueras (Recepción AT).', rowSpan: 3},
                            {text: 'Autotanque y tanque de almacenamiento', rowSpan: 3},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '7', bold: true, alignment: 'center'},
                            {text: ''},
                            {text: ''},
                            {text: 'Suelo'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '8', bold: true, alignment: 'center'},
                            {text: ''},
                            {text: ''},
                            {text: 'Agua'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '9', bold: true, alignment: 'center'},
                            {text: 'Escurrimiento de autotanque (Recepción AT).'},
                            {text: 'Autotanque y tanque de almacenamiento'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '10', bold: true, alignment: 'center'},
                            {text: 'Salida maniobra de autotanque (Recepción AT)'},
                            {text: 'Autotanque'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '11', bold: true, alignment: 'center'},
                            {text: 'Almacenamiento derrame.', rowSpan: 2},
                            {text: 'Tanque de almacenamiento', rowSpan: 2},
                            {text: 'Suelo'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '12', bold: true, alignment: 'center'},
                            {text: ''},
                            {text: ''},
                            {text: 'Aire'},
                            {text: 'Evitar emisiones'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '13', bold: true, alignment: 'center'},
                            {text: 'Venteo.'},
                            {text: 'Tuberías de venteo'},
                            {text: 'Aire'},
                            {text: 'Evitar emisiones'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '14', bold: true, alignment: 'center'},
                            {text: 'Venteo incendio.'},
                            {text: 'Tuberías de venteo'},
                            {text: 'Aire'},
                            {text: 'Evitar emisiones'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '15', bold: true, alignment: 'center'},
                            {text: 'Retiro de aguas aceitosas (purgado de agua).'},
                            {text: 'Tanque de almacenamiento'},
                            {text: 'Agua'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '16', bold: true, alignment: 'center'},
                            {text: 'Retiro de lodos (limpieza interior de tanque).'},
                            {text: 'Tanque de almacenamiento'},
                            {text: 'Residuos Peligrosos'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '17', bold: true, alignment: 'center'},
                            {text: 'Retiro de aguas aceitosas y materiales impregnados (limpieza de bocatomas).'},
                            {text: 'Tanque de almacenamiento'},
                            {text: 'Residuos Peligrosos'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '18', bold: true, alignment: 'center'},
                            {text: 'Generación de aguas aceitosas y materiales impregnados (limpieza del área).'},
                            {text: 'Área de tanque de almacenamiento'},
                            {text: 'Agua'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
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
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '20', bold: true, alignment: 'center'},
                            {text: 'Carga de hidrocarburo.'},
                            {text: 'Vehículo'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '21', bold: true, alignment: 'center'},
                            {text: 'Término del despacho y retiro de pistola del vehículo.'},
                            {text: 'Vehículo'},
                            {text: 'Agua'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '22', bold: true, alignment: 'center'},
                            {text: 'Suministro de lubricantes, aditivos.'},
                            {text: 'Vehículo'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '23', bold: true, alignment: 'center'},
                            {text: 'Limpieza de dispensarios e islas.'},
                            {text: 'Dispensario'},
                            {text: 'Agua'},
                            {text: 'Reducir consumo de agua'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '24', bold: true, alignment: 'center'},
                            {text: 'Limpieza de contenedores.'},
                            {text: 'Dispensario'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '25', bold: true, alignment: 'center'},
                            {text: 'Cambio de filtros.'},
                            {text: 'Dispensario'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '26', bold: true, alignment: 'center'},
                            {text: 'Cambio de mangueras, conexiones o pistolas.'},
                            {text: 'Dispensario'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
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
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '28', bold: true, alignment: 'center'},
                            {text: 'Limpieza.'},
                            {text: 'Rejillas'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '29', bold: true, alignment: 'center'},
                            {text: 'Separación de hidrocarburo.'},
                            {text: 'Trampa de gasolina y Diesel'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
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
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '31', bold: true, alignment: 'center'},
                            {text: 'Actividades cotidianas sin riesgo.'},
                            {text: 'Instalaciones eléctricas'},
                            {text: 'Recursos naturales'},
                            {text: 'Reducir consumo'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '32', bold: true, alignment: 'center'},
                            {text: 'Actividades cotidianas sin riesgo.'},
                            {text: 'Sanitarios'},
                            {text: 'Recursos naturales'},
                            {text: 'Reducir consumo'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '33', bold: true, alignment: 'center'},
                            {text: 'Actividades cotidianas sin riesgo.'},
                            {text: 'Consumo de papel'},
                            {text: 'Recursos naturales'},
                            {text: 'Reducir consumo'},
                            {},
                            {},
                            {},
                            {}
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
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '35', bold: true, alignment: 'center'},
                            {text: 'Mantenimiento.'},
                            {text: 'Tableros eléctricos'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '36', bold: true, alignment: 'center'},
                            {text: 'Operación normal.'},
                            {text: 'Planta de emergencia'},
                            {text: 'Aire'},
                            {text: 'Evitar derrames'},
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '37', bold: true, alignment: 'center'},
                            {text: 'Mantenimiento.'},
                            {text: 'Planta de emergencia'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
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
                            {},
                            {},
                            {},
                            {}
                        ],
                        [
                            {text: '39', bold: true, alignment: 'center'},
                            {text: 'Mantenimiento.'},
                            {text: 'Compresor e hidroneumático'},
                            {text: 'Residuos peligrosos'},
                            {text: 'Control de residuos'},
                            {},
                            {},
                            {},
                            {}
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
                      widths: [440, 292],
                      heights: [50],
                      body: [
                          [
                              'REVISADO POR:\n\n\n\n Gamaliel Chavarría\nREPRESENTANTE TÉCNICO',
                              'FECHA DE APROBACIÓN\n\n\n\n\n00/00/0000',
                          ]
                      ]
                  }
              }
          ],
          pageOrientation: 'landscape',
          pageSize: 'LETTER',
          pageMargins: [22, 120]
      };
    this.pdfMaker.generate(dd, 'Resultado del Análisis');
  }
}
