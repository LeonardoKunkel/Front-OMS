import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOchoSolicitudCambiosPage } from './punto-ocho-solicitud-cambios.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOchoSolicitudCambiosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOchoSolicitudCambiosPage]
})
export class PuntoOchoSolicitudCambiosPageModule {}
