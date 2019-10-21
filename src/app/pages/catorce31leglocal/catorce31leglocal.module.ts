import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Catorce31leglocalPage } from './catorce31leglocal.page';

const routes: Routes = [
  {
    path: '',
    component: Catorce31leglocalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Catorce31leglocalPage]
})
export class Catorce31leglocalPageModule {}
