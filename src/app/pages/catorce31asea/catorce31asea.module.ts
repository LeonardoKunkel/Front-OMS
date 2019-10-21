import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Catorce31aseaPage } from './catorce31asea.page';

const routes: Routes = [
  {
    path: '',
    component: Catorce31aseaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Catorce31aseaPage]
})
export class Catorce31aseaPageModule {}
