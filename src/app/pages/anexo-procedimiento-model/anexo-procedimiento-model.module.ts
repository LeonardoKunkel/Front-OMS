import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnexoProcedimientoModelPage } from './anexo-procedimiento-model.page';

const routes: Routes = [
  {
    path: '',
    component: AnexoProcedimientoModelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnexoProcedimientoModelPage]
})
export class AnexoProcedimientoModelPageModule {}
