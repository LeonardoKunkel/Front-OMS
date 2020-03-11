import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RepresentanteModalPage } from './representante-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RepresentanteModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RepresentanteModalPage]
})
export class RepresentanteModalPageModule {}
