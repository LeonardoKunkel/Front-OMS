import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDosAspectosPage } from './punto-dos-aspectos.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDosAspectosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDosAspectosPage]
})
export class PuntoDosAspectosPageModule {}
