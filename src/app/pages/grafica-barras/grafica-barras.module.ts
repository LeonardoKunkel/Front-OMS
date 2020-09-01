import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GraficaBarrasPage } from './grafica-barras.page';

const routes: Routes = [
  {
    path: '',
    component: GraficaBarrasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GraficaBarrasPage]
})
export class GraficaBarrasPageModule {}
