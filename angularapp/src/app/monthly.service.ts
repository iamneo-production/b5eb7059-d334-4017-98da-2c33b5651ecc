import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monthly } from './monthly';

@Injectable({
  providedIn: 'root'
})
export class MonthlyService {
  constructor(private http:HttpClient) { 
  }
  planlist(month:Monthly):Observable<any>
  {
    return this.http.post<any>("https://8080-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io/savemonthly",month);
  }
  FetchAddonFormFromRemote():Observable<Monthly[]>
  {
    return this.http.get<Monthly[]>("https://8080-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io/getmonthly");
  }
  deleteByid(planId:number)
  {
      return this.http.delete("https://8080-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io/deletemonthly?PlanId="+planId);
  }
  update(month:Monthly)
  {
    return this.http.put("https://8080-ffecaffbafdfcdecbfdffdfdffafea.examlyiopb.examly.io/updatemonthly",month);
  }
}
