import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvidenciaElementoUnoService {

  constructor( private http: HttpClient) { }

  getImages(){
    return this.http.get('http://localhost:3000/img/')
  }

  uploadImage(title: string, description:string, photo: File){
    const fd = new FormData();
    fd.append('title',title);
    fd.append('description',description);
    fd.append('myfile',photo);
    return this.http.post('http://localhost:3000/evidencePhotoElement1/create',fd);
  }

  deletePhoto(id:string){
    return this.http.delete(`http://localhost:3000/img/${id}`);
  }

  dowloadPhoto(name:String){
    return this.http.get(`http://localhost:3000/download/${name}`);
  }
}
