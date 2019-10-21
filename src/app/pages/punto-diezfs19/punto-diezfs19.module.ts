import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDiezfs19Page } from './punto-diezfs19.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDiezfs19Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDiezfs19Page]
})
export class PuntoDiezfs19PageModule {}
