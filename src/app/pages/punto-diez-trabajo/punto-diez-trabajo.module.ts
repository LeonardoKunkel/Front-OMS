import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiezTrabajoPage } from './punto-diez-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiezTrabajoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiezTrabajoPage]
})
export class PuntoDiezTrabajoPageModule {}
