import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './features/hello-world/hello-world.component';
import { AuthGaurdService } from './features/common/service/auth-gaurd.service';


const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./features/ticket-manager/ticket-manager.module').then(m => m.TicketManagerModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
