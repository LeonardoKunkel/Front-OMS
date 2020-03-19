import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOchoListaPage } from './punto-ocho-lista.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOchoListaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOchoListaPage]
})
export class PuntoOchoListaPageModule {}
