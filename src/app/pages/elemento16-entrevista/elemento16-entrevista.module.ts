import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Elemento16EntrevistaPage } from './elemento16-entrevista.page';

const routes: Routes = [
  {
    path: '',
    component: Elemento16EntrevistaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Elemento16EntrevistaPage]
})
export class Elemento16EntrevistaPageModule {}
