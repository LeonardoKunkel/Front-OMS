import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController, IonContent, AlertController, NavController} from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { ListaServiceService } from 'src/app/services/Elemento 7/lista-service.service';
import { EstacionServicioDatosService } from '../../services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';

@Component({
  selector: 'app-punto-siete',
  templateUrl: './punto-siete.page.html',
  styleUrls: ['./punto-siete.page.scss'],
})
export class PuntoSietePage implements OnInit {
  datos2: any = {
    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    C6: false,
    C7: false,
    C8: false,
    C9: false,
    C10: false,
    C11: false,
    C12: false,
    C13: false,
    C14: false,
    C15: false,
    C16: false,
    C17: false,
    C18: false,
    C19: false,
    C20: false,
    C21: false,
    C22: false,
    C23: false,
    C24: false,
    C25: false,
    C26: false,
    C27: false,
    C28: false,
    C29: false,
    C30: false,
    C31: false,
    C32: false,
    C33: false,
    C34: false,
    C35: false,
    C36: false,
    C37: false,
    C38: false,
    C39: false,
    C40: false,
    C41: false,
    C42: false,
  };
  
  datos:any={
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    C6: '',
    C7: '',
    C8: '',
    C9: '',
    C10: '',
    C11: '',
    C12: '',
    C13: '',
    C14: '',
    C15: '',
    C16: '',
    C17: '',
    C18: '',
    C19: '',
    C20: '',
    C21: '',
    C22: '',
    C23: '',
    C24: '',
    C25: '',
    C26: '',
    C27: '',
    C28: '',
    C29: '',
    C30: '',
    C31: '',
    C32: '',
    C33: '',
    C34: '',
    C35: '',
    C36: '',
    C37: '',
    C38: '',
    C39: '',
    C40: '',
    C41: '',
    C42: '',
  }

  datosEstacion:any={
    calleNumero: "",
    ciudad: "",
    colonia: "",
    correoElectronico: "",
    cp: "",
    estado: "",
    gerenteEstacion: "",
    maximaAutoridad: "",
    nombreEstacionServicio: "",
    representanteTecnico: "",
    telefono: ""
  }
  myImage = null;
  firmaEstacion = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;


  constructor( 
      private pdfMaker: PdfMakerService, 
      public toast: ToastController,
      private superLista: ListaServiceService,
      private alertCtrl : AlertController,
      private estacionService: EstacionServicioDatosService,
      private navCtrl: NavController,
      private firma :FirmaEstacionServiceService,
      private marca : MarcaAguaServiceService,
      private icono : IconoEstacionService
      ) {
        this.consultar();
        this.getEstacion();
  }

