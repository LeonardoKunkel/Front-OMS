import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDosAsamCincoPage } from './punto-dos-asam-cinco.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDosAsamCincoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDosAsamCincoPage]
})
export class PuntoDosAsamCincoPageModule {}
