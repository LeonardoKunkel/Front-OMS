import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fs20PozosPage } from './fs20-pozos.page';

const routes: Routes = [
  {
    path: '',
    component: Fs20PozosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fs20PozosPage]
})
export class Fs20PozosPageModule {}
