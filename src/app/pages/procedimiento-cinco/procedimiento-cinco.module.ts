import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProcedimientoCincoPage } from './procedimiento-cinco.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedimientoCincoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProcedimientoCincoPage]
})
export class ProcedimientoCincoPageModule {}
