import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { P13ReparacionRespuestaEmergenciaPage } from './p13-reparacion-respuesta-emergencia.page';

const routes: Routes = [
  {
    path: '',
    component: P13ReparacionRespuestaEmergenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [P13ReparacionRespuestaEmergenciaPage]
})
export class P13ReparacionRespuestaEmergenciaPageModule {}
