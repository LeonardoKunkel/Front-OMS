import { Component, OnInit } from "@angular/core";
import { PdfMakerService } from "src/app/services/pdf-maker.service";

@Component({
  selector: "app-resultados-riesgos",
  templateUrl: "./resultados-riesgos.page.html",
  styleUrls: ["./resultados-riesgos.page.scss"]
})
export class ResultadosRiesgosPage implements OnInit {
  respuesta: any = {};
  datos: any = {
    P1C1: "",
    P2C1: "",
    P3C1: "",
    P4C1: "",
    P5C1: false,
    P6C1: false,
    P7C1: false,
    P1C2: "",
    P2C2: "",
    P3C2: "",
    P4C2: "",
    P5C2: false,
    P6C2: false,
    P7C2: false,
    P1C3: "",
    P2C3: "",
    P3C3: "",
    P4C3: "",
    P5C3: false,
    P6C3: false,
    P7C3: false,
    P1C4: "",
    P2C4: "",
    P3C4: "",
    P4C4: "",
    P5C4: false,
    P6C4: false,
    P7C4: false,
    P1C5: "",
    P2C5: "",
    P3C5: "",
    P4C5: "",
    P5C5: false,
    P6C5: false,
    P7C5: false,
    P1C6: "",
    P2C6: "",
    P3C6: "",
    P4C6: "",
    P5C6: false,
    P6C6: false,
    P7C6: false,
    P1C7: "",
    P2C7: "",
    P3C7: "",
    P4C7: "",
    P5C7: false,
    P6C7: false,
    P7C7: false
  };
  constructor(private pdfMaker: PdfMakerService) {}

  ngOnInit() {}

  enviarForm(formulario) {
    
  }


