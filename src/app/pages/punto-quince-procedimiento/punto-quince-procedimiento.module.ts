import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoQuinceProcedimientoPage } from './punto-quince-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoQuinceProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoQuinceProcedimientoPage]
})
export class PuntoQuinceProcedimientoPageModule {}
