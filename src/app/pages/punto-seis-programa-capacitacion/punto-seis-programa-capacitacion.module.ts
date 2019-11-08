import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSeisProgramaCapacitacionPage } from './punto-seis-programa-capacitacion.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSeisProgramaCapacitacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoSeisProgramaCapacitacionPage]
})
export class PuntoSeisProgramaCapacitacionPageModule {}
