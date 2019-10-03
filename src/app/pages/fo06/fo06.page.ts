import { Component, OnInit } from "@angular/core";
import { PdfMakerService } from "src/app/services/pdf-maker.service";

@Component({
  selector: "app-fo06",
  templateUrl: "./fo06.page.html",
  styleUrls: ["./fo06.page.scss"]
})
export class Fo06Page implements OnInit {
  constructor(private pdfMaker: PdfMakerService) {}

  ngOnInit() {}
  pdf() {
    console.log("hola mundo");
    var dd = {
      background: function(currentPage, pageSize) {
        return {
          //image: "sampleImage.jpg",
          //width: 750,
          //absolutePosition: { x: 10, y: 80 },
          //opacity: 0.3
        };
      },
      header: function() {
        return {
          table: {
            widths: [740],
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
                  text:
                    "PROGRAMA DE LIMPIEZA DIARIA E INSPECCIÓN DE TRAMPA SEPARADORA",
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
            widths: [750],
            body: [[""], [""], [""]]
          },
          layout: "headerLineOnly",
          margin: [30, 85]
        };
      },

      content: [
        {
          table: {
            widths: [15, 200, 76, 76, 76, 76, 76, 76],
            heights: [
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
              10,
              10,
              10,
              10,
              10
            ],
            body: [
              [
                { text: "N°", bold: true, fillColor: "#ddd" },
                { text: "AREA", bold: true, fillColor: "#ddd" },
                { text: "LUNES", bold: true, fillColor: "#ddd" },
                { text: "MARTES", bold: true, fillColor: "#ddd" },
                { text: "MIERCOLES", bold: true, fillColor: "#ddd" },
                { text: "JUEVES", bold: true, fillColor: "#ddd" },
                { text: "VIERNES", bold: true, fillColor: "SABADO" },
                { text: "DOMINGO", bold: true, fillColor: "#ddd" }
              ],
              [
                { text: "1", bold: true },
                { text: "Isla y dispensario 1", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "2", bold: true },
                { text: "Isla y dispensario 2", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "3", bold: true },
                { text: "Isla y dispensario 3", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "4", bold: true },
                { text: "Isla y dispensario 4", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "5", bold: true },
                { text: "Isla dispensario 5", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "6", bold: true },
                { text: "Área de almacenamiento", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "7", bold: true },
                { text: "Accesos y circulaciones", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "8", bold: true },
                { text: "Sanitarios", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "9", bold: true },
                { text: "Puertas y ventanas", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "10", bold: true },
                { text: "Cuartos sucios, residuos", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "11", bold: true },
                { text: "Cuarto de maquinas", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "12", bold: true },
                { text: "Cuarto de control eléctrico", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "Observaciones:", bold: true, colSpan: 8 },
                {
                  text: "Ausencia de producto en Trampa de combustibles",
                  bold: true
                },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "", bold: true, colSpan: 8 },
                {
                  text: "Ausencia de producto en Trampa de combustibles",
                  bold: true
                },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ],
              [
                { text: "", bold: true, colSpan: 8 },
                {
                  text: "Ausencia de producto en Trampa de combustibles",
                  bold: true
                },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true },
                { text: "", bold: true }
              ]
            ]
          }
        },
        {
          text: "\n\n"
        },
        {
          table: {
            widths: [400, 330],
            heights: [90],
            body: [
              [
                {
                  text:
                    "Cinthya Karime Bedoy DÍaz \nENCARGADO DE LA ESTACIÓN DE SERVICIO"
                },
                { text: "\nSEMANA DEL ________AL___________________" }
              ]
            ]
          }
        }
      ],
      pageOrientation: "landscape",
      pageSize: "LETTER",
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, "XI.FO-06 Limpieza.pdf");
  }
}
