import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Premiumplans } from '../premiumplans';
import { PremiumplansService } from '../premiumplans.service';

@Component({
  selector: 'app-userpremiumplans',
  templateUrl: './userpremiumplans.component.html',
  styleUrls: ['./userpremiumplans.component.css']
})
export class UserpremiumplansComponent implements OnInit {

  pla:Premiumplans[];
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
}
