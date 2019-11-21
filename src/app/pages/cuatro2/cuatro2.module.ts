import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Cuatro2Page } from './cuatro2.page';

const routes: Routes = [
  {
    path: '',
    component: Cuatro2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Cuatro2Page]
})
export class Cuatro2PageModule {}
