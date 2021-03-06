import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPunto5Page } from './menu-punto5.page';
import { PuntoCincoPage } from '../punto-cinco/punto-cinco.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPunto5Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPunto5Page,PuntoCincoPage],
  entryComponents: [PuntoCincoPage]
})
export class MenuPunto5PageModule {}
