import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Catorce31comisionPage } from './catorce31comision.page';

const routes: Routes = [
  {
    path: '',
    component: Catorce31comisionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Catorce31comisionPage]
})
export class Catorce31comisionPageModule {}