  pdf() {
    if (this.datos.P5C1 === true) {
      var C1 = "X";
      console.log(C1);
    } else {
      var C1 = " ";
      console.log(C1);
    }

    if (this.datos.P5C2 === true) {
      var C2 = "X";
      console.log(C2);
    } else {
      var C2 = " ";
      console.log(C2);
    }
    if (this.datos.P5C3 === true) {
      var C3 = "X";
      console.log(C3);
    } else {
      var C3 = " ";
      console.log(C3);
    }
    if (this.datos.P5C4 === true) {
      var C4 = "X";
      console.log(C4);
    } else {
      var C4 = " ";
      console.log(C4);
    }
    if (this.datos.P5C5 === true) {
      var C5 = "X";
      console.log(C5);
    } else {
      var C5 = " ";
      console.log(C5);
    }
    if (this.datos.P5C6 === true) {
      var C6 = "X";
      console.log(C6);
    } else {
      var C6 = " ";
      console.log(C6);
    }
    if (this.datos.P5C7 === true) {
      var C7 = "X";
      console.log(C7);
    } else {
      var C1 = " ";
      console.log(C7);
    }
    if (this.datos.P5C8 === true) {
      var C8 = "X";
      console.log(C8);
    } else {
      var C8 = " ";
      console.log(C8);
    }
    if (this.datos.P5C9 === true) {
      var C9 = "X";
      console.log(C9);
    } else {
      var C1 = " ";
      console.log(C9);
    }////

    if (this.datos.P6C1 === true) {
      var C10 = "X";
    } else {
      var C10 = " ";
    }

    if (this.datos.P6C2 === true) {
      var C11 = "X";
    } else {
      var C11 = " ";
    }
    if (this.datos.P6C3 === true) {
      var C12 = "X";
    } else {
      var C12 = " ";
    }
    if (this.datos.P6C4 === true) {
      var C13 = "X";
    } else {
      var C13 = " ";
    }
    if (this.datos.P6C5 === true) {
      var C14 = "X";
    } else {
      var C14 = " ";
    }
    if (this.datos.P6C6 === true) {
      var C15 = "X";
    } else {
      var C15 = " ";
    }
    if (this.datos.P6C7 === true) {
      var C16 = "X";
    } else {
      var C16 = " ";
    }
    if (this.datos.P6C8 === true) {
      var C17 = "X";
    } else {
      var C17 = " ";
    }
    if (this.datos.P6C9 === true) {
      var C18 = "X";
    } else {
      var C18 = " ";
    }/////////////////////
    if (this.datos.P6C9 === true) {
      var C18 = "X";
    } else {
      var C18 = " ";
    }
    if (this.datos.P6C9 === true) {
      var C18 = "X";
    } else {
      var C18 = " ";
    }
    if (this.datos.P6C9 === true) {
      var C18 = "X";
    } else {
      var C18 = " ";
    }
    var dd = {
      header: function() {
        return {
          table: {
            widths: [560],
            heights: [45, 0, 0],
            body: [
              [{ text: "" }],
              [
                {
                  text:
                    "II. IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES",
                  alignment: "center",
                  bold: true
                }
              ],
              [
                {
                  text: "ERESULTADO DEL ANÁLISIS DE RIESGOS",
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
        { text: "\n" },
        {
          table: {
            widths: [20, 110, 90, 110, 140, 10, 10, 10],
            body: [
              [
                { text: "NO", bold: true, fillColor: "#ddd" },
                { text: "Falla", bold: true, fillColor: "#ddd" },
                { text: "Causas de Falla", bold: true, fillColor: "#ddd" },
                { text: "Consecuencias", bold: true, fillColor: "#ddd" },
                { text: "Medidas de Control", bold: true, fillColor: "#ddd" },
                { text: "F", bold: true, fillColor: "#ddd" },
                { text: "C", bold: true, fillColor: "#ddd" },
                { text: "R", bold: true, fillColor: "#ddd" }
              ],
              [
                { text: "1" },
                { text: `${this.datos.P1C1}`, fontSize: 8 },
                { text: `${this.datos.P2C1}`, fontSize: 8 },
                { text: `${this.datos.P3C1}`, fontSize: 8 },
                { text: `${this.datos.P4C1}`, fontSize: 8 },
                { text: `${C1}`, fontSize: 8 },
                { text: `${C10}`, fontSize: 8 },
                { text: `${this.datos.P7C1}`, fontSize: 8 }
              ],
              [
                { text: "2" },
                { text: `${this.datos.P1C2}`, fontSize: 8 },
                { text: `${this.datos.P2C2}`, fontSize: 8 },
                { text: `${this.datos.P3C2}`, fontSize: 8 },
                { text: `${this.datos.P4C2}`, fontSize: 8 },
                { text: `${C2}`, fontSize: 8 },
                { text: `${C11}`, fontSize: 8 },
                { text: `${this.datos.P7C2}`, fontSize: 8 }
              ],
              [
                { text: "3" },
                { text: `${this.datos.P1C3}`, fontSize: 8 },
                { text: `${this.datos.P2C3}`, fontSize: 8 },
                { text: `${this.datos.P3C3}`, fontSize: 8 },
                { text: `${this.datos.P4C3}`, fontSize: 8 },
                { text: `${C3}`, fontSize: 8 },
                { text: `${C12}`, fontSize: 8 },
                { text: `${this.datos.P7C3}`, fontSize: 8 }
              ],
              [
                { text: "4" },
                { text: `${this.datos.P1C4}`, fontSize: 8 },
                { text: `${this.datos.P2C4}`, fontSize: 8 },
                { text: `${this.datos.P3C4}`, fontSize: 8 },
                { text: `${this.datos.P4C4}`, fontSize: 8 },
                { text: `${C4}`, fontSize: 8 },
                { text: `${C13}`, fontSize: 8 },
                { text: `${this.datos.P7C4}`, fontSize: 8 }
              ],
              [
                { text: "5" },
                { text: `${this.datos.P1C5}`, fontSize: 8 },
                { text: `${this.datos.P2C5}`, fontSize: 8 },
                { text: `${this.datos.P3C5}`, fontSize: 8 },
                { text: `${this.datos.P4C5}`, fontSize: 8 },
                { text: `${C5}`, fontSize: 8 },
                { text: `${C14}`, fontSize: 8 },
                { text: `${this.datos.P7C5}`, fontSize: 8 }
              ],
              [
                { text: "6" },
                { text: `${this.datos.P1C6}`, fontSize: 8 },
                { text: `${this.datos.P2C6}`, fontSize: 8 },
                { text: `${this.datos.P3C6}`, fontSize: 8 },
                { text: `${this.datos.P4C6}`, fontSize: 8 },
                { text: `${C6}`, fontSize: 8 },
                { text: `${C15}`, fontSize: 8 },   
                { text: `${this.datos.P7C6}`, fontSize: 8 }
              ],
              [
                { text: "7" },
                { text: `${this.datos.P1C7}`, fontSize: 8 },
                { text: `${this.datos.P2C7}`, fontSize: 8 },
                { text: `${this.datos.P3C7}`, fontSize: 8 },
                { text: `${this.datos.P4C7}`, fontSize: 8 },
                { text: `${C7}`, fontSize: 8 },
                { text: `${C16}`, fontSize: 8 },
                { text: `${this.datos.P7C7}`, fontSize: 8 }
              ],
              [
                { text: "8" },
                { text: `${this.datos.P1C8}`, fontSize: 8 },
                { text: `${this.datos.P2C8}`, fontSize: 8 },
                { text: `${this.datos.P3C8}`, fontSize: 8 },
                { text: `${this.datos.P4C8}`, fontSize: 8 },
                { text: `${C8}`, fontSize: 8 },
                { text: `${C17}`, fontSize: 8 },
                { text: `${this.datos.P7C8}`, fontSize: 8 }
              ],
              [
                { text: "9" },
                { text: `${this.datos.P1C9}`, fontSize: 8 },
                { text: `${this.datos.P2C9}`, fontSize: 8 },
                { text: `${this.datos.P3C9}`, fontSize: 8 },
                { text: `${this.datos.P4C9}`, fontSize: 8 },
                { text: `${C9}`, fontSize: 8 },
                { text: `${C18}`, fontSize: 8 },
                { text: `${this.datos.P7C9}`, fontSize: 8 }
              ],
              [
                { text: "10" },
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
          text: "\nGLOSARIO: F: FRECUENCIA, C: CONSECUENCIA, R: RIESGO"
        },
        { text: "\n" },
        {
          table: {
            widths: [560],
            heights: [10, 110],
            body: [
              [
                {
                  text: "CONCLUSIÓN Y RECOMENDACIONES",
                  bold: true,
                  fillColor: "#ddd"
                }
              ],
              [{ text: "" }]
            ]
          }
        },
        { text: "\n" },
        {
          table: {
            widths: [400, 150],
            heights: [90],
            body: [
              [
                {
                  text:
                    "Revisado por:\n\nRoberto Muñoz Torres \nREPRESENTANTE TÉCNICO"
                },
                { text: "FECHA DE APROBACIÓN:" }
              ]
            ]
          }
        }
      ],
      pageSize: "LETTER",
      pageMargins: [22, 120]
    };

    this.pdfMaker.generate(dd, "II.Resultados de analisis de riesgos.pdf");
  }
}
