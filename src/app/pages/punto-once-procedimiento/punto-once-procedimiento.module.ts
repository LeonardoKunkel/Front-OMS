import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoOnceProcedimientoPage } from './punto-once-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoOnceProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoOnceProcedimientoPage]
})
export class PuntoOnceProcedimientoPageModule {}
