import { Component, OnInit } from "@angular/core";
import { PdfMakerService } from "src/app/services/pdf-maker.service";
@Component({
  selector: "app-fo07",
  templateUrl: "./fo07.page.html",
  styleUrls: ["./fo07.page.scss"]
})
export class Fo07Page implements OnInit {
  constructor(private pdfMaker: PdfMakerService) {}

  ngOnInit() {}
  pdf() {
    console.log("hola mundo");
    var dd = {
      background: function(currentPage, pageSize) {
        return {
          // image: "sampleImage.jpg",
          // width: 750,
          // absolutePosition: { x: 10, y: 80 },
          // opacity: 0.3
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
            widths: [15, 98, 30, 30, 70, 60, 70, 70, 70, 50, 95],
            body: [
              [
                { text: "N°", bold: true, fillColor: "#ddd" },
                { text: "UBICACIÓN", bold: true, fillColor: "#ddd" },
                { text: "TIPO", bold: true, fillColor: "#ddd" },
                { text: "PESO\n(kg)", bold: true, fillColor: "#ddd" },
                { text: "MANGUERA", bold: true, fillColor: "#ddd" },
                { text: "PRESIÓN", bold: true, fillColor: "#ddd" },
                { text: "CADUCIDAD", bold: true, fillColor: "#ddd" },
                { text: "BOQUILLA", bold: true, fillColor: "#ddd" },
                { text: "SEGURO", bold: true, fillColor: "#ddd" },
                { text: "ESTADO", bold: true, fillColor: "#ddd" },
                { text: "OBSERVACIONES", bold: true, fillColor: "#ddd" }
              ],
              [
                { text: "1" },
                { text: "Tanques" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "2" },
                { text: "Tanques" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "3" },
                { text: "Dispensario 1" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "4" },
                { text: "Dispensario 2" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "5" },
                { text: "Dispensario 3" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "6" },
                { text: "Dispensario 4" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "7" },
                { text: "Dispensario 5" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "8" },
                { text: "Dispensario 6" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "9" },
                { text: "Alm. residuos" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "10" },
                { text: "Cuarto máquinas" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "11" },
                { text: "Cuarto eléctrico" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "12" },
                { text: "Oficinas" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "13" },
                { text: "Facturación" },
                { text: "PQS" },
                { text: "9" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" },
                { text: "" }
              ],
              [
                { text: "14" },
                { text: "Bodega" },
                { text: "PQS" },
                { text: "9" },
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
                { text: "\n Mes:" }
              ]
            ]
          }
        }
      ],
      pageOrientation: "landscape",
      pageSize: "LETTER",
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, "XI.FO-07 INSPECCIÓN MENSUAL DE EXTINTORES.pdf");
  }
}
