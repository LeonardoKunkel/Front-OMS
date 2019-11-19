import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSeisEvidenciaPage } from './punto-seis-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSeisEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoSeisEvidenciaPage]
})
export class PuntoSeisEvidenciaPageModule {}
