import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddonsComponent } from './addons/addons.component';
import { AddonFormComponent } from './admin/addon-form/addon-form.component';
import { AdminaddonsComponent } from './admin/adminaddons/adminaddons.component';
import { MonthlyFormComponent } from './admin/monthly-form/monthly-form.component';
import { MonthlyplansComponent } from './admin/monthlyplans/monthlyplans.component';
import { PremiumFormComponent } from './admin/premium-form/premium-form.component';
import { PremiumplansComponent } from './admin/premiumplans/premiumplans.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HistoryComponent } from './history/history.component';
import { NotificationComponent } from './notification/notification.component';
import { ReviewComponent } from './review/review.component';
import { ReviewformComponent } from './reviewform/reviewform.component';
import { UsermonthlyplansComponent } from './usermonthlyplans/usermonthlyplans.component';
import { UserpremiumplansComponent } from './userpremiumplans/userpremiumplans.component';

const routes: Routes = [
  {
    path:'user',
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },{
        path:'addRecharge',
        component:DetailsComponent
      },{
        path:'premiumplans',
        component:UserpremiumplansComponent
      },{
        path:'getRecharge',
        component:HistoryComponent
      },{
        path:'addons',
        component:AddonsComponent
      },{
        path:'notification',
        component:NotificationComponent
      },{
        path:'Review',
        component:ReviewComponent
      },{
        path:'addReview',
        component:ReviewformComponent
      },{
        path:'monthlyplans',
        component:UsermonthlyplansComponent
      }
    ]
    },{
    path:'admin',
    children:[
      {
        path:'addform',
        component:AddonFormComponent
      },{
        path:'addon',
        component:AdminaddonsComponent
      },{
        path:'premium',
        component:PremiumplansComponent
      },
      {
        path:'monthly',
        component:MonthlyplansComponent
      },
      {
        path:'premiumform',
        component:PremiumFormComponent
      },
      {
        path:'monthlyform',
        component:MonthlyFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
