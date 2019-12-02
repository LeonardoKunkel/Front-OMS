import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoCincoMatrizPage } from './punto-cinco-matriz.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoCincoMatrizPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoCincoMatrizPage]
})
export class PuntoCincoMatrizPageModule {}
