import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Elemento16HipotesisRecomendacionesPage } from './elemento16-hipotesis-recomendaciones.page';

const routes: Routes = [
  {
    path: '',
    component: Elemento16HipotesisRecomendacionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Elemento16HipotesisRecomendacionesPage]
})
export class Elemento16HipotesisRecomendacionesPageModule {}
