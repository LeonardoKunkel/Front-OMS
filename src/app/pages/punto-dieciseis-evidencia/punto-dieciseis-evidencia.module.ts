import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDieciseisEvidenciaPage } from './punto-dieciseis-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDieciseisEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDieciseisEvidenciaPage]
})
export class PuntoDieciseisEvidenciaPageModule {}
