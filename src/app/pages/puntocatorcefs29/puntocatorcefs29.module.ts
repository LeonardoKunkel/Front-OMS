import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Puntocatorcefs29Page } from './puntocatorcefs29.page';

const routes: Routes = [
  {
    path: '',
    component: Puntocatorcefs29Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Puntocatorcefs29Page]
})
export class Puntocatorcefs29PageModule {}
