import { ProcedimientoCincoPage } from './../procedimiento-cinco/procedimiento-cinco.page';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CpService } from 'src/app/services/cp.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { CartaDesignacionServiceService } from '../../services/Elemento 5/carta-designacion-service.service';
import { EstacionServicioDatosService } from '../../services/estacion-servicio-datos.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-punto-cinco',
  templateUrl: './punto-cinco.page.html',
  styleUrls: ['./punto-cinco.page.scss'],
})
export class PuntoCincoPage implements OnInit {
  idEstacion = null;
  fechaActual = new Date();
  cp: number;
  respuestaCP: any = {};
  datos: any = {
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

  

  lista : any[]=[];

  constructor(
    private cpService: CpService,
    private pdfMaker: PdfMakerService,
    private modalCtrl: ModalController,
    private cartaDesignacion: CartaDesignacionServiceService,
    public toast: ToastController,
    private estacionServicioDatos :EstacionServicioDatosService,
    private route: ActivatedRoute
  ) {
    this.onClick();
   }


  ngOnInit() {
    
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  createCartaDesignacion() {
    this.cartaDesignacion.getcartaDesignacion(this.datos).subscribe((data: any) => {
      console.log(data);
    });
  }

  async enviarForm(formulario) {
    console.log(this.datos);
    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  async abriAyuda() {
    const modal = await this.modalCtrl.create({
      component: ProcedimientoCincoPage
    });
    return await modal.present();
  }
  onClick(){
    this.estacionServicioDatos.getEstacion().subscribe((data:any) =>{
      let datoConsultado = data.findEstacion.length -1;
      let ff = data.findEstacion[datoConsultado];
      this.datos = data.findEstacion[datoConsultado];
       this.lista.push(ff);
       return console.log(this.lista);
      
    })
  }

  pdf() {
    const dd = {
      header: () => {
        return {
              table: {widths: [320, 20, 200],
              heights: [30, 10, 10],
          body: [
            [{text:`${this.datos.nombreEstacionServicio}`, colSpan: 3 ,alignment:'center',fontSize:25,bold:true}, {}, {}],
            [{text: 'V. FUNCIONES RESPONSABILIDAD Y AUTORIDAD', colSpan: 3, alignment: 'center'}, {}, {}],
            [{text: 'DESIGNACIÓN DEL REPRESENTANTE TÉCNICO', colSpan: 3, alignment: 'center', bold: true, fillColor: '#dddddd'}, {}, {}]
          ]
        }, margin: [22, 20]
        };
      },
      footer: () => {
        return {
            table: {
          headerRows: 1,
          widths: [510],
               body : [
               [''],
               [''],
               ['']
                   ]
             }, layout : 'headerLineOnly',
            margin: [70, 90]
        };
      },
      content: [
          {
            text: 'CARTA DE DESIGNACIÓN', bold: true, style: 'header', alignment: 'center', fontSize: 20
          },
          {
              text: `${this.datos.ciudad} ,${this.datos.estado}, ${this.fechaActual.getFullYear()}`, alignment: 'right'
          },
          {
              text: `\n ${this.datos.gerenteEstacione}`, fontSize: 10
          },
          {
            text: 'Encargado', fontSize: 10
          },
          {
            text: 'Presente. -', fontSize: 10
          },
          {
            text: `\nEn seguimiento al proceso de la Implementación del Sistema de Administración
                    de la Seguridad Industrial,Seguridad Operativa y Protección al medio Ambiente,
                    en la gasolinera ${this.datos.nombreEstacionServicio}, ubicada en ${this.datos.calleNumero}, C.P. ${this.datos.cp},
                    ${this.datos.estado}, ${this.datos.ciudad}, el que suscribe Roberto Muñoz Torres.
                    ${this.datos.representanteTecnico}, Representante Legal me permito hacer de su conocimiento que ha sido designado
                    Representante Técnico, para fungir como Representante de la Estación de Servicio
                    ante la ASEA, y para cumplir con lo siguiente:\n\n`, style: 'header', alignment: 'justify', fontSize: 10
          },
          {
            type: 'lower-alpha',
            ol: [
              'Asegurar que el SA es conforme con los requisitos establecidos en los lineamientos y demás normativa aplicable.',
              'Informar a la alta dirección de la Estación de Servicio acerca del desempeño del Sistema de Administración.',
              `Proponer la adopción de las mejores prácticas nacionales e internacionales en la implementación del
              Sistema de Administración.`,
              'Coordinar las acciones necesarias para subsanar los incumplimientos de la normatividad interna y externa aplicable.',
              `Informar a la Agencia de cualquier situación que pudiera poner en riesgo la seguridad Industrial,
              seguridad Operativa y Protección al Ambiente.`
            ], alignment: 'justify', fontSize: 10
          },
          {
            text: `\nPor lo anterior se le ha asignado el siguiente buzón de correo electrónico
                    ${this.datos.correoElectronico}, el número de teléfono: ${this.datos.telefono} y el domicilio
                    ubicado en ${this.datos.calleNumero}, ${this.datos.colonia}, ${this.datos.cp} ${this.datos.estado},
                    para oír y recibir notificaciones.\n`, alignment: 'justify', fontSize: 10
          },
          {
            text: `Sin más por el momento, no dudando que realizará las actividades asignadas de acuerdo a
                    su acostumbrado desempeño quedo de usted.`, fontSize: 10
          },
          {
            text: '\n\nAtentamente', alignment: 'center'
          },
          {
            text: `\n${this.datos.maximaAutoridad}`, alignment: 'center'
          },
          {
            text: 'Representante Legal', alignment: 'center'
          }
      ]
     ,
      pageSize: 'LETTER',
      pageMargins: [72, 150]
    };
    this.pdfMaker.generate(dd, 'V. Funciones de funcionalidad y responsabilidad.pdf');
  }

}
