import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { P12AnexoSeguridadPage } from './p12-anexo-seguridad.page';

const routes: Routes = [
  {
    path: '',
    component: P12AnexoSeguridadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [P12AnexoSeguridadPage]
})
export class P12AnexoSeguridadPageModule {}
