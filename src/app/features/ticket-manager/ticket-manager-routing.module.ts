import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from '../common/service/auth-gaurd.service';
import { RegisterComponent } from './register/register.component';
import { IssueComponent } from './issue/issue.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'issue',
    component: IssueComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'issue'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketManagerRoutingModule { }
