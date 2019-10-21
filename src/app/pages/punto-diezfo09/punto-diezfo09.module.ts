import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiezfo09Page } from './punto-diezfo09.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiezfo09Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiezfo09Page]
})
export class PuntoDiezfo09PageModule {}
