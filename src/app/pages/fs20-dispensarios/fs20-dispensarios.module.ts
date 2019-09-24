import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fs20DispensariosPage } from './fs20-dispensarios.page';

const routes: Routes = [
  {
    path: '',
    component: Fs20DispensariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fs20DispensariosPage]
})
export class Fs20DispensariosPageModule {}
