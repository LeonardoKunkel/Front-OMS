import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';

@Component({
  selector: 'app-punto-seis-menu',
  templateUrl: './punto-seis-menu.page.html',
  styleUrls: ['./punto-seis-menu.page.scss'],
})
export class PuntoSeisMenuPage implements OnInit {
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
  myImage = null;
  firmaEstacion = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;


  constructor( 
    private navCtrl: NavController,
    private pdfMaker: PdfMakerService,
    private estacionService: EstacionServicioDatosService,
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService
     ) { }

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

  goPuntoPerfilPuesto() {
    this.navCtrl.navigateForward('/punto-seis');
  }
  goPuntoDeteccionNecesidaes() {
    this.navCtrl.navigateForward('/punto-seis-deteccion-necesidades');
  }
  goPuntoProgramaCapacitacion() {
    this.navCtrl.navigateForward('/punto-seis-programa-capacitacion');
  }
  goPuntoProcedimiento() {
    this.navCtrl.navigateForward('/punto-seis-procedimiento');
  }
  goPuntoCursos() {
    this.navCtrl.navigateForward('/punto-seis-cursos');
  }
  goPuntoEvidencia() {
    this.navCtrl.navigateForward('/punto-seis-evidencia');
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
    const dd = {
        background: function(currentPage, pageSize) {
        return {
          image: `${marcaAgua}`, width: 300,height: 350, 
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
                          text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:17,alignment: 'center', margin:[0,15],
                      border:[false,true,true,true],
                      }
                  ],[
                      {
                          text:'SEGUIMIENTO DEL PROGRAMA DE CAPACITACIÓN 2019',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                      },{
                          
                      }
                      ],[
                          {
                            text:'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                          },{
                              
                          }
                          ]
                ]
          },margin: [22,15],
          
            layout:{
              defaultBorder: false
            }
        };
      },
      footer: function(currentPage, pageCount){
        return {
            table:{
          headerRows:1, 
          widths: [510],
               body : [
               [{columns:[
                   'Página ' + currentPage.toString() + ' de ' + pageCount,
                   {text:`FS-14 Rev., ${day}/${month}/${year}`,width: 180}
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
              table:{
                      widths: [30,70,100,150,80,80],
                      heights: [25,25,25,25,25,25,25,25,25,25,25,25],
                  body:[
                        [
                        {text:`FECHA`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                        {text:`PUESTO`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                        {text:`PERSONAL`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                        {text:`NOMBRE DEL CURSO`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                        {text:`EVALUACIÓN`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8},
                        {text:`SEGUIMIENTO DE APLICACIÓN`,bold:true,alignment:'center',fillColor:'#a5c3dd',fontSize:8}
                        ],
                        [{},{},{},{},{},{}],
                        [{},{},{},{},{},{}],
                        [{},{},{},{},{},{}],
                        [{},{},{},{},{},{}],
                        [{},{},{},{},{},{}],
                        [{},{},{},{},{},{}],
                        [{},{},{},{},{},{}],
                        [{},{},{},{},{},{}],
                        [{},{},{},{},{},{}],
                        [{},{},{},{},{},{}],
                        [{},{},{},{},{},{}],
                      ]
              }  
            },{
                text:'\n'
            },
            {
                table: {
                     widths: [350,200,],
                     heights: [50,30],
                     body: [
                         [
                             {
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
                            {text:`PROPONE:\n ${ddd.maximaAutoridad} \n encargado de la estacion de servicio`,alignment:'center',border:[true,false,true,true]},
                            {text:`FECHA:\n${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true]}]
                     ]
                },
            layout:{
              defaultBorder: false
            }
            }
            ]
       ,
        pageSize: 'LETTER',
        pageMargins: [22, 130]
        
      };
      this.pdfMaker.generate(dd,'Seguimiento delm programa de capacitación')
  }
}
