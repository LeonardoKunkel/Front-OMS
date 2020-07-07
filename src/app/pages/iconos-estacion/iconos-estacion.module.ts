import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IconosEstacionPage } from './iconos-estacion.page';

const routes: Routes = [
  {
    path: '',
    component: IconosEstacionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IconosEstacionPage]
})
export class IconosEstacionPageModule {}
