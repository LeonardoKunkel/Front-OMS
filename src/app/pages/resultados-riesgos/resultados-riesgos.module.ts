import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResultadosRiesgosPage } from './resultados-riesgos.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosRiesgosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultadosRiesgosPage]
})
export class ResultadosRiesgosPageModule {}
