import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Catorce31semarnatPage } from './catorce31semarnat.page';

const routes: Routes = [
  {
    path: '',
    component: Catorce31semarnatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Catorce31semarnatPage]
})
export class Catorce31semarnatPageModule {}
