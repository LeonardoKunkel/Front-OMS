import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoCatorceResultadoPage } from './punto-catorce-resultado.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoCatorceResultadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoCatorceResultadoPage]
})
export class PuntoCatorceResultadoPageModule {}
