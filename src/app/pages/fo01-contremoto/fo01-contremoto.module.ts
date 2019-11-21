import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fo01ContremotoPage } from './fo01-contremoto.page';

const routes: Routes = [
  {
    path: '',
    component: Fo01ContremotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fo01ContremotoPage]
})
export class Fo01ContremotoPageModule {}
