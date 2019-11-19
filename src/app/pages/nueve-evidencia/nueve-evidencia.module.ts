import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NueveEvidenciaPage } from './nueve-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: NueveEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NueveEvidenciaPage]
})
export class NueveEvidenciaPageModule {}
