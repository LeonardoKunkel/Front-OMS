import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoTreceEvidenciaPage } from './punto-trece-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoTreceEvidenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoTreceEvidenciaPage]
})
export class PuntoTreceEvidenciaPageModule {}
