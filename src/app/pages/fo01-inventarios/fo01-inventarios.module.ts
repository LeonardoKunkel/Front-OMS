import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fo01InventariosPage } from './fo01-inventarios.page';

const routes: Routes = [
  {
    path: '',
    component: Fo01InventariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fo01InventariosPage]
})
export class Fo01InventariosPageModule {}
