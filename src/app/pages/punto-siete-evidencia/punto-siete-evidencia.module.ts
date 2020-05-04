import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSieteEvidenciaPage } from './punto-siete-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSieteEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoSieteEvidenciaPage]
})
export class PuntoSieteEvidenciaPageModule {}
