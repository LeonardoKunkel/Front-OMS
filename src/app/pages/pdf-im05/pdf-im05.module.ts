import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PdfIM05Page } from './pdf-im05.page';

const routes: Routes = [
  {
    path: '',
    component: PdfIM05Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PdfIM05Page]
})
export class PdfIM05PageModule {}
