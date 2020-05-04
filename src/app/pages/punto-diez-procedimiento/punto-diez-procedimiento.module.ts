import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiezProcedimientoPage } from './punto-diez-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiezProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiezProcedimientoPage]
})
export class PuntoDiezProcedimientoPageModule {}
