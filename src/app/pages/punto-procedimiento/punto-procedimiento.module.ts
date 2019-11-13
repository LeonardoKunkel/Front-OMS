import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoProcedimientoPage } from './punto-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoProcedimientoPage]
})
export class PuntoProcedimientoPageModule {}
