import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { P12CartaResponsivaPage } from './p12-carta-responsiva.page';

const routes: Routes = [
  {
    path: '',
    component: P12CartaResponsivaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [P12CartaResponsivaPage]
})
export class P12CartaResponsivaPageModule {}
