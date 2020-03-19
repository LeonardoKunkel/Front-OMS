import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOchoProcedimientoPage } from './punto-ocho-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOchoProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOchoProcedimientoPage]
})
export class PuntoOchoProcedimientoPageModule {}
