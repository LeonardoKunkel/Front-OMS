import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoTreceEvaluacionPage } from './punto-trece-evaluacion.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoTreceEvaluacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoTreceEvaluacionPage]
})
export class PuntoTreceEvaluacionPageModule {}
