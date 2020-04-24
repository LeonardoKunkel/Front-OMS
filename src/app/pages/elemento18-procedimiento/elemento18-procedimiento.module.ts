import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Elemento18ProcedimientoPage } from './elemento18-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: Elemento18ProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Elemento18ProcedimientoPage]
})
export class Elemento18ProcedimientoPageModule {}
