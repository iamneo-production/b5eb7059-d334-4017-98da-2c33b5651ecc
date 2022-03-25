import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Premiumplans } from './premiumplans';
@Injectable({
  providedIn: 'root'
})
export class PremiumplansService {

  constructor(private http:HttpClient) { }

  planlist(plan:Premiumplans):Observable<any>
  {
    return this.http.post<any>("https://8080-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io/savepremium",plan);
  }
  FetchAddonFormFromRemote():Observable<Premiumplans[]>
  {
    return this.http.get<Premiumplans[]>("https://8080-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io/getpremium");
  }
  deleteByid(planId:number)
  {
      return this.http.delete("https://8080-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io/deletepremium?PlanId="+planId);
  }
  update(plan:Premiumplans)
  {
    return this.http.put("https://8080-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io/updatepremium",plan);
  }
}
