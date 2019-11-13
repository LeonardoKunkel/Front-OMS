import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Punto15MenuPage } from './punto15-menu.page';

const routes: Routes = [
  {
    path: '',
    component: Punto15MenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Punto15MenuPage]
})
export class Punto15MenuPageModule {}
