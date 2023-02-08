import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private addUrl = 'https://nodejs-acli.onrender.com/agents/addAgent';
  private logUrl = 'https://nodejs-acli.onrender.com/agents/agentLogin';
  private disUrl = 'https://nodejs-acli.onrender.com/agents';

  private upUrl = 'http://localhost:3000/datas';

  constructor(private http: HttpClient) { }

  create(agent: any){
    return this.http.post(this.addUrl, agent);
  }

  login(credentials: any){
    return this.http.post(this.logUrl, credentials);
  }

  display(){
    const disUrl = this.disUrl;
    return this.http.get(disUrl);
  }

  updates(Fullname:any){
    return this.http.put(this.upUrl,Fullname);
  }

  deletes(id:string){
    let url4 = 'http://localhost:3000/agents';
     return this.http.delete(url4+'/'+id);
  }
}
