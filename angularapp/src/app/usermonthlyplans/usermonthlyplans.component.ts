import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monthly } from '../monthly';
import { MonthlyService } from '../monthly.service';

@Component({
  selector: 'app-usermonthlyplans',
  templateUrl: './usermonthlyplans.component.html',
  styleUrls: ['./usermonthlyplans.component.css']
})
export class UsermonthlyplansComponent implements OnInit {

  mon:Monthly[];
  constructor(private router:Router,private monthlyservice:MonthlyService) { }

  ngOnInit(): void {
    this.Listplanmonthly();
  }
  
  Listplanmonthly()
  {
    this.monthlyservice.FetchAddonFormFromRemote().subscribe((data)=>
      {
        console.log("Response received");
        this.mon=data;
      });
  }
}
