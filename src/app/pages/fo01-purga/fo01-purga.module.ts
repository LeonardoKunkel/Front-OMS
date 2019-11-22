import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fo01PurgaPage } from './fo01-purga.page';

const routes: Routes = [
  {
    path: '',
    component: Fo01PurgaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fo01PurgaPage]
})
export class Fo01PurgaPageModule {}
