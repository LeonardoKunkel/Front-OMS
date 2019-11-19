import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoCincoProcedimientoPage } from './punto-cinco-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoCincoProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoCincoProcedimientoPage]
})
export class PuntoCincoProcedimientoPageModule {}
