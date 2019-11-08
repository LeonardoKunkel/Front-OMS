import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuejasSugerenciasPage } from './quejas-sugerencias.page';

const routes: Routes = [
  {
    path: '',
    component: QuejasSugerenciasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuejasSugerenciasPage]
})
export class QuejasSugerenciasPageModule {}
