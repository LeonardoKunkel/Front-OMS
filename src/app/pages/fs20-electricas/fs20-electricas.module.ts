import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fs20ElectricasPage } from './fs20-electricas.page';

const routes: Routes = [
  {
    path: '',
    component: Fs20ElectricasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fs20ElectricasPage]
})
export class Fs20ElectricasPageModule {}
