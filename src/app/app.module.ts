import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RateViewComponent } from './components/rate-view/rate-view.component';
import { PricingOptionsComponent } from './components/pricing-options/pricing-options.component';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {DataTableModule} from "angular-6-datatable";


 
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    RateViewComponent,
    PricingOptionsComponent,
    DashbaordComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderModule,
    DataTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
