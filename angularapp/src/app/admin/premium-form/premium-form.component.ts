import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Premiumplans } from 'src/app/premiumplans';
import { PremiumplansService } from 'src/app/premiumplans.service';

@Component({
  selector: 'app-premium-form',
  templateUrl: './premium-form.component.html',
  styleUrls: ['./premium-form.component.css']
})
export class PremiumFormComponent implements OnInit {
  
  plan: Premiumplans=new Premiumplans();
  constructor(private service:PremiumplansService,private router:Router) { }


  ngOnInit(): void {
  }
  addonRegister()
  {
    console.log(this.plan);
    this.savepremiumplan();
  }
  savepremiumplan()
  {
    this.service.planlist(this.plan).subscribe(data=>
      {
          console.log(data);
          this.goToPremium();
      })
  }
  goToPremium()
  {
    this.router.navigate(['/admin/premium']);
  }

}
