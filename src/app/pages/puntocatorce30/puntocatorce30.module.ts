import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Puntocatorce30Page } from './puntocatorce30.page';

const routes: Routes = [
  {
    path: '',
    component: Puntocatorce30Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Puntocatorce30Page]
})
export class Puntocatorce30PageModule {}
