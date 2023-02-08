import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private disUrl = 'http://localhost:3000/datas';
  constructor(private http: HttpClient) { }

  display(){
    const disUrl = this.disUrl;
    return this.http.get(disUrl);
  }

  deletes(id:string){
    let url4 = 'http://localhost:3000/datas';
     return this.http.delete(url4+'/'+id);
  }
}
