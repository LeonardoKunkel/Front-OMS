import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoTresProcedimientoPage } from './punto-tres-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoTresProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoTresProcedimientoPage]
})
export class PuntoTresProcedimientoPageModule {}
