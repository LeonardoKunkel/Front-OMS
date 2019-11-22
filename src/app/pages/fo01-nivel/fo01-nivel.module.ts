import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fo01NivelPage } from './fo01-nivel.page';

const routes: Routes = [
  {
    path: '',
    component: Fo01NivelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fo01NivelPage]
})
export class Fo01NivelPageModule {}
