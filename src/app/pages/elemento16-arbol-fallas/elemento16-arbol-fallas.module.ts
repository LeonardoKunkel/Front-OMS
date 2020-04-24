import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Elemento16ArbolFallasPage } from './elemento16-arbol-fallas.page';

const routes: Routes = [
  {
    path: '',
    component: Elemento16ArbolFallasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Elemento16ArbolFallasPage]
})
export class Elemento16ArbolFallasPageModule {}
