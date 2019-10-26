import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './core/auth/auth.component';
import {DashboardComponent} from './modules/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'authentication', component: AuthComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
