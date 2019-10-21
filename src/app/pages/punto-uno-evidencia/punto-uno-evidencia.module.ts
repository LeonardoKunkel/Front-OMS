import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoUnoEvidenciaPage } from './punto-uno-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoUnoEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoUnoEvidenciaPage]
})
export class PuntoUnoEvidenciaPageModule {}
