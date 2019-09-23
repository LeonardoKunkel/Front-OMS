import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fs20EdificiosPage } from './fs20-edificios.page';

const routes: Routes = [
  {
    path: '',
    component: Fs20EdificiosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fs20EdificiosPage]
})
export class Fs20EdificiosPageModule {}
