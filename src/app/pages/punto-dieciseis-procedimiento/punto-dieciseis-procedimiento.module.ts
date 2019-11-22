import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDieciseisProcedimientoPage } from './punto-dieciseis-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDieciseisProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDieciseisProcedimientoPage]
})
export class PuntoDieciseisProcedimientoPageModule {}
