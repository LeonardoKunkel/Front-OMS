import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fo01ContboqPage } from './fo01-contboq.page';

const routes: Routes = [
  {
    path: '',
    component: Fo01ContboqPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fo01ContboqPage]
})
export class Fo01ContboqPageModule {}
