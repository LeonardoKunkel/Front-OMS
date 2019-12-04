import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDoceEvidenciaPage } from './punto-doce-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDoceEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDoceEvidenciaPage]
})
export class PuntoDoceEvidenciaPageModule {}
