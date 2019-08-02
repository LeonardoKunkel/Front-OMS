import { Injectable } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfMakerService {

  pdfObj=null;

  constructor() { }

  generate(document, title){
    this.pdfObj = pdfMake.createPdf(document);
    this.pdfObj.download(title);
  }
}