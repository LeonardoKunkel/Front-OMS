import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSieteProcedimientoPage } from './punto-siete-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSieteProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoSieteProcedimientoPage]
})
export class PuntoSieteProcedimientoPageModule {}
