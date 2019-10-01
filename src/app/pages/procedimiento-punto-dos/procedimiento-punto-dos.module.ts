import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProcedimientoPuntoDosPage } from './procedimiento-punto-dos.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedimientoPuntoDosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProcedimientoPuntoDosPage]
})
export class ProcedimientoPuntoDosPageModule {}
