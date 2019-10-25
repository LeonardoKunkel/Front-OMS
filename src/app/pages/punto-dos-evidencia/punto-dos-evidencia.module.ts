import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDosEvidenciaPage } from './punto-dos-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDosEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDosEvidenciaPage]
})
export class PuntoDosEvidenciaPageModule {}
