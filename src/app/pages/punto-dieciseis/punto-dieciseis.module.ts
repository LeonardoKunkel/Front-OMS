import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDieciseisPage } from './punto-dieciseis.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDieciseisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDieciseisPage]
})
export class PuntoDieciseisPageModule {}
