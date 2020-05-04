import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOchoSolicitudPage } from './punto-ocho-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOchoSolicitudPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOchoSolicitudPage]
})
export class PuntoOchoSolicitudPageModule {}
