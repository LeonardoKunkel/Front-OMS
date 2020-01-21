import { Component, OnInit } from "@angular/core";
import { PdfMakerService } from "src/app/services/pdf-maker.service";
@Component({
  selector: "app-fo07",
  templateUrl: "./fo07.page.html",
  styleUrls: ["./fo07.page.scss"]
})
export class Fo07Page implements OnInit {

  datos:any = {
    texto1:'',
    texto2:'',
    texto3:'',
    texto4:'',
    texto5:'',
    texto6:'',
    texto7:'',
    texto8:'',
    texto9:'',
    texto10:'',
    texto11:'',
    texto12:'',
    texto13:'',
    texto14:'',
    texto15:'',
    texto16:'',
    texto17:'',
    texto18:'',
    texto19:'',
    texto20:'',
    texto21:'',
    texto22:'',
    texto23:'',
    texto24:'',
    texto25:'',
    texto26:'',
    texto27:'',
    texto28:'',
    texto29:'',
    texto30:'',
    texto31:'',
    texto32:'',
    texto33:'',
    texto34:'',
    texto35:'',
    texto36:'',
    texto37:'',
    texto38:'',
    texto39:'',
    texto40:'',
    texto41:'',
    texto42:'',
    texto43:'',
    texto44:'',
    texto45:'',
    texto46:'',
    texto47:'',
    texto48:'',
    texto49:'',
    texto50:'',
    texto51:'',
    texto52:'',
    texto53:'',
    texto54:'',
    texto55:'',
    texto56:'',
    texto57:'',
    texto58:'',
    texto59:'',
    texto60:'',
    texto61:'',
    texto62:'',
    texto63:'',
    texto64:'',
    texto65:'',
    texto66:'',
    texto67:'',
    texto68:'',
    texto69:'',
    texto70:'',
    texto71:'',
    texto72:'',
    texto73:'',
    texto74:'',
    texto75:'',
    texto76:'',
    texto77:'',
    texto78:'',
    texto79:'',
    texto80:'',
    texto81:'',
    texto82:'',
    texto83:'',
    texto84:'',
    texto85:'',
    texto86:'',
    texto87:'',
    texto88:'',
    texto89:'',
    texto90:'',
    texto91:'',
    texto92:'',
    texto93:'',
    texto94:'',
    texto95:'',
    texto96:'',
    texto97:'',
    texto98:'',
    texto99:'',
    texto100:'',
    texto101:'',
    texto102:'',
    texto103:'',
    texto104:'',
  }

  constructor(private pdfMaker: PdfMakerService) {}

  ngOnInit() {}

  enviarForm (formulario) {
    console.log(this.datos);
  }

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
