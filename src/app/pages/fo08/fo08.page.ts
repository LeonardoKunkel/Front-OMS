import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { PdfMakerService } from "src/app/services/pdf-maker.service";

@Component({
  selector: "app-fo08",
  templateUrl: "./fo08.page.html",
  styleUrls: ["./fo08.page.scss"]
})
export class Fo08Page implements OnInit {
  constructor(
    private navCtrl: NavController,
    private pdfMaker: PdfMakerService
  ) {}

  ngOnInit() {}

  pdf() {
    console.log("hola mundo");
    var dd = {
      background: function(currentPage, pageSize) {
        return {
        //   image: "sampleImage.jpg",
        //   width: 750,
        //   absolutePosition: { x: 10, y: 80 },
        //   opacity: 0.3
         };
      },
      header: function() {
        return {
          table: {
            widths: [560],
            heights: [50, 15, 15],

            body: [
              [{}],
              [
                {
                  text: "XI. INTEGRIDAD MECÁNICA Y ASEGURAMIENTO DE LA CALIDAD",
                  alignment: "center",
                  bold: true
                }
              ],
              [
                {
                  text: "INSPECCIÓN MENSUAL DE EXTINTORES",
                  alignment: "center",
                  bold: true,
                  fillColor: "#ddd"
                }
              ]
            ]
          },
          margin: [22, 15]
        };
      },
      footer: function() {
        return {
          table: {
            headerRows: 1,
            widths: [560],
            body: [[""], [""], [""]]
          },
          layout: "headerLineOnly",
          margin: [30, 85]
        };
      },

      content: [
        {
          table: {
            widths: [
              150,
              150,
              10,
              10,
              10,
              10,
              10,
              10,
              10,
              10,
              10,
              10,
              10,
              9,
              10
            ],
            body: [
              [
                { text: "DESCRIPCIÓN", bold: true },
                { text: "AREA/IMAGEN", bold: true },
                { text: "ALMACENAMIENTO", bold: true },
                { text: "DISPENSARIOS", bold: true },
                { text: "OFICINAS", bold: true },
                { text: "CUARTO \nDE \n CONTROL", bold: true },
                { text: "CUARTO\n DE\n MÁQUINAS", bold: true },
                { text: "ALMACEN\n DE\n RESIDUOS\n PEL.", bold: true },
                { text: "FACTURACIÓN", bold: true },
                { text: "ACCESOS\n Y\n VIALIDADES", bold: true },
                { text: "ESTACIONAMIENTO", bold: true },
                { text: "SANITARIOS", bold: true },
                { text: "BODEGAS\n DE\n ACEITES", bold: true },
                { text: "CAMBIO\n DE\n ACEITE", bold: true },
                { text: "PUNTO\n DE\n REUNION", bold: true }
              ],
              [
                { text: "PROHIBIDO FUMAR" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "VERIFIQUE MARQUE CEROS" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "APAGUE EL MOTOR" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "PROHIBIDO USO DE CELULAR" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "EXTINTOR" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "PARO DE EMERENCIA" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "AGUA   AIRE" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "CIRCULACIÓN" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "BASURA" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "VELOCIDAD MÁXIMA 10 KM/HR", pageBreak: "before" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "NO ESTACIONARSE" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "PELIGRO DESCARGANDO COMBUSTIBLE" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "REGISTRO DE PREMIUM EN TANQUE" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "REGISTRO DE MAGNA EN TANQUE" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "REGISTRO DE DIÉSEL EN TANQUE" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "TUBERIA DE MAGNA EN VENTEO Y DISPENSARIO" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "TUBERIA DE PREMIUM EN VENTEO Y DISPENSARIO" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "TUBERIA DE DIÉSEL EN VENTEO Y DISPENSARIO(NEGRO)" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "PUESTA A TIERRA" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "POZO DE OBSERVACIÓN" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "POZO DE MONITOREO(AMARILLO)" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "ALTO VOLTAJE" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "PROHIBIDO EL PASO A PERSONAL AJENO" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "DRENAJE PLUVIAL(AZUL)" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "DRENAJE ACEITOSO" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "AMACÉN DE RESIDUOS PELIGROSOS" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "CIRCULACIÓN EN PISOS" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "RECTANGULO EN ÁREA DE DESPACHO", pageBreak: "before" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "GUARNICIÓN Y DELIMITACIÓN" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "ESTACIONAMIENTO RAMPA PARA DISCAPACITADOS" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "ESTACIONAMIENTO" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "SANITARIOS" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "RUTA DE EVACUACIÓN" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "PUNTO DE REUNIÓN" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ]
            ]
          }
        },
        {
          text: "\n"
        },
        {
          table: {
            widths: [400, 150],
            heights: [40],
            body: [
              [
                {
                  text:
                    "\n\n\n\nCinthya Karime Bedoy DÍaz \nENCARGADO DE LA ESTACIÓN DE SERVICIO"
                },
                { text: "\n FECHA 00/00/0000" }
              ]
            ]
          }
        }
      ],
      pageSize: "LETTER",
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, "XI.FO-07 INSPECCIÓN MENSUAL DE EXTINTORES.pdf");
  }
}
