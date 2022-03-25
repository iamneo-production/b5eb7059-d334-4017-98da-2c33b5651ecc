import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminaddonsComponent } from './adminaddons/adminaddons.component';
import { AddonFormComponent } from './addon-form/addon-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MonthlyFormComponent } from './monthly-form/monthly-form.component';
import { MonthlyplansComponent } from './monthlyplans/monthlyplans.component';
import { PremiumFormComponent } from './premium-form/premium-form.component';
import { PremiumplansComponent } from './premiumplans/premiumplans.component';



@NgModule({
  declarations: [AdminaddonsComponent,
  AddonFormComponent,
  MonthlyFormComponent,
  MonthlyplansComponent,
  PremiumFormComponent,
  PremiumplansComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminModule { }
