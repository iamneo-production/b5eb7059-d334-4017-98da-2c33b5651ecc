import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Premiumplans } from 'src/app/premiumplans';
import { PremiumplansService } from 'src/app/premiumplans.service';

@Component({
  selector: 'app-premiumplans',
  templateUrl: './premiumplans.component.html',
  styleUrls: ['./premiumplans.component.css']
})
export class PremiumplansComponent implements OnInit {

  pla:Premiumplans[];
  plans=new Premiumplans();
  planupdate:any ={
    planId:"",
    planName:"",
    planType:"",
    planPrice:"",
    planDetails:""
}
  
  constructor(private service:PremiumplansService,private router:Router) { }

  ngOnInit(): void {
    this.Listplan();
  }
  Listplan()
  {
    this.service.FetchAddonFormFromRemote().subscribe((data)=>
      {
        console.log("Response received");
        this.pla=data;
      });
  }
  delete(Plans:any)
  {
    this.service.deleteByid(Plans.planId).subscribe(
      (data)=>
      {
          console.log("Succesfully deleted");
          this.Listplan();
      })
  }
  displayStyle = "none";
  
  openPopup(Plans:any) {
    this.displayStyle = "block";
    this.planupdate=Plans;
  }
  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.service.update(this.planupdate).subscribe(data=>
      {
        console.log(data);
        
      })
  }


}
