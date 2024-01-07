import { DayPilot } from "@daypilot/daypilot-lite-angular";

export class CalendarSchedular
{
    scheduleId !: number;
    scheduleText !: string;
    startTime : Date = new Date();
    endTime : Date = new Date();
    scheduleGuId !: string;
    backGroundColor !: string;
}