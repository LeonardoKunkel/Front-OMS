import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Cuatro1Page } from './cuatro1.page';

const routes: Routes = [
  {
    path: '',
    component: Cuatro1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Cuatro1Page]
})
export class Cuatro1PageModule {}
