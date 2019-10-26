import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './core/auth/auth.component';
import {DashboardComponent} from './modules/dashboard/dashboard/dashboard.component';
import {AuthGuard} from './core/guards/authentication/auth.guard';
import {DashboardGuard} from './core/guards/dashboard/dashboard.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'authentication', pathMatch: 'full'
  },
  {
    path: 'authentication', component: AuthComponent, canActivate: [DashboardGuard]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
