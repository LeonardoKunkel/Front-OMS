import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListadoPeligrosPage } from './listado-peligros.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPeligrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListadoPeligrosPage]
})
export class ListadoPeligrosPageModule {}
