import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoEvidenciaPage } from './punto-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoEvidenciaPage]
})
export class PuntoEvidenciaPageModule {}
