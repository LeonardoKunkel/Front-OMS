import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOchoEvidenciaPage } from './punto-ocho-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOchoEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOchoEvidenciaPage]
})
export class PuntoOchoEvidenciaPageModule {}
