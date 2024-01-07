import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarSchedularComponent } from './Component/calendar-schedular/calendar-schedular.component';
import {DayPilotModule} from "@daypilot/daypilot-lite-angular";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { DataService } from './Component/data.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarSchedularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DayPilotModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
