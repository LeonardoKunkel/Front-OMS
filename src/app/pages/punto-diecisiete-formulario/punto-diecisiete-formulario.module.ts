import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiecisieteFormularioPage } from './punto-diecisiete-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiecisieteFormularioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiecisieteFormularioPage]
})
export class PuntoDiecisieteFormularioPageModule {}
