import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiezSietePage } from './punto-diez-siete.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiezSietePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiezSietePage]
})
export class PuntoDiezSietePageModule {}
