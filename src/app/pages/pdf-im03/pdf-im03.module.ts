import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PdfIM03Page } from './pdf-im03.page';

const routes: Routes = [
  {
    path: '',
    component: PdfIM03Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PdfIM03Page]
})
export class PdfIM03PageModule {}
