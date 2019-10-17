import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { P13ProgramaSimulacrosPage } from './p13-programa-simulacros.page';

const routes: Routes = [
  {
    path: '',
    component: P13ProgramaSimulacrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [P13ProgramaSimulacrosPage]
})
export class P13ProgramaSimulacrosPageModule {}
