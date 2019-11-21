import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDoceProcedimientoPage } from './punto-doce-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDoceProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDoceProcedimientoPage]
})
export class PuntoDoceProcedimientoPageModule {}
