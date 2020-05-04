import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiezTecnologiaPage } from './punto-diez-tecnologia.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiezTecnologiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiezTecnologiaPage]
})
export class PuntoDiezTecnologiaPageModule {}
