import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AllOpportunitiesComponent } from './all-opportunities/all-opportunities.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'allopportunities',
    component: AllOpportunitiesComponent
  }
  // {
  //   path: 'quote',
  //   component: QuoteComponent
  // },
  // {
  //   path: 'benefits',
  //   component: BenefitsComponent
  // },
  // {
  //   path: 'terms',
  //   component: TermsComponent
  // },
  // {
  //   path: 'privacy',
  //   component: PrivacyComponent
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }