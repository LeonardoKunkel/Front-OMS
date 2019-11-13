import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Punto15EvidenciaPage } from './punto15-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: Punto15EvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Punto15EvidenciaPage]
})
export class Punto15EvidenciaPageModule {}
