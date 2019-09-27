import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PdfIM11Page } from './pdf-im11.page';

const routes: Routes = [
  {
    path: '',
    component: PdfIM11Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PdfIM11Page]
})
export class PdfIM11PageModule {}
