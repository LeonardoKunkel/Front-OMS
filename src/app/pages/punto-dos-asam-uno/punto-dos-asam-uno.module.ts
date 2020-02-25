import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDosAsamUnoPage } from './punto-dos-asam-uno.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDosAsamUnoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDosAsamUnoPage]
})
export class PuntoDosAsamUnoPageModule {}
