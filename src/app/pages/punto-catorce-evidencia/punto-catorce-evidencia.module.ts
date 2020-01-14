import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoCatorceEvidenciaPage } from './punto-catorce-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoCatorceEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoCatorceEvidenciaPage]
})
export class PuntoCatorceEvidenciaPageModule {}
