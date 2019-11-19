import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Popover1Component } from './popover1/popover1.component';


@NgModule({

  entryComponents: [
    Popover1Component
  ],

  declarations: [
    
  ],
  exports:[
    Popover1Component,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ComponentsModule,
  ]
})
export class ComponentsModule { }