import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoServicesService {

  constructor(
    private http: HttpClient
  ) { }

  // createPhoto( title: String, description: String, photo: File){
  //   const fd = new FormData();
  //   fd.append('title', title);
  //   fd.append('desfription', description);
  //   fd.append('photo', photo);


  // }
}
