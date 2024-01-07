export class CalendarScheduleEntity
{
    id !: number;
    text!: string;
    start : Date = new Date();
    end : Date = new Date();
    backColor !: string;
}