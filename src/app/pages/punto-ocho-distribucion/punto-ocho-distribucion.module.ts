import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOchoDistribucionPage } from './punto-ocho-distribucion.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOchoDistribucionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOchoDistribucionPage]
})
export class PuntoOchoDistribucionPageModule {}
