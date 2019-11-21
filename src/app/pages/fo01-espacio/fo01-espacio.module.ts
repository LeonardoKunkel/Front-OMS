import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fo01EspacioPage } from './fo01-espacio.page';

const routes: Routes = [
  {
    path: '',
    component: Fo01EspacioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fo01EspacioPage]
})
export class Fo01EspacioPageModule {}
