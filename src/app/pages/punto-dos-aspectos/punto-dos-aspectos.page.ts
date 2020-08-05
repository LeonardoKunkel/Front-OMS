import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { ToastController } from '@ionic/angular';
import { AspectosServiceService } from 'src/app/services/Elemento 2/aspectos-service.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from '../../services/firma-estacion-service.service';
import { IconoEstacionService } from '../../services/iconosEstacion.service';
import { MarcaAguaServiceService } from '../../services/marca-agua-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';


@Component({
  selector: 'app-punto-dos-aspectos',
  templateUrl: './punto-dos-aspectos.page.html',
  styleUrls: ['./punto-dos-aspectos.page.scss'],
})
export class PuntoDosAspectosPage implements OnInit {
  datos: any = {
    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    F6: '',
    F7: '',
    F8: '',
    F9: '',
    F10: '',
    F11: '',
    F12: '',
    F13: '',
    F14: '',
    F15: '',
    F16: '',
    F17: '',
    F18: '',
    F19: '',
    F20: '',
    F21: '',
    F22: '',
    F23: '',
    F24: '',
    F25: '',
    F26: '',
    F27: '',
    F28: '',
    F29: '',
    F30: '',
    F31: '',
    F32: '',
    F33: '',
    F34: '',
    F35: '',
    F36: '',
    F37: '',
    F38: '',
    F39: '',
    N1: '',
    N2: '',
    N3: '',
    N4: '',
    N5: '',
    N6: '',
    N7: '',
    N8: '',
    N9: '',
    N10: '',
    N11: '',
    N12: '',
    N13: '',
    N14: '',
    N15: '',
    N16: '',
    N17: '',
    N18: '',
    N19: '',
    N20: '',
    N21: '',
    N22: '',
    N23: '',
    N24: '',
    N25: '',
    N26: '',
    N27: '',
    N28: '',
    N29: '',
    N30: '',
    N31: '',
    N32: '',
    N33: '',
    N34: '',
    N35: '',
    N36: '',
    N37: '',
    N38: '',
    N39: '',
    M1: '',
    M2: '',
    M3: '',
    M4: '',
    M5: '',
    M6: '',
    M7: '',
    M8: '',
    M9: '',
    M10: '',
    M11: '',
    M12: '',
    M13: '',
    M14: '',
    M15: '',
    M16: '',
    M17: '',
    M18: '',
    M19: '',
    M20: '',
    M21: '',
    M22: '',
    M23: '',
    M24: '',
    M25: '',
    M26: '',
    M27: '',
    M28: '',
    M29: '',
    M30: '',
    M31: '',
    M32: '',
    M33: '',
    M34: '',
    M35: '',
    M36: '',
    M37: '',
    M38: '',
    M39: '',
    VT1: '',
    VT2: '',
    VT3: '',
    VT4: '',
    VT5: '',
    VT6: '',
    VT7: '',
    VT8: '',
    VT9: '',
    VT10: '',
    VT11: '',
    VT12: '',
    VT13: '',
    VT14: '',
    VT15: '',
    VT16: '',
    VT17: '',
    VT18: '',
    VT19: '',
    VT20: '',
    VT21: '',
    VT22: '',
    VT23: '',
    VT24: '',
    VT25: '',
    VT26: '',
    VT27: '',
    VT28: '',
    VT29: '',
    VT30: '',
    VT31: '',
    VT32: '',
    VT33: '',
    VT34: '',
    VT35: '',
    VT36: '',
    VT37: '',
    VT38: '',
    VT39: '',
  };
  estacione: any[] = [];
  myImage = null;
  firmaEstacion = null;
  firmaRepresentante = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;
  datosEstacion:any={
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

  constructor(
    private pdfMaker: PdfMakerService, 
    public toast: ToastController, 
    private superAspectos: AspectosServiceService,
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService,
    private datosEstacionService:EstacionServicioDatosService,
    private firmaRepresente : FirmaRepresentanteService
     ) {
       this.getDatosEstacion();
       this.getAspectos();
      }

     ngOnInit() {
       this.imagen64();
       this.getMarcaAgua();
       this.getFirma();
       this.getIcono();
       this.getFirmaRepresentante();
     }
     getAspectos(){
       this.superAspectos.getAspectos().subscribe((data:any)=>{
         //console.log(data.findAspectos[data.findAspectos.length -1]);
         this.datos = data.findAspectos[data.findAspectos.length -1];
       })
     }
     getDatosEstacion(){
       this.datosEstacionService.getEstacion().subscribe((data:any) =>{
         //console.log(data.findEstacion[data.findEstacion.length -1]);
         this.datosEstacion = data.findEstacion[data.findEstacion.length -1];
       })
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
     getFirmaRepresentante(){
       this.firmaRepresente.getFirmaRepresentante().subscribe((data:any) =>{
         //console.log(data);
          this.firmaRepresentante = data.findFirmaRepresentante[data.findFirmaRepresentante.length -1].firma;
          //console.log(this.firmaRepresentante);
         
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
   
  async enviarForm(formulario) {
    console.log(this.datos);

    this.superAspectos.crearAspectos(this.datos).subscribe(data => {
      console.log(data);
    });

    const toast = await this.toast.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();

    const valortotal1 = this.datos.F1 + this.datos.N1 + this.datos.M1;
    this.datos.VT1 = valortotal1;
    const valortotal2 = this.datos.F2 + this.datos.N2 + this.datos.M2;
    this.datos.VT2 = valortotal2;
    const valortotal3 = this.datos.F3 + this.datos.N3 + this.datos.M3;
    this.datos.VT3 = valortotal3;
    const valortotal4 = this.datos.F4 + this.datos.N4 + this.datos.M4;
    this.datos.VT4 = valortotal4;
    const valortotal5 = this.datos.F5 + this.datos.N5 + this.datos.M5;
    this.datos.VT5 = valortotal5;
    const valortotal6 = this.datos.F6 + this.datos.N6 + this.datos.M6;
    this.datos.VT6 = valortotal6;
    const valortotal7 = this.datos.F7 + this.datos.N7 + this.datos.M7;
    this.datos.VT7 = valortotal7;
    const valortotal8 = this.datos.F8 + this.datos.N8 + this.datos.M8;
    this.datos.VT8 = valortotal8;
    const valortotal9 = this.datos.F9 + this.datos.N9 + this.datos.M9;
    this.datos.VT9 = valortotal9;
    const valortotal10 = this.datos.F10 + this.datos.N10 + this.datos.M10;
    this.datos.VT10 = valortotal10;
    const valortotal11 = this.datos.F11 + this.datos.N11 + this.datos.M11;
    this.datos.VT11 = valortotal11;
    const valortotal12 = this.datos.F12 + this.datos.N12 + this.datos.M12;
    this.datos.VT12 = valortotal12;
    const valortotal13 = this.datos.F13 + this.datos.N13 + this.datos.M13;
    this.datos.VT13 = valortotal13;
    const valortotal14 = this.datos.F14 + this.datos.N14 + this.datos.M14;
    this.datos.VT14 = valortotal14;
    const valortotal15 = this.datos.F15 + this.datos.N15 + this.datos.M15;
    this.datos.VT15 = valortotal15;
    const valortotal16 = this.datos.F16 + this.datos.N16 + this.datos.M16;
    this.datos.VT16 = valortotal16;
    const valortotal17 = this.datos.F17 + this.datos.N17 + this.datos.M17;
    this.datos.VT17 = valortotal17;
    const valortotal18 = this.datos.F18 + this.datos.N18 + this.datos.M18;
    this.datos.VT18 = valortotal18;
    const valortotal19 = this.datos.F19 + this.datos.N19 + this.datos.M19;
    this.datos.VT19 = valortotal19;
    const valortotal20 = this.datos.F20 + this.datos.N20 + this.datos.M20;
    this.datos.VT20 = valortotal20;
    const valortotal21 = this.datos.F21 + this.datos.N21 + this.datos.M21;
    this.datos.VT21 = valortotal21;
    const valortotal22 = this.datos.F22 + this.datos.N22 + this.datos.M22;
    this.datos.VT22 = valortotal22;
    const valortotal23 = this.datos.F23 + this.datos.N23 + this.datos.M23;
    this.datos.VT23 = valortotal23;
    const valortotal24 = this.datos.F24 + this.datos.N24 + this.datos.M24;
    this.datos.VT24 = valortotal24;
    const valortotal25 = this.datos.F25 + this.datos.N25 + this.datos.M25;
    this.datos.VT25 = valortotal25;
    const valortotal26 = this.datos.F26 + this.datos.N26 + this.datos.M26;
    this.datos.VT26 = valortotal26;
    const valortotal27 = this.datos.F27 + this.datos.N27 + this.datos.M27;
    this.datos.VT27 = valortotal27;
    const valortotal28 = this.datos.F28 + this.datos.N28 + this.datos.M28;
    this.datos.VT28 = valortotal28;
    const valortotal29 = this.datos.F29 + this.datos.N29 + this.datos.M29;
    this.datos.VT29 = valortotal29;
    const valortotal30 = this.datos.F30 + this.datos.N30 + this.datos.M30;
    this.datos.VT30 = valortotal30;
    const valortotal31 = this.datos.F31 + this.datos.N31 + this.datos.M31;
    this.datos.VT31 = valortotal31;
    const valortotal32 = this.datos.F32 + this.datos.N32 + this.datos.M32;
    this.datos.VT32 = valortotal32;
    const valortotal33 = this.datos.F33 + this.datos.N33 + this.datos.M33;
    this.datos.VT33 = valortotal33;
    const valortotal34 = this.datos.F34 + this.datos.N34 + this.datos.M34;
    this.datos.VT34 = valortotal34;
    const valortotal35 = this.datos.F35 + this.datos.N35 + this.datos.M35;
    this.datos.VT35 = valortotal35;
    const valortotal36 = this.datos.F36 + this.datos.N36 + this.datos.M36;
    this.datos.VT36 = valortotal36;
    const valortotal37 = this.datos.F37 + this.datos.N37 + this.datos.M37;
    this.datos.VT37 = valortotal37;
    const valortotal38 = this.datos.F38 + this.datos.N38 + this.datos.M38;
    this.datos.VT38 = valortotal38;
    const valortotal39 = this.datos.F39 + this.datos.N39 + this.datos.M39;
    this.datos.VT39 = valortotal39;
  }

  pdf() {
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;
    let footer = this.myImage;
    let ddd = this.datosEstacion;
    let firmaRepresentanteTecnico = this.firmaRepresentante;
    const dd = {
      userPassword: '123',
      ownerPassword: '123456',
      permissions: {
        printing: 'highResolution', // 'lowResolution'
        modifying: false,
        copying: false,
        annotating: true,
        fillingForms: true,
        contentAccessibility: true,
        documentAssembly: true
      },
        
      background: function(currentPage, pageSize) {
      return {
          image: `${marcaAgua}`,
          width: 300,
          height: 370, 
          absolutePosition: {x: 250, y: 140},opacity: 0.5}
    },///////////////////////////////////////////////////////
    header: function(){
      return {
        table:{
            widths: [150,570],
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
                        text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:25,alignment: 'center', margin:[15,20],
                    border:[false,true,true,true],
                    }
                ],[
                    {
                        text:'EVALUACIÓN DE ASPECTOS AMBIENTALES',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                    },{
                        
                    }
                    ],[
                        {
                          text:'II. IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                        },{
                            
                        }
                        ]
              ]
        },margin: [22,7],
        
          layout:{
            defaultBorder: false
          }
      };
    },
    footer: function(currentPage, pageCount){
      return {
          table:{
        headerRows:1, 
        widths: [650],
             body : [
             [{columns:[
                 'Página' + currentPage.toString() + ' de ' + pageCount,
                 {text:`FS-08 Rev.0, ${day}/${month}/${year}`,width: 180}
                 ]}],
             [{
              image: `${footer}`,
              pageBreak: 'after',
              width: 650,
              height: 60,
               },],
             [''],
                 ]
           }, layout : 'headerLineOnly',
          margin: [72,20],
      };
    },
      ///////////////////////
      content: [
        {
          table: {
            widths: [15, 55, 55, 55, 40, 40, 40, 15, 15, 15, 15, 20, 50, 5, 5, 5, 5, 5, 5, 40, 60],
            body: [
              [
                {text: 'ASPECTO AMBIENTAL', colSpan: 7, fontSize: 9, fillColor: '#ddd'},
                {},
                {},
                {},
                {},
                {},
                {},
                {text: 'VALOR TOTAL VT= F + N + M', colSpan: 4, fontSize: 9, fillColor: '#ddd'},
                {},
                {},
                {},
                {text: 'AAS\n SI/No', rowSpan: 2, fontSize: 9, fillColor: '#ddd'},
                {text: 'REQUISITO LEGAL U OTRO REQUISITO', rowSpan: 2, fontSize: 9, fillColor: '#ddd'},
                {text: 'CONTROL APLICADO', colSpan: 6, fontSize: 9, fillColor: '#ddd'},
                {},
                {},
                {},
                {},
                {},
                {text: 'OBJETIVO O META', fontSize: 9, fillColor: '#ddd', rowSpan: 2},
                {text: 'PROCEDIMIENTO DE CONTROL OPERACIONAL AMBIENTAL', fontSize: 9, fillColor: '#ddd', rowSpan: 2}
              ],
              [
                {text: 'NO°', fontSize: 7, fillColor: '#ddd'},
                {text: 'ACTIVIDAD,PRODUCTO O SERVICIO', fontSize: 7, fillColor: '#ddd'},
                {text: 'EQUIPO/LUGAR', fontSize: 7, fillColor: '#ddd'},
                {text: 'ELEMENTO', fontSize: 7, fillColor: '#ddd'},
                {text: 'IA IMPACTO AMBIENTAL', fontSize: 7, fillColor: '#ddd'},
                {text: 'REAL O POTENCIAL', fontSize: 7, fillColor: '#ddd'},
                {text: 'CONDICIÓN DE OPERACIÓN', fontSize: 7, fillColor: '#ddd'},
                {text: 'F', fontSize: 7, fillColor: '#ddd'},
                {text: 'N', fontSize: 7, fillColor: '#ddd'},
                {text: 'M', fontSize: 7, fillColor: '#ddd'},
                {text: 'VT', fontSize: 7, fillColor: '#ddd'},
                {},
                {},
                {text: 'ELIMINACIÓN', fontSize: 8, fillColor: '#ddd'},
                {text: 'SUSTITUCIÓN', fontSize: 8, fillColor: '#ddd'},
                {text: 'CONTROL ING.', fontSize: 8, fillColor: '#ddd'},
                {text: 'SEÑALIZACIÓN', fontSize: 8, fillColor: '#ddd'},
                {text: 'CONTROL AMVO', fontSize: 8, fillColor: '#ddd'},
                {text: 'EPP', fontSize: 8, fillColor: '#ddd'},
                {},
                {}
              ],
              [
                {text: 'ÁREA: ALMACENAMIENTO DE COMBUSTIBLES', colSpan: 21, fillColor: '#ddd'},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {text: '1'},
                {text: 'Entrada maniobra de autotanque (Recepción AT)', fontSize: 8},
                {text: 'Autotanque', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F1}`, fontSize: 7},
                {text: `${this.datos.N1}`, fontSize: 7},
                {text: `${this.datos.M1}`, fontSize: 7},
                {text: `${this.datos.VT1}`, fontSize: 7},
                {text: '', fontSize: 7},
                {text: 'Licencia Ambiental Única(LAU)', fontSize: 8},
                {text: '', fontSize: 7},
                {text: '', fontSize: 8},
                {text: '', fontSize: 7},
                {text: 'X', fontSize: 7},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-01\nP-IM-02', fontSize: 8}
              ],
              [
                {text: '2'},
                {text: 'Toma muestra de producto (Recepción AT)', fontSize: 8},
                {text: 'Autotanque', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F2}`, fontSize: 8},
                {text: `${this.datos.N2}`, fontSize: 8},
                {text: `${this.datos.M2}`, fontSize: 8},
                {text: `${this.datos.VT2}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Ambiental Única(LAU)', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-01', fontSize: 8}
              ],
              [
                {text: '3'},
                {text: 'Conexión de mangueras(Recepción AT)', fontSize: 8},
                {text: 'Autotanque y tanque de almacenamiento', fontSize: 8 },
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F3}`, fontSize: 8},
                {text: `${this.datos.N3}`, fontSize: 8},
                {text: `${this.datos.M3}`, fontSize: 8},
                {text: `${this.datos.VT3}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Licencia Ambiental Única(LAU)', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-01\nP-IM-02', fontSize: 8}
              ],
                // Rompe primera pagina
              [
                {text: '4'},
                {text: 'Descarga de hidrocarburo(Recepción AT)', fontSize: 8},
                {text: 'Autotanque y tanque de almacenamiento', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F4}`, fontSize: 8},
                {text: `${this.datos.N4}`, fontSize: 8},
                {text: `${this.datos.M4}`, fontSize: 8},
                {text: `${this.datos.VT4}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Ambiental Única(LAU)', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-01', fontSize: 8}
              ],
              [
                {text: '5'},
                {text: 'Derrame durante en llenado(Recepción AT)', fontSize: 8},
                {text: 'Autotanque y tanque de almacenamiento', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Potencial', fontSize: 8},
                {text: 'Emergencia', fontSize: 8},
                {text: `${this.datos.F5}`, fontSize: 8},
                {text: `${this.datos.N5}`, fontSize: 8},
                {text: `${this.datos.M5}`, fontSize: 8},
                {text: `${this.datos.VT5}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Ambiental Única(LAU)', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derramess', fontSize: 8},
                {text: 'P-OP-01', fontSize: 8}
              ],
              [
                {text: '6'},
                {text: 'Desconexión de Mangueras(Recepción AT)', rowSpan: 3, fontSize: 8},
                {text: 'Autotanque y tanque de almacenamiento', fontSize: 8, rowSpan: 3},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F6}`, fontSize: 8},
                {text: `${this.datos.N6}`, fontSize: 8},
                {text: `${this.datos.M6}`, fontSize: 8},
                {text: `${this.datos.VT6}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Ambiental Única(LAU)', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-01', fontSize: 8}
              ],
              [
                {text: '7'},
                {},
                {},
                {text: 'Hidrocarburo goteo al piso', fontSize: 8},
                {text: 'Suelo', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F7}`, fontSize: 8},
                {text: `${this.datos.N7}`, fontSize: 8},
                {text: `${this.datos.M7}`, fontSize: 8},
                {text: `${this.datos.VT7}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-002-SEMARNAT-1996', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-01', fontSize: 8}
              ],
              [
                {text: '8'},
                {},
                {},
                {text: 'Hidrocarburo goteo que se lava y se va al drenaje', fontSize: 8},
                {text: 'Agua', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F8}`, fontSize: 8},
                {text: `${this.datos.N8}`, fontSize: 8},
                {text: `${this.datos.M8}`, fontSize: 8},
                {text: `${this.datos.VT8}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-002-SEMARNAT-1996', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-01', fontSize: 8}
              ],
              [
                {text: '9'},
                {text: 'Escurrimiento de autotanque(Recepción AT)', fontSize: 8},
                {text: 'Autotanque y tanque de almacenamiento', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F9}`, fontSize: 8},
                {text: `${this.datos.N9}`, fontSize: 8},
                {text: `${this.datos.M9}`, fontSize: 8},
                {text: `${this.datos.VT9}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Licencia Ambiental Única(LAU)', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-01', fontSize: 8}
              ],
              [
                {text: '10'},
                {text: 'Salida maniobra de autotanque(Recepción AT)', fontSize: 8},
                {text: 'Autotanque', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F10}`, fontSize: 8},
                {text: `${this.datos.N10}`, fontSize: 8},
                {text: `${this.datos.M10}`, fontSize: 8},
                {text: `${this.datos.VT10}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Licencia Ambiental Única(LAU)', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar incidentes', fontSize: 8},
                {text: 'P-OP-01\nP-IM-02', fontSize: 8}
              ],
              [
                {text: '11'},
                {text: 'Almacenamiento derrame', fontSize: 8, rowSpan: 2},
                {text: 'Tanque de almacenamiento', fontSize: 8, rowSpan: 2},
                {text: 'Hidrocarburo', fontSize: 8},
                {text: 'Suelo', fontSize: 8},
                {text: 'Potencial', fontSize: 8},
                {text: 'Emergencia', fontSize: 8},
                {text: `${this.datos.F11}`, fontSize: 8},
                {text: `${this.datos.N11}`, fontSize: 8},
                {text: `${this.datos.M11}`, fontSize: 8},
                {text: `${this.datos.VT11}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-138-SEMARNAT/SSA1-2012,', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar incidentes', fontSize: 8},
                {text: 'P-OP-01\nP-IM-02\nP-SA-06', fontSize: 8}
              ],
              [
                {text: '12'},
                {},
                {},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Emergencia', fontSize: 8},
                {text: `${this.datos.F12}`, fontSize: 8},
                {text: `${this.datos.N12}`, fontSize: 8},
                {text: `${this.datos.M12}`, fontSize: 8},
                {text: `${this.datos.VT12}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: '(LAU) Licencia Ambiental Única', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar emisiones', fontSize: 8},
                {text: 'P-OP-01\nP-IM-02', fontSize: 8}
              ],
              [
                {text: '13'},
                {text: 'Venteo', fontSize: 8},
                {text: 'Tuberías de venteo', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Potencial', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F13}`, fontSize: 8},
                {text: `${this.datos.N13}`, fontSize: 8},
                {text: `${this.datos.M13}`, fontSize: 8},
                {text: `${this.datos.VT13}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: '(LAU) Licencia Ambiental Única', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar emiciones', fontSize: 8},
                {text: 'P-IM-02', fontSize: 8}
              ],
              [
                {text: '14'},
                {text: 'Venteo incendio', fontSize: 8},
                {text: 'Tuberías de venteo', fontSize: 8},
                {text: 'Emisiones', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Potencial', fontSize: 8},
                {text: 'Emergencia', fontSize: 8},
                {text: `${this.datos.F14}`, fontSize: 8},
                {text: `${this.datos.N14}`, fontSize: 8},
                {text: `${this.datos.M14}`, fontSize: 8},
                {text: `${this.datos.VT14}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar emiciones', fontSize: 8},
                {text: 'P-OP-01\nP-IM-02\nP-PRE-01', fontSize: 8}
              ],
              [
                {text: '15'},
                {text: 'Retiro de aguas aceitosas(purgado de agua)', fontSize: 8},
                {text: 'Tanque de almacenamiento', fontSize: 8},
                {text: 'Agua contaminada', fontSize: 8},
                {text: 'Agua', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F15}`, fontSize: 8},
                {text: `${this.datos.N15}`, fontSize: 8},
                {text: `${this.datos.M15}`, fontSize: 8},
                {text: `${this.datos.VT15}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-002-SEMARNAT-1996', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Control de residuos', fontSize: 8},
                {text: 'P-IM-021', fontSize: 8}
              ],
              [
                {text: '16'},
                {text: 'Retiro de lodos(limpieza interior de tanque)', fontSize: 8},
                {text: 'Tanque de almacenamiento', fontSize: 8},
                {text: 'Lodos aceitosos', fontSize: 8},
                {text: 'Residuos Peligrosos', fontSize: 8},
                {text: 'Real', fontSize : 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F16}`, fontSize: 8},
                {text: `${this.datos.N16}`, fontSize: 8},
                {text: `${this.datos.M16}`, fontSize: 8},
                {text: `${this.datos.VT16}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Control de residuos', fontSize: 8},
                {text: 'P-IM-02P-TS-05', fontSize: 8}
              ],
              [
                {text: '17'},
                {text: 'Retiro de aguas aceitosas y materiales impregnados(limpieza de bocatomas', fontSize: 8},
                {text: 'Tanque de almacenamiento', fontSize: 8},
                {text: 'Residuos impregnados', fontSize: 8},
                {text: 'Residuos Peligrosos', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F17}`, fontSize: 8},
                {text: `${this.datos.N17}`, fontSize: 8},
                {text: `${this.datos.M17}`, fontSize: 8},
                {text: `${this.datos.VT17}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Control de residuos', fontSize: 8},
                {text: 'P-IM-02P-TS-05\N P-IM-02P-TS-02', fontSize: 8}
              ],
              [
                {text: '18'},
                {text: 'Generación de aguas aceitosas y materiales impregnados(limpieza del área)', fontSize: 8},
                {text: 'Área de tanque de almacenamiento', fontSize: 8},
                {text: 'Agua contaminada', fontSize: 8},
                {text: 'Agua', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F18}`, fontSize: 8},
                {text: `${this.datos.N18}`, fontSize: 8},
                {text: `${this.datos.M18}`, fontSize: 8},
                {text: `${this.datos.VT18}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-002-SEMARNAT-1996', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Control de residuos', fontSize: 8},
                {text: 'P-IM-02P-TS-05\N P-IM-04', fontSize: 8}
              ],
              [
                {text: 'ÁREA: MÓDULO DE DESPACHO DE ABASTECIMIENTO DE COMBUSTIBLE A VEHÍCULOS', colSpan: 21, fillColor: '#ddd'},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {text: '19'},
                {text: 'Colocación de la pistola en el vehículo', fontSize: 8},
                {text: 'Vehículo', fontSize: 8},
                {text: 'Hidrocarburo goteo y se lava y se va al drenaje', fontSize: 8},
                {text: 'Agua', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F19}`, fontSize: 8},
                {text: `${this.datos.N19}`, fontSize: 8},
                {text: `${this.datos.M19}`, fontSize: 8},
                {text: `${this.datos.VT19}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-002-SEMARNAT-1996', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-02', fontSize: 8}
              ],
              [
                {text: '20'},
                {text: 'Carga de hidrocarburo', fontSize: 8},
                {text: 'Vehículo', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F20}`, fontSize: 8},
                {text: `${this.datos.N20}`, fontSize: 8},
                {text: `${this.datos.M20}`, fontSize: 8},
                {text: `${this.datos.VT20}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: '(LAU) Licencia Ambiental Única', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-02', fontSize: 8}
              ],
              [
                {text: '21'},
                {text: 'Termino del despacho y retiro de pistola del vehículo', fontSize: 8},
                {text: 'Vehículo', fontSize: 8},
                {text: 'Hidrocarburo  goteo y se lava y se va al drenaje', fontSize: 8},
                {text: 'Agua', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F21}`, fontSize: 8},
                {text: `${this.datos.N21}`, fontSize: 8},
                {text: `${this.datos.M21}`, fontSize: 8},
                {text: `${this.datos.VT21}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-002-SEMARNAT-1996', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-02', fontSize: 8}
              ],
              [
                {text: '22'},
                {text: 'Suministro de lubricantes, aditivos.', fontSize: 8},
                {text: 'Vehículo', fontSize: 8},
                {text: 'Envases y estopa o franela impregnados de aceite o aditivos', fontSize: 8},
                {text: 'Residuos Peligrosos', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F22}`, fontSize: 8},
                {text: `${this.datos.N22}`, fontSize: 8},
                {text: `${this.datos.M22}`, fontSize: 8},
                {text: `${this.datos.VT22}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Control de residuos', fontSize: 8},
                {text: 'P-IM-02P-TS-05', fontSize: 8}
              ],
              [
                {text: '23'},
                {text: 'Limpieza de dispensarios e islas', fontSize: 8},
                {text: 'Dispensario', fontSize: 8},
                {text: 'Consumo de agua', fontSize: 8},
                {text: 'agua', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F23}`, fontSize: 8},
                {text: `${this.datos.N23}`, fontSize: 8},
                {text: `${this.datos.M23}`, fontSize: 8},
                {text: `${this.datos.VT23}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Ley de aguas Nacionales (LAN) 2012', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Reducir consumo de agua', fontSize: 8},
                {text: 'P-OP-02', fontSize: 8}
              ],
              [
                {text: '24'},
                {text: 'Limpieza de contenedores', fontSize: 8},
                {text: 'Dispensario', fontSize: 8},
                {text: 'Aguas contaminadas y material impregnados con hidrocarburos', fontSize: 8},
                {text: 'Agua', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F24}`, fontSize: 8},
                {text: `${this.datos.N24}`, fontSize: 8},
                {text: `${this.datos.M24}`, fontSize: 8},
                {text: `${this.datos.VT24}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Control de residuos', fontSize: 8},
                {text: 'P-OP-01', fontSize: 8}
              ],
              [
                {text: '25'},
                {text: 'Cambio de filtros', fontSize: 8},
                {text: 'Dispensario', fontSize: 8},
                {text: 'Filtros impregnados de hidrocarburo', fontSize: 8},
                {text: 'Residuos peligrosos', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F25}`, fontSize: 8},
                {text: `${this.datos.N25}`, fontSize: 8},
                {text: `${this.datos.M25}`, fontSize: 8},
                {text: `${this.datos.VT25}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-01', fontSize: 8}
              ],
              [
                {text: '26'},
                {text: 'Cambio de mangueras, conexiones o pistolas.', fontSize: 8},
                {text: 'Dispensario', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F26}`, fontSize: 8},
                {text: `${this.datos.N26}`, fontSize: 8},
                {text: `${this.datos.M26}`, fontSize: 8},
                {text: `${this.datos.VT26}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: '(LAU) Licencia Ambiental Única', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-01', fontSize: 8}
              ],
              [
                {text: 'ÁREA: DRENAJES Y TRAMPA DE COMBUSTIBLES', colSpan: 21, fillColor: '#ddd'},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {text: '27'},
                {text: 'Limpieza', fontSize: 8},
                {text: 'Registros, tubería y trampa', fontSize: 8},
                {text: 'Lodos impregnados de hidrocarburos y aceites', fontSize: 8},
                {text: 'Residuos peligrosos', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F27}`, fontSize: 8},
                {text: `${this.datos.N27}`, fontSize: 8},
                {text: `${this.datos.M27}`, fontSize: 8},
                {text: `${this.datos.VT27}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Control de residuos', fontSize: 8},
                {text: 'P-OP-05', fontSize: 8}
              ],
              [
                {text: '28'},
                {text: 'Limpieza', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Recolección de residuos sólidos no peligrosos', fontSize: 8},
                {text: 'Residuos solidos', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F28}`, fontSize: 8},
                {text: `${this.datos.N28}`, fontSize: 8},
                {text: `${this.datos.M28}`, fontSize: 8},
                {text: `${this.datos.VT28}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Control de residuos', fontSize: 8},
                {text: 'P-OP-05', fontSize: 8}
              ],
              [
                {text: '29'},
                {text: 'Separación de hidrocarburo', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F29}`, fontSize: 8},
                {text: `${this.datos.N29}`, fontSize: 8},
                {text: `${this.datos.M29}`, fontSize: 8},
                {text: `${this.datos.VT29}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: '(LAU) Licencia Ambiental Única', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-OP-05', fontSize: 8}
              ],
              [
                {text: 'ÁREA: OFICINAS Y BAÑOS', colSpan: 21, fillColor: '#ddd'},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {text: '30'},
                {text: 'Actividades cotidianas sin riesgo', fontSize: 8},
                {text: 'Contenedores', fontSize: 8},
                {text: 'Generación de residuos', fontSize: 8},
                {text: 'Residuos sólidos no peligrosos(basura)', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F30}`, fontSize: 8},
                {text: `${this.datos.N30}`, fontSize: 8},
                {text: `${this.datos.M30}`, fontSize: 8},
                {text: `${this.datos.VT30}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Control de residuos', fontSize: 8},
                {text: 'P-OP-05, P-IM-04', fontSize: 8}
              ],
              [
                {text: '31'},
                {text: 'Actividades cotidianas sin riesgo', fontSize: 8},
                {text: 'Instalaciones eléctricas', fontSize: 8},
                {text: 'Consumo de energía eléctrica', fontSize: 8},
                {text: 'Recursos naturales', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F31}`, fontSize: 8},
                {text: `${this.datos.N31}`, fontSize: 8},
                {text: `${this.datos.M31}`, fontSize: 8},
                {text: `${this.datos.VT31}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Ley del servicio público de Energía Eléctrica', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Reducir consumo', fontSize: 8},
                {text: 'P-OP-03', fontSize: 8}
              ],
              [
                {text: '32'},
                {text: 'Actividades cotidianas sin riesgo', fontSize: 8},
                {text: 'Sanitarios', fontSize: 8},
                {text: 'consumo de agua', fontSize: 8},
                {text: 'Recursos naturales', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F32}`, fontSize: 8},
                {text: `${this.datos.N32}`, fontSize: 8},
                {text: `${this.datos.M32}`, fontSize: 8},
                {text: `${this.datos.VT32}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Ley de aguas Nacionales (LAN) 2012', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Reducir consumo', fontSize: 8},
                {text: '', fontSize: 8}
              ],
              [
                {text: '33'},
                {text: 'Actividades cotidianas sin riesgo', fontSize: 8},
                {text: 'Consumo de papel', fontSize: 8},
                {text: 'Consumo de papel', fontSize: 8},
                {text: 'Recursos naturales', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F33}`, fontSize: 8},
                {text: `${this.datos.N33}`, fontSize: 8},
                {text: `${this.datos.M33}`, fontSize: 8},
                {text: `${this.datos.VT33}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Reducir consumo', fontSize: 8},
                {text: '', fontSize: 8}
              ],
              [
                {text: 'ÁREA: CUARTO DE CONTROL ELÉCTRICO', colSpan: 21, fillColor: '#ddd'},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {text: '34'},
                {text: 'Operación normal', fontSize: 8},
                {text: 'Tableros eléctricos', fontSize: 8},
                {text: 'Consumo de energía eléctrica', fontSize: 8},
                {text: 'Recursos naturale', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F34}`, fontSize: 8},
                {text: `${this.datos.N34}`, fontSize: 8},
                {text: `${this.datos.M34}`, fontSize: 8},
                {text: `${this.datos.VT34}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Ley del servicio público de energía eléctrica', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'P-IM-03', fontSize: 8}
              ],
              [
                {text: '35'},
                {text: 'Mantenimiento', fontSize: 8},
                {text: 'Tableros eléctricos', fontSize: 8},
                {text: 'Generación de residuos peligrosos (trapos impregnados aceite usado) y residuos solidos', fontSize: 8},
                {text: 'Recursos peligrosos', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F35}`, fontSize: 8},
                {text: `${this.datos.N35}`, fontSize: 8},
                {text: `${this.datos.M35}`, fontSize: 8},
                {text: `${this.datos.VT35}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Controlde residuos', fontSize: 8},
                {text: 'P-OP-03', fontSize: 8}
              ],
              [
                {text: '36'},
                {text: 'Operación normal', fontSize: 8},
                {text: 'Planta emergencia', fontSize: 8},
                {text: 'HTC, BETX y Hexano', fontSize: 8},
                {text: 'Aire', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F36}`, fontSize: 8},
                {text: `${this.datos.N36}`, fontSize: 8},
                {text: `${this.datos.M36}`, fontSize: 8},
                {text: `${this.datos.VT36}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: '(LAU) Licencia Ambiental Única', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Evitar derrames', fontSize: 8},
                {text: 'P-IM-03', fontSize: 8}
              ],
              [
                {text: '37'},
                {text: 'Mantenimiento', fontSize: 8},
                {text: 'Plan de emergencia', fontSize: 8},
                {text: 'Generación de residuos peligrosos (trapos impregnados aceite usado) y residuos solidos', fontSize: 8},
                {text: 'Residuos peligrosos', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F37}`, fontSize: 8},
                {text: `${this.datos.N37}`, fontSize: 8},
                {text: `${this.datos.M37}`, fontSize: 8},
                {text: `${this.datos.VT37}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Control de residuos', fontSize: 8},
                {text: 'P-IM-03', fontSize: 8}
              ],
              [
                {text: 'ÁREA: CUARTO DE CONTROL ELÉCTRICO', colSpan: 21, fillColor: '#ddd'},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
              ],
              [
                {text: '38'},
                {text: 'Operación normal', fontSize: 8},
                {text: 'Compresor e hidroneumático', fontSize: 8},
                {text: 'Consumo de energía eléctrica', fontSize: 8},
                {text: 'Recursos naturale', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F38}`, fontSize: 8},
                {text: `${this.datos.N38}`, fontSize: 8},
                {text: `${this.datos.M38}`, fontSize: 8},
                {text: `${this.datos.VT38}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Ley del servicio público de energía eléctrica', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Reducir consumo', fontSize: 8},
                {text: 'P-IM-06', fontSize: 8}
              ],
              [
                {text: '39'},
                {text: 'Mantenimiento', fontSize: 8},
                {text: 'Compresor e hidroneumático', fontSize: 8},
                {text: 'Generación de residuos peligrosos (trapos impregnados aceite usado) y residuos solidos', fontSize: 8},
                {text: 'Residuos peligrosos', fontSize: 8},
                {text: 'Real', fontSize: 8},
                {text: 'Rutinaria', fontSize: 8},
                {text: `${this.datos.F39}`, fontSize: 8},
                {text: `${this.datos.N39}`, fontSize: 8},
                {text: `${this.datos.M39}`, fontSize: 8},
                {text: `${this.datos.VT39}`, fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'NOM-052-SEMARNAT-2005', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'X', fontSize: 8},
                {text: '', fontSize: 8},
                {text: 'Controlde residuos', fontSize: 8},
                {text: 'P-OP-06', fontSize: 8}
              ],
            ],
          },
        },
        {text: '\n GLOSARIO', style: 'header', bold: true},
        {
          table: {
            body: [
              [
                'EPP: EQUIPO DE PROTECCIÓN PERSONAL', 'AAS: ASPECTO AMBIENTAL SIGNIFICATIVO',
                `N= NATURALEZA (representa el grado de toxicidad o peligrosidad del aspecto en sí,
                en función de sus características o componentes).`
              ],
              [
                'IA: IMPACTO AMBIENTAL', 'F: FRECUENCIA (número de veces por unidad de tiempo)',
                'M = MAGNITUD (expresión de la cantidad o extensión en que se genera el aspecto ambiental).'
              ]
            ]
          }
        },
        {text: '\n\n'},
        {
            table: {
              widths: [200,200,140],
              heights: [50,30],
                 body: [
                     [
                         {
                           image:`${firmaRepresentanteTecnico}`,
                           fit:[100,50],
                           alignment:'center',
                           border:[true,true,true,false]
                         },{
                           image:`${firmaEstacion}`,
                           fit:[100,50],
                           alignment:'center',
                           border:[true,true,true,false]
                         },{
                           text:'',
                           fit:[100,50],
                           alignment:'center',
                           border:[true,true,true,false]
                         }],
                    [
                        {text:`REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,alignment:'center',border:[true,false,true,true]},
                        {text:`APROBADO POR:\n${ddd.maximaAutoridad}\nMAXIMA AUTORIDAD`,alignment:'center',border:[true,false,true,true]},
                        {text:`FECHA DE APROBACIÓN:\n${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true]}]
                 ]
            },
        layout:{
          defaultBorder: false
        },
        margin:[85,0]
        }
        
      ],
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Aspectos_Ambientales');
  }
}
