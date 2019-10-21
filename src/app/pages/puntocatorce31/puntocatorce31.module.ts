import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Puntocatorce31Page } from './puntocatorce31.page';

const routes: Routes = [
  {
    path: '',
    component: Puntocatorce31Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Puntocatorce31Page]
})
export class Puntocatorce31PageModule {}
