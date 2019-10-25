import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoTresEvidenciaPage } from './punto-tres-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoTresEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoTresEvidenciaPage]
})
export class PuntoTresEvidenciaPageModule {}
