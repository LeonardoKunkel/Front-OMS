import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fs20TanquesPage } from './fs20-tanques.page';

const routes: Routes = [
  {
    path: '',
    component: Fs20TanquesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fs20TanquesPage]
})
export class Fs20TanquesPageModule {}
