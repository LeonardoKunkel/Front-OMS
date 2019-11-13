import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Punto15ProcedimientoPage } from './punto15-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: Punto15ProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Punto15ProcedimientoPage]
})
export class Punto15ProcedimientoPageModule {}
