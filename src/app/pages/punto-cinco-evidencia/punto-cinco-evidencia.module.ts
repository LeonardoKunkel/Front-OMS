import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoCincoEvidenciaPage } from './punto-cinco-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoCincoEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoCincoEvidenciaPage]
})
export class PuntoCincoEvidenciaPageModule {}
