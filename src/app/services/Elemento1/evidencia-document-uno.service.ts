import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvidenciaDocumentUnoService {

  constructor(
    private http: HttpClient
  ) { 

  }

  uploadDocument(titleDocument: string, descriptionDocument:string, documentFile: File){
    const fd = new FormData();
    fd.append('title',titleDocument);
    fd.append('description',descriptionDocument);
    fd.append('Document',documentFile);
    return this.http.post('http://localhost:3000/evidenciaDocumentoUno/create',fd)
  }
}
