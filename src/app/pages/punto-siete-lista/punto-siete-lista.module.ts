import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSieteListaPage } from './punto-siete-lista.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSieteListaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoSieteListaPage]
})
export class PuntoSieteListaPageModule {}
