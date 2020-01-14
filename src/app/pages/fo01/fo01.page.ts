import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-fo01',
  templateUrl: './fo01.page.html',
  styleUrls: ['./fo01.page.scss'],
})
export class FO01Page implements OnInit {

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
    check92:'',
    check93:'',
    check94:'',
    check95:'',
    check96:'',
    check97:'',
    check98:'',
    check99:'',
    check100:'',
    check101:'',
    check102:'',
    check103:'',
    check104:'',
    check105:'',
    check106:'',
    check107:'',
    check108:'',
    check109:'',
    check110:'',
    check111:'',
    check112:'',
    check113:'',
    check114:'',
  }

  constructor(private pdfMaker:PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

  pdf() {
    console.log('documento descargado');
    var dd = {
      header: function(){
         return {
               table: {widths: [500, 20, 200],
               heights: [30,10,10],
           body: [
             [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
             [{text:'XI. INTEGRIDAD MECÁNICA Y ASEGURAMIENTO DE LA CALIDAD',colSpan:3, alignment: 'center', bold:true},{},{}],
             [{text:'INSPECCIÓN DE TANQUES Y REGISTROS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [{text:'\n'},
       {
           table:{
               widths:[300,15,15,15,15,15,15,285,], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text: 'ACCESORIOS TANQUES DE ALMACENAMINTO', bold:true, fillColor:'#ddd', alignment:'center', rowSpan:2},{text: '¿Cumple?', bold:true, fillColor:'#ddd', alignment:'center', colSpan:6},{text: '2', bold:true, fillColor:'#ddd'},{text: '3', bold:true, fillColor:'#ddd'},{text: '4', bold:true, fillColor:'#ddd'},{text: '5', bold:true, fillColor:'#ddd'},{text: '6', bold:true, fillColor:'#ddd'},{text: '\n\nOBSERVACIONES', bold:true, fillColor:'#ddd', alignment:'center',rowSpan:4}],
                   [{},{},{},{},{},{},{},{},],
                   [{text: 'ACCESORIO', bold:true, fillColor:'#ddd', alignment:'center'},{},{},{},{},{},{},{},],
                   [{text: 'Motobombas', bold:true, fillColor:'#ddd'},{text: 'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text: 'NO', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{},],
                   [{text:'Libre de Fugas'},{text:`${this.datos.check1}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check2}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto1}`},],
                   [{text:'Libre de Óxido'},{text:`${this.datos.check3}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check4}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto2}`},],
                   [{text:'Válvula de corte buen estado y libre de fugas'},{text:`${this.datos.check5}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check6}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto3}`},],
                   [{text:'Conexión sensor mecánico de fugas'},{text:`${this.datos.check7}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check8}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto4}`},],
                   [{text:'Tapa de registro entrada hombre, hermética'},{text:`${this.datos.check9}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check10}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto5}`},],
                   [{text:'Contenedor limpio y seco'},{text:`${this.datos.check11}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check12}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto6}`},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:`${this.datos.check13}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check14}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto7}`},],
                   [{text:'Tubería, buen estado y sin fugas'},{text:`${this.datos.check15}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check16}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto8}`},],
                   [{text:'Mangueras metálicas flexibles, buen estado'},{text:`${this.datos.check17}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check18}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto9}`},],
                   [{text:'Cajas de conexiones (condulet) con tapa y junta'},{text:`${this.datos.check19}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check20}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto10}`},],
                   [{text:'Sellos EYS con tapón y sello'},{text:`${this.datos.check21}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check22}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto11}`},],
                   [{text:'Conexión a tierra'},{text:`${this.datos.check23}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check24}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto12}`},],
                   [{text:'Sensor de líquidos, operando'},{text:`${this.datos.check25}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check26}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto13}`},],
                   [{text:'Alarmas visibles /audible, operando'},{text:`${this.datos.check27}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check28}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto14}`},],
                   [{text:'Contenedor buen estado, sin fracturas, hermético'},{text:`${this.datos.check29}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check30}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto15}`},],
                   [{text:'Tapa de contenedor hermética'},{text:`${this.datos.check31}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check32}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto16}`},],
                   [{text:'Botas (sello flexible) en buen estado y apretadas'},{text:`${this.datos.check33}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check34}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto17}`},],


                   [{text:'Control de inventarios', bold:true, fillColor:'#ddd'},{text:'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text: 'NO', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd', alignment:'center'},],
                   [{text:'Tapa del tubo hermética'},{text:`${this.datos.check35}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check36}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto18}`},],
                   [{text:'Cable buen estado'},{text:`${this.datos.check37}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check38}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto19}`},],
                   [{text:'En operación (transmite señal)'},{text:`${this.datos.check39}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check40}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto20}`},],
                   [{text:'Tapa de registro hermética, pintada'},{text:`${this.datos.check41}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check42}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto21}`},],
                   [{text:'Contenedor limpio y seco'},{text:`${this.datos.check43}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check44}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto22}`},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:`${this.datos.check45}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check46}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto23}`},],
                   [{text:'Caja de conexión, con tapa y junta'},{text:`${this.datos.check47}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check48}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto24}`},],
                   [{text:'Sello EYS con tapón y sello'},{text:`${this.datos.check49}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check50}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto25}`},],
                   [{text:'Contenedor buen estado, sin fracturas, hermético'},{text:`${this.datos.check51}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check52}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto26}`},],

                   
                   [{text:'Contenedor boquilla de llenado', bold:true, fillColor:'#ddd'},{text: 'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text: 'NO', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:'C', bold:true, fillColor:'#ddd'},{text:'C', bold:true, fillColor:'#ddd'},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Tapa con empaque (hermética)'},{text:`${this.datos.check53}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check54}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto27}`},],
                   [{text:'Válvula de drenado operando'},{text:`${this.datos.check55}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check56}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto28}`},],
                   [{text:'Válvula de sobrellenado buen estado, completa'},{text:`${this.datos.check55}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check58}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto29}`},],
                   [{text:'Válvula de sobrellenado cierra al 95%'},{text:`${this.datos.check59}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check60}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto30}`},],
                   [{text:'Tapa de registro hermética'},{text:`${this.datos.check61}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check62}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto31}`},],
                   [{text:'Contenedor limpio y seco'},{text:`${this.datos.check63}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check64}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto32}`},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:`${this.datos.check65}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check66}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto33}`},],
                   [{text:'Contenedor buen estado, sin fracturas, hermético'},{text:`${this.datos.check67}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check68}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto34}`},],


                   [{text:'Recuperación de vapores', bold:true, fillColor:'#ddd'},{text: 'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text: 'NO', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Tapa de válvula con tapa y empaque (hermética)'},{text:`${this.datos.check69}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check70}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto35}`},],
                   [{text:'Adaptador de recuperación de vapores hermético'},{text:`${this.datos.check71}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check72}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto36}`},],
                   [{text:'Tapa de registro hermética'},{text:`${this.datos.check73}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check74}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto37}`},],
                   [{text:'Contenedor limpio y seco'},{text:`${this.datos.check75}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check76}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto38}`},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:`${this.datos.check77}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check78}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto39}`},],
                   [{text:'Contenedor buen estado, sin fracturas, hermético'},{text:`${this.datos.check79}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check80}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto40}`},],
                   ]
           }
       },
       {text: '\n'},
       {
           table:{
               widths:[300,15,15,15,15,15,15,285], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'Especio anular', bold:true, fillColor:'#ddd'},{text: 'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text: 'NO', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Tapa de tubería en buen estado y hermética'},{text:`${this.datos.check81}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check82}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto41}`},],
                   [{text:'Sensor operando'},{text:`${this.datos.check83}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check84}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto42}`},],
                   [{text:'Alimentación eléctrica a prueba de explosión'},{text:`${this.datos.check85}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check86}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto43}`},],
                   [{text:'Alarma audible y/o visible'},{text:`${this.datos.check87}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check88}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto44}`},],
                   [{text:'Tapa de registro hermética (operando)'},{text:`${this.datos.check89}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check90}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto45}`},],
                   [{text:'Contenedor limpio y seco'},{text:`${this.datos.check91}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check92}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto46}`},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:`${this.datos.check93}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check94}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto47}`},],
                   [{text:'Caja de conexión (condulet) con tapa y junta'},{text:`${this.datos.check95}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check96}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto48}`},],
                   [{text:'Sello EYS con tapón y sello'},{text:`${this.datos.check97}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check98}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto49}`},],
                   [{text:'Contenedor buen estado, sin fracturas'},{text:`${this.datos.check99}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check100}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto50}`},],


                   [{text:'Purga', bold:true, fillColor:'#ddd'},{text: 'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text: 'NO', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Tapa en buen estado, hermética'},{text:`${this.datos.check101}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check102}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto51}`},],
                   [{text:'Libre de óxido'},{text:`${this.datos.check103}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check104}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto52}`},],
                   [{text:'Tapa de registro hermética'},{text:`${this.datos.check105}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check106}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto53}`},],
                   [{text:'Contenedor limpio y seco'},{text:`${this.datos.check107}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check108}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto54}`},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:`${this.datos.check109}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check110}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto55}`},],
                   [{text:'Contenedor buen estado, sin fracturas'},{text:`${this.datos.check111}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check112}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto56}`},],


                   [{text:'Contenedor llenado remoto', bold:true, fillColor:'#ddd'},{text: 'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text: 'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Tapa con empaque (hermética)'},{text:`${this.datos.check113}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check114}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto57}`},],
                   [{text:'Válvula de drenado operando'},{text:`${this.datos.check115}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check116}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto58}`},],
                   [{text:'Tapa de registro hermética'},{text:`${this.datos.check117}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check118}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto59}`},],
                   [{text:'Contenedor limpio y seco'},{text:`${this.datos.check119}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check120}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto60}`},],
                   [{text:'Nivel de tapa 2.54 cm sobre NPT'},{text:`${this.datos.check121}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check122}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto61}`},],
                   [{text:'Contenedor buen estado, sin fracturas'},{text:`${this.datos.check123}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check124}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto62}`},],
                   ]
           },
       },
       {text: '\n'},
       {
           table:{
               widths:[300,15,15,15,15,15,15,285],heights:[10,10,10],
               body:[
                   [{text:'NIVEL DE AGUA EN TANQUES', bold:true, fillColor:'#ddd'},{text: 'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text: 'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Control de Inventarios (mm)'},{text:`${this.datos.check125}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check126}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto63}`},],
                   [{text:'Física (mm)'},{text:`${this.datos.check127}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check128}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.text064}`},],
                   ]
           }
       },
       {text: '\n'},
       {
           table:{
               widths:[300,15,15,15,15,15,15,285],heights:[10,10,10],
               body:[
                   [{text:'Pozos de Monitoreo', bold:true, fillColor:'#ddd'},{text: 'SI', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text: 'NO', bold:true, fillColor:'#ddd', alignment:'center',colSpan:3},{text:''},{text:''},{text:'OBSERVACIONES', bold:true, fillColor:'#ddd'},],
                   [{text:'Presencia de Hidrocarburo'},{text:`${this.datos.check129}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.check130}`, alignment:'center',colSpan:3},{text:''},{text:''},{text:`${this.datos.texto65}`},],
                   ]
           }
       },
       {text: '\n'},
       {
           table:{
               widths:[738],heights:[15,15,15,15,15,15,15,15],
               body:[
                   [{text:'NOTAS', bold:true, fillColor:'#ddd'},],
                   [{text:`${this.datos.texto66}`,rowSpan:7}],
                   [{text:''}],
                   [{text:''}],
                   [{text:''}],
                   [{text:''}],
                   [{text:''}],
                   [{text:''}]
                   ]
           }
       },
       {text:'\n\n'},
            {
               table: {
                   widths: [482,241], heights: [50,],
                   body: [
                       [{text: '\n\nCinthya Karime Bedoy DÍaz\nENCARGADO DE LA ESTACIÓN DE SERVICIO', bold:true, },{text: '\nMES:', bold:true,}]
                       ]
               }
            }
   ],
   
   
     pageOrientation: 'landscape',
     pageSize: 'LETTER',
       pageMargins: [22,120]
 };
 this.pdfMaker.generate(dd,'Inspección de tanques y registros');
  }
}