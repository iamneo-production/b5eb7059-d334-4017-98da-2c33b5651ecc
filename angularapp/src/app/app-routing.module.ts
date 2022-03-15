import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddonFormComponent } from './admin/addon-form/addon-form.component';
import { AddonsComponent } from './admin/addons/addons.component';
import { MonthlyplansComponent } from './admin/monthlyplans/monthlyplans.component';
import { PremiumplansComponent } from './admin/premiumplans/premiumplans.component';
import { MonthlyFormComponent } from './admin/monthly-form/monthly-form.component';
import { PremiumFormComponent } from './admin/premium-form/premium-form.component';

const routes: Routes = [
    {
    path:'admin',
      children:[
     
      {
        path:'addon',
        component:AddonsComponent
      },
      {
        path:'premium',
        component:PremiumplansComponent
      },
      {
        path:'monthly',
        component:MonthlyplansComponent
      },
      {
        path:'addform',
        component:AddonFormComponent
      },
      {
        path:'premiumform',
        component:PremiumFormComponent
      },
      {
        path:'monthlyform',
        component:MonthlyFormComponent
      }]
    },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
