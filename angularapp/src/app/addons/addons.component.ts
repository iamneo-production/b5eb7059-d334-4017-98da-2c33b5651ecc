import { Component, OnInit } from '@angular/core';
import { AddonService } from '../addon.service';
import { Addons } from '../addons';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {

  addons:Addons[];

  constructor(private service:AddonService) { }

  ngOnInit(): void {
   
  
  this.getaddon();
  }
  getaddon()
  {
    this.service.FetchAddonFormFromRemote().subscribe(data=>
      {
          this.addons=data;
      });
  }

}
