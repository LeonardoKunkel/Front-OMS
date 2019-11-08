import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoSeisProcedimientoPage } from './punto-seis-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoSeisProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoSeisProcedimientoPage]
})
export class PuntoSeisProcedimientoPageModule {}
