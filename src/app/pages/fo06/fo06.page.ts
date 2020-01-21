import { Component, OnInit } from "@angular/core";
import { PdfMakerService } from "src/app/services/pdf-maker.service";

@Component({
  selector: "app-fo06",
  templateUrl: "./fo06.page.html",
  styleUrls: ["./fo06.page.scss"]
})
export class Fo06Page implements OnInit {

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
    check1:'',
    check2:'',
    check3:'',
    check4:'',
    check5:'',
    check6:'',
    check7:'',
    check8:'',
    check9:'',
    check10:'',
    check11:'',
    check12:'',
    check13:'',
    check14:'',
    check15:'',
    check16:'',
    check17:'',
    check18:'',
    check19:'',
    check20:'',
    check21:'',
    check22:'',
    check23:'',
    check24:'',
    check25:'',
    check26:'',
    check27:'',
    check28:'',
    check29:'',
    check30:'',
    check31:'',
    check32:'',
    check33:'',
    check34:'',
    check35:'',
    check36:'',
    check37:'',
    check38:'',
    check39:'',
    check40:'',
    check41:'',
    check42:'',
    check43:'',
    check44:'',
    check45:'',
    check46:'',
    check47:'',
    check48:'',
    check49:'',
    check50:'',
    check51:'',
    check52:'',
    check53:'',
    check54:'',
    check55:'',
    check56:'',
    check57:'',
    check58:'',
    check59:'',
    check60:'',
    check61:'',
    check62:'',
    check63:'',
    check64:'',
    check65:'',
    check66:'',
    check67:'',
    check68:'',
    check69:'',
    check70:'',
    check71:'',
    check72:'',
    check73:'',
    check74:'',
    check75:'',
    check76:'',
    check77:'',
    check78:'',
    check79:'',
    check80:'',
    check81:'',
    check82:'',
    check83:'',
    check84:'',
    check85:'',
    check86:'',
    check87:'',
    check88:'',
    check89:'',
    check90:'',
    check91:'',
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
