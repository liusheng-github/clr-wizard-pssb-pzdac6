import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';

import { SolutionElementsComponent } from './solution-elements/solution-elements.component';
import { OpportunityDetailsComponent } from './opportunity-details/opportunity-details.component';
import { DeliveryRegionComponent } from './delivery-region/delivery-region.component';
import { OpportunityDetails2Component } from './opportunity-details-2/opportunity-details-2.component';
import { DashboardButtonsComponent } from './dashboard-buttons/dashboard-buttons.component';
import { ClrDatagridSelectionDemoComponent } from './clr-datagrid-selection-demo/clr-datagrid-selection-demo.component';
import { OpportunityDetails3Component } from './opportunity-details-3/opportunity-details-3.component';
import { OppoprtunityDetailsFieldsComponent } from './oppoprtunity-details-fields/oppoprtunity-details-fields.component';
import { DeliveryRegionFieldsComponent } from './delivery-region-fields/delivery-region-fields.component';
import { ProductsComponent } from './products/products.component';
import { ItvmComponent } from './solutions-sets/itvm/itvm.component';
import { DwjmComponent } from './solutions-sets/dwjm/dwjm.component';
import { EngineeredSolutionsComponent } from './engineered-solutions/engineered-solutions.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing';
import { AllOpportunitiesComponent } from './all-opportunities/all-opportunities.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, ClarityModule.forRoot() ],
  declarations: [ 
    AppComponent, 
    SolutionElementsComponent, 
    OpportunityDetailsComponent,  
    DeliveryRegionComponent, 
    OpportunityDetails2Component, 
    DashboardButtonsComponent, 
    ClrDatagridSelectionDemoComponent, 
    OpportunityDetails3Component, 
    OppoprtunityDetailsFieldsComponent, 
    DeliveryRegionFieldsComponent, 
    ProductsComponent, 
    ItvmComponent, 
    DwjmComponent, EngineeredSolutionsComponent, UserInfoComponent, DashboardComponent, AllOpportunitiesComponent, AdminSidenavComponent, HeaderNavComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
