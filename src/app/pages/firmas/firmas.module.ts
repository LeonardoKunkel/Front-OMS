import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { IonicModule } from '@ionic/angular';

import { FirmasPage } from './firmas.page';
import { SignaturePadModule } from 'angular2-signaturepad';

const routes: Routes = [
  {
    path: '',
    component: FirmasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignaturePadModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirmasPage]
})
export class FirmasPageModule {}
