import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketManagerRoutingModule } from './ticket-manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { DemoMaterialModule } from '../common/modules/material-modules';
import { MatNativeDateModule } from '@angular/material';
import { IssueComponent } from './issue/issue.component';


@NgModule({
  declarations: [DashboardComponent, LoginComponent, RegisterComponent, IssueComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    TicketManagerRoutingModule,
    DemoMaterialModule
  ]
})
export class TicketManagerModule { }
