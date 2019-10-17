import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoUnoProcedimientoPage } from './punto-uno-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoUnoProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoUnoProcedimientoPage]
})
export class PuntoUnoProcedimientoPageModule {}
