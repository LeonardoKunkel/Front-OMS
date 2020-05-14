import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvidenciaElementoDiezService {

  constructor(private http:HttpClient) { }

  getImages(){
    return this.http.get('http://localhost:3000/img/')
  }

  uploadImage(title: string, description:string, photo: File){
    const fd = new FormData();
    fd.append('title',title);
    fd.append('description',description);
    fd.append('image',photo);
    return this.http.post('http://localhost:3000/evidencia10/create',fd)
  }
}
