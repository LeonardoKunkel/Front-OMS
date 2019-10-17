import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiezSeisPage } from './punto-diez-seis.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiezSeisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiezSeisPage]
})
export class PuntoDiezSeisPageModule {}
