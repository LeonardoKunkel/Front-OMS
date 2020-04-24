import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoNueveProcedimientoPage } from './punto-nueve-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoNueveProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoNueveProcedimientoPage]
})
export class PuntoNueveProcedimientoPageModule {}
