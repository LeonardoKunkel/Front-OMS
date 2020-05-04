import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoCatorceProgramaPage } from './punto-catorce-programa.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoCatorceProgramaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoCatorceProgramaPage]
})
export class PuntoCatorceProgramaPageModule {}
