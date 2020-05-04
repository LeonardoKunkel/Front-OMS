import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiezPersonalPage } from './punto-diez-personal.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiezPersonalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiezPersonalPage]
})
export class PuntoDiezPersonalPageModule {}
