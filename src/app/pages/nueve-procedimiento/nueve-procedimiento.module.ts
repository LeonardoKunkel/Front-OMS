import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NueveProcedimientoPage } from './nueve-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: NueveProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NueveProcedimientoPage]
})
export class NueveProcedimientoPageModule {}
