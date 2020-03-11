import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RiesgosService {

    constructor(private httpClient: HttpClient) { }
    getRiesgos() {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders ({
            Authorization: token
        });
        return this.httpClient.get('http://localhost:3000/riesgos', {headers});
    }
    createRiesgos(riesgos) {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders ({
            Authorization: token
        });
        return this.httpClient.post('http://localhost:3000/riesgos/create', {riesgos}, {headers});
    }
}
