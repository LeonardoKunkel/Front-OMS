import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Puntocatorce32Page } from './puntocatorce32.page';

const routes: Routes = [
  {
    path: '',
    component: Puntocatorce32Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Puntocatorce32Page]
})
export class Puntocatorce32PageModule {}
