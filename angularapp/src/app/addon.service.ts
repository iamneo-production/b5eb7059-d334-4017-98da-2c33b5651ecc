import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addons } from './addons';

@Injectable({
  providedIn: 'root'
})
export class AddonService {

 
  constructor(private http:HttpClient) { }

  
  addonlist(addon:Addons):Observable<any>
  {
    return this.http.post<any>("https://8080-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io/saveaddon",addon);
  }
  FetchAddonFormFromRemote():Observable<Addons[]>
  {
    return this.http.get<Addons[]>("https://8080-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io/getaddon");
  }
  deleteByid(addonId:number)
  {
      return this.http.delete("https://8080-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io/deleteaddon?addonId="+addonId);
  }
  update(addon:Addons)
  {
    return this.http.put("https://8080-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io/updateaddon",addon);
  }
}
