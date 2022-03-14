import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddonsComponent } from './addons/addons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HistoryComponent } from './history/history.component';
import { NotificationComponent } from './notification/notification.component';
import { PopularplansComponent } from './popularplans/popularplans.component';
import { ReviewComponent } from './review/review.component';
import { ReviewformComponent } from './reviewform/reviewform.component';

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
        path:'popularplans',
        component:PopularplansComponent
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
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
