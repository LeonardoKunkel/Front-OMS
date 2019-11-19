import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOchoListaDistribucionPage } from './punto-ocho-lista-distribucion.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOchoListaDistribucionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOchoListaDistribucionPage]
})
export class PuntoOchoListaDistribucionPageModule {}
