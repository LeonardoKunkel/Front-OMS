import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Fs20DrenajesPage } from './fs20-drenajes.page';

const routes: Routes = [
  {
    path: '',
    component: Fs20DrenajesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fs20DrenajesPage]
})
export class Fs20DrenajesPageModule {}
