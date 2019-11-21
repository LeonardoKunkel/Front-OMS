import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiecisieteProcedimientoPage } from './punto-diecisiete-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiecisieteProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiecisieteProcedimientoPage]
})
export class PuntoDiecisieteProcedimientoPageModule {}
