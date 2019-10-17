import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { P13PlaneacionSimulacrosPage } from './p13-planeacion-simulacros.page';

const routes: Routes = [
  {
    path: '',
    component: P13PlaneacionSimulacrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [P13PlaneacionSimulacrosPage]
})
export class P13PlaneacionSimulacrosPageModule {}
