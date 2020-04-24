import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PuntoDosRiesgosPage } from './punto-dos-riesgos.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDosRiesgosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDosRiesgosPage]
})
export class PuntoDosRiesgosPageModule {}
