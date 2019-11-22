import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDieciseisComprobacionPage } from './punto-dieciseis-comprobacion.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDieciseisComprobacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDieciseisComprobacionPage]
})
export class PuntoDieciseisComprobacionPageModule {}
