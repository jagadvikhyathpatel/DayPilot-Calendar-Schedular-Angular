import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarSchedularComponent } from './Component/calendar-schedular/calendar-schedular.component';

const routes: Routes = [
  {path:'CalendarSchedular',component:CalendarSchedularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
