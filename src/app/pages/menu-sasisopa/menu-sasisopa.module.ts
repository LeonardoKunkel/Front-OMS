import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuSasisopaPage } from './menu-sasisopa.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSasisopaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuSasisopaPage]
})
export class MenuSasisopaPageModule {}
