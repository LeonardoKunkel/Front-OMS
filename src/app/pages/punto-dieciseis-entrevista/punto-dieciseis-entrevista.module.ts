import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDieciseisEntrevistaPage } from './punto-dieciseis-entrevista.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDieciseisEntrevistaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDieciseisEntrevistaPage]
})
export class PuntoDieciseisEntrevistaPageModule {}
