import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDosAsamSeisPage } from './punto-dos-asam-seis.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDosAsamSeisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDosAsamSeisPage]
})
export class PuntoDosAsamSeisPageModule {}
