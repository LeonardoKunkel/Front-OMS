import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Elemento16CausaRaizPage } from './elemento16-causa-raiz.page';

const routes: Routes = [
  {
    path: '',
    component: Elemento16CausaRaizPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Elemento16CausaRaizPage]
})
export class Elemento16CausaRaizPageModule {}
