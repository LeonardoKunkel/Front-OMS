import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fo01MotobombasPage } from './fo01-motobombas.page';


const routes: Routes = [
  {
    path: '',
    component: Fo01MotobombasPage
  }
];

@NgModule({
  entryComponents: [
    
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [Fo01MotobombasPage]
})
export class Fo01MotobombasPageModule {}
