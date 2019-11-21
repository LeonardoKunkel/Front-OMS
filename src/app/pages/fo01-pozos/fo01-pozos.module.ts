import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fo01PozosPage } from './fo01-pozos.page';

const routes: Routes = [
  {
    path: '',
    component: Fo01PozosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fo01PozosPage]
})
export class Fo01PozosPageModule {}
