import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoCuatroProcedimientoPage } from './punto-cuatro-procedimiento.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoCuatroProcedimientoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoCuatroProcedimientoPage]
})
export class PuntoCuatroProcedimientoPageModule {}
