import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSieteQuejasPage } from './punto-siete-quejas.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSieteQuejasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoSieteQuejasPage]
})
export class PuntoSieteQuejasPageModule {}
