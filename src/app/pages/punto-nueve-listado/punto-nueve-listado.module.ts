import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoNueveListadoPage } from './punto-nueve-listado.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoNueveListadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoNueveListadoPage]
})
export class PuntoNueveListadoPageModule {}
