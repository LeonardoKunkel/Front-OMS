import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { P13EvaluacionSimulacrosPage } from './p13-evaluacion-simulacros.page';

const routes: Routes = [
  {
    path: '',
    component: P13EvaluacionSimulacrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [P13EvaluacionSimulacrosPage]
})
export class P13EvaluacionSimulacrosPageModule {}
