import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarSchedular } from '../Models/CalendarSchedule';

@Injectable({
  providedIn: 'root'
})
export class CalendarSchedularService {

  constructor(private httpClient:HttpClient) { }

  GetCalendarScheduleDetails():any{
    return this.httpClient.get("https://localhost:44302/api/CalendarSchedular/GetScheduleDetails");
  }

  GetScheduleDetailsEntity():any{
    return this.httpClient.get("https://localhost:44302/api/CalendarSchedular/GetScheduleDetailsEntity");
  }

  GetCalendarScheduleDetailsByScheduleId(scheduleId:number):any{
    return this.httpClient.get("https://localhost:44302/api/CalendarSchedular/GetScheduleDetailBySchduleId/"+scheduleId);
  }

  InsertCalendarScheduleDetails(calendarSchedular:CalendarSchedular):any{
    return this.httpClient.post("https://localhost:44302/api/CalendarSchedular/InsertScheduleDetails",calendarSchedular);
  }

  UpdateCalendarScheduleDetails(calendarSchedular:CalendarSchedular):any{
    return this.httpClient.put("https://localhost:44302/api/CalendarSchedular/UpdateScheduleDetails",calendarSchedular);
  }

  DeleteCalendarScheduleDetailsByScheduleId(scheduleId:number):any{
    return this.httpClient.delete("https://localhost:44302/api/CalendarSchedular/DeleteScheduleDetailBySchduleId/"+scheduleId);
  }
}
