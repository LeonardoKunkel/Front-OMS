import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AlertController,IonSlides,ActionSheetController} from "@ionic/angular";
import { PdfMakerService } from "src/app/services/pdf-maker.service";
import { ElementoUnoService } from "src/app/services/elementouno.service";
import { PoliticaService } from "src/app/services/politica.service";

@Component({
  selector: "app-punto-uno-politica",
  templateUrl: "./punto-uno-politica.page.html",
  styleUrls: ["./punto-uno-politica.page.scss"]
})
export class PuntoUnoPoliticaPage implements OnInit {
  @ViewChild("texto") texto;
  @ViewChild("texto2") texto2;
  @ViewChild("texto3") texto3;

  politica: string = "";
  lista: string[] = [];

  constructor(
    public alertController: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private pdfMakerService: PdfMakerService,
    private puntoUnoService: ElementoUnoService,
    private politicaService: PoliticaService
  ) {
    //this.consultarPolitica();
  }

  ngOnInit() {}

  doRefresh(event) {
    this.consultarPolitica();
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 1000);
  }

  createPolitica2() {
    let politic = "Lorem ipsu a dolor estenue verigue datamotosol galiehdfhst";
    this.politicaService
      .createPolitica(politic)
      .subscribe(data => console.log(data));
  }

  async presentAlertConfirm1() {
    const alert = await this.alertController.create({
      header: "Indicaciones!",
      message:
        "Una vez seleccionada esta politica deberas difundirla por cualquier medio con los empleados de la estacion de servicio!!!",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Ok/Imprimir",
          handler: () => {
            console.log("Confirm Okay");
            this.print1();
            this.consultarPolitica();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm2() {
    const alert = await this.alertController.create({
      header: "Indicaciones!",
      message:
        "Una vez seleccionada esta politica deberas difundirla por cualquier medio con los empleados de la estacion de servicio <strong>text</strong>!!!",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Okay");
            this.print2();
            this.consultarPolitica2();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm3() {
    const alert = await this.alertController.create({
      header: "Indicaciones!",
      message:
        "Una vez seleccionada esta politica deberas difundirla por cualquier medio con los empleados de la estacion de servicio <strong>text</strong>!!!",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Okay");
            this.print3();
            this.consultarPolitica3();
          }
        }
      ]
    });

    await alert.present();
  }
 

  consultarPolitica() {
    //this.politicaService.getPolitica().subscribe(data => console.log(data));
    this.politicaService.getPolitica().subscribe(data => {
      let contenido = data.findPolitica[0].politica;
      this.lista = [contenido];
    });
  }

  consultarPolitica2() {
    this.politicaService.getPolitica().subscribe(data => {
      let contenido = data.findPolitica[1].politica;
      this.lista = [contenido];
    });
  }

  consultarPolitica3() {
    this.politicaService.getPolitica().subscribe(data => {
      let contenido = data.findPolitica[2].politica;
      this.lista = [contenido];
    });
  }

  print1() {
    console.log("Politica 1");
    const dd = {
      header: function() {
        return {
          table: {
            widths: [320, 20, 200],
            heights: [30, 10, 10],
            body: [
              [{ text: `lorem`, colSpan: 3, bold: true }, {}, {}],
              [{ text: "kfkfkfkkffk", colSpan: 3 }, {}, {}],
              [{ text: "1.Politica", colSpan: 3, alignment: "center" }, {}, {}]
            ]
          },
          margin: [22, 20]
        };
      },
      footer: function() {
        return {
          table: {
            headerRows: 1,
            widths: [510],
            body: [[""], [""], [""]]
          },
          layout: "headerLineOnly",
          margin: [72, 40]
        };
      },

      content: [
        { text: new Date().toTimeString() },
        {
          text: `POLITICA`,
          bold: true,
          alignment: "center",
          Style: "header",
          fontSize: 25
        },
        {
          text:
            "\n\n\nEn la Estación Servicio “Servicio El Carril S.A. de C.V.” conscientes con la naturaleza de los peligros y aspectos ambientales asociados a las actividades propias de la instalación, trabajadores y contratistas estamos comprometidos en mejorar nuestro desempeño en materia de Seguridad Industrial, Seguridad Operativa y Protección del medio ambiente, en todos los niveles de la organización, juntos orientamos nuestros esfuerzos para la evaluación, reducción y control de los riesgos e impactos ambientales, el cumplimiento normativo, mediante un proceso de mejora continua.\n\n",
          fontSize: 17,
          alignment: "justify"
        },
        {
          style: "tableExample",
          table: {
            widths: [200],
            headerRows: 1,
            body: [
              [""],
              [{ text: "REPRESENTANTE LEGAL", alignment: "center" }],
              [""]
            ]
          },
          layout: "headerLineOnly",
          margin: [150, 40]
        }
      ],
      pageSize: "LETTER",
      pageMargins: [72, 150]
    };
    this.pdfMakerService.generate(dd, "Politica");
  }

  print2() {
    console.log("Politica 2");
    const dd = {
      header: function() {
        return {
          table: {
            widths: [320, 20, 200],
            heights: [30, 10, 10],
            body: [
              [{ text: `lorem`, colSpan: 3, bold: true }, {}, {}],
              [{ text: "kfkfkfkkffk", colSpan: 3 }, {}, {}],
              [{ text: "1.Politica", colSpan: 3, alignment: "center" }, {}, {}]
            ]
          },
          margin: [22, 20]
        };
      },
      footer: function() {
        return {
          table: {
            headerRows: 1,
            widths: [510],
            body: [[""], [""], [""]]
          },
          layout: "headerLineOnly",
          margin: [72, 40]
        };
      },

      content: [
        { text: new Date().toTimeString() },
        {
          text: `POLITICA`,
          bold: true,
          alignment: "center",
          Style: "header",
          fontSize: 25
        },
        {
          text:
            "\n\n\nEn la Estación Servicio “Servicio El Carril S.A. de C.V.” conscientes con la naturaleza de los peligros y aspectos ambientales asociados a las actividades propias de la instalación, trabajadores y contratistas estamos comprometidos en mejorar nuestro desempeño en materia de Seguridad Industrial, Seguridad Operativa y Protección del medio ambiente, en todos los niveles de la organización, juntos orientamos nuestros esfuerzos para la evaluación, reducción y control de los riesgos e impactos ambientales, el cumplimiento normativo, mediante un proceso de mejora continua.\n\n",
          fontSize: 17,
          alignment: "justify"
        },
        {
          style: "tableExample",
          table: {
            widths: [200],
            headerRows: 1,
            body: [
              [""],
              [{ text: "REPRESENTANTE LEGAL", alignment: "center" }],
              [""]
            ]
          },
          layout: "headerLineOnly",
          margin: [150, 40]
        }
      ],
      pageSize: "LETTER",
      pageMargins: [72, 150]
    };
    this.pdfMakerService.generate(dd, "Politica");
  }
  print3() {
    console.log("Politica 3");
    const dd = {
      header: function() {
        return {
          table: {
            widths: [320, 20, 200],
            heights: [30, 10, 10],
            body: [
              [{ text: `lorem`, colSpan: 3, bold: true }, {}, {}],
              [{ text: "kfkfkfkkffk", colSpan: 3 }, {}, {}],
              [{ text: "1.Politica", colSpan: 3, alignment: "center" }, {}, {}]
            ]
          },
          margin: [22, 20]
        };
      },
      footer: function() {
        return {
          table: {
            headerRows: 1,
            widths: [510],
            body: [[""], [""], [""]]
          },
          layout: "headerLineOnly",
          margin: [72, 40]
        };
      },

      content: [
        { text: new Date().toTimeString() },
        {
          text: `POLITICA`,
          bold: true,
          alignment: "center",
          Style: "header",
          fontSize: 25
        },
        {
          text:
            "\n\n\nEn la Estación Servicio “Servicio El Carril S.A. de C.V.” conscientes con la naturaleza de los peligros y aspectos ambientales asociados a las actividades propias de la instalación, trabajadores y contratistas estamos comprometidos en mejorar nuestro desempeño en materia de Seguridad Industrial, Seguridad Operativa y Protección del medio ambiente, en todos los niveles de la organización, juntos orientamos nuestros esfuerzos para la evaluación, reducción y control de los riesgos e impactos ambientales, el cumplimiento normativo, mediante un proceso de mejora continua.\n\n",
          fontSize: 17,
          alignment: "justify"
        },
        {
          style: "tableExample",
          table: {
            widths: [200],
            headerRows: 1,
            body: [
              [""],
              [{ text: "REPRESENTANTE LEGAL", alignment: "center" }],
              [""]
            ]
          },
          layout: "headerLineOnly",
          margin: [150, 40]
        }
      ],
      pageSize: "LETTER",
      pageMargins: [72, 150]
    };
    this.pdfMakerService.generate(dd, "Politica");
  }
}
