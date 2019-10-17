import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiezOchoPage } from './punto-diez-ocho.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiezOchoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiezOchoPage]
})
export class PuntoDiezOchoPageModule {}
