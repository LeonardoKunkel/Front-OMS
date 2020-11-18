import { ProcedimientoCincoPage } from './../procedimiento-cinco/procedimiento-cinco.page';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CpService } from 'src/app/services/cp.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { CartaDesignacionServiceService } from '../../services/Elemento 5/carta-designacion-service.service';
import { EstacionServicioDatosService } from '../../services/estacion-servicio-datos.service'
import { ActivatedRoute } from '@angular/router';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { Observable } from 'rxjs';
import { base64ToFile } from 'ngx-image-cropper';
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

  
  iconoEstacion = null;
  marcaAguaEstacion = null;
  firmaEstacion = null;
  lista : any[]=[];
  myImage=null;
  nombreEstacion:string

  constructor(
    private cpService: CpService,
    private pdfMaker: PdfMakerService,
    private modalCtrl: ModalController,
    private cartaDesignacion: CartaDesignacionServiceService,
    public toast: ToastController,
    private estacionServicioDatos :EstacionServicioDatosService,
    private route: ActivatedRoute,
    private firma: FirmaEstacionServiceService,
    private icono: IconoEstacionService,
    private marcaAgua: MarcaAguaServiceService
  ) {
    this.onClick();
    this.getIcono();
    this.getFirma();
    this.getMarcaAgua();
    this.imagen64();
   }


  ngOnInit() {
    
  }
  getIcono(){
    this.icono.getPolitica().subscribe((data:any)=>{
     // console.log(data.findPolitica[data.findPolitica.length -1].imagen);
    this.iconoEstacion = data.findPolitica[data.findPolitica.length -1].imagen;
    })
  }
  getFirma(){
    this.firma.getFirmaEstacion().subscribe((data:any)=>{
      // console.log(data.findFirma[data.findFirma.length -1].firma);
      this.firmaEstacion = data.findFirma[data.findFirma.length -1].firma;
    })
  }
  getMarcaAgua(){
    this.marcaAgua.getMarcaAgua().subscribe((data:any)=>{
      // console.log(data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua);
      this.marcaAgua = data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua;
    })
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
  imagen64(){
      this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
        base64 =>{
          this.myImage = base64;
         // console.log(this.myImage);
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
    const marca = this.marcaAgua;
    const footer = this.myImage;
    const iconoEstacion = this.iconoEstacion;
    const nombreEstacion = this.datos.nombreEstacionServicio;
    const firmaEstacion = this.firmaEstacion;
    const fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    const dd = {
      background: function(currentPage, pageSize) {
      return {
          image: `${marca}`, width: 300,height: 350, 
          absolutePosition: {x: 150, y: 160},opacity: 0.5}
    },
    header: function(){
      return {
        table:{
            widths: [150,400],
            heights: [30,10,10],
            body:[
                [
                    {
                        image:`${iconoEstacion}`,
                    width: 45,
                    height: 60,
                    alignment:'center',
                    border:[true,true,false,true],
                    },{
                        text:`${nombreEstacion}`,bold:true,fontSize:25,margin:[55,20],
                    border:[false,true,true,true],
                    }
                ],[
                    {
                        text:'DESIGNACIÓN DEL REPRESENTANTE TÉCNICO',fontSize:9,alignment: 'center',colSpan:2
                    },{
                        
                    }
                    ],[
                        {
                          text:'V. FUNCIONES RESPONSABILIDAD Y AUTORIDAD',bold:true,alignment: 'center',colSpan:2,fillColor: '#eeeeee'
                        },{
                            
                        }
                        ]
              ]
        },margin: [22,20]
      };
    },
    footer: function(currentPage, pageCount){
      return {
          table:{
        headerRows:1, 
        widths: [510],
             body : [
             [{columns:[
                 'Página' + currentPage.toString() + ' de ' + pageCount,
                 {text:`P-SA-01 Rev.0, ${day}/${month}/${year}`,width: 180}
                 ]}],
             [{
              image: `${footer}`,
              pageBreak: 'after',
              width: 510,
              height: 60,
               },],
             [''],
                 ]
           }, layout : 'headerLineOnly',
          margin: [72,20],
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
              text: `\n ${this.datos.gerenteEstacion}`, fontSize: 10
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
            text: '\nAtentamente', alignment: 'center'
          },
          {
                image:`${firmaEstacion}`,
        width: 150,
        height: 50,
        alignment:'center'        
              
          },
          {
            text: `${this.datos.maximaAutoridad}`, alignment: 'center'
          },
          {
            text: 'Representante Legal', alignment: 'center'
          }
      ]
     ,
      pageSize: 'LETTER',
      pageMargins: [72, 135]
    };
    this.pdfMaker.generate(dd, 'V. Funciones de funcionalidad y responsabilidad.pdf');
  }

}
