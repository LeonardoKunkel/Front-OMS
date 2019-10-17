import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';


@Component({
  selector: 'app-p13-planeacion-simulacros',
  templateUrl: './p13-planeacion-simulacros.page.html',
  styleUrls: ['./p13-planeacion-simulacros.page.scss'],
})
export class P13PlaneacionSimulacrosPage implements OnInit {

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Actividad 1',
      subHeader:'Llena los campos',
      message:'Favor de llenar los campos',
      inputs:[
        {
          label:'Actividad',
          type:'text',
          placeholder:'Describe la actividad'
        },{
          type:'text',
          placeholder:'Responsable de la actividad'
        },{
          type:'text',
          placeholder:'Recursos materiales requeridos'
        },{
          type:'text',
          placeholder:'Tiempo de respuesta'
        },{
          type:'text',
          placeholder:'Escriba si fue real o simulada'
        }
        
      ],
      buttons:[
        {text:'cancelar',
         role:'cancel',
         cssClass:'danger',
         handler:(blah)=>{
         console.log('Seguro que deseas cancelar');
         }
        },{
          text:'OK',
          handler:()=>{
            console.log('Confirmado');
          }
        }
      ]
    });
    await alert.present();
  }  
  async presentAlert2(){
    const alert = await this.alertController.create({
      header: 'Actividad 1',
      subHeader:'Llena los campos',
      message:'Favor de llenar los campos',
      inputs:[
        {
          label:'Actividad',
          type:'text',
          placeholder:'Describe la actividad'
        },{
          type:'text',
          placeholder:'Responsable de la actividad'
        },{
          type:'text',
          placeholder:'Recursos materiales requeridos'
        },{
          type:'text',
          placeholder:'Tiempo de respuesta'
        },{
          type:'text',
          placeholder:'Escriba si fue real o simulada'
        }
        
      ],
      buttons:[
        {text:'cancelar',
         role:'cancel',
         cssClass:'danger',
         handler:(blah)=>{
         console.log('Seguro que deseas cancelar');
         }
        },{
          text:'OK',
          handler:()=>{
            console.log('Confirmado');
          }
        }
      ]
    });
    await alert.present();
  }
  async presentAlert3(){
    const alert = await this.alertController.create({
      header: 'Actividad 1',
      subHeader:'Llena los campos',
      message:'Favor de llenar los campos',
      inputs:[
        {
          label:'Actividad',
          type:'text',
          placeholder:'Describe la actividad'
        },{
          type:'text',
          placeholder:'Responsable de la actividad'
        },{
          type:'text',
          placeholder:'Recursos materiales requeridos'
        },{
          type:'text',
          placeholder:'Tiempo de respuesta'
        },{
          type:'text',
          placeholder:'Escriba si fue real o simulada'
        }
        
      ],
      buttons:[
        {text:'cancelar',
         role:'cancel',
         cssClass:'danger',
         handler:(blah)=>{
         console.log('Seguro que deseas cancelar');
         }
        },{
          text:'OK',
          handler:()=>{
            console.log('Confirmado');
          }
        }
      ]
    });
    await alert.present();
  }
  async presentAlert4(){
    const alert = await this.alertController.create({
      header: 'Actividad 1',
      subHeader:'Llena los campos',
      message:'Favor de llenar los campos',
      inputs:[
        {
          label:'Actividad',
          type:'text',
          placeholder:'Describe la actividad'
        },{
          type:'text',
          placeholder:'Responsable de la actividad'
        },{
          type:'text',
          placeholder:'Recursos materiales requeridos'
        },{
          type:'text',
          placeholder:'Tiempo de respuesta'
        },{
          type:'text',
          placeholder:'Escriba si fue real o simulada'
        }
        
      ],
      buttons:[
        {text:'cancelar',
         role:'cancel',
         cssClass:'danger',
         handler:(blah)=>{
         console.log('Seguro que deseas cancelar');
         }
        },{
          text:'OK',
          handler:()=>{
            console.log('Confirmado');
          }
        }
      ]
    });
    await alert.present();
  }  async presentAlert5(){
    const alert = await this.alertController.create({
      header: 'Actividad 1',
      subHeader:'Llena los campos',
      message:'Favor de llenar los campos',
      inputs:[
        {
          label:'Actividad',
          type:'text',
          placeholder:'Describe la actividad'
        },{
          type:'text',
          placeholder:'Responsable de la actividad'
        },{
          type:'text',
          placeholder:'Recursos materiales requeridos'
        },{
          type:'text',
          placeholder:'Tiempo de respuesta'
        },{
          type:'text',
          placeholder:'Escriba si fue real o simulada'
        }
        
      ],
      buttons:[
        {text:'cancelar',
         role:'cancel',
         cssClass:'danger',
         handler:(blah)=>{
         console.log('Seguro que deseas cancelar');
         }
        },{
          text:'OK',
          handler:()=>{
            console.log('Confirmado');
          }
        }
      ]
    });
    await alert.present();
  }
  async presentAlert6(){
    const alert = await this.alertController.create({
      header: 'Actividad 1',
      subHeader:'Llena los campos',
      message:'Favor de llenar los campos',
      inputs:[
        {
          label:'Actividad',
          type:'text',
          placeholder:'Describe la actividad'
        },{
          type:'text',
          placeholder:'Responsable de la actividad'
        },{
          type:'text',
          placeholder:'Recursos materiales requeridos'
        },{
          type:'text',
          placeholder:'Tiempo de respuesta'
        },{
          type:'text',
          placeholder:'Escriba si fue real o simulada'
        }
        
      ],
      buttons:[
        {text:'cancelar',
         role:'cancel',
         cssClass:'danger',
         handler:(blah)=>{
         console.log('Seguro que deseas cancelar');
         }
        },{
          text:'OK',
          handler:()=>{
            console.log('Confirmado');
          }
        }
      ]
    });
    await alert.present();
  }
  async presentAlert7(){
    const alert = await this.alertController.create({
      header: 'Actividad 1',
      subHeader:'Llena los campos',
      message:'Favor de llenar los campos',
      inputs:[
        {
          label:'Actividad',
          type:'text',
          placeholder:'Describe la actividad'
        },{
          type:'text',
          placeholder:'Responsable de la actividad'
        },{
          type:'text',
          placeholder:'Recursos materiales requeridos'
        },{
          type:'text',
          placeholder:'Tiempo de respuesta'
        },{
          type:'text',
          placeholder:'Escriba si fue real o simulada'
        }
        
      ],
      buttons:[
        {text:'cancelar',
         role:'cancel',
         cssClass:'danger',
         handler:(blah)=>{
         console.log('Seguro que deseas cancelar');
         }
        },{
          text:'OK',
          handler:()=>{
            console.log('Confirmado');
          }
        }
      ]
    });
    await alert.present();
  }
  async presentAlert8(){
    const alert = await this.alertController.create({
      header: 'Actividad 1',
      subHeader:'Llena los campos',
      message:'Favor de llenar los campos',
      inputs:[
        {
          label:'Actividad',
          type:'text',
          placeholder:'Describe la actividad'
        },{
          type:'text',
          placeholder:'Responsable de la actividad'
        },{
          type:'text',
          placeholder:'Recursos materiales requeridos'
        },{
          type:'text',
          placeholder:'Tiempo de respuesta'
        },{
          type:'text',
          placeholder:'Escriba si fue real o simulada'
        }
        
      ],
      buttons:[
        {text:'cancelar',
         role:'cancel',
         cssClass:'danger',
         handler:(blah)=>{
         console.log('Seguro que deseas cancelar');
         }
        },{
          text:'OK',
          handler:()=>{
            console.log('Confirmado');
          }
        }
      ]
    });
    await alert.present();
  }



}
