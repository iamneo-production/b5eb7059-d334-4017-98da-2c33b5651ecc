import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  
  constructor(private http:HttpClient) { }

  planlist(plan:Plan):Observable<any>
  {
    return this.http.post<any>("https://8080-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io/savepremium",plan);
  }
  FetchAddonFormFromRemote():Observable<Plan[]>
  {
    return this.http.get<Plan[]>("https://8080-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io/getpremium");
  }
  deleteByid(planId:number)
  {
      return this.http.delete("https://8080-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io/deletepremium?PlanId="+planId);
  }
  update(plan:Plan)
  {
    return this.http.put("https://8080-abaceebfbcbdecbfdffdfdffafea.examlyiopb.examly.io/updatepremium",plan);
  }
}

