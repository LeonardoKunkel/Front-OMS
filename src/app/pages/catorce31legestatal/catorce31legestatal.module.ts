import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Catorce31legestatalPage } from './catorce31legestatal.page';

const routes: Routes = [
  {
    path: '',
    component: Catorce31legestatalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Catorce31legestatalPage]
})
export class Catorce31legestatalPageModule {}
