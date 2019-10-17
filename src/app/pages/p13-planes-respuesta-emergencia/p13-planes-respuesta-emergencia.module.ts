import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { P13PlanesRespuestaEmergenciaPage } from './p13-planes-respuesta-emergencia.page';

const routes: Routes = [
  {
    path: '',
    component: P13PlanesRespuestaEmergenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [P13PlanesRespuestaEmergenciaPage]
})
export class P13PlanesRespuestaEmergenciaPageModule {}
