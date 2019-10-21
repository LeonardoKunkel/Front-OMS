import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Catorce31secretariaPage } from './catorce31secretaria.page';

const routes: Routes = [
  {
    path: '',
    component: Catorce31secretariaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Catorce31secretariaPage]
})
export class Catorce31secretariaPageModule {}
