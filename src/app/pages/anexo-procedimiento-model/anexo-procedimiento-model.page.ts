import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-anexo-procedimiento-model',
  templateUrl: './anexo-procedimiento-model.page.html',
  styleUrls: ['./anexo-procedimiento-model.page.scss'],
})
export class AnexoProcedimientoModelPage implements OnInit {
  public anArray:any=[];
  public anArrayParoEmergencia:any=[];
  public anArrayBotiquin:any=[];
  public anArrayTipo:any=[];
  data: boolean;

  constructor( private modalCtrl:ModalController) { 
    this.goTo();
    this.Add();
    this.AddParoEmergencia();
    this.AddBotiquin();
   }

  ngOnInit() {
  }
  async closeModal(){
    await this.modalCtrl.dismiss();
  } 
  goTo(){
    console.log('this.anArray',this.anArray);
    console.log('arraTipo',this.anArrayTipo);
    console.log('arrarParoEmergencia',this.anArrayParoEmergencia);
    console.log('ArrarBotiquin',this.anArrayBotiquin);
    this.data=true;
    }
   
  Add(){
    this.anArray.push([]);
    this.anArrayTipo.push([]);
    console.log(this.data);
 }
  AddParoEmergencia(){
    this.anArrayParoEmergencia.push([]);
    console.log(this.data);
  } 
  AddBotiquin(){
    this.anArrayBotiquin.push([]);
    console.log(this.data);    
  }

}
