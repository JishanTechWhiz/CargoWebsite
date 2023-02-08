import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private addCargo = 'https://nodejs-acli.onrender.com/agents/cargoDetails';
  private cargoDetails = 'https://nodejs-acli.onrender.com/agents/cargos';

  constructor(private http: HttpClient) { }

  add(cargo: any){
    return this.http.post(this.addCargo, cargo);
  }

  display(){
    const disUrl = this.cargoDetails;
    return this.http.get(disUrl);
  }

  deletes(id:string){
    let url4 = 'http://localhost:3000/cargos';
     return this.http.delete(url4+'/'+id);
  }
}
