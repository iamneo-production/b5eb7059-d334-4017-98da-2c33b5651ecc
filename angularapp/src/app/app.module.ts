import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlansService } from './service/plans.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';
import { AddonsComponent } from './addons/addons.component';
import { NotificationComponent } from './notification/notification.component';
import { ReviewComponent } from './review/review.component';
import { ReviewformComponent } from './reviewform/reviewform.component';
import { ReviewService } from './service/review.service';
import { AdminModule } from './admin/admin.module';
import { UsermonthlyplansComponent } from './usermonthlyplans/usermonthlyplans.component';
import { UserpremiumplansComponent } from './userpremiumplans/userpremiumplans.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    HistoryComponent,
    AddonsComponent,
    NotificationComponent,
    ReviewComponent,
    ReviewformComponent,
    UsermonthlyplansComponent,
    UserpremiumplansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [PlansService,ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
