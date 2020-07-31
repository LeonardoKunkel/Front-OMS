import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoCatorceProcedimientoPage } from './punto-catorce-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoCatorceProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoCatorceProcedimientoPage]
})
export class PuntoCatorceProcedimientoPageModule {}
