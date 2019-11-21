import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fo01VaporesPage } from './fo01-vapores.page';

const routes: Routes = [
  {
    path: '',
    component: Fo01VaporesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fo01VaporesPage]
})
export class Fo01VaporesPageModule {}
