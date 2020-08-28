import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketManagerHeaderComponent } from './ticket-manager-header/ticket-manager-header.component';
import { TicketManagerFooterComponent } from './ticket-manager-footer/ticket-manager-footer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TicketManagerHeaderComponent, TicketManagerFooterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TicketManagerHeaderComponent, TicketManagerFooterComponent]
})
export class ComponentsModule { }
