import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoCatorcePage } from './punto-catorce.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoCatorcePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoCatorcePage]
})
export class PuntoCatorcePageModule {}