  ngOnInit() {
    this.imagen64();
    this.getMarcaAgua();
    this.getFirma();
    this.getIcono();
  }
  getIcono(){
    this.icono.getPolitica().subscribe((data:any)=>{
     // console.log(data);
      this.iconoEstacion =  data.findPolitica[data.findPolitica.length -1].imagen;
    })
  }
  getMarcaAgua(){
    this.marca.getMarcaAgua().subscribe((data:any)=>{
      //console.log(data);
      this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua;
    })
  }
  getFirma(){
    this.firma.getFirmaEstacion().subscribe((data:any) =>{
      //console.log(data);
      this.firmaEstacion =this.firma = data.findFirma[data.findFirma.length -1].firma;
    })
  }
  imagen64(){
 
      this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
        base64 =>{
          this.myImage = base64;
          //console.log(this.myImage);
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


  getEstacion(){
    this.estacionService.getEstacion().subscribe((data: any) =>{
      //console.log(data.findEstacion[0]);
      this.datosEstacion = data.findEstacion[0];
    })
  }

  async saveSend() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Pulse Ok para actualizar sus datos</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK', 
          handler: () => {
            console.log('Confirm Okay');
            this.create();
            this.checar();
            this.navCtrl.navigateForward('/punto-siete-menu');
          }
        }
      ]
    });

    await alert.present();
  }

  consultar(){
    return this.superLista.getLista().subscribe((data:any) =>{
      console.log(data.findLista[data.findLista.length -1]);
      this.datos2 =data.findLista[data.findLista.length -1]
    
    })
  }
  
  create(){
    return this.superLista.crearLista(this.datos2).subscribe((data:any) =>{
      console.log(data,'creado en base dedatos');
      
    })
  }
  
  checar(){
    if(this.datos.C1 === true){
      this.datos.C1 ="X"
    }else{
      this.datos.C1 =" "
    }if(this.datos2.C2 === true){
      this.datos.C2 ="X"
    }else{
      this.datos.C2 =" "
    }if(this.datos2.C3 === true){
      this.datos.C3 ="X"
    }else{
      this.datos.C3 =" "
    }if(this.datos2.C4 === true){
      this.datos.C4 ="X"
    }else{
      this.datos.C4 =" "
    }if(this.datos2.C5 === true){
      this.datos.C5 ="X"
    }else{
      this.datos.C5 =" "
    }if(this.datos2.C6 === true){
      this.datos.C6 ="X"
    }else{
      this.datos.C6 =" "
    }if(this.datos2.C7 === true){
      this.datos.C7 ="X"
    }else{
      this.datos.C7 =" "
    }if(this.datos2.C8 === true){
      this.datos.C8 ="X"
    }else{
      this.datos.C8 =" "
    }if(this.datos2.C9 === true){
      this.datos.C9 ="X"
    }else{
      this.datos.C9 =" "
    }if(this.datos2.C10 === true){
      this.datos.C10 ="X"
    }else{
      this.datos.C10 =" "
    }if(this.datos2.C11 === true){
      this.datos.C11 ="X"
    }else{
      this.datos.C11 =" "
    }if(this.datos2.C12 === true){
      this.datos.C12 ="X"
    }else{
      this.datos.C12 =" "
    }if(this.datos2.C13 === true){
      this.datos.C13 ="X"
    }else{
      this.datos.C13 =" "
    }if(this.datos2.C14 === true){
      this.datos.C14 ="X"
    }else{
      this.datos.C14 =" "
    }if(this.datos2.C15 === true){
      this.datos.C15 ="X"
    }else{
      this.datos.C15 =" "
    }if(this.datos2.C16 === true){
      this.datos.C16 ="X"
    }else{
      this.datos.C16 =" "
    }if(this.datos2.C17 === true){
      this.datos.C17 ="X"
    }else{
      this.datos.C17 =" "
    }if(this.datos2.C18 === true){
      this.datos.C18 ="X"
    }else{
      this.datos.C18 =" "
    }if(this.datos2.C19 === true){
      this.datos.C19 ="X"
    }else{
      this.datos.C19 =" "
    }if(this.datos2.C20 === true){
      this.datos.C20 ="X"
    }else{
      this.datos.C20 =" "
    }if(this.datos2.C21 === true){
      this.datos.C21 ="X"
    }else{
      this.datos.C21 =" "
    }if(this.datos2.C22 === true){
      this.datos.C22 ="X"
    }else{
      this.datos.C22 =" "
    }if(this.datos2.C23 === true){
      this.datos.C23 ="X"
    }else{
      this.datos.C23 =" "
    }if(this.datos2.C24 === true){
      this.datos.C24 ="X"
    }else{
      this.datos.C24 =" "
    }if(this.datos2.C25 === true){
      this.datos.C25 ="X"
    }else{
      this.datos.C25 =" "
    }if(this.datos2.C26 === true){
      this.datos.C26 ="X"
    }else{
      this.datos.C26 =" "
    }if(this.datos2.C27 === true){
      this.datos.C27 ="X"
    }else{
      this.datos.C27 =" "
    }if(this.datos2.C28 === true){
      this.datos.C28 ="X"
    }else{
      this.datos.C28 =" "
    }if(this.datos2.C29 === true){
      this.datos.C29 ="X"
    }else{
      this.datos.C29 =" "
    }if(this.datos2.C30 === true){
      this.datos.C30 ="X"
    }else{
      this.datos.C30 =" "
    }if(this.datos2.C31 === true){
      this.datos.C31 ="X"
    }else{
      this.datos.C31 =" "
    }if(this.datos2.C32 === true){
      this.datos.C32 ="X"
    }else{
      this.datos.C32 =" "
    }if(this.datos2.C33 === true){
      this.datos.C33 ="X"
    }else{
      this.datos.C33 =" "
    }if(this.datos2.C34 === true){
      this.datos.C34 ="X"
    }else{
      this.datos.C34 =" "
    }if(this.datos2.C35 === true){
      this.datos.C35 ="X"
    }else{
      this.datos.C35 =" "
    }if(this.datos2.C36 === true){
      this.datos.C36 ="X"
    }else{
      this.datos.C36 =" "
    }if(this.datos2.C37 === true){
      this.datos.C37 ="X"
    }else{
      this.datos.C37 =" "
    }if(this.datos2.C38 === true){
      this.datos.C38 ="X"
    }else{
      this.datos.C38 =" "
    }if(this.datos2.C39 === true){
      this.datos.C39 ="X"
    }else{
      this.datos.C39 =" "
    }if(this.datos2.C40 === true){
      this.datos.C40 ="X"
    }else{
      this.datos.C40 =" "
    }if(this.datos2.C41 === true){
      this.datos.C41 ="X"
    }else{
      this.datos.C41 =" "
    }if(this.datos2.C42 === true){
      this.datos.C42 ="X"
    }else{
      this.datos.C42 =" "
    }
  }

  pdf() {
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;  
    let footer = this.myImage;
    let ddd = this.datosEstacion;
    this.checar();
    const dd = {
      userPassword: '123',
      ownerPassword: '123456',
      permissions: {
        printing: 'highResolution', //'lowResolution'
        modifying: false,
        copying: false,
        annotating: true,
        fillingForms: true,
        contentAccessibility: true,
        documentAssembly: true
      },
      background: function(currentPage, pageSize) {
      return {
          image: `${marcaAgua}`, width: 500,height: 500, 
          absolutePosition: {x: 60, y: 150},opacity: 0.5}
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
                    width: 70,
                    height: 70,
                    alignment:'center',
                    border:[true,true,false,true],
                    },{
                        text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:17,alignment: 'center', margin:[0,15],
                    border:[false,true,true,true],
                    }
                ],[
                    {
                        text:'LISTA DE COMUNICACIÓN',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                    },{
                        
                    }
                    ],[
                        {
                          text:'VII. COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                        },{
                            
                        }
                        ]
              ]
        },margin: [22,25],
        
          layout:{
            defaultBorder: false
          }
      };
    },
      footer: function(){
        return {
            table:{
          headerRows:1, 
          widths: [510],
               body : [
               [''],
               [''],
               [{
                image: `${footer}`,
                pageBreak: 'after',
                width: 510,
                height: 80,
                 }]
                   ]
             }, layout : 'headerLineOnly',
            margin: [72,20]
        };
      },
      
      content: [
          {
              table: {
                  widths: [176, 197, 148, 13],
                  body: [
                      [
                          {text: 'Tema a difundir', bold: true, fillColor: '#ddd', alignment: 'center'},
                          {text: 'Personal a quien fue distribuida la información', bold: true, fillColor: '#ddd', alignment: 'center'},
                          {text: '¿A través de qué medio obtuvo la información?',
                           bold: true, fillColor: '#ddd', alignment: 'center', colSpan: 2},
                          {}
                      ],
                      [
                          {text: 'Política', bold: true, alignment: 'center', rowSpan: 7},
                          {text: `Jefe de piso\n
                                  Personal de mantenimiento\n
                                  Proveedores y contratistas\n
                                  Despachadores\n
                                  Encargado`, alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C1}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C2}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C3}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C4}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C5}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C6}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C7}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: 'Identificación de riesgos y aspectos ambientales', bold: true, alignment: 'center', rowSpan: 7},
                          {text: `Jefe de piso\n
                                  Personal de mantenimiento\n
                                  Proveedores y contratistas\n
                                  Despachadores`, alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C8}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C9}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C10}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C11}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C12}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C13}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C14}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: 'Requisitos legales vigentes', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Encargado', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C15}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C16}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C17}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C18}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C19}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C20}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C21}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: 'Cumplimiento', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Encargado\nRepresentante técnico', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C22}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C23}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C24}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C25}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C26}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C27}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C28}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: 'Resultados de evaluación', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Encargado\nRepresentante técnico', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C29}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C30}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C31}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C32}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C33}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C34}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C35}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: 'Resultados de auditoría', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Representante técnico\nDirección', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C36}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C37}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C38}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C39}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C40}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de informacion'},
                          {text: `${this.datos.C41}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles',
	        width: 200
		},
                          {text: `${this.datos.C42}`, alignment: 'center', fontSize: 9}
                      ],
                  ]
              }
          },
          {
            text: '\n\n'
           },
           {
            table: {
              widths: [277, 277],
              heights: [50],
              body: [
                [
                  'REVISADO POR:\n\n\n\n Gamaliel Chavarría\nREPRESENTANTE TÉCNICO',
                  'APROBADO POR:\n\n\n\nSergio Lechuga\nMÁXIMA AUTORIDAD',
                ]
              ]
            }
           }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Lista_de_Comunicacion');
    
  }
}

  



 













  

//   async enviarForm(formulario) {
//     console.log(this.datos);
//     // for (let i in this.datos) {
//     //     if (this.datos[i] === true && this.datos[i] >= 1) {
//     //         this.datos[i] = 'X';
//     //     }
//     // }
//     if (this.datos.C1) {
//         this.datos.C1 = 'X';
//     } else {
//         this.datos.C1 = '--';
//     }

//     const toast = await this.toast.create({
//         message: 'Datos guardados',
//         duration: 2000
//     });
//     toast.present();
//   }

