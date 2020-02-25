import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EncargadoModalPage } from './encargado-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EncargadoModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EncargadoModalPage]
})
export class EncargadoModalPageModule {}
