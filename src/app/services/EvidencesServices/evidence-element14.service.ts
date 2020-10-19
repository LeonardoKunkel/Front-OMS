import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvidenceElement14Service {

  constructor(
    private http : HttpClient
  ) { }

  getImages(){
    return this.http.get('http://localhost:3000/evidencePhotoElement14/');
  }

  uploadImages(title: string, description:string, photo: File){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('myfile', photo);
    return this.http.post('http://localhost:3000/evidencePhotoElement14/create',fd);
  }

  getDocument(){
    return this.http.get('http://localhost:3000/evidenceDocumentElement14/');
  }

  uploadDocument(title: string, description: string, document: File){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('myfile', document);
    return this.http.post('http://localhost:3000/evidenceDocumentElement14/create', fd);
  }
}
