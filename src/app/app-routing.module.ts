import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashbaordComponent} from './pages/dashbaord/dashbaord.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashbaordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
